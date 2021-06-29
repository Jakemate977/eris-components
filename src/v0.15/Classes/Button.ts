import * as Util from '../Util';
import { MessageButtonStyles, MessageButtonStylesAliases } from '../Constants'

class ErisButton {
	style?: string[MessageButtonStyles] | string[MessageButtonStylesAliases];
	label?: string;
	disabled?: boolean;
	emoji?: string;
	url?: string;
	custom_id?: string;


	constructor(obj: any = {}) {
		this.setup(obj);
	}

	setup(obj: Record<any, any>): any {
		this.style = 'style' in obj ? Util.resolveStyle(obj.style) : null;

		this.label = 'label' in obj && Util.resolveString(obj.label) ? obj.label : undefined;

		this.disabled = 'disabled' in obj ? obj.disabled : false;

		this.emoji = 'emoji' in obj ? obj.emoji : undefined;

		if ('url' in obj && obj.url) {
			this.url = Util.resolveString(obj.url);
		} else {
			this.url = undefined;
		}

		if ('custom_id' in obj && obj.custom_id) {
			this.custom_id = obj.custom_id;
		} else {
			this.custom_id = undefined;
		}

		return this;
	}

	setStyle(style: any): any {
		this.style = Util.resolveStyle(style);
		return this;
	}

	setLabel(label: string): any {
		this.label = Util.resolveString(label);
		return this;
	}

	setDisabled(disabled: boolean): any {
		this.disabled = disabled;
		return this;
	}

	setURL(url: string): any {
		this.url = Util.resolveString(url);
		return this;
	}

	setID(custom_id: string): any {
		this.custom_id = Util.resolveString(custom_id);
		return this;
	}

	setEmoji(emoji: any, animated: boolean): any {
		animated = false;

		if (!emoji) return this;

		if (Util.isEmoji(emoji) === true) {
			this.emoji = { name: Util.resolveString(emoji) };
		} else if (emoji.id) {
			this.emoji = { id: emoji.id };
		} else if (Util.resolveString(emoji).length > 0) {
			this.emoji = { id: Util.resolveString(emoji) };
		} else {
			this.emoji = { name: null, id: null };
		}

		if (
			(animated && typeof animated !== 'boolean') ||
			(emoji.animated && typeof emoji.animated !== 'boolean')
		)
			throw new SyntaxError(
				'The emoji animated option must be true or false (boolean)'
			);

		if (this.emoji && typeof emoji.animated === 'boolean')
			this.emoji.animated = emoji.animated;

		if (this.emoji && typeof animated === 'boolean')
			this.emoji.animated = animated;

		return this;
	}

	toJSON(): any {
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

module.exports = ErisButton;
