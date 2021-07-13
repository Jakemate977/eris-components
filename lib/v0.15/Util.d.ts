import { MessageButtonStyles } from './Constants';
/**
 * Resolves if a string is a style.
 * @param  {MessageButtonStyles} style
 * @returns MessageButtonStyles
 */
export declare function resolveStyle(
	style: keyof typeof MessageButtonStyles
): MessageButtonStyles;
/**
 * Returns the input as a string, in arrays, however, it joins the values of an array into a single string.
 * @param  {unknown} data
 * @returns string
 */
export declare function resolveString(data: unknown): string;
/**
 * Resolves if a constructor is a button, in case that it isn't will return an error.
 * @param  {Record<string, any>} this
 * @param  {Record<string, any>} data
 * @returns Record<strign, unknown>
 */
export declare function resolveButton(
	this: Record<string, any>,
	data: Record<string, any>
): Record<string, unknown>;
/**
 * Returns the component type of the input, or if the input isn't a string returns the input.
 * @param  {never} type
 * @returns unknown
 */
export declare function resolveType(type: never): unknown;
/**
 * Resolves if the content of a string is an emoji.
 * @param  {string} emoji
 * @returns boolean
 */
export declare function isEmoji(emoji: string): boolean;
//# sourceMappingURL=Util.d.ts.map
