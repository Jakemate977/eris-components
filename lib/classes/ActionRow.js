"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const constants_1 = require("../constants");
class ErisActionRow {
    constructor(obj = {}) {
        this.components = [];
        this.setup(obj);
    }
    setup(obj) {
        this.type = constants_1.ComponentTypes.ACTION_ROW;
        this.components = obj.components ? obj.components : [];
        return this;
    }
    addComponents(components) {
        if (Array.isArray(components)) {
            components.forEach((component) => {
                this.components.push(component);
            });
        }
        else {
            this.components.push(components);
        }
        return this;
    }
    addComponent(component) {
        return this.addComponents(component);
    }
    setComponents(componentsArr) {
        if (Array.isArray(componentsArr)) {
            this.components = componentsArr;
        }
        else {
            throw new util_1.ErisComponentsError('INVALID_PARAMETER_TYPE', 'setComponents method must use an array of components.');
        }
        return this;
    }
    toJSON() {
        return {
            components: this.components,
            type: constants_1.ComponentTypes.ACTION_ROW,
        };
    }
}
exports.default = ErisActionRow;
