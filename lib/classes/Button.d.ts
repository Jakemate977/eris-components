import { ComponentTypes, ButtonStyles } from '../constants';
interface objButton {
    style: keyof typeof ButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: string;
    url?: string;
    custom_id?: string;
}
export default class ErisButton {
    style: keyof typeof ButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: string;
    url?: string;
    custom_id?: string;
    constructor(obj?: {});
    setup(obj: objButton): this;
    setStyle(style: string | null | undefined): this;
    setLabel(label: string | null | undefined): this;
    setDisabled(disabled?: boolean): this;
    setURL(url: string | null | undefined): this;
    setID(custom_id: string | null | undefined): this;
    setEmoji(emoji: any, animated: boolean): this;
    toJSON(): {
        type: ComponentTypes;
        style: "blurple" | "grey" | "gray" | "green" | "red" | "url" | "primary" | "secondary" | "success" | "danger" | "link";
        label: string;
        emoji: string | undefined;
        disabled: boolean | undefined;
        url: string | undefined;
        custom_id: string | undefined;
    };
}
export {};
