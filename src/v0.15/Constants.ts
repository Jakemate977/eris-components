export enum MessageComponentTypes {
	null,
	'ACTION_ROW',
	'BUTTON',
	'SELECT_MENU',
}

export enum MessageButtonStyles {
	null,
	'blurple',
	'grey',
	'green',
	'red',
	'url',
}
export enum MessageButtonStylesAliases {
	null,
	'PRIMARY',
	'SECONDARY',
	'SUCCESS',
	'DESTRUCTIVE',
	'LINK',
}

export function createEnum(keys: Array<unknown>): Record<string, unknown> {
	const obj: Record<string, unknown> = {};
	const entries: IterableIterator<[number, any]> = keys.entries();
	for (const [index, key] of entries) {
		if (key === null) continue;
		obj[key] = index;
		obj[index] = key;
	}
	return obj;
}
