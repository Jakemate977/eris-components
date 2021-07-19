import { ErisComponentsError, resolveString } from '../util';
import { objMenuOption, Emoji } from '../constants';

export default class ErisMenuOption {
    label!: string;
    value!: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean = false; 

    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj: objMenuOption): this {
        this.label =
            'label' in obj && obj.label ? resolveString(obj.label) : null;

        this.value =
            'value' in obj && obj.value ? resolveString(obj.value) : null;

        if (obj.emoji) this.setEmoji(obj.emoji);

        this.description = 'description' in obj ? obj.description : null;

        return this;
    }

    setLabel(label: string): this {
        this.label = resolveString(label);
        return this;
    }

    setValue(value: string): this {
        this.value = resolveString(value);
        return this;
    }

    setDescription(value: string): this {
        this.description = resolveString(value);
        return this;
    }

    setDefault(def = true): this {
        this.default = def;
        return this;
    }

    setEmoji(emoji: Emoji, animated?: boolean): this {
        if (!emoji)
            throw new ErisComponentsError(
                'MISSING_EMOJI_ON_OPTION',
                'The setEmoji must use an emoji.'
            );

        if (!isNaN(emoji)) this.emoji.id = emoji;

        if (!isNaN(emoji.id)) this.emoji.id = emoji.id;

        if (emoji.name) this.emoji.name = emoji.name;

        if (!this.emoji.id && !this.emoji.name) this.emoji.name = emoji;

        if (typeof animated === 'boolean') this.emoji.animated = animated;

        return this;
    }

    toJSON(): objMenuOption {
        return {
            label: this.label,
            value: this.value,
            default: this.default,
            emoji: this.emoji,
            description: this.description,
        };
    }
}
