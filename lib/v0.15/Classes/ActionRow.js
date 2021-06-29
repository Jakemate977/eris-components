"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionRow = void 0;
var Constants_1 = require("../Constants");
var MessageComponent_1 = __importDefault(require("./interfaces/MessageComponent")); // porque ahora usar import por es5 da mejor intellisense
// de todas maneras creo que da error
//arreglado
// afk
var ActionRow = /** @class */ (function (_super) {
    __extends(ActionRow, _super);
    function ActionRow(data) {
        if (data === void 0) { data = {}; }
        var _this = _super.call(this, { type: 'ACTION_ROW' }) || this;
        _this.setup(data);
        return _this;
    }
    ActionRow.prototype.setup = function (data) {
        if ('component' in data) {
            this.component = BaseMessageComponent.create(component, null, true);
        }
        this.components = [];
        if ('components' in data) {
            this.components = data.components.map(function (c) {
                return BaseMessageComponent.create(c, null, true);
            });
        }
        return this;
    };
    ActionRow.prototype.addComponents = function () {
        var _a;
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        (_a = this.components).push.apply(_a, components
            .flat(2)
            .map(function (c) { return BaseMessageComponent.create(c, null, true); }));
        return this;
    };
    ActionRow.prototype.addComponent = function (component) {
        return this.addComponents(component);
    };
    ActionRow.prototype.toJSON = function () {
        return {
            components: this.components.map(function (c) { return c.toJSON(); }),
            type: Constants_1.MessageComponentTypes[this.type],
        };
    };
    return ActionRow;
}(MessageComponent_1.default));
exports.ActionRow = ActionRow;
