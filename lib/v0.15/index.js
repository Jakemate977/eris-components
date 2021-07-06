"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = __importDefault(require("eris"));
/**
 * @param  {Eris} client
 */
function buttons(client) {
    if (parseFloat(eris_1.default.VERSION) < 0.15)
        throw new Error('The Eris version must be v0.15 or higher.');
    if (!client || !(client instanceof eris_1.default.Client))
        throw new Error('INVALID_CLIENT_PROVIDED: The Eris client is not provided or is invalid.');
    client.on('rawWS', async (packet) => {
        if (packet.t === 'INTERACTION_CREATE') {
            const data = packet.d;
            client.emit('interactionCreate', data);
        }
    });
}
exports.default = buttons;
module.exports.ErisButton = require(`./v0.15/Classes/ErisButton`);
module.exports.ActionRow = require('./Classes/ActionRow.ts');
module.exports.Collector = require('./Classes/ButtonCollector.ts');
//# sourceMappingURL=index.js.map
