export declare enum MessageComponentTypes {
	null,
	'ACTION_ROW',
	'BUTTON',
	'SELECT_MENU',
}

export declare enum MessageButtonStyles {
	null,
	'blurple',
	'grey',
	'green',
	'red',
	'url',
}
export declare enum MessageButtonStylesAliases {
	null,
	'PRIMARY',
	'SECONDARY',
	'SUCCESS',
	'DESTRUCTIVE',
	'LINK',
}

export function createEnum(keys: Array<any>) {
	const obj: any = {};
	const entries: any = keys.entries()
	for (const [index, key] of entries) {
		if (key === null) continue
		obj[key] = index;
		obj[index] = key;
	}
	return obj;
}
