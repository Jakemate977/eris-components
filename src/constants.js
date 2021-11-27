/* eslint-disable @typescript-eslint/no-var-requires */
const ComponentTypes = {
    ACTION_ROW: 1,
    BUTTON: 2,
    SELECT_MENU: 3,
};

const ButtonStyles = {
    blurple: 1,
    grey: 2,
    gray: 2,
    green: 3,
    red: 4,
    url: 5,
    primary: 1,
    secondary: 2,
    success: 3,
    danger: 4,
    link: 5,
};

const version = require('../package.json').version;

const baseURL = 'https://discord.com/api/v9';

module.exports = {
    ComponentTypes: ComponentTypes,
    ButtonStyles: ButtonStyles,
    version: version,
    baseURL: baseURL,
};
