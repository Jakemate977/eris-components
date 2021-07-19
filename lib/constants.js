'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.baseURL = exports.ButtonStyles = exports.ComponentTypes = void 0;
var ComponentTypes;
(function (ComponentTypes) {
    ComponentTypes[(ComponentTypes['ACTION_ROW'] = 1)] = 'ACTION_ROW';
    ComponentTypes[(ComponentTypes['BUTTON'] = 2)] = 'BUTTON';
    ComponentTypes[(ComponentTypes['SELECT_MENU'] = 3)] = 'SELECT_MENU';
})((ComponentTypes = exports.ComponentTypes || (exports.ComponentTypes = {})));
var ButtonStyles;
(function (ButtonStyles) {
    ButtonStyles[(ButtonStyles['blurple'] = 1)] = 'blurple';
    ButtonStyles[(ButtonStyles['grey'] = 2)] = 'grey';
    ButtonStyles[(ButtonStyles['gray'] = 2)] = 'gray';
    ButtonStyles[(ButtonStyles['green'] = 3)] = 'green';
    ButtonStyles[(ButtonStyles['red'] = 4)] = 'red';
    ButtonStyles[(ButtonStyles['url'] = 5)] = 'url';
    // aliases
    ButtonStyles[(ButtonStyles['primary'] = 1)] = 'primary';
    ButtonStyles[(ButtonStyles['secondary'] = 2)] = 'secondary';
    ButtonStyles[(ButtonStyles['success'] = 3)] = 'success';
    ButtonStyles[(ButtonStyles['danger'] = 4)] = 'danger';
    ButtonStyles[(ButtonStyles['link'] = 5)] = 'link';
})((ButtonStyles = exports.ButtonStyles || (exports.ButtonStyles = {})));
exports.baseURL = 'https://discord.com/api/v9';
