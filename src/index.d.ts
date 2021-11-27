/**
 * The Eris client.
 * @param  {Client} ErisClient
 * @returns Eris
 */
declare function ErisComponentsClient(ErisClient: any, libOptions?: {
    debug: boolean;
    invalidClientInstanceError: boolean;
    ignoreRequestErrors: boolean;
}): any;
export const ActionRow: typeof import("./classes/ActionRow");
export const Button: typeof import("./classes/Button");
export const ComponentsCollector: typeof import("./classes/ComponentsCollector");
export const Menu: typeof import("./classes/Menu");
export const MenuOption: typeof import("./classes/MenuOption");
export const Util: typeof import("./util");
export const Constants: typeof import("./constants");
export { ErisComponentsClient as Client };
