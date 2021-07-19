"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = exports.Util = exports.MenuOption = exports.Menu = exports.Button = exports.ActionRow = void 0;
const eris_1 = __importDefault(require("eris"));
const axios = __importStar(require("axios"));
const constants_1 = require("./constants");
const util_1 = require("./util");
const ActionRow_1 = __importDefault(require("./classes/ActionRow"));
const Button_1 = __importDefault(require("./classes/Button"));
const Menu_1 = __importDefault(require("./classes/Menu"));
exports.ActionRow = __importStar(require("./classes/ActionRow"));
exports.Button = __importStar(require("./classes/Button"));
exports.Menu = __importStar(require("./classes/Menu"));
exports.MenuOption = __importStar(require("./classes/MenuOption"));
exports.Util = __importStar(require("./util"));
exports.constants = __importStar(require("./constants"));
/**
 * The Eris client.
 * @param  {Eris.Client} ErisClient
 * @param  {string} botToken
 * @returns Eris
 */
function Client(ErisClient, botToken) {
    if (!botToken)
        throw new util_1.ErisComponentsError('NO_TOKEN_PROVIDED', 'No Token provided on ErisComponents.Client function.');
    if (!ErisClient)
        throw new util_1.ErisComponentsError('NO_CLIENT_PROVIDED', 'No Eris Client provided on ErisComponents.Client function.');
    if (!(ErisClient instanceof eris_1.default.Client))
        throw new util_1.ErisComponentsError('INVALID_CLIENT_INSTANCE', 'Invalid instace of Eris Client provided on ErisComponents.Client function.');
    botToken = botToken.replace('Bot ', '');
    ErisClient.on('rawWS', (packet) => __awaiter(this, void 0, void 0, function* () {
        if (packet.t === 'INTERACTION_CREATE') {
            const data = packet.d;
            if (!data.data.component_type)
                return;
            switch (data.data.component_type) {
                case constants_1.ComponentTypes.BUTTON:
                    ErisClient.emit('clickButton', data);
                    break;
                case constants_1.ComponentTypes.SELECT_MENU:
                    ErisClient.emit('clickMenu', data);
                    break;
            }
        }
    }));
    ErisClient.sendComponents = function (channel, components, content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!channel)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a channel to ErisClient.sendComponents function.');
            if (!content)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a content to ErisClient.sendComponents function.');
            let endpoint = `/channels/${channel}/messages`;
            let body = {};
            if (components instanceof Button_1.default) {
                body = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                    type: 1,
                };
                if (typeof content == 'object')
                    body = Object.assign({}, body, content);
                return yield ErisClient.request(body, null, endpoint);
            }
            else if (components instanceof ActionRow_1.default) {
                body = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [components],
                    type: 1,
                };
                if (typeof content == 'object')
                    body = Object.assign({}, body, content);
                return yield ErisClient.request(body, null, endpoint);
            }
            else if (components instanceof Menu_1.default) {
                body = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                    type: 1,
                };
                if (typeof content == 'object')
                    body = Object.assign({}, body, content);
                return yield ErisClient.request(body, null, endpoint);
            }
            else if (Array.isArray(components)) {
                body = {
                    content: typeof content === 'string' ? content : content.content,
                    components: components,
                    type: 1,
                };
                if (typeof content == 'object')
                    body = Object.assign({}, body, content);
                return yield ErisClient.request(body, null, endpoint);
            }
            else {
                throw new util_1.ErisComponentsError('INVALID_COMPONENT_TYPE', 'An invalid component type provided on ErisClient.sendComponents function.');
            }
        });
    };
    ErisClient.editInteraction = function (resBody, components, content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!resBody)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a resBody to ErisClient.editInteraction function.');
            if (!content)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a content to ErisClient.editInteraction function.');
            let data = {};
            if (components instanceof Button_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                };
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: 7,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components instanceof ActionRow_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [components],
                };
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: 7,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components instanceof Menu_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                    type: 1,
                };
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: 7,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (Array.isArray(components)) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: components,
                };
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: 7,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components) {
                throw new util_1.ErisComponentsError('INVALID_COMPONENT_TYPE', 'An invalid component type provided on ErisClient.editInteraction function.');
            }
            else {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                };
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: 7,
                };
                return yield ErisClient.request(body, resBody);
            }
        });
    };
    ErisClient.replyInteraction = function (resBody, components, content, options, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!resBody)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a resBody to ErisClient.replyInteraction function.');
            if (!content)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a content to ErisClient.replyInteraction function.');
            let data = {};
            if (components instanceof Button_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                };
                if (options && options.ephemeral)
                    data['flags'] = 64;
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: type ? type : 4,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components instanceof ActionRow_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [components],
                };
                if (options && options.ephemeral)
                    data['flags'] = 64;
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: type ? type : 4,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components instanceof Menu_1.default) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: [
                        {
                            components: [components],
                            type: 1,
                        },
                    ],
                    type: 1,
                };
                if (options && options.ephemeral)
                    data['flags'] = 64;
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: type ? type : 4,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (Array.isArray(components)) {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                    components: components,
                };
                if (options && options.ephemeral)
                    data['flags'] = 64;
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: type ? type : 4,
                };
                return yield ErisClient.request(body, resBody);
            }
            else if (components) {
                throw new util_1.ErisComponentsError('INVALID_COMPONENT_TYPE', 'An invalid component type provided on ErisClient.replyInteraction function.');
            }
            else {
                data = {
                    content: typeof content === 'string' ? content : content.content,
                };
                if (options && options.ephemeral)
                    data['flags'] = 64;
                if (typeof content == 'object')
                    data = Object.assign({}, data, content);
                let body = {
                    data: data,
                    type: type ? type : 4,
                };
                return yield ErisClient.request(body, resBody);
            }
        });
    };
    ErisClient.awaitComponents = function (filter, channel, options, thisArg) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter)
                throw new util_1.ErisComponentsError('REQUIRED_FILTER', 'You need to provide a filter to ErisClient.awaitComponents function.');
            if (!channel)
                throw new util_1.ErisComponentsError('REQUIRED_CHANNEL', 'You need to provide a channel to ErisClient.awaitComponents function.');
            return yield new Promise((resolve, reject) => {
                ErisClient.on('rawWS', (packet) => __awaiter(this, void 0, void 0, function* () {
                    if (packet.t === 'INTERACTION_CREATE') {
                        const data = packet.d;
                        if (!data.data.component_type)
                            return;
                        if (data.channel_id != channel)
                            return;
                        if (yield filter.call(thisArg, data)) {
                            resolve(data);
                        }
                    }
                }));
                if (options.time) {
                    setTimeout(function () {
                        reject('The ErisClient.awaitComponents promise reached its time limit.');
                    }, options.time);
                }
            });
        });
    };
    ErisClient.request = function (body, resBody, userEndpoint, userHeaders, userMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!resBody && !userEndpoint)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a resBody or userEndpoint to ErisClient.request function.');
            if (!body)
                throw new util_1.ErisComponentsError('REQUIRED_FIELDS_ON_REQUEST', 'You must provide a body to ErisClient.request function.');
            let endpoint = userEndpoint
                ? userEndpoint
                : `/interactions/${resBody.id}/${resBody.token}/callback`;
            let headers = userHeaders
                ? userHeaders
                : {
                    'Authorization': 'Bot ' + botToken,
                    'Content-Type': 'application/json',
                };
            return yield axios(`${constants_1.baseURL}${endpoint}`, {
                method: userMethod ? userMethod.toLowerCase() : 'post',
                data: JSON.parse(JSON.stringify(body)),
                headers: headers,
            })
                .then((result) => {
                return result.data;
            })
                .catch((error) => {
                if (error.response) {
                    throw new util_1.ErisComponentsError('ERROR_ON_REQUEST', `An error occurred while making the request on ErisClient.request function: ${JSON.stringify(error.response.data, null, 2)}`);
                }
                else {
                    throw new util_1.ErisComponentsError('ERROR_ON_REQUEST', `An error occurred while making the request ErisClient.request function:  ${error.toString()}`);
                }
            });
        });
    };
    return ErisClient;
}
exports.default = Client;
