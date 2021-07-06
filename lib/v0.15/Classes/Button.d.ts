import { MessageButtonStyles, MessageButtonStylesAliases } from '../Constants';
export declare class ErisButton {
    style?: string[MessageButtonStyles] | string[MessageButtonStylesAliases];
    label?: string;
    disabled?: boolean;
    emoji?: string;
    url?: string;
    custom_id?: string;
    constructor(obj?: Record<string, unknown>);
    setup(obj: any): unknown;
    setStyle(style: string): any;
    setLabel(label: string): any;
    setDisabled(disabled: boolean): any;
    setURL(url: string): any;
    setID(custom_id: string): any;
    setEmoji(emoji: any, animated?: boolean): this;
    toJSON(): Record<string, unknown>;
}
//# sourceMappingURL=Button.d.ts.map