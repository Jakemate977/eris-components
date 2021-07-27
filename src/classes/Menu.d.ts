import { objMenu, objMenuOption } from '../constants';
export default class ErisSelectMenu {
    id: string | undefined;
    option: any;
    placeholder: string | undefined;
    max_values: number | null | undefined;
    min_values: number | null | undefined;
    options: objMenuOption | undefined;
    custom_id: string | null | undefined;
    disabled: boolean | undefined;
    constructor(obj?: any);
    setup(obj: objMenu): this;
    setPlaceholder(placeholder: string): this;
    setID(id: string): this;
    setMaxValues(number: number): this;
    setMinValues(number: number): this;
    setDisabled(disabled?: boolean): this;
    addOptions(options: Record<string, any>): this;
    addOption(options: any): this;
    setOptions(optionsArr: Record<string, any>[]): this;
    toJSON(): objMenu;
}
