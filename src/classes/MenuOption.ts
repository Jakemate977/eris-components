import { ErisComponentsError, resolveString } from '../util';

interface objMenuOption {
    label?: string | null | undefined;
    value?: string | null | undefined;
    description?: string | null | undefined;
    emoji?: any;
    default?: boolean | undefined;
}

export default class ErisMenuOption {
    label: string | null | undefined;
    value: string | null | undefined;
    description: string | null | undefined;
    emoji: any;
    default: boolean | undefined;

    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj: objMenuOption) {
        this.label =
            'label' in obj && obj.label ? resolveString(obj.label) : null;

        this.value =
            'value' in obj && obj.value ? resolveString(obj.value) : null;

        if (obj.emoji) this.setEmoji(obj.emoji);

        this.description = 'description' in obj ? obj.description : null;

        return this;
    }

    setLabel(label: string) {
        this.label = resolveString(label);
        return this;
    }

    setValue(value: string) {
        this.value = resolveString(value);
        return this;
    }

    setDescription(value: string) {
        this.description = resolveString(value);
        return this;
    }

    setDefault(def = true) {
        this.default = def;
        return this;
    }

    setEmoji(emoji: any, animated?: boolean) {
        if (!emoji)
            throw new ErisComponentsError(
                'MISSING_EMOJI_ON_OPTION',
                'The setEmoji must use an emoji.'
            );

        this.emoji = {
            id: null,
            name: null,
        };

        if (!isNaN(emoji)) this.emoji.id = emoji;

        if (!isNaN(emoji.id)) this.emoji.id = emoji.id;

        if (emoji.name) this.emoji.name = emoji.name;

        if (!this.emoji.id && !this.emoji.name) this.emoji.name = emoji;

        if (typeof animated === 'boolean') this.emoji.animated = animated;

        return this;
    }

    toJSON() {
        return {
            label: this.label,
            value: this.value,
            default: this.default,
            emoji: this.emoji,
            description: this.description,
        };
    }
}