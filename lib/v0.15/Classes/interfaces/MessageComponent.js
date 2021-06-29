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
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../../Constants");
var Util_1 = require("../../Util");
var MessageComponent = /** @class */ (function () {
    function MessageComponent(data) {
        this.type = 'type' in data ? Util_1.resolveType(data.type) : null;
    }
    MessageComponent.create = function (data) {
        var component;
        if (typeof (data.type) === 'string') {
            data.type = Constants_1.MessageComponentTypes[data.type];
        }
        switch (data.type) {
            case Constants_1.MessageComponentTypes.ACTION_ROW: {
                var ActionRow = Promise.resolve().then(function () { return __importStar(require('../ActionRow')); });
                component = new ActionRow(data);
                break;
            }
            case Constants_1.MessageComponentTypes.BUTTON: {
                var Button = Promise.resolve().then(function () { return __importStar(require('../Button')); });
                component = new Button(data);
                break;
            }
            default:
                throw new SyntaxError('INVALID_TYPE: Invalid MessageComponentType');
        }
        return component;
    };
    return MessageComponent;
}());
exports.default = MessageComponent;
