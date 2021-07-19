import { ComponentTypes } from '../constants';
interface objAction {
    components?: any[];
    type?: number | undefined;
}
export default class ErisActionRow {
    components: any[];
    type?: number | undefined;
    constructor(obj?: {});
    setup(obj: objAction): this;
    addComponents(components: any[]): this;
    addComponent(component: any): this;
    setComponents(componentsArr: any[]): this;
    toJSON(): {
        components: any[];
        type: ComponentTypes;
    };
}
export {};
