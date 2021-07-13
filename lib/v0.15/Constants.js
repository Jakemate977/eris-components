'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createEnum =
	exports.MessageButtonStylesAliases =
	exports.MessageButtonStyles =
	exports.MessageComponentTypes =
		void 0;
var MessageComponentTypes;
(function (MessageComponentTypes) {
	MessageComponentTypes[(MessageComponentTypes['null'] = 0)] = 'null';
	MessageComponentTypes[(MessageComponentTypes['ACTION_ROW'] = 1)] =
		'ACTION_ROW';
	MessageComponentTypes[(MessageComponentTypes['BUTTON'] = 2)] = 'BUTTON';
	MessageComponentTypes[(MessageComponentTypes['SELECT_MENU'] = 3)] =
		'SELECT_MENU';
})(
	(MessageComponentTypes =
		exports.MessageComponentTypes || (exports.MessageComponentTypes = {}))
);
var MessageButtonStyles;
(function (MessageButtonStyles) {
	MessageButtonStyles[(MessageButtonStyles['null'] = 0)] = 'null';
	MessageButtonStyles[(MessageButtonStyles['blurple'] = 1)] = 'blurple';
	MessageButtonStyles[(MessageButtonStyles['grey'] = 2)] = 'grey';
	MessageButtonStyles[(MessageButtonStyles['green'] = 3)] = 'green';
	MessageButtonStyles[(MessageButtonStyles['red'] = 4)] = 'red';
	MessageButtonStyles[(MessageButtonStyles['url'] = 5)] = 'url';
})(
	(MessageButtonStyles =
		exports.MessageButtonStyles || (exports.MessageButtonStyles = {}))
);
var MessageButtonStylesAliases;
(function (MessageButtonStylesAliases) {
	MessageButtonStylesAliases[(MessageButtonStylesAliases['null'] = 0)] = 'null';
	MessageButtonStylesAliases[(MessageButtonStylesAliases['PRIMARY'] = 1)] =
		'PRIMARY';
	MessageButtonStylesAliases[(MessageButtonStylesAliases['SECONDARY'] = 2)] =
		'SECONDARY';
	MessageButtonStylesAliases[(MessageButtonStylesAliases['SUCCESS'] = 3)] =
		'SUCCESS';
	MessageButtonStylesAliases[(MessageButtonStylesAliases['DESTRUCTIVE'] = 4)] =
		'DESTRUCTIVE';
	MessageButtonStylesAliases[(MessageButtonStylesAliases['LINK'] = 5)] = 'LINK';
})(
	(MessageButtonStylesAliases =
		exports.MessageButtonStylesAliases ||
		(exports.MessageButtonStylesAliases = {}))
);
function createEnum(keys) {
	const obj = {};
	const entries = keys.entries();
	for (const [index, key] of entries) {
		if (key === null) continue;
		obj[key] = index;
		obj[index] = key;
	}
	return obj;
}
exports.createEnum = createEnum;
//# sourceMappingURL=Constants.js.map
