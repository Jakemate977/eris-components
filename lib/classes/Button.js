"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const constants_1 = require("../constants");
class ErisButton {
    constructor(obj = {}) {
        this.disabled = false;
        this.setup(obj);
    }
    setup(obj) {
        this.style = 'style' in obj ? util_1.resolveStyle(obj.style) : null;
        this.label =
            'label' in obj && obj.label ? util_1.resolveString(obj.label) : null;
        this.disabled = 'disabled' in obj ? obj.disabled : false;
        this.emoji = 'emoji' in obj ? obj.emoji : null;
        if ('url' in obj && obj.url) {
            this.url = util_1.resolveString(obj.url);
        }
        else {
            this.url = null;
        }
        if ('custom_id' in obj && obj.custom_id) {
            this.custom_id = obj.custom_id;
        }
        else {
            this.custom_id = null;
        }
        return this;
    }
    setStyle(style) {
        this.style = util_1.resolveStyle(style);
        return this;
    }
    setLabel(label) {
        this.label = util_1.resolveString(label);
        return this;
    }
    setDisabled(disabled = true) {
        this.disabled = disabled;
        return this;
    }
    setURL(url) {
        this.url = util_1.resolveString(url);
        return this;
    }
    setID(custom_id) {
        this.custom_id = util_1.resolveString(custom_id);
        return this;
    }
    setEmoji(emoji, animated) {
        if (!emoji)
            return this;
        if (util_1.testEmoji(emoji) === true) {
            this.emoji = { name: emoji };
        }
        else if (emoji.id) {
            this.emoji = { id: emoji.id };
        }
        else if (emoji.length > 0) {
            this.emoji = { id: emoji };
        }
        else {
            this.emoji = { name: null, id: null };
        }
        if ((animated && typeof animated !== 'boolean') ||
            (emoji.animated && typeof emoji.animated !== 'boolean'))
            throw new util_1.ErisComponentsError('INVALID_ANIMATED_OPTION', 'The emoji animated option must be true or false (boolean)');
        if (this.emoji && typeof emoji.animated === 'boolean')
            this.emoji.animated = emoji.animated;
        if (this.emoji && typeof animated === 'boolean')
            this.emoji.animated = animated;
        return this;
    }
    toJSON() {
        return {
            type: constants_1.ComponentTypes.BUTTON,
            style: this.style,
            label: this.label,
            emoji: this.emoji,
            disabled: this.disabled,
            url: this.url,
            custom_id: this.custom_id,
        };
    }
}
exports.default = ErisButton;
