import MessageComponent from './interfaces/MessageComponent';
export declare class ActionRow extends MessageComponent {
    constructor(data?: Record<string, null>);
    setup(data: Record<string, null>): any;
    addComponents(...components: any): any;
    addComponent(component: any): any;
    toJSON(): any;
}
