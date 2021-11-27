import { objAction, objMenu, objButton } from '../constants';
export default class ErisActionRow {
    components: objButton[] | objMenu[];
    type?: number;
    constructor(obj?: any);
    setup(obj: objAction): this;
    addComponents(components: objAction['components']): this;
    addComponent(component: any): this;
    setComponents(componentsArr: any[]): this;
    toJSON(): objAction;
}
