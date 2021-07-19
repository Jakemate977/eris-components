interface objMenuOption {
    label?: string | null | undefined;
    value?: string | null | undefined;
    description?: string | null | undefined;
    emoji?: any;
    default?: boolean | undefined;
}
export default class ErisMenuOption {
    label: string | null | undefined;
    value: string | null | undefined;
    description: string | null | undefined;
    emoji: any;
    default: boolean | undefined;
    constructor(obj?: {});
    setup(obj: objMenuOption): this;
    setLabel(label: string): this;
    setValue(value: string): this;
    setDescription(value: string): this;
    setDefault(def?: boolean): this;
    setEmoji(emoji: any, animated?: boolean): this;
    toJSON(): {
        label: string | null | undefined;
        value: string | null | undefined;
        default: boolean | undefined;
        emoji: any;
        description: string | null | undefined;
    };
}
export {};
