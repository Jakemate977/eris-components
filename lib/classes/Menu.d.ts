import { ComponentTypes } from '../constants';
interface objMenu {
    minValues?: number;
    maxValues?: number;
    id?: string | null | undefined;
    option?: any;
    placeholder?: string | null | undefined;
    max_values?: number | null;
    min_values?: number | null;
    options?: Record<string, any>[];
    custom_id?: string | null | undefined;
}
export default class ErisSelectMenu {
    id: string | null | undefined;
    option: any;
    placeholder: string | null | undefined;
    max_values: number | null | undefined;
    min_values: number | null | undefined;
    options: Record<string, any>[];
    custom_id: string | null | undefined;
    constructor(obj?: {});
    setup(obj: objMenu): this;
    setPlaceholder(placeholder: string): this;
    setID(id: string): this;
    setMaxValues(number: number): this;
    setMinValues(number: number): this;
    addOptions(options: Record<string, any>): this;
    addOption(options: any): this;
    setOptions(optionsArr: Record<string, any>[]): this;
    toJSON(): {
        type: ComponentTypes;
        placeholder: string | null | undefined;
        custom_id: string | null | undefined;
        max_values: number | null | undefined;
        min_values: number | null | undefined;
        options: Record<string, any>[];
    };
}
export {};
