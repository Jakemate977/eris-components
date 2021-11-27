'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
const { Client } = require('eris');

const { ComponentTypes } = require('./constants');
const { ErisComponentsError, debug } = require('./util');
const Util = require('./util');
const Constants = require('./constants');

const ActionRow = require('./classes/ActionRow');
const Button = require('./classes/Button');
const ComponentsCollector = require('./classes/ComponentsCollector');
const Menu = require('./classes/Menu');
const MenuOption = require('./classes/MenuOption');

/**
 * The Eris client.
 * @param  {Client} ErisClient
 * @returns Eris
 */

function ErisComponentsClient(
    ErisClient,
    libOptions = {
        debug: false,
        invalidClientInstanceError: true,
        ignoreRequestErrors: false,
    }
) {
    if (!ErisClient)
        throw new ErisComponentsError(
            'NO_CLIENT_PROVIDED',
            'No Eris Client provided on ErisComponents.Client function.'
        );

    let validInstance = ErisClient instanceof Client;

    if (!validInstance && libOptions.invalidClientInstanceError)
        throw new ErisComponentsError(
            'INVALID_CLIENT_INSTANCE',
            'Invalid instance of Eris Client provided on ErisComponents.Client function. If you think this error is caused by a bug, disable invalidClientInstanceError in ErisComponents.Client options.'
        );

    if (!validInstance)
        debug(
            libOptions,
            'An invalid client instance was provided on ErisComponents.Client.'
        );

    ErisClient.on('rawWS', async (packet) => {
        if (packet.t === 'INTERACTION_CREATE') {
            const resBody = packet.d;

            debug(libOptions, 'WebSocket Event INTERACTION_CREATE emitted.');

            ErisClient.emit('rawInteractionCreate', resBody);

            if (resBody.type === 2 && resBody) {
                ErisClient.emit('slashCommandInteract', resBody);
            }

            if (!resBody.data.component_type) return;

            switch (resBody.data.component_type) {
                case ComponentTypes.BUTTON:
                    ErisClient.emit('clickButton', resBody);
                    ErisClient.emit('componentInteract', resBody);
                    break;

                case ComponentTypes.SELECT_MENU:
                    ErisClient.emit('submitMenu', resBody);
                    ErisClient.emit('componentInteract', resBody);
                    break;
            }
        }
    });

    ErisClient.sendComponents = async function (
        channel,
        components,
        content,
        file
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

        const endpoint = `/channels/${channel}/messages`;
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

            return ErisClient.request(body, null, endpoint, 'POST', file);
        } else if (components instanceof ActionRow) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [components],
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return ErisClient.request(body, null, endpoint, 'POST', file);
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

            return ErisClient.request(body, null, endpoint, 'POST', file);
        } else if (Array.isArray(components)) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: components,
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return ErisClient.request(body, null, endpoint, 'POST', file);
        } else {
            throw new ErisComponentsError(
                'INVALID_COMPONENT_TYPE',
                'An invalid component type provided on ErisClient.sendComponents function.'
            );
        }
    };

    ErisClient.editComponents = async function (
        message,
        components,
        content,
        file
    ) {
        if (!message)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a message to ErisClient.editComponents function.'
            );

        if (!content)
            throw new ErisComponentsError(
                'REQUIRED_FIELDS_ON_REQUEST',
                'You must provide a content to ErisClient.editComponents function.'
            );

        let targetObj = {};

        if (message.channel) {
            targetObj = {
                channel: message.channel.id,
                messageId: message.id,
            };
        } else {
            targetObj = {
                channel: message.channel_id,
                messageId: message.id,
            };
        }

        const endpoint = `/channels/${targetObj.channel}/messages/${targetObj.messageId}`;
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

            return ErisClient.request(
                body,
                null,
                endpoint,
                'PATCH',
                file
            );
        } else if (components instanceof ActionRow) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: [components],
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return ErisClient.request(
                body,
                null,
                endpoint,
                'PATCH',
                file
            );
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

            return ErisClient.request(
                body,
                null,
                endpoint,
                'PATCH',
                file
            );
        } else if (Array.isArray(components)) {
            body = {
                content:
                    typeof content === 'string' ? content : content.content,
                components: components,
                type: 1,
            };

            if (typeof content == 'object')
                body = Object.assign({}, body, content);

            return ErisClient.request(
                body,
                null,
                endpoint,
                'PATCH',
                file
            );
        } else {
            throw new ErisComponentsError(
                'INVALID_COMPONENT_TYPE',
                'An invalid component type provided on ErisClient.editComponents function.'
            );
        }
    };

    ErisClient.editInteraction = async function (
        resBody,
        components,
        content,
        file
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
        }
    };

    ErisClient.replyInteraction = async function (
        resBody,
        components,
        content,
        options,
        type,
        file
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
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

            return ErisClient.request(body, resBody, null, 'POST', file);
        }
    };

    ErisClient.awaitComponents = async function (
        filter,
        channel,
        options,
        thisArg
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

        const maxListeners = ErisClient.getMaxListeners();

        if (maxListeners !== 0) {
            ErisClient.setMaxListeners(maxListeners + 1);
        }

        return new Promise((resolve, reject) => {
            let ended = false;

            const listenerFN = async (resBody) => {
                if (!resBody.data.component_type) return;

                if (resBody.channel_id != channel) return;

                if (await filter.call(thisArg, resBody)) {
                    end();
                    return resolve(resBody);
                }
            };

            function end() {
                if (ended) return false;

                ended = true;

                ErisClient.removeListener('componentInteract', listenerFN);

                const newMaxListeners = ErisClient.getMaxListeners();

                if (newMaxListeners !== 0) {
                    ErisClient.setMaxListeners(newMaxListeners - 1);
                }

                return true;
            }

            ErisClient.on('componentInteract', listenerFN);

            if (options && options.time && options.time > 0) {
                setTimeout(function () {
                    end();

                    return reject(
                        'The ErisClient.awaitComponents promise reached its time limit.'
                    );
                }, options.time);
            }
        });
    };

    ErisClient.createComponentsCollector = function (
        filter,
        channel,
        options,
        thisArg
    ) {
        if (!filter)
            throw new ErisComponentsError(
                'REQUIRED_FILTER',
                'You need to provide a filter to ErisClient.createComponentsCollector function.'
            );

        if (!channel)
            throw new ErisComponentsError(
                'REQUIRED_CHANNEL',
                'You need to provide a channel to ErisClient.createComponentsCollector function.'
            );

        return new ComponentsCollector(
            ErisClient,
            filter,
            channel,
            options,
            thisArg
        );
    };

    ErisClient.request = async function (
        body,
        resBody,
        userEndpoint,
        userMethod,
        userFile
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

        let method = userMethod ? userMethod.toUpperCase() : 'POST';

        debug(libOptions, `Request to ${endpoint} using method ${method}.`);

        return ErisClient.requestHandler
            .request(
                method,
                endpoint,
                true,
                JSON.parse(JSON.stringify(body)),
                userFile
            )
            .then((result) => {
                return result;
            })
            .catch((error) => {
                debug(libOptions, 'An error occurred while doing request');
                if (!libOptions.ignoreRequestErrors) {
                    throw new ErisComponentsError(
                        'ERROR_ON_REQUEST',
                        `An error occurred while making the request ErisClient.request function: ${error.toString()}`
                    );
                }
            });
    };

    return ErisClient;
}

module.exports = {
    Client: ErisComponentsClient,
    ActionRow: ActionRow,
    Button: Button,
    ComponentsCollector: ComponentsCollector,
    Menu: Menu,
    MenuOption: MenuOption,
    Util: Util,
    Constants: Constants,
};
