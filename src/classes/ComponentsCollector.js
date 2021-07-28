/* eslint-disable @typescript-eslint/no-var-requires */

const { Client } = require('eris');
const { ErisComponentsError } = require('../util');
const EventEmitter = require('events');

class ErisComponentsCollector extends EventEmitter {
    constructor (ErisClient, filter, channel, options, thisArg) {
        super()
        this.collections = []
        this.endedBool = false
        this.EClient = ErisClient

        if (!ErisClient)
            throw new ErisComponentsError(
                'NO_CLIENT_PROVIDED',
                'No Eris Client provided on ErisComponents.ComponentsCollector function.'
            );

        if (!(ErisClient instanceof Client))
            throw new ErisComponentsError(
                'INVALID_CLIENT_INSTANCE',
                'Invalid instace of Eris Client provided on ErisComponents.ComponentsCollector function.'
            );


        if (!filter)
            throw new ErisComponentsError(
                'REQUIRED_FILTER',
                'You need to provide a filter to ErisComponents.ComponentsCollector function.'
            );

        if (!channel)
            throw new ErisComponentsError(
                'REQUIRED_CHANNEL',
                'You need to provide a channel to ErisComponents.ComponentsCollector function.'
            );

        const listenerFN = async (data) => {
            if (!data.data.component_type) return;

            if (data.channel_id != channel) return;

            if (await filter.call(thisArg, data)) {
                this.collections.push(data)
                this.emit('collect', data);
            }
        }

        this.EClient.on('componentInteract', listenerFN);

        if (options.time) {
            new Promise((resolve) => setTimeout(resolve, options.time)).then(() => {
                this.emit('preEnd', true);
            })
        }

        this.on('preEnd', () => {
            this.endedBool = true
            this.EClient.removeListener('componentInteract', listenerFN)
            this.emit('end', this.collections);
        })
    }

    get ended() {
        return this.endedBool
    }

    get collected() {
        return this.collections
    }

    stop() {
        this.emit('preEnd', true);
        return true
    }
}


module.exports = ErisComponentsCollector
