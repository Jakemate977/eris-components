"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = void 0;
const Constants_1 = require("../Constants");
const MessageComponent_1 = __importDefault(require("./interfaces/MessageComponent"));
class ActionRow extends MessageComponent_1.default {
    constructor(data = {}) {
        super({ type: 'ACTION_ROW' });
        this.setup(data);
    }
    setup(data) {
        if ('component' in data) {
            this.component = BaseMessageComponent.create(component, null, true);
        }
        this.components = [];
        if ('components' in data) {
            this.components = data.components.map((c) => BaseMessageComponent.create(c, null, true));
        }
        return this;
    }
    addComponents(...components) {
        this.components.push(...components.flat(2).map((c) => MessageComponent_1.default.create(c, null, true)));
        return this;
    }
    addComponent(component) {
        return this.addComponents(component);
    }
    toJSON() {
        return {
            components: this.components.map((c) => c.toJSON()),
            type: Constants_1.MessageComponentTypes[this.type],
        };
    }
}
exports.ActionRow = ActionRow;
//# sourceMappingURL=ActionRow.js.map