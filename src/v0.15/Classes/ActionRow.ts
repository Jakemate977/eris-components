import { MessageComponentTypes } from '../Constants';
import MessageComponent from './interfaces/MessageComponent';

export class ActionRow extends MessageComponent {
	constructor(data: Record<string, null> = {}) {
		super({ type: 'ACTION_ROW' });
		this.setup(data);
	}

	setup(data: Record<string, null>): unknown {
		if ('component' in data) {
			this.component = BaseMessageComponent.create(component, null, true);
		}

		this.components = [];
		if ('components' in data) {
			this.components = data.components.map((c) =>
				BaseMessageComponent.create(c, null, true)
			);
		}

		return this;
	}

	addComponents(...components: any): any {
		this.components.push(
			...components.flat(2).map((c) => MessageComponent.create(c, null, true))
		);
		return this;
	}

	addComponent(component: any): any {
		return this.addComponents(component);
	}

	toJSON(): any {
		return {
			components: this.components.map((c) => c.toJSON()),
			type: MessageComponentTypes[this.type],
		};
	}
}
