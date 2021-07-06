import Eris from 'eris';
/**
 * @param  {Eris} client
 */
export default function buttons(client: Eris.Client): void {
	if (parseFloat(Eris.VERSION) < 0.15)
		throw new Error('The Eris version must be v0.15 or higher.');

	if (!client || !(client instanceof Eris.Client))
		throw new Error(
			'INVALID_CLIENT_PROVIDED: The Eris client is not provided or is invalid.'
		);

	client.on('rawWS', async (packet: Record<string, unknown>) => {
		if (packet.t === 'INTERACTION_CREATE') {
			const data = packet.d;
			client.emit('interactionCreate', data);
		}
	});
}

module.exports.ErisButton = require(`./v0.15/Classes/ErisButton`);
module.exports.ActionRow = require('./Classes/ActionRow.ts');
module.exports.Collector = require('./Classes/ButtonCollector.ts');
