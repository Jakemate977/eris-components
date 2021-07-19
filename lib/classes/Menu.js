'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const util_1 = require('../util');
const constants_1 = require('../constants');
class ErisSelectMenu {
    constructor(obj = {}) {
        this.options = [];
        this.setup(obj);
    }
    setup(obj) {
        this.placeholder = 'placeholder' in obj ? obj.placeholder : null;
        this.max_values =
            'maxValues' in obj || 'max_values' in obj
                ? util_1.resolveMaxValues(obj.maxValues, obj.max_values)
                : null;
        this.min_values =
            'minValues' in obj || 'min_values' in obj
                ? util_1.resolveMinValues(obj.minValues, obj.min_values)
                : null;
        this.options = [];
        if ('option' in obj) {
            obj.option.type = 'SELECT_MENU_OPTION';
            this.options.push(obj.option);
        }
        if ('options' in obj) {
            if (obj.options) {
                obj.options.map((c) => {
                    this.options.push(c);
                });
            }
        }
        if (('id' in obj && obj.id) || ('custom_id' in obj && obj.custom_id))
            this.custom_id = obj.id || obj.custom_id;
        else this.custom_id = null;
        return this;
    }
    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        return this;
    }
    setID(id) {
        this.custom_id = id;
        return this;
    }
    setMaxValues(number) {
        this.max_values = util_1.resolveMaxValues(number);
        return this;
    }
    setMinValues(number) {
        this.min_values = util_1.resolveMinValues(number);
        return this;
    }
    addOptions(options) {
        if (Array.isArray(options)) {
            options.forEach((option) => {
                this.options.push(option);
            });
        } else {
            this.options.push(options);
        }
        return this;
    }
    addOption(options) {
        return this.addOptions(options);
    }
    setOptions(optionsArr) {
        if (Array.isArray(optionsArr)) {
            this.options = optionsArr;
        } else {
            throw new util_1.ErisComponentsError(
                'INVALID_PARAMETER_TYPE',
                'setOptions method must use an array of options.'
            );
        }
        return this;
    }
    toJSON() {
        return {
            type: constants_1.ComponentTypes.SELECT_MENU,
            placeholder: this.placeholder,
            custom_id: this.custom_id,
            max_values: this.max_values,
            min_values: this.min_values,
            options: this.options,
        };
    }
}
exports.default = ErisSelectMenu;
