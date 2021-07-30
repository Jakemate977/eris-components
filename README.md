# Eris Components

## Summary

- Eris Components allows you to use Discord buttons and other components interacting with the Discord API.

- Module developed by `tnfAngel`#8642 & `Jakemate977`#5825.

## Usage

```js

const ErisComponents = require("eris-components");

const client = ErisComponents.Client(ErisClient, token);

```

## Example

```js

const ErisComponents = require("eris-components");

const Eris = require('eris');

const token = 'Bot XXXX.XXXXXX.XXXX'; // Discord Bot token.

const bot = new Eris(token); // ErisClient.

const client = ErisComponents.Client(bot, token); // The ErisClient with ErisComponents methods.

// Send button example:

const Button = new ErisComponents.Button()
    .setLabel('Click me!')
    .setID('button_id')
    .setStyle('blurple');

client.sendComponents('channelid', Button, 'Hi! this is your first button.'); // Send a message with a button to a Discord channel.

```

## Documentation

### Eris Components Classes

- Client | `.Client(ErisClient, Token)` -> ErisComponentsClient

Adds Eris Components Methods to the ErisClient provided. The token must be the same used in the Eris Client.

```js

new ErisComponents.Client(ErisClient, 'Bot TOKEN');

```

- ActionRow | `.ActionRow()` -> ErisActionRow

Creates an row for send multiple components in a message.

```js

new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3]) // This method will add multiple components in the Action Row.
    .addComponent(Button4) // This method will add one component in the Action Row.
    .setComponents([Button5]); // This method will set an new array of components in the Action Row, put an empty array to remove all components.

```

- Button | `.Button()` -> ErisButton

Creates an button object for send in a message or add in an action row.

```js

new ErisComponents.Button()
    .setStyle('blurple') // Sets a color for the button. Available styles: "blurple" | "grey" | "gray" | "green" | "red" | "url" | "primary" | "secondary" | "success" | "danger" | "link"
    .setLabel('Text here') // Sets a label for the button.
    .setDisabled(false) // Sets the disabled state of the button. (Default true if called)
    .setID('button_id') // Sets the custom_id of the button. Util to recognize different components.
    .setEmoji('846514899503939605 (emoji id) or 🤗 (raw emoji)', false) // Sets the emoji of the button. The first argument is the emoji and the second argument is if the emoji is animated or not.
    .setEmoji({ id: '846514899503939605', name: 'hi'}, false); // This is valid too. But if you want to put raw emoji the id must be null and name the emoji.

```

- ComponentsCollector | `.ComponentsCollector(ErisClient, filter, channel, options?, thisArg?)` -> ErisComponentsCollector

Creates an components collector in a channel.

```js

/**
 * @param {ErisClient} ErisClient (Required) Eris Bot Client.
 * @param {function} filter (Required) The filter on the colector. Should be an arrow function or an function if you want thisArg. 
 * @param {string} channel (Required) The ID of the channel in which the collector will work. 
 * @param {object} options (Optional) Object that contains the options for the collector. 
 * @param {number} options.time (Optional) The time in milliseconds in which the collector will stop. 
 * @param {thisArg} thisArg (Optional) The this argument passed to the filter.
 * @returns collector
*/

const filter = ((body) => body.data.custom_id == 'button_id'); // Example filter.
const channel = message.channel.id; // Channel ID.
const options = { time: 10000 }; // Time in milliseconds in which the collector will stop. 
const thisArg = null; // Null because the filter is an arrow function.

let collector = new ErisComponents.ComponentsCollector(ErisClient, filter, channel, options, thisArg);

collector.on('collect', async (resBody) => { // On collect a component interaction that meets the filter. ResBody is the response body of the component interaction.
    console.log('Collected.');
    await client.replyInteraction(resBody, [], 'hi'); // Example reply of a interaction.
})

collector.on('end', (collected) => { // When the collector stops. It can be by time or by call of the stop() method. Collected is an array of all collected resBodys.
    console.log('Collector end. Collected:', collected);
})

console.log(collector.collected) // This will print an array of all components interactions collected.

console.log(collector.ended) // This will print true or false depending on whether the collector ended or not.


```

- SelectMenu | `.Menu()` -> ErisSelectMenu

Creates an new Select Menu object for send.

```js

new ErisComponents.Menu()
    .setPlaceholder('Select a option') // This will set a placeholder for the Select Menu.
    .setID('YOUR_ID')  // Sets the custom_id of the Select Menu. Util to recognize different components.
    .setMaxValues(1) // Sets the max options values of the Select Menu.
    .setMinValues(1) // Sets the min options values of the Select Menu.
    .setDisabled(false) // Sets the disabled state of the Select Menu. (Default true if called)
    .addOptions([option1, option2]) // This method will add multiple options in the Select Menu.
    .addOption(option3)  // This method will add one option in the Select Menu.
    .setOptions([option4])  // This method will set an new array of components in the Select Menu, put an empty array to remove all components.

```

- MenuOption | `.MenuOption()` -> ErisMenuOption

Creates an new Select Menu Option for put in options of a Menu class.

```js

new ErisComponents.MenuOption()
    .setLabel('Text here') // Sets a label for the option.
    .setValue('value_here') // Sets the value of the option. Util to recognize different options.
    .setDescription('Description of the option') // Sets the description of the option.
    .setDefault(false) // Sets the default state of the option. (Default true if called)
    .setEmoji('846514899503939605 (emoji id) or 🤗 (raw emoji)', false) // Sets the emoji of the button. The first argument is the emoji and the second argument is if the emoji is animated or not.
    .setEmoji({ id: '846514899503939605', name: 'hi'}, false); // This is valid too. But if you want to put raw emoji the id must be null and name the emoji.

```

### Eris Components Client Events

- ClickButton | `.on('clickButton', (resBody) => resBody)` -> resBody

Event emitted when any button sended by the client is clicked.

```js

client.on('clickButton', (resBody) => {
    console.log(resBody)
})

```

- SubmitMenu | `.on('submitMenu', (resBody) => resBody)` -> resBody

Event emitted when any menu sended by the client is submited.

```js

client.on('submitMenu', (resBody) => {
    console.log(resBody)
})

```

- ComponentInteract | `.on('componentInteract', (resBody) => resBody)` -> resBody

Event emitted when any interaction with component is performed.

```js

client.on('componentInteract', (resBody) => {
    console.log(resBody)
})

```

### Eris Components Client Methods

- SendComponents | `.sendComponents(channel, components, content)` -> DiscordAPIRequest

Sends components to a specific channel.

```js

// Send single component.

client.sendComponents('channel id', button, 'Hi')



// Send multiple Buttons.

let actionRow = new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3])

client.sendComponents('channel id', actionRow, 'Hi')

// or

client.sendComponents('channel id', [button1, button2], 'Hi')



// Send multiple rows.

let actionRow = new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3])

let actionRow2 = new ErisComponents.ActionRow()
    .addComponents([Button4, Button5, Button6])

client.sendComponents('channel id', [actionRow, actionRow2], 'Hi')



// Send multiple SelectMenus.

let menuRow1 = new ErisComponents.ActionRow()# Eris Components

## Summary

- Eris Components allows you to use Discord buttons and other components interacting with the Discord API.

- Module developed by `tnfAngel`#8642 & `Jakemate977`#5825.

## Usage

```js

const ErisComponents = require('eris-components');

const client = ErisComponents.Client(ErisClient);

```

## Example

```js

const ErisComponents = require('eris-components');

const Eris = require('eris');

const bot = new Eris('Bot XXXX.XXXXXX.XXXX'); // ErisClient instance.

const client = ErisComponents.Client(bot); // The ErisClient with ErisComponents methods.

// Send button example:

const Button = new ErisComponents.Button()
    .setLabel('Click me!')
    .setID('Component ID')
    .setStyle('blurple');

client.sendComponents('Channel ID', Button, 'Hi! this is your first button.'); // Send a message with a button to a Discord channel.

```

## Documentation

### Eris Components Classes

- Client | `.Client(ErisClient)` -> ErisComponentsClient

Adds Eris Components Methods to the ErisClient provided. Returns the client instance with the new methods.

```js

new ErisComponents.Client(ErisClient);

```

- ActionRow | `.ActionRow()` -> ErisActionRow

Creates an row for send multiple components in a message.

```js

new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3]) // This method will add multiple components in the Action Row.
    .addComponent(Button4) // This method will add one component in the Action Row.
    .setComponents([Button5]); // This method will set an new array of components in the Action Row, put an empty array to remove all components.

```

- Button | `.Button()` -> ErisButton

Creates an button object for send in a message or add in an action row.

```js

new ErisComponents.Button()
    .setStyle('blurple') // Sets a color for the button. Available styles: 'blurple' | 'grey' | 'gray' | 'green' | 'red' | 'url' | 'primary' | 'secondary' | 'success' | 'danger' | 'link'
    .setLabel('Text here') // Sets a label for the button.
    .setDisabled(false) // Sets the disabled state of the button. (Default true if called)
    .setID('Component ID') // Sets the custom_id of the button. Util to recognize different components.
    .setEmoji('846514899503939605 (emoji id) or 🤗 (raw emoji)', false) // Sets the emoji of the button. The first argument is the emoji and the second argument is if the emoji is animated or not.
    .setEmoji({ id: '846514899503939605', name: 'Hi'}, false); // This is valid too. But if you want to put raw emoji the id must be null and name the emoji.

```

- ComponentsCollector | `.ComponentsCollector(ErisClient, filter, channel, options?, thisArg?)` -> ErisComponentsCollector

Creates an components collector in a channel.

```js

/**
 * @param {ErisClient} ErisClient (Required) Eris Bot Client.
 * @param {function} filter (Required) The filter on the colector. Should be an arrow function or an function if you want thisArg. 
 * @param {string} channel (Required) The ID of the channel in which the collector will work. 
 * @param {object} options (Optional) Object that contains the options for the collector. 
 * @param {number} options.time (Optional) The time in milliseconds in which the collector will stop. 
 * @param {thisArg} thisArg (Optional) The this argument passed to the filter.
 * @returns collector
*/

const filter = ((body) => body.data.custom_id == 'Component ID'); // Example filter.
const channel = message.channel.id; // Channel ID.
const options = { time: 10000 }; // Time in milliseconds in which the collector will stop. 
const thisArg = null; // Null because the filter is an arrow function.

let collector = new ErisComponents.ComponentsCollector(ErisClient, filter, channel, options, thisArg);

collector.on('collect', async (resBody) => { // On collect a component interaction that meets the filter. ResBody is the response body of the component interaction.
    console.log('Collected.');
    await client.replyInteraction(resBody, [], 'Hi'); // Example reply of a interaction.
});

collector.on('end', (collected) => { // When the collector stops. It can be by time or by call of the stop() method. Collected is an array of all collected resBodys.
    console.log('Collector end. Collected:', collected);
});

console.log(collector.collected); // This will print an array of all components interactions collected.

console.log(collector.ended); // This will print true or false depending on whether the collector ended or not.


```

- SelectMenu | `.Menu()` -> ErisSelectMenu

Creates an new Select Menu object for send.

```js

new ErisComponents.Menu()
    .setPlaceholder('Select a option') // This will set a placeholder for the Select Menu.
    .setID('your_id')  // Sets the custom_id of the Select Menu. Util to recognize different components.
    .setMaxValues(1) // Sets the max options values of the Select Menu.
    .setMinValues(1) // Sets the min options values of the Select Menu.
    .setDisabled(false) // Sets the disabled state of the Select Menu. (Default true if called)
    .addOptions([option1, option2]) // This method will add multiple options in the Select Menu.
    .addOption(option3)  // This method will add one option in the Select Menu.
    .setOptions([option4]);  // This method will set an new array of components in the Select Menu, put an empty array to remove all components.

```

- MenuOption | `.MenuOption()` -> ErisMenuOption

Creates an new Select Menu Option for put in options of a Menu class.

```js

new ErisComponents.MenuOption()
    .setLabel('Text here') // Sets a label for the option.
    .setValue('value_here') // Sets the value of the option. Util to recognize different options.
    .setDescription('Description of the option') // Sets the description of the option.
    .setDefault(false) // Sets the default state of the option. (Default true if called)
    .setEmoji('846514899503939605 (emoji id) or 🤗 (raw emoji)', false) // Sets the emoji of the button. The first argument is the emoji and the second argument is if the emoji is animated or not.
    .setEmoji({ id: '846514899503939605', name: 'Hi'}, false); // This is valid too. But if you want to put raw emoji the id must be null and name the emoji.

```

### Eris Components Client Events

- InteractionCreate | `.on('interactionCreate', (resBody) => resBody)` -> resBody

Event emitted when any interaction is created.

```js

client.on('interactionCreate', (resBody) => {
    console.log(resBody);
    client.replyInteraction(resBody, button, 'Hi');
});

```

- SlashCommandInteract | `.on('slashCommandInteract', (resBody) => resBody)` -> resBody

Event emitted when any slash command is triggered.

```js

client.on('slashCommandInteract', (resBody) => {
    console.log(resBody);
    client.replyInteraction(resBody, button, 'Hi');
});

```

- ClickButton | `.on('clickButton', (resBody) => resBody)` -> resBody

Event emitted when any button sended by the client is clicked.

```js

client.on('clickButton', (resBody) => {
    console.log(resBody);
    client.replyInteraction(resBody, button, 'Hi');
});

```

- SubmitMenu | `.on('submitMenu', (resBody) => resBody)` -> resBody

Event emitted when any menu sended by the client is submited.

```js

client.on('submitMenu', (resBody) => {
    console.log(resBody);
    client.replyInteraction(resBody, button, 'Hi');
});

```

- ComponentInteract | `.on('componentInteract', (resBody) => resBody)` -> resBody

Event emitted when any interaction with component is performed.

```js

client.on('componentInteract', (resBody) => {
    console.log(resBody);
    client.replyInteraction(resBody, button, 'Hi');
});

```

### Eris Components Client Methods

- SendComponents | `.sendComponents(channel, components, content, file)` -> DiscordAPIRequest

Sends components to a specific channel.

```js

// Send single component.

client.sendComponents('Channel ID', button, 'Hi');



// Send multiple Buttons.

let actionRow = new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3]);

client.sendComponents('Channel ID', actionRow, 'Hi');

// Or

client.sendComponents('Channel ID', [button1, button2], 'Hi');



// Send multiple rows.

let actionRow = new ErisComponents.ActionRow()
    .addComponents([Button1, Button2, Button3]);

let actionRow2 = new ErisComponents.ActionRow()
    .addComponents([Button4, Button5, Button6]);

client.sendComponents('Channel ID', [actionRow, actionRow2], 'Hi');



// Send multiple SelectMenus.

let menuRow1 = new ErisComponents.ActionRow()
    .addComponent(menu1);

let menuRow2 = new ErisComponents.ActionRow()
    .addComponent(menu2);

client.sendComponents('Channel ID', [menuRow1, menuRow2], 'Hi');



// Send components with embed (Discord deprecated)

client.sendComponents('Channel ID', button, { content: 'Components with embed', embed: { title: 'Hi' } });



// Send components with multiple embeds.

client.sendComponents('Channel ID', button, { content: 'Components with embed', embeds: [{ title: 'Hi' }, { title: 'Just another embed' }] });

// You can use all the message options available from the Discord API. See https://discord.com/developers/docs/resources/channel#create-message-jsonform-params

```

- EditInteraction | `.editInteraction(resBody, components, content, file)` -> DiscordAPIRequest

Edits the original message when an interaction is emitted. All options of client.sendComponents are available.

```js

client.on('clickButton', (resBody) => {

    client.editInteraction(resBody, button, 'Hi, this message is edited.'); // Edit the message when a button is clicked.

})

```

- ReplyInteraction | `.replyInteraction(resBody, components, content, options, type, file)` -> DiscordAPIRequest

Sends a new message when an interaction is emitted. All options of client.sendComponents are available.

```js

client.on('clickButton', (resBody) => {

    // Send normal message.

    client.replyInteraction(resBody, [], 'Hi, this message has no buttons.') // Send a message when a button is clicked with no components.

    // Send normal message with button.

    client.replyInteraction(resBody, button, 'Hi, this message has buttons.') // Send a message when a button is clicked with components.

    // Send ephemeral message with buttons.

    client.replyInteraction(resBody, [button1, button2], 'Hi, this message has buttons and only you can see this.', { ephemeral: true }) 

    // Send a message with custom type and embeds.

    client.replyInteraction(resBody, [button1, button2], { embeds: [embed1, embed2] }, { ephemeral: true }, 5) // Type 5. See https://discord.com/developers/docs/interactions/slash-commands#interaction-response-object-interaction-callback-type


})

```

- AwaitComponents | `.awaitComponents(filter, channel, options, thisArg)` -> resBody | error

Await Components on a channel.

```js

let filter = ((body) => body.data.custom_id == 'ID here.') // Example filter.
let channel = message.channel.id // Example channel.
let options = { 
    time: 10000 // Max time to wait for a interaction response.
}

let resBody = await client.awaitComponents(filter, channel, options).catch(err => console.log('Out of time.'))

console.log(resBody)

```

- CreateComponentsCollector | `.createComponentsCollector(filter, channel, options, thisArg)` -> resBody

Call ComponentsCollector Class. See the ErisClient.ComponentsCollector class for full details.

```js

let filter = ((body) => body.data.custom_id == 'ID here.') // Example filter.
let channel = message.channel.id // Example channel.
let options = { 
    time: 10000 // Max time to wait for a interaction response.
}

let collector = client.createComponentsCollector(filter, channel, options)

collector.on('collect', async (resBody) => {
    console.log('Collected:', resBody);
})

collector.on('end', (collected) => {
    console.log('Collector end. Collected:', collected);
})

```

## Instalation

*If you have instalation issues, join our [support server](https://discord.gg/8RNAdpK).*

Linux & Windows

> Node Package Manager (NPM)

1. **Open:** CMD
2. **Put:** `npm i eris-components@latest`

> Yarn

1. **Open:** CMD
2. **Put:** `yarn add eris-components@latest`

Mac

> Node Package Manager (NPM)

1. **Install:** XCode
2. **Put:** `npm i eris-components@latest`

> Yarn

1. **Install:** XCode
2. **Put:** `yarn add eris-components@latest`

    .addComponent(menu1)

let menuRow2 = new ErisComponents.ActionRow()
    .addComponent(menu2)

client.sendComponents('channel id', [menuRow1, menuRow2], 'Hi')



// Send components with embed (Discord deprecated)

client.sendComponents('channel id', button, { content: 'components with embed', embed: { title: 'hi' } })



// Send components with multiple embeds.

client.sendComponents('channel id', button, { content: 'components with embed', embeds: [{ title: 'hi' }, { title: 'just another embed' }] })

// You can use all the message options available from the Discord API. See https://discord.com/developers/docs/resources/channel#create-message-jsonform-params

```

- EditInteraction | `.editInteraction(resBody, components, content)` -> DiscordAPIRequest

Edits the original message when an interaction is emitted. All options of client.sendComponents are available.

```js

client.on('clickButton', (resBody) => {

    client.editInteraction(resBody, button, 'hi, this message is edited.') // Edit the message when a button is clicked.

})

```

- ReplyInteraction | `.replyInteraction(resBody, components, content, options, type)` -> DiscordAPIRequest

Sends a new message when an interaction is emitted. All options of client.sendComponents are available.

```js

client.on('clickButton', (resBody) => {

    // Send normal message.

    client.replyInteraction(resBody, [], 'hi, this message has no buttons.') // Send a message when a button is clicked with no components.

    // Send normal message with button.

    client.replyInteraction(resBody, button, 'hi, this message has buttons.') // Send a message when a button is clicked with components.

    // Send ephemeral message with buttons.

    client.replyInteraction(resBody, [button1, button2], 'hi, this message has buttons and only you can see this.', { ephemeral: true }) 

    // Send a message with custom type and embeds

    client.replyInteraction(resBody, [button1, button2], { embeds: [embed1, embed2] }, { ephemeral: true }, 5) // Type 5. See https://discord.com/developers/docs/interactions/slash-commands#interaction-response-object-interaction-callback-type


})

```

- AwaitComponents | `.awaitComponents(filter, channel, options, thisArg)` -> resBody | error

Await Components on a channel.

```js

let filter = ((body) => body.data.custom_id == 'id_here') // Example filter.
let channel = message.channel.id // Example channel.
let options = { 
    time: 10000 // Max time to wait for a interaction response.
}

let resBody = await client.awaitComponents(filter, channel, options).catch(err => console.log('Out of time.'))

console.log(resBody)

```

- CreateComponentsCollector | `.createComponentsCollector(filter, channel, options, thisArg)` -> resBody

Call ComponentsCollector Class. See the ErisClient.ComponentsCollector class for full details.

```js

let filter = ((body) => body.data.custom_id == 'id_here') // Example filter.
let channel = message.channel.id // Example channel.
let options = { 
    time: 10000 // Max time to wait for a interaction response.
}

let collector = client.createComponentsCollector(filter, channel, options)

collector.on('collect', async (resBody) => {
    console.log('Collected:', resBody);
})

collector.on('end', (collected) => {
    console.log('Collector end. Collected:', collected);
})

```

## Instalation

*If you have instalation issues, join our [support server](https://discord.gg/8RNAdpK).*

Linux & Windows

> Node Package Manager (NPM)

1. **Open:** CMD
2. **Put:** `npm i eris-components@latest`

> Yarn

1. **Open:** CMD
2. **Put:** `yarn add eris-components@latest`

Mac

> Node Package Manager (NPM)

1. **Install:** XCode
2. **Put:** `npm i eris-components@latest`

> Yarn

1. **Open:** CMD
2. **Put:** `yarn add eris-components@latest`
