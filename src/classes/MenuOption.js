/* eslint-disable @typescript-eslint/no-var-requires */
const { ErisComponentsError, resolveString } = require('../util');

class ErisMenuOption {
    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj) {
        this.label =
            'label' in obj && obj.label ? resolveString(obj.label) : null;

        this.value =
            'value' in obj && obj.value ? resolveString(obj.value) : null;

        if (obj.emoji) this.setEmoji(obj.emoji);

        this.description = 'description' in obj ? obj.description : null;

        return this;
    }

    setLabel(label) {
        this.label = resolveString(label);
        return this;
    }

    setValue(value) {
        this.value = resolveString(value);
        return this;
    }

    setDescription(value) {
        this.description = resolveString(value);
        return this;
    }

    setDefault(def = true) {
        this.default = def;
        return this;
    }

    setEmoji(emoji, animated) {
        if (!emoji)
            throw new ErisComponentsError(
                'MISSING_EMOJI_ON_OPTION',
                'The setEmoji must use an emoji.'
            );

        if (!isNaN(emoji))
            this.emoji = Object.assign({}, this.emoji || {}, { id: emoji });

        if (!isNaN(emoji.id))
            this.emoji = Object.assign({}, this.emoji || {}, { id: emoji.id });

        if (emoji.name)
            this.emoji = Object.assign({}, this.emoji || {}, {
                name: emoji.name,
            });

        if (!this.emoji || (!this.emoji.id && !this.emoji.name)) {
            this.emoji = {};
            this.emoji.name = emoji;
        }

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

module.exports = ErisMenuOption;
