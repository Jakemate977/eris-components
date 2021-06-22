module.exports = (client) => {
	const Eris = require('eris');
	const version = Eris.VERSION;

	if (version < 0.15) {
		throw new Error('The Eris version must be v0.15 or high');
	}

	if (!client || !(client instanceof Eris)) //
		throw new Error(
			'INVALID_CLIENT_PROVIDED: The Eris client is not provided or is invalid...'
		);

	client.on('rawWS', async (packet) => {
		if (packet.t === 'INTERACTION_CREATE') {
			const data = packet.d;
			client.emit('interactionCreate', data);
		}
	});
	return;
};


module.exports.ErisButton = require(`./v0.15/Classes/ErisButton`);
