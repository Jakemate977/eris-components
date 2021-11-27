import * as EventEmitter from 'events';
// TODO: Tipar esto mejor.
export default class ErisComponentsCollector extends EventEmitter {
    ErisClient: any;
    filter: any;
    channel: string;
    options: any;
    thisArg: any;
    constructor(
        ErisClient: any,
        filter: any,
        channel: string,
        options: any,
        thisArg: any
    );
    get ended(): boolean;
    get collected(): any[];
    stop(): boolean;
}
