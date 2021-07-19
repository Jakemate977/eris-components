import Eris from 'eris';
import * as axios from 'axios';

import { ComponentTypes, baseURL } from './constants';
import { ErisComponentsError } from './util';

import ActionRow from './classes/ActionRow';
import Button from './classes/Button';
import Menu from './classes/Menu';
import MenuOption from './classes/MenuOption';

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
export default function Client(
    ErisClient: Eris.Client,
    botToken: string
): Eris.Client {
    if (!botToken)
        throw new ErisComponentsError(
            'NO_TOKEN_PROVIDED',
            'No Token provided on ErisComponents.Client function.'
        );

    if (!ErisClient)
        throw new ErisComponentsError(
            'NO_CLIENT_PROVIDED',
            'No Eris Client provided on ErisComponents.Client function.'
        );

    if (!(ErisClient instanceof Eris.Client))
        throw new ErisComponentsError(
            'INVALID_CLIENT_INSTANCE',
            'Invalid instace of Eris Client provided on ErisComponents.Client function.'
        );

    botToken = botToken.replace('Bot ', '');

    ErisClient.on('rawWS', async (packet: any) => {
        if (packet.t === 'INTERACTION_CREATE') {
            const data = packet.d;

            if (!data.data.component_type) return;

            switch (data.data.component_type) {
                case ComponentTypes.BUTTON:
                    ErisClient.emit('clickButton', data);
                    break;

                case ComponentTypes.SELECT_MENU:
                    ErisClient.emit('clickMenu', data);
                    break;
            }
        }
    });

    ErisClient.sendComponents = async function (
        channel: string,
        components: any,
        content: any
    ) {
        if (!channel)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a channel to ErisClient.sendComponents function.'
            );

        if (!content)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a content to ErisClient.sendComponents function.'
            );

        let endpoint = `/channels/${channel}/messages`;
        let body = {};

        if (components instanceof Button) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
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

            return await ErisClient.request(body, null, endpoint);
        } else if (components instanceof ActionRow) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [components],
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return await ErisClient.request(body, null, endpoint);
        } else if (components instanceof Menu) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
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

            return await ErisClient.request(body, null, endpoint);
        } else if (Array.isArray(components)) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: components,
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return await ErisClient.request(body, null, endpoint);
        } else {
            throw new ErisComponentsError(
                'INVALID_COMPONENT_TYPE',
                'An invalid component type provided on ErisClient.sendComponents function.'
            );
        }
    };

    ErisClient.editInteraction = async function (
        resBody: any,
        components: any,
        content: any
    ) {
        if (!resBody)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a resBody to ErisClient.editInteraction function.'
            );

        if (!content)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a content to ErisClient.editInteraction function.'
            );

        let data = {};

        if (components instanceof Button) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
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

            return await ErisClient.request(body, resBody);
        } else if (components instanceof ActionRow) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [components],
            };

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: 7,
            };

            return await ErisClient.request(body, resBody);
        } else if (components instanceof Menu) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
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

            return await ErisClient.request(body, resBody);
        } else if (Array.isArray(components)) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: components,
            };

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: 7,
            };

            return await ErisClient.request(body, resBody);
        } else if (components) {
            throw new ErisComponentsError(
                'INVALID_COMPONENT_TYPE',
                'An invalid component type provided on ErisClient.editInteraction function.'
            );
        } else {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
            };

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: 7,
            };

            return await ErisClient.request(body, resBody);
        }
    };

    ErisClient.replyInteraction = async function (
        resBody: any,
        components: any,
        content: any,
        options: any,
        type: number
    ) {
        if (!resBody)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a resBody to ErisClient.replyInteraction function.'
            );

        if (!content)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a content to ErisClient.replyInteraction function.'
            );

        let data = {};

        if (components instanceof Button) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [
                    {
                        components: [components],
                        type: 1,
                    },
                ],
            };

            if (options && options.ephemeral) data['flags'] = 64;

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: type ? type : 4,
            };

            return await ErisClient.request(body, resBody);
        } else if (components instanceof ActionRow) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [components],
            };

            if (options && options.ephemeral) data['flags'] = 64;

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: type ? type : 4,
            };

            return await ErisClient.request(body, resBody);
        } else if (components instanceof Menu) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [
                    {
                        components: [components],
                        type: 1,
                    },
                ],
                type: 1,
            };

            if (options && options.ephemeral) data['flags'] = 64;

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: type ? type : 4,
            };

            return await ErisClient.request(body, resBody);
        } else if (Array.isArray(components)) {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: components,
            };

            if (options && options.ephemeral) data['flags'] = 64;

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: type ? type : 4,
            };

            return await ErisClient.request(body, resBody);
        } else if (components) {
            throw new ErisComponentsError(
                'INVALID_COMPONENT_TYPE',
                'An invalid component type provided on ErisClient.replyInteraction function.'
            );
        } else {
            data = {
                content:
                    typeof content === 'string' ? content : content.content,
            };

            if (options && options.ephemeral) data['flags'] = 64;

            if (typeof content == 'object')
                data = Object.assign({}, data, content);

            let body = {
                data: data,
                type: type ? type : 4,
            };

            return await ErisClient.request(body, resBody);
        }
    };

    ErisClient.awaitComponents = async function (
        filter: any,
        channel: string,
        options: any,
        thisArg: any
    ) {
        if (!filter)
            throw new ErisComponentsError(
                'REQUIRED_FILTER',
                'You need to provide a filter to ErisClient.awaitComponents function.'
            );

        if (!channel)
            throw new ErisComponentsError(
                'REQUIRED_CHANNEL',
                'You need to provide a channel to ErisClient.awaitComponents function.'
            );

        return await new Promise((resolve, reject) => {
            ErisClient.on('rawWS', async (packet: any) => {
                if (packet.t === 'INTERACTION_CREATE') {
                    const data = packet.d;

                    if (!data.data.component_type) return;

                    if (data.channel_id != channel) return;

                    if (await filter.call(thisArg, data)) {
                        resolve(data);
                    }
                }
            });

            if (options.time) {
                setTimeout(function () {
                    reject(
                        'The ErisClient.awaitComponents promise reached its time limit.'
                    );
                }, options.time);
            }
        });
    };

    ErisClient.request = async function (
        body: any,
        resBody: any,
        userEndpoint: string,
        userHeaders: any,
        userMethod: string
    ) {
        if (!resBody && !userEndpoint)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a resBody or userEndpoint to ErisClient.request function.'
            );

        if (!body)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a body to ErisClient.request function.'
            );

        let endpoint = userEndpoint
            ? userEndpoint
            : `/interactions/${resBody.id}/${resBody.token}/callback`;

        let headers = userHeaders
            ? userHeaders
            : {
                  'Authorization': 'Bot ' + botToken,
                  'Content-Type': 'application/json',
              };

        return await axios(`${baseURL}${endpoint}`, {
            method: userMethod ? userMethod.toLowerCase() : 'post',
            data: JSON.parse(JSON.stringify(body)),
            headers: headers,
        })
            .then((result: { data: any }) => {
                return result.data;
            })
            .catch(
                (error: { response: { data: any }; toString: () => any }) => {
                    if (error.response) {
                        throw new ErisComponentsError(
                            'ERROR_ON_REQUEST',
                            `An error occurred while making the request on ErisClient.request function: ${JSON.stringify(
                                error.response.data,
                                null,
                                2
                            )}`
                        );
                    } else {
                        throw new ErisComponentsError(
                            'ERROR_ON_REQUEST',
                            `An error occurred while making the request ErisClient.request function:  ${error.toString()}`
                        );
                    }
                }
            );
    };

    return ErisClient;
}
