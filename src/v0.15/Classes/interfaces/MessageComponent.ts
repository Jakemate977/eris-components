
import { MessageComponentTypes } from '../../Constants';
import { resolveType } from '../../Util';

export default class MessageComponent {

    constructor(data) {
        this.type = 'type' in data ? resolveType(data.type) : null;
    }

    static create(data) {
        let component;

        if (typeof (data.type) === 'string') {
            data.type = MessageComponentTypes[data.type];
        }

        switch (data.type) {
            case MessageComponentTypes.ACTION_ROW: {
                const ActionRow = import('../ActionRow');
                component = new ActionRow(data);
                break;
            }
            case MessageComponentTypes.BUTTON: {
                const Button = import('../Button');
                component = new Button(data);
                break;
            }
            default:
                throw new SyntaxError('INVALID_TYPE: Invalid MessageComponentType');
        }
        return component;
    }
}
