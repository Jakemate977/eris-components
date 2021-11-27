/* eslint-disable @typescript-eslint/no-var-requires */
const {
    ErisComponentsError,
    resolveStyle,
    resolveString,
    testEmoji,
} = require('../util');

const { ComponentTypes } = require('../constants');

class Button {
    /**
     * Button's constructor, you can pass the raw JSON here.
     * @param  {objButton} obj
     */
    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj) {
        this.style = resolveStyle(obj.style);

        this.label =
            'label' in obj && obj.label ? resolveString(obj.label) : null;

        this.disabled = 'disabled' in obj ? obj.disabled : false;

        this.emoji = 'emoji' in obj ? obj.emoji : null;

        if ('url' in obj && obj.url) {
            this.url = resolveString(obj.url);
        } else {
            this.url = null;
        }

        if ('custom_id' in obj && obj.custom_id) {
            this.custom_id = obj.custom_id;
        } else {
            this.custom_id = null;
        }

        return this;
    }

    setStyle(style) {
        this.style = resolveStyle(style);
        return this;
    }

    setLabel(label) {
        this.label = resolveString(label);
        return this;
    }

    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }

    setURL(url) {
        this.url = resolveString(url);
        return this;
    }

    setID(custom_id) {
        this.custom_id = resolveString(custom_id);
        return this;
    }

    setEmoji(emoji, animated) {
        if (!emoji) return this;

        if (testEmoji(emoji) === true) {
            this.emoji = { name: emoji };
        } else if (emoji.id) {
            this.emoji = { id: emoji.id };
        } else if (emoji.length > 0) {
            this.emoji = { id: emoji };
        } else {
            this.emoji = { name: null, id: null };
        }

        if (
            (animated && typeof animated !== 'boolean') ||
            (emoji.animated && typeof emoji.animated !== 'boolean')
        )
            throw new ErisComponentsError(
                'INVALID_ANIMATED_OPTION',
                'The emoji animated option must be true or false (boolean)'
            );

        if (this.emoji && typeof emoji.animated === 'boolean')
            this.emoji.animated = emoji.animated;

        if (this.emoji && typeof animated === 'boolean')
            this.emoji.animated = animated;

        return this;
    }

    toJSON() {
        return {
            type: ComponentTypes.BUTTON,
            style: this.style,
            label: this.label,
            emoji: this.emoji,
            disabled: this.disabled,
            url: this.url,
            custom_id: this.custom_id,
        };
    }
}

module.exports = Button;
