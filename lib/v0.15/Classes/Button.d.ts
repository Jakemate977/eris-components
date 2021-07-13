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
export declare class Button {
	style?: keyof typeof MessageButtonStyles | null;
	label?: string | null;
	disabled?: boolean;
	emoji?: string | EmojiObject | null;
	url?: string | null;
	custom_id?: string | null;
	constructor(obj?: ButtonObject);
	setup(obj: ButtonObject): this;
	setStyle(style: keyof typeof MessageButtonStyles): this;
	setLabel(label: string): this;
	setDisabled(disabled: boolean): this;
	setURL(url: string): this;
	setID(custom_id: string): this;
	setEmoji(emoji: string, id?: string): this;
	toJSON(): ButtonObject;
}
export {};
//# sourceMappingURL=Button.d.ts.map
