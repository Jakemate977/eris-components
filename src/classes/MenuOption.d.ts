import { objMenuOption } from '../constants';
export default class ErisMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: any;
    default?: boolean;
    constructor(obj?: any);
    setup(obj: objMenuOption): this;
    setLabel(label: string): this;
    setValue(value: string): this;
    setDescription(value: string): this;
    setDefault(def?: boolean): this;
    setEmoji(emoji: any, animated?: boolean): this;
    toJSON(): objMenuOption;
}
