"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
class ErisMenuOption {
    constructor(obj = {}) {
        this.default = false;
        this.setup(obj);
    }
    setup(obj) {
        this.label =
            'label' in obj && obj.label ? util_1.resolveString(obj.label) : null;
        this.value =
            'value' in obj && obj.value ? util_1.resolveString(obj.value) : null;
        if (obj.emoji)
            this.setEmoji(obj.emoji);
        this.description = 'description' in obj ? obj.description : null;
        return this;
    }
    setLabel(label) {
        this.label = util_1.resolveString(label);
        return this;
    }
    setValue(value) {
        this.value = util_1.resolveString(value);
        return this;
    }
    setDescription(value) {
        this.description = util_1.resolveString(value);
        return this;
    }
    setDefault(def = true) {
        this.default = def;
        return this;
    }
    setEmoji(emoji, animated) {
        if (!emoji)
            throw new util_1.ErisComponentsError('MISSING_EMOJI_ON_OPTION', 'The setEmoji must use an emoji.');
        if (!isNaN(emoji))
            this.emoji.id = emoji;
        if (!isNaN(emoji.id))
            this.emoji.id = emoji.id;
        if (emoji.name)
            this.emoji.name = emoji.name;
        if (!this.emoji.id && !this.emoji.name)
            this.emoji.name = emoji;
        if (typeof animated === 'boolean')
            this.emoji.animated = animated;
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
exports.default = ErisMenuOption;
