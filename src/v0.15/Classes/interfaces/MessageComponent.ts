import { MessageComponentTypes } from '../../Constants';
import { resolveType } from '../../Util';

interface Data {
	type: MessageComponentTypes | string | null;
}

export default class MessageComponent {
	type: string | null; //hola aqui no hmm?, en button.ts
	constructor(data: Data) {
		this.type = 'type' in data ? resolveType(data.type) : null;
	}

	static create(data: Data): void {
		let component;
		//  hola odio los enum
		if (typeof data.type === 'string') {
			// TODO: hacer que no sea de tipo any
			//cool1
			const dataType: any = data.type; // creo que solo se puede usar any ya que unknown no deja
			data.type = MessageComponentTypes[dataType];
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
