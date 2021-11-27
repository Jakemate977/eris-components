import { ComponentTypes, ButtonStyles, objButton } from '../constants';
export default class Button {
    style: keyof typeof ButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: string;
    url?: string;
    custom_id?: string;
    /**
     * Button's constructor, you can pass the raw JSON here.
     * @param  {objButton} obj
     */
    constructor(obj?: objButton);
    setup(obj: objButton): this;
    setStyle(style: string | null | undefined): this;
    setLabel(label: string | null | undefined): this;
    setDisabled(disabled?: boolean): this;
    setURL(url: string | null | undefined): this;
    setID(custom_id: string | null | undefined): this;
    setEmoji(emoji: any, animated: boolean): this;
    toJSON(): {
        type: ComponentTypes;
        style:
            | 'blurple'
            | 'grey'
            | 'gray'
            | 'green'
            | 'red'
            | 'url'
            | 'primary'
            | 'secondary'
            | 'success'
            | 'danger'
            | 'link';
        label: string;
        emoji: string;
        disabled: boolean;
        url: string;
        custom_id: string;
    };
}
