import * as Util from '../Util';
import { MessageButtonStyles } from '../Constants';

interface EmojiObject {
	name: string;
	id?: string;
}

interface ButtonObject {
	style?: keyof typeof MessageButtonStyles | null;
	label?: string | null;
	disabled?: boolean;
	emoji?: string | EmojiObject;
	url?: string | null;
	custom_id?: string | null;
}

export class Button {
	style?: keyof typeof MessageButtonStyles | null;
	label?: string | null;
	disabled?: boolean;
	emoji?: string | EmojiObject | null;
	url?: string | null;
	custom_id?: string | null;

	constructor(obj: ButtonObject = {}) {
		this.setup(obj);
	}

	setup(obj: ButtonObject): this {
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
	}

	setStyle(style: keyof typeof MessageButtonStyles): this {
		this.style = style;
		return this;
	}

	setLabel(label: string): this {
		this.label = Util.resolveString(label);
		return this;
	}

	setDisabled(disabled: boolean): this {
		this.disabled = disabled;
		return this;
	}

	setURL(url: string): this {
		this.url = Util.resolveString(url);
		return this;
	}

	setID(custom_id: string): this {
		this.custom_id = Util.resolveString(custom_id);
		return this;
	}

	// TODO: mejorar los emojis hola
	setEmoji(emoji: string, id?: string): this {
		//mejor usamos params de la funcion?
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
	}

	toJSON(): ButtonObject {
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
