import { ButtonStyles, ComponentTypes } from './constants';
export declare class ErisComponentsError extends Error {
    constructor(code: string, message: string);
}
export declare function resolveStyle(
    style: keyof typeof ButtonStyles
): ButtonStyles;
export declare function resolveString(data: unknown): string;
export declare function resolveButton(data: any): Record<string, unknown>;
export declare function resolveType(
    type: keyof typeof ComponentTypes
): ComponentTypes;
export declare function resolveMenu(data: any): {
    type: ComponentTypes;
    placeholder: any;
    custom_id: any;
    options: {
        label: any;
        value: any;
        emoji: any;
        description: any;
    }[];
    max_values: number | undefined;
    min_values: number | undefined;
};
export declare function resolveMenuOptions(data: any): {
    label: any;
    value: any;
    emoji: any;
    description: any;
}[];
export declare function resolveMaxValues(
    m1: number,
    m2?: number
): number | undefined;
export declare function resolveMinValues(
    m1: number,
    m2?: number
): number | undefined;
export declare function testEmoji(string: string): boolean;
