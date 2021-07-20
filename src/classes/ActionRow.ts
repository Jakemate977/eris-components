import { ErisComponentsError } from '../util';
import { ComponentTypes, objAction, objMenu, objButton } from '../constants';

export default class ErisActionRow {
    components: objButton[] | objMenu[] = [];
    type?: number;

    constructor(obj = {}) {
        this.setup(obj);
    }

    setup(obj: objAction): this {
        this.type = ComponentTypes.ACTION_ROW;

        this.components = obj.components ? obj.components : [];

        return this;
    }

    addComponents(components: objAction["components"]): this {
        if (Array.isArray(components)) {
            components.forEach((component) => {
                return this.components.push(component);
            });
        } else {
            this.components.push(components);
        }
        return this;
    }

    addComponent(component: any): this {
        return this.addComponents(component);
    }

    setComponents(componentsArr: any[]): this {
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

    toJSON(): objAction {
        return {
            components: this.components,
            type: ComponentTypes.ACTION_ROW,
        };
    }
}
