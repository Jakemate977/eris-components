import { objMenuOption, Emoji } from '../constants';
export default class ErisMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
    constructor(obj?: {});
    setup(obj: objMenuOption): this;
    setLabel(label: string): this;
    setValue(value: string): this;
    setDescription(value: string): this;
    setDefault(def?: boolean): this;
    setEmoji(emoji: Emoji, animated?: boolean): this;
    toJSON(): objMenuOption;
}
