import { ButtonStyles, ComponentTypes, objButton, objMenu } from './constants';

export class ErisComponentsError extends Error {
    constructor(code: string, message: string) {
        super(`(${code.toUpperCase()}) ${message}`);
        this.name = 'ErisComponentsError';
    }
}

export function resolveStyle(style: keyof typeof ButtonStyles): ButtonStyles {
    if (
        !ButtonStyles[style] ||
        ButtonStyles[style] === undefined ||
        ButtonStyles[style] === null
    )
        throw new ErisComponentsError(
            'INVALID_BUTTON_STYLE',
            'An invalid button styles was provided.'
        );

    return typeof style === 'string' ? ButtonStyles[style] : style;
}
export function resolveString(data: unknown): string {
    if (typeof data === 'string') return data;

    if (Array.isArray(data)) return data.join('\n');

    return String(data);
}

export function resolveButton(data: objButton): objButton {
    if (ComponentTypes[data.type] !== ComponentTypes['BUTTON'])
        throw new ErisComponentsError(
            'INVALID_BUTTON_TYPE',
            'Invalid button type.'
        );

    if (!data.style)
        throw new ErisComponentsError(
            'NO_BUTTON_STYLE',
            'Please provide a button style.'
        );

    if (!data.label && !data.emoji)
        throw new ErisComponentsError(
            'NO_BUTTON_LABEL_AND_EMOJI',
            'Please provide button label and/or emoji'
        );

    if ('disabled' in data && typeof data.disabled !== 'boolean')
        throw new ErisComponentsError(
            'BUTTON_DISABLED',
            'The button disabled option must be boolean (true/false)'
        );

    if (data.style === 'url' && !data.url)
        throw new ErisComponentsError(
            'NO_BUTTON_URL',
            'You provided url style, you must provide an URL'
        );

    if (ButtonStyles[data.style] !== ButtonStyles['url'] && data.url)
        throw new ErisComponentsError(
            'BOTH_URL_CUSTOM_ID',
            'A custom id and url cannot both be specified'
        );

    if (ButtonStyles[data.style] === ButtonStyles['url'] && data.custom_id)
        throw new ErisComponentsError(
            'BOTH_URL_CUSTOM_ID',
            'A custom id and url cannot both be specified'
        );

    if (ButtonStyles[data.style] !== ButtonStyles['url'] && !data.custom_id)
        throw new ErisComponentsError(
            'NO_BUTTON_ID',
            'Please provide button id'
        );

    if (data.emoji && data.emoji.id && isNaN(data.emoji.id))
        throw new ErisComponentsError(
            'INCORRECT_EMOJI_ID',
            'Please provide correct emoji id'
        );

    if (data.emoji && data.emoji.name && testEmoji(data.emoji.name) === false)
        throw new ErisComponentsError(
            'INCORRECT_EMOJI_NAME',
            'Please provide correct emoji'
        );

    return {
        style: data.style,
        label: data.label,
        emoji: data.emoji,
        disabled: data.disabled,
        url: data.url,
        custom_id: data.custom_id,
        type: data.type,
    };
}
export function resolveType(type: keyof typeof ComponentTypes): ComponentTypes {
    return ComponentTypes[type];
}

export function resolveMenu(data: objMenu): objMenu {
    if (data.type !== ComponentTypes.SELECT_MENU)
        throw new ErisComponentsError(
            'INVALID_MENU_TYPE',
            'Invalid type of menu.'
        );

    if (data.placeholder && typeof data.placeholder !== 'string')
        throw new ErisComponentsError(
            'INVALID_MENU_PLACEHOLDER',
            'The given menu placeholder is not string.'
        );

    if (!data.custom_id)
        throw new ErisComponentsError(
            'NO_MENU_ID',
            'You need to put a custom menu id.'
        );

    let options = resolveMenuOptions(data.options);

    if (options.length < 1)
        throw new ErisComponentsError(
            'NO_MENU_OPTIONS',
            'Please provide at least one menu option.'
        );

    let maxValues = resolveMaxValues(data.max_values);

    let minValues = resolveMinValues(data.min_values);

    return {
        type: ComponentTypes.SELECT_MENU,
        placeholder: data.placeholder,
        custom_id: data.custom_id,
        options: options,
        max_values: maxValues,
        min_values: minValues,
    };
}
export function resolveMenuOptions(data: any) {
    if (!Array.isArray(data))
        throw new ErisComponentsError(
            'INVALID_MENU_OPTIONS',
            'The select menu options must be an array.'
        );

    let options: { label: any; value: any; emoji: any; description: any }[] =
        [];

    data.map((d) => {
        if (!d.value)
            throw new ErisComponentsError(
                'MENU_VALUE_MISSING',
                'Please provide a value for this option.'
            );

        if (!d.label)
            throw new ErisComponentsError(
                'MISSING_MENU_LABEL',
                'Please provide label for this option.'
            );

        options.push({
            label: d.label,
            value: d.value,
            emoji: d.emoji,
            description: d.description,
        });
    });

    return options;
}
export function resolveMaxValues(m1: number, m2?: number) {
    return m1 || m2;
}
export function resolveMinValues(m1: number, m2?: number) {
    return m1 || m2;
}
export function testEmoji(string: string) {
    let emojiRegex =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return emojiRegex.test(string);
}
