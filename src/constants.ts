export enum ComponentTypes {
    'ACTION_ROW' = 1,
    'BUTTON' = 2,
    'SELECT_MENU' = 3,
}

export enum ButtonStyles {
    'blurple' = 1,
    'grey' = 2,
    'gray' = 2,
    'green' = 3,
    'red' = 4,
    'url' = 5,
    // aliases
    'primary' = 1,
    'secondary' = 2,
    'success' = 3,
    'danger' = 4,
    'link' = 5,
}

export interface objMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
}

export interface Emoji {
    name?: string;
    id?: string;
}

export interface objMenu {
    type: number;
    minValues?: number;
    maxValues?: number;
    id: string;
    placeholder?: string;
    options: objMenuOption[];
    custom_id: string;
    disabled?: boolean;
}

export interface objButton {
    style: keyof typeof ButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: string;
    url?: string;
    custom_id?: string;
}

export const VERSION = '0.0.1';

export const baseURL = 'https://discord.com/api/v9';
