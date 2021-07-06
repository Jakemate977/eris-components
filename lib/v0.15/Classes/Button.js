"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErisButton = void 0;
const Util = __importStar(require("../Util"));
class ErisButton {
    constructor(obj = {}) {
        this.setup(obj);
    }
    setup(obj) {
        this.style = 'style' in obj ? Util.resolveStyle(obj.style) : null;
        this.label =
            'label' in obj && Util.resolveString(obj.label) ? obj.label : undefined;
        this.disabled = 'disabled' in obj ? obj.disabled : false;
        this.emoji = 'emoji' in obj ? obj.emoji : undefined;
        if ('url' in obj && obj.url) {
            this.url = Util.resolveString(obj.url);
        }
        else {
            this.url = undefined;
        }
        if ('custom_id' in obj && obj.custom_id) {
            this.custom_id = obj.custom_id;
        }
        else {
            this.custom_id = undefined;
        }
        return this;
    }
    setStyle(style) {
        this.style = Util.resolveStyle(style);
        return this;
    }
    setLabel(label) {
        this.label = Util.resolveString(label);
        return this;
    }
    setDisabled(disabled) {
        this.disabled = disabled;
        return this;
    }
    setURL(url) {
        this.url = Util.resolveString(url);
        return this;
    }
    setID(custom_id) {
        this.custom_id = Util.resolveString(custom_id);
        return this;
    }
    setEmoji(emoji, animated) {
        if (!emoji)
            return this;
        if (Util.isEmoji(emoji) === true) {
            this.emoji = { name: Util.resolveString(emoji) };
        }
        else if (emoji.id) {
            this.emoji = { id: emoji.id };
        }
        else if (Util.resolveString(emoji).length > 0) {
            this.emoji = { id: Util.resolveString(emoji) };
        }
        else {
            this.emoji = { name: null, id: null };
        }
        if ((animated && typeof animated !== 'boolean') ||
            (emoji.animated && typeof emoji.animated !== 'boolean'))
            throw new SyntaxError('The emoji animated option must be true or false (boolean)');
        if (this.emoji && typeof emoji.animated === 'boolean')
            this.emoji.animated = emoji.animated;
        if (this.emoji && typeof animated === 'boolean')
            this.emoji.animated = animated;
        return this;
    }
    toJSON() {
        return {
            type: 2,
            style: this.style,
            label: this.label,
            emoji: this.emoji,
            disabled: this.disabled,
            url: this.url,
            custom_id: this.custom_id,
        };
    }
}
exports.ErisButton = ErisButton;
//# sourceMappingURL=Button.js.map