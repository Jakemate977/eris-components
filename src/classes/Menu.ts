import { ErisComponentsError, resolveMaxValues, resolveMinValues } from '../util'
import { ComponentTypes } from '../constants'

interface objMenu {
    minValues?: number;
    maxValues?: number;
    id?: string | null | undefined;
    option?: any;
    placeholder?: string | null | undefined;
    max_values?: number | null;
    min_values?: number | null;
    options?:  Record<string, any>[];
    custom_id?: string | null | undefined;
} 

export default class ErisSelectMenu {
    id: string | null | undefined;
    option: any;
    placeholder: string | null | undefined;
    max_values: number | null | undefined;
    min_values: number | null | undefined;
    options: Record<string, any>[] = [];
    custom_id: string | null | undefined;

    
    constructor(obj = {}) {
        this.setup(obj)
    }

    setup(obj: objMenu) {

        this.placeholder = 'placeholder' in obj ? obj.placeholder : null

        this.max_values = ('maxValues' in obj) || ('max_values' in obj) ? resolveMaxValues(obj.maxValues, obj.max_values) : null

        this.min_values = ('minValues' in obj) || ('min_values' in obj) ? resolveMinValues(obj.minValues, obj.min_values) : null

        this.options = []

        if ('option' in obj) {
            obj.option.type = 'SELECT_MENU_OPTION'
            this.options.push(obj.option)
        }

        if ('options' in obj) {
            if (obj.options) {
                obj.options.map((c) => {
                    this.options.push(c)
                })
            }
        }

        if (('id' in obj && obj.id) || ('custom_id' in obj && obj.custom_id)) this.custom_id = obj.id || obj.custom_id

        else this.custom_id = null

        return this
    }

    setPlaceholder(placeholder: string) {
        this.placeholder = placeholder
        return this
    }

    setID(id: string) {
        this.custom_id = id
        return this
    }

    setMaxValues(number: number) {
        this.max_values = resolveMaxValues(number)
        return this
    }

    setMinValues(number: number) {
        this.min_values = resolveMinValues(number)
        return this
    }

    addOptions(options: Record<string, any>) {
        if (Array.isArray(options)) {
            options.forEach(option => {
                this.options.push(option)
            })
        } else {
            this.options.push(options)
        }
        return this
    }

    addOption(options: any) {
        return this.addOptions(options)
    }

    setOptions(optionsArr: Record<string, any>[]) {
        if (Array.isArray(optionsArr)) {
            this.options = optionsArr
        } else {
            throw new ErisComponentsError('INVALID_PARAMETER_TYPE', 'setOptions method must use an array of options.')
        }
        return this
    }


    toJSON() {
        return {
            type: ComponentTypes.SELECT_MENU,
            placeholder: this.placeholder,
            custom_id: this.custom_id,
            max_values: this.max_values,
            min_values: this.min_values,
            options: this.options,
        }
    }
   
}
