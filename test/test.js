/* eslint-disable @typescript-eslint/no-var-requires */
const ErisComponents = require('../src/index.js');

const Eris = require('eris');

const token = 'ODY0NTg5NjcyNjM3MTM2ODk2.YO3p4Q.pd2OcLvl2zeB13_pztQxDnBm31o';

const ErisClient = new Eris(token);

const client = ErisComponents.Client(ErisClient, token);

// Enviar Botones

let button = new ErisComponents.Button()
    .setLabel('This is a button!')
    .setID('myid')
    .setStyle('blurple');

let button2 = new ErisComponents.Button()
    .setLabel('This is a button 2!')
    .setID('myid2')
    .setStyle('blurple')
    .setEmoji('846514899503939605');

let button3 = new ErisComponents.Button()
    .setLabel('hol')
    .setID('myid')
    .setStyle('secondary');

let button4 = new ErisComponents.Button()
    .setLabel('murete')
    .setID('myid2')
    .setStyle('danger')
    .setEmoji('846514899503939605');

let option = new ErisComponents.MenuOption()
    .setLabel('holi')
    .setEmoji('🍔')
    .setValue('menuid')
    .setDescription('bale')
    .setDefault(false);

let option2 = new ErisComponents.MenuOption()
    .setLabel('gupi')
    .setEmoji('846514899503939605')
    .setValue('sii')
    .setDescription('oli')
    .setDefault();

let menu = new ErisComponents.Menu()
    .setPlaceholder('murete')
    .setID('holi')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions([option, option2]);

let menu2 = new ErisComponents.Menu()
    .setPlaceholder('murete')
    .setID('holiii')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions([option, option2]);

let row = new ErisComponents.ActionRow()
    .addComponent(button)
    .addComponent(button2);

let mrow = new ErisComponents.ActionRow()
    .addComponent(menu)

let mrow2 = new ErisComponents.ActionRow()
    .addComponent(menu2)

let row2 = new ErisComponents.ActionRow().addComponents([button3, button4]);

//console.log(JSON.stringify(row, null, 2));

client.connect()

client.on('messageCreate', async (message) => {
    if (message.content == '.sasota') {
        await client.sendComponents(message.channel.id, [mrow, mrow2, row], { content: 'components with embed', embeds: [{ title: 'hi' }, { title: 'just another embed' }] });

        await client.sendComponents(
            message.channel.id,
            [row, row2, row2, row2, row2],
            'sas'
        );

        let collector = client
            .createComponentsCollector(
                (body) => body.data.custom_id == 'holi',
                message.channel.id,
                { time: 10000 }
            )
        
        console.log(collector.ended)

        collector.on('collect', async (resBody) => {
            console.log('Colector collectando')
            await client.replyInteraction(resBody, button3, 'hol colectado');
            console.log(collector.collected)
        })

        collector.on('end', (c) => {
            console.log('Colector acabado')
        })
        
    }
});

client.on('clickButton', async () => {
    console.log('Boton clikado');
});

client.on('submitMenu', async () => {
    console.log('Menu enviado');
});

// Obtener respuesta de los botones al hacer click y editar el mensaje por ejemplo

/*
client.on('clickButton', async resBody => {
    console.log(resBody)
    let body = {
        type: 7,
        data: {
            content: `Hola ${resBody.member.user.username} gracias por hacer click en el boton con id ${resBody.data.custom_id} en el mensaje con id ${resBody.message.id}`,
            components: [
                {
                    type: 1,
                    components: [button4]
                }
            ]
        }
    }
    await client.request(body, resBody)
})*/

/*
client.on('clickButton', async resBody => {
    if (resBody.data.custom_id == "myid") {
        await client.editInteraction(resBody, button3, 'hol boton myid')
    } else if (resBody.data.custom_id == "myid2") {
        await client.editInteraction(resBody, [], { content: 'hola si buenos dias mensaje editado', embeds: [{ title: 'sas' }, { title: 'sas', description: 'siiiiiiiii' }] })
    }
    
})*/

/*
client.on('clickButton', async resBody => {
    if (resBody.data.custom_id == "myid") {
        await client.replyInteraction(resBody, button3, 'hol boton myid')
    } else if (resBody.data.custom_id == "myid2") {
        await client.replyInteraction(resBody, [], { content: 'hola si buenos dias mensaje editado', embeds: [{ title: 'sas' }, { title: 'sas', description: 'siiiiiiiii' }] }, { ephemeral: true})
    }
    
})

*/
/*
test('que se muestre un menu valido', () => {
    expect(JSON.parse(JSON.stringify(menu.toJSON(), null, 3))).toBe({
        type: 3,
        placeholder: 'murete',
        custom_id: 'holi',
        max_values: 1,
        min_values: 1,
        options: [
            {
                label: 'holi',
                value: 'menuid',
                emoji: { id: null, name: '🍔' },
                description: 'bale',
                default: false,
            }, //a ver, mejor pasemolo a ts mas bien
            {
                label: 'gupi',
                value: 'sii',
                emoji: { id: '846514899503939605', name: null },
                description: 'oli',
                default: true,
            },
        ],
    }); // lo unico malo es el nombre que sale de la clase perro eso es normal hol//dice que hay que poner toJson
    // await client.sendComponents(message.channel.id, menu, { embed:{o embed con contenido}, content: 'contenido', y todas las opciones de la api de discord si que se pueden hacer enviando un mensaje
}); // yo creo que esta bien
//hola pero el intellisense
*/
