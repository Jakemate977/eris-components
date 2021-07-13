export enum MessageComponentTypes {
	'ACTION_ROW' = 1,
	'BUTTON' = 2,
	'SELECT_MENU' = 3,
}

export enum MessageButtonStyles {
	'blurple' = 1,
	'grey' = 2,
	'gray' = 2,
	'green' = 3,
	'red' = 4,
	'url' = 5,
	// aliases
	'PRIMARY' = 1,
	'SECONDARY' = 2,
	'SUCCESS' = 3,
	'DESTRUCTIVE' = 4,
	'LINK' = 5,
}

export function createEnum(keys: Array<unknown>): Record<string, unknown> {
	const obj: Record<string, unknown> = {};
	const entries: IterableIterator<[number, any]> = keys.entries();
	for (const [index, key] of entries) {
		obj[key] = index;
		obj[index] = key;
	}
	return obj;
}
