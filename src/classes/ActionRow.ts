import { ErisComponentsError } from '../util'
import { ComponentTypes } from '../constants'

interface objAction {
    components?: any[];
    type?: number | undefined;
} 

export default class ErisActionRow {
    components: any[] = [];
    type?: number | undefined;
    
    constructor(obj = {}) {
        this.setup(obj)
    }

    setup(obj: objAction) {

        this.type = ComponentTypes.ACTION_ROW

        this.components = obj.components ? obj.components : []

        return this
    }

    addComponents(components: any[]) {
        if (Array.isArray(components)) {
            components.forEach(component => {
                this.components.push(component)
            })
        } else {
            this.components.push(components)
        }
        return this
    }

    addComponent(component: any) {
        return this.addComponents(component)
    }

    setComponents(componentsArr: any[]) {
        if (Array.isArray(componentsArr)) {
            this.components = componentsArr
        } else {
            throw new ErisComponentsError('INVALID_PARAMETER_TYPE', 'setComponents method must use an array of components.')
        }
        return this
    }



    toJSON() {
        return {
            components: this.components,
            type: ComponentTypes.ACTION_ROW,
        }
    }
   
}
