'use strict';
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				Object.defineProperty(o, k2, {
					enumerable: true,
					get: function () {
						return m[k];
					},
				});
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, 'default', { enumerable: true, value: v });
		  }
		: function (o, v) {
				o['default'] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.Button = void 0;
var Util = __importStar(require('../Util'));
var Button = /** @class */ (function () {
	function Button(obj) {
		if (obj === void 0) {
			obj = {};
		}
		this.setup(obj);
	}
	Button.prototype.setup = function (obj) {
		this.style = obj.style;
		this.label =
			'label' in obj && Util.resolveString(obj.label) ? obj.label : null;
		this.disabled = 'disabled' in obj ? obj.disabled : false;
		this.emoji = 'emoji' in obj ? obj.emoji : null;
		if ('url' in obj && obj.url) {
			this.url = Util.resolveString(obj.url);
		} else {
			this.url = null;
		}
		if ('custom_id' in obj && obj.custom_id) this.custom_id = obj.custom_id;
		return this;
	};
	Button.prototype.setStyle = function (style) {
		this.style = style;
		return this;
	};
	Button.prototype.setLabel = function (label) {
		this.label = Util.resolveString(label);
		return this;
	};
	Button.prototype.setDisabled = function (disabled) {
		this.disabled = disabled;
		return this;
	};
	Button.prototype.setURL = function (url) {
		this.url = Util.resolveString(url);
		return this;
	};
	Button.prototype.setID = function (custom_id) {
		this.custom_id = Util.resolveString(custom_id);
		return this;
	};
	// TODO: mejorar los emojis hola
	Button.prototype.setEmoji = function (emoji, id) {
		if (Util.isEmoji(emoji)) {
			this.emoji = { name: Util.resolveString(emoji) };
		} else if (id) {
			this.emoji.id = id;
		} else if (Util.resolveString(emoji).length > 0) {
			this.emoji = { id: Util.resolveString(emoji) };
		} else {
			this.emoji = { name: null, id: null };
		}
		if (this.emoji && typeof emoji.animated === 'boolean')
			this.emoji.animated = emoji.animated;
		if (this.emoji && typeof animated === 'boolean')
			this.emoji.animated = animated;
		return this;
	};
	Button.prototype.toJSON = function () {
		return {
			type: 2,
			style: this.style,
			label: this.label,
			emoji: this.emoji,
			disabled: this.disabled,
			url: this.url,
			custom_id: this.custom_id,
		};
	};
	return Button;
})();
exports.Button = Button;
//# sourceMappingURL=Button.js.map
