/* eslint-disable @typescript-eslint/no-var-requires */

const { ErisComponentsError } = require('../util');
const EventEmitter = require('events');

class ErisComponentsCollector extends EventEmitter {
    constructor(ErisClient, filter, channel, options, thisArg) {
        super();
        this.collections = [];
        this.endedBool = false;

        if (!ErisClient)
            throw new ErisComponentsError(
                'NO_CLIENT_PROVIDED',
                'No Eris Client provided on ErisComponents.ComponentsCollector constructor.'
            );

        if (!filter)
            throw new ErisComponentsError(
                'REQUIRED_FILTER',
                'You need to provide a filter to ErisComponents.ComponentsCollector constructor.'
            );

        if (!channel)
            throw new ErisComponentsError(
                'REQUIRED_CHANNEL',
                'You need to provide a channel to ErisComponents.ComponentsCollector constructor.'
            );

        if (!options)
            throw new ErisComponentsError(
                'REQUIRED_OPTIONS',
                'You need to provide an options to ErisComponents.ComponentsCollector constructor.'
            );

        if (!options.time)
            throw new ErisComponentsError(
                'REQUIRED_TIME_OPTIONS',
                'You need to provide an time to options on ErisComponents.ComponentsCollector constructor.'
            );

        const maxListeners = ErisClient.getMaxListeners();

        if (maxListeners !== 0) {
            ErisClient.setMaxListeners(maxListeners + 1);
        }

        const listenerFN = async (data) => {
            if (!data.data.component_type) return;

            if (data.channel_id != channel) return;

            if (await filter.call(thisArg, data)) {
                this.collections.push(data);
                this.emit('collect', data);
            }
        };

        ErisClient.on('componentInteract', listenerFN);

        if (options && options.time && options.time > 0) {
            new Promise((resolve) => setTimeout(resolve, options.time)).then(
                () => {
                    this.emit('preEnd', true);
                }
            );
        }

        this.on('preEnd', () => {
            this.endedBool = true;

            ErisClient.removeListener('componentInteract', listenerFN);

            const newMaxListeners = ErisClient.getMaxListeners();

            if (newMaxListeners !== 0) {
                ErisClient.setMaxListeners(newMaxListeners - 1);
            }

            this.emit('end', this.collections);
        });
    }

    get ended() {
        return this.endedBool;
    }

    get collected() {
        return this.collections;
    }

    stop() {
        this.emit('preEnd', true);
        return true;
    }
}

module.exports = ErisComponentsCollector;
