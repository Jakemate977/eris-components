import { MessageComponentTypes } from '../../Constants';
interface Data {
    type: MessageComponentTypes | string | null;
}
export default class MessageComponent {
    type: string | null;
    constructor(data: Data);
    static create(data: Data): void;
}
export {};
//# sourceMappingURL=MessageComponent.d.ts.map