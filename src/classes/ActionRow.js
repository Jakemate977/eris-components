/* eslint-disable @typescript-eslint/no-var-requires */
const { ErisComponentsError } = require('../util');
const { ComponentTypes } = require('../constants');

class ErisActionRow {
    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj) {
        this.type = ComponentTypes.ACTION_ROW;

        this.components = obj.components ? obj.components : [];

        return this;
    }

    addComponents(components) {
        if (Array.isArray(components)) {
            components.forEach((component) => {
                return this.components.push(component);
            });
        } else {
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
        } else {
            throw new ErisComponentsError(
                'INVALID_PARAMETER_TYPE',
                'setComponents method must use an array of components.'
            );
        }
        return this;
    }

    toJSON() {
        return {
            components: this.components,
            type: ComponentTypes.ACTION_ROW,
        };
    }
}

module.exports = ErisActionRow;
