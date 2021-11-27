export declare enum ComponentTypes {
    'ACTION_ROW' = 1,
    'BUTTON' = 2,
    'SELECT_MENU' = 3,
}
export declare enum ButtonStyles {
    'blurple' = 1,
    'grey' = 2,
    'gray' = 2,
    'green' = 3,
    'red' = 4,
    'url' = 5,
    'primary' = 1,
    'secondary' = 2,
    'success' = 3,
    'danger' = 4,
    'link' = 5,
}
export interface Emoji {
    name?: string;
    id?: string;
}
export interface objMenuOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
}
export interface objMenu {
    type?: ComponentTypes.SELECT_MENU;
    minValues?: number;
    maxValues?: number;
    placeholder?: string;
    options: objMenuOption[];
    custom_id: string;
    disabled?: boolean;
}
export interface objButton {
    style: keyof typeof ButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: string | Emoji;
    url?: string;
    custom_id?: string;
    type?: ComponentTypes.BUTTON;
}
export interface objAction {
    components: objButton[] | objMenu[];
    type?: number;
}
export declare const version = '0.0.1';
export declare const baseURL = 'https://discord.com/api/v9';
