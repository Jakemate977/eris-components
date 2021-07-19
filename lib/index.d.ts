import Eris from 'eris';
export * as ActionRow from './classes/ActionRow';
export * as Button from './classes/Button';
export * as Menu from './classes/Menu';
export * as MenuOption from './classes/MenuOption';
export * as Util from './util';
export * as constants from './constants';
/**
 * The Eris client.
 * @param  {Eris.Client} ErisClient
 * @param  {string} botToken
 * @returns Eris
 */
export default function Client(ErisClient: Eris.Client, botToken: string): Eris.Client;
