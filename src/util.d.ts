import { ButtonStyles, ComponentTypes, objButton, objMenu, objMenuOption } from '../lib/constants';
export declare class ErisComponentsError extends Error {
    /**
     * Throw an error.
     * @param  {string} code
     * @param  {string} message
    */
    constructor(code: string, message: string);
}
/**
 * Returns the number of a stile.
 * @param  {keyof typeof ButtonStyles} style
 * @returns ButtonStyles
 */
export declare function resolveStyle(style: keyof typeof ButtonStyles): ButtonStyles;
/**
 * Returns the data as a string, if the data is an array it joins all its components into 1 string.
 * @param  {unknown} data
 * @returns string
 */
export declare function resolveString(data: unknown): string;
/**
 * Resolves a button into an object.
 * @param  {objButton} data
 * @returns objButton
 */
export declare function resolveButton(data: objButton): objButton;
/**
 * Returns the number of a type.
 * @param  {keyof typeof ComponentTypes} type
 * @returns ComponentTypes
 */
export declare function resolveType(type: keyof typeof ComponentTypes): ComponentTypes;
/**
 * Resolves a menu into an object.
 * @param  {objMenu} data
 * @returns objMenu
 */
export declare function resolveMenu(data: objMenu): objMenu;
/**
 * Resolves menu options into a single array.
 * @param  {objMenuOption[]} data
 * @returns objMenuOption
 */
export declare function resolveMenuOptions(data: objMenuOption[]): objMenuOption[];
/**
 * Kinda useless.
 * @param  {number} m1
 * @param  {number} m2?
 * @returns number
 */
export declare function resolveMaxValues(m1: number, m2?: number): number;
/**
 * Kinda useless.
 * @param  {number} m1
 * @param  {number} m2?
 * @returns number
 */
export declare function resolveMinValues(m1: number, m2?: number): number;
/**
 * Resolves if a string is an utf8 emoji.
 * @param  {string} string
 * @returns boolean
 */
export declare function testEmoji(string: string): boolean;
