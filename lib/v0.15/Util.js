'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isEmoji =
	exports.resolveType =
	exports.resolveButton =
	exports.resolveString =
	exports.resolveStyle =
		void 0;
var Constants_1 = require('./Constants');
/**
 * Resolves if a string is a style.
 * @param  {MessageButtonStyles} style
 * @returns MessageButtonStyles
 */
function resolveStyle(style) {
	return Constants_1.MessageButtonStyles[style];
}
exports.resolveStyle = resolveStyle;
/**
 * Returns the input as a string, in arrays, however, it joins the values of an array into a single string.
 * @param  {unknown} data
 * @returns string
 */
function resolveString(data) {
	if (typeof data === 'string') return data;
	if (Array.isArray(data)) return data.join('\n');
	return String(data);
}
exports.resolveString = resolveString;
/**
 * Resolves if a constructor is a button, in case that it isn't will return an error.
 * @param  {Record<string, any>} this
 * @param  {Record<string, any>} data
 * @returns Record<strign, unknown>
 */
function resolveButton(data) {
	if (data.type !== 2 && data.type !== 3)
		throw new TypeError('NO_BUTTON_TYPE: Invalid type');
	if (!data.style)
		throw new TypeError('NO_BUTTON_STYLE: Please provide button style');
	if (!data.label && !data.emoji)
		throw new TypeError(
			'NO_BUTTON_LABEL_AND_EMOJI: Please provide button label and/or emoji'
		);
	if ('disabled' in data && typeof data.disabled !== 'boolean')
		throw new TypeError(
			'BUTTON_DISABLED: The button disabled option must be boolean (true/false)'
		);
	if (data.style === Constants_1.MessageButtonStyles['url'] && !data.url)
		throw new TypeError(
			'NO_BUTTON_URL: You provided url style, you must provide an URL'
		);
	if (data.style !== Constants_1.MessageButtonStyles['url'] && data.url)
		throw new TypeError(
			'BOTH_URL_CUSTOM_ID: A custom id and url cannot both be specified'
		);
	if (data.style === Constants_1.MessageButtonStyles['url'] && data.custom_id)
		throw new TypeError(
			'BOTH_URL_CUSTOM_ID: A custom id and url cannot both be specified'
		);
	if (data.style !== Constants_1.MessageButtonStyles['url'] && !data.custom_id)
		throw new TypeError('NO_BUTTON_ID: Please provide button id');
	if (data.emoji && data.emoji.id && isNaN(data.emoji.id))
		throw new TypeError('INCORRECT_EMOJI_ID: Please provide correct emoji id');
	if (data.emoji && data.emoji.name && this.isEmoji(data.emoji.name) === false)
		throw new TypeError('INCORRECT_EMOJI_NAME: Please provide correct emoji');
	return {
		style: data.style,
		label: data.label,
		emoji: data.emoji,
		disabled: data.disabled,
		url: data.url,
		custom_id: data.custom_id,
		type: 2,
	};
}
exports.resolveButton = resolveButton;
/**
 * Returns the component type of the input, or if the input isn't a string returns the input.
 * @param  {never} type
 * @returns unknown
 */
function resolveType(type) {
	return typeof type === 'string'
		? Constants_1.MessageComponentTypes[type]
		: type;
}
exports.resolveType = resolveType;
/**
 * Resolves if the content of a string is an emoji.
 * @param  {string} emoji
 * @returns boolean
 */
function isEmoji(emoji) {
	var emojiRegex =
		/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	return emojiRegex.test(emoji);
}
exports.isEmoji = isEmoji;
//# sourceMappingURL=Util.js.map
