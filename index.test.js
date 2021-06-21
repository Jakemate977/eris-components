const discord = require('discord.js');
const client = new discord.Client({ intents: discord.Intents.ALL });
const disbut = require('./src/index');
disbut(client);
const Util = require('./src/v12/Util');

//console.log(disbut)
client.on('ready', () => {
	console.log(client.user.tag);
	//client.guilds.cache.get('728503987866828870').commands.create({ name: 'hi', 'description': 'HI' });
});
//client.on('debug', console.log);

client.on('message', async (message) => {
	//if (message.author.bot) return;
	if (message.content.startsWith('o')) {
		//let e = message.guild.emojis.cache.get('729208650131963946');

		const embed = new discord.MessageEmbed().setDescription(`op`);

		let btn = new disbut.MessageButton()
			.setLabel(' ')
			.setStyle('gray')
			.setID('testid');

		let group1 = new disbut.MessageActionRow()
			.addComponent(btn)
			.addComponent(btn);

		let group2 = new disbut.MessageActionRow()
			.addComponent(btn)
			.addComponent(btn);

		let m = await message.channel.send(embed);

		/*let collector = m.createButtonCollector(b => b, { time: 10000 });

        collector.on('collect', b => console.log(b.discordID));

        collector.on('end', b => console.log('end'))*/

		//await wait(1000);

		m.edit({ embed: embed });

		/*m.edit('sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', {
            tts: true,
            split: true
        })*/
	} else if (message.content.startsWith('s')) {
		message.channel.send(
			'sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
			{
				tts: true,
				split: true,
			}
		);
	}
});

client.on('clickButton', async (button) => {
	await button.clicker.fetch();
	console.log(button.clicker.user.tag);

	if (button.clicker.user.id === '456361646273593345') {
		button.channel.send(`SPAMMER SMOTAN BUG ${button.clicker.member}`, {
			ephemeral: true,
		});
	}

	//await button.defer();
	const embed = new discord.MessageEmbed().setDescription(
		`Clicked by ${button.clicker.user.tag}`
	);

	let btn = new disbut.MessageButton()
		.setEmoji('785062885952192512')
		.setID('d')
		.setStyle('blurple');

	let row = new disbut.MessageActionRow().addComponent(btn);

	await button.message.edit({ embed: embed });

	let s = await button.think();
	await wait(1000);
	await s.edit('hi', null);
});

/*client.on('interaction', async (interaction) => {
    let btn = new disbut.MessageButton()
        .setEmoji('785062885952192512')
        .setID('d')
        .setStyle('blurple');

    interaction.user.send('GG', btn);

    interaction.reply('hi');
    await wait(1000);
    interaction.editReply('hi', btn);
})*/

client.login('');

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
