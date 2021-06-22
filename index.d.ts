import {
	Base,
	Bucket,
	Call,
	CategoryChannel,
	Channel,
	Client,
	Collection,
	Command,
	CommandClient,
	Constants,
	DiscordHTTPError,
	DiscordRESTError,
	ExtendedUser,
	GroupChannel,
	Guild,
	GuildChannel,
	GuildIntegration,
	GuildPreview,
	GuildTemplate,
	Invite,
	Member,
	NewsChannel,
	Message,
	Permission,
	PermissionOverwrite,
	PrivateChannel,
	Relationship,
	RequestHandler,
	Role,
	SequentialBucket,
	Shard,
	SharedStream,
	StoreChannel,
	TextChannel,
	UnavailableGuild,
	User,
} from 'eris';

import { awaitMessages } from 'eris-additions';

declare module 'eris-buttons' {
	export default function (client: Client);

	interface ExtendedMessageOptions extends Message {
		component?: MessageButton | MessageActionRow;
		components?: MessageActionRow[];
	}

	interface MessageButtonCollectorOptions extends awaitMessages {
		max?: number;
		maxButtons?: number;
		maxUsers?: number;
	}

	interface AwaitMessageButtonOptions extends MessageButtonCollectorOptions {
		errors?: string[];
	}
	//TODO: Añadir soporte para webhooks
	export class ExtendedMessage extends Message {
		_patch(data: any): Message;
		// @ts-ignore
		components: Array[MessageActionRow];
		createButtonCollector(
			filter: CollectorFilter<[MessageComponent]>,
			options?: AwaitMessageButtonOptions
		): ButtonCollector;
		awaitButtons(
			filter: CollectorFilter<[MessageComponent]>,
			options?: AwaitMessageButtonOptions
		): Promise<awaitMessages<Snowflake, MessageComponent>>;
	}

	export class ButtonCollector extends awaitMessages<
		Snowflake,
		MessageComponent
	> {
		constructor(
			message: Message,
			filter: CollectorFilter<[MessageComponent]>,
			options?: MessageButtonCollectorOptions
		);
		message: Message;
		users: awaitMessages<Snowflake, User>;
		total: number;
		empty(): void;
		endReason(): string | null;
		_handleChannelDeletion(channel: Channel): void;
		_handleGuildDeletion(guild: Guild): void;
		_handleMessageDeletion(message: Message): void;

		collect(button: MessageButton): Snowflake;
		dispose(button: MessageButton): Snowflake;
		on(
			event: 'collect' | 'dispose',
			listener: (interaction: MessageComponent) => Awaited<void>
		): this;
		on(
			event: 'end',
			listener: (
				collected: awaitMessages<Snowflake, MessageComponent>,
				reason: string
			) => Awaited<void>
		): this;
		on(event: string, listener: (...data: any[]) => Awaited<void>): this;

		once(
			event: 'collect' | 'dispose',
			listener: (interaction: MessageComponent) => Awaited<void>
		): this;
		once(
			event: 'end',
			listener: (
				collected: awaitMessages<Snowflake, MessageComponent>,
				reason: string
			) => Awaited<void>
		): this;
		once(event: string, listener: (...data: any[]) => Awaited<void>): this;
	}

	export class MessageComponent {
		constructor(client: Client, data: object);
		client: Client;
		id: Snowflake;
		version: any;
		token: string;
		discordID: Snowflake;
		applicationID: Snowflake;
		guild: Guild;
		channel: Channel;
		clicker: {
			user: User;
			member: GuildMember;
			fetch: () => Promise<boolean>;
		};
		message: Message;
		replied: boolean;
		deferred: boolean;
		defer(ephemeral?: boolean): Promise<void>;
		think(ephemeral?: boolean): Promise<void>;
		followUp(content: string, options?: {}): Promise<void>;
		get reply(): {
			send: (
				content: any,
				options:
					| ExtendedMessageOptions
					| MessageAdditions
					| { ephemeral: boolean }
			) => Promise<any>;
			fetch: () => Promise<any>;
			edit: (content: any, options?: {}) => Promise<any>;
			delete: () => Promise<void>;
		};
	}

	export class BaseMessageComponent {
		static create(data: object): MessageActionRow | MessageButton;
		constructor(data: object);
		type: any;
	}

	export class MessageActionRow extends BaseMessageComponent {
		constructor(data?: {});
		setup(data: object): MessageActionRow;
		component: MessageActionRow | MessageButton;
		components: any;
		addComponents(...components: any[]): MessageActionRow;
		addComponent(component: any): MessageActionRow;
		toJSON(): {
			// @ts-ignore
			components: Array[MessageButton];
			type: any;
		};
	}

	export class MessageButton extends BaseMessageComponent {
		constructor(data?: {});
		setup(data: object): MessageButton;
		style: string;
		label: string;
		disabled: boolean;
		emoji: string;
		url: string;
		custom_id: string;
		setStyle(style: MessageButtonStyles): MessageButton;
		setLabel(label: string): MessageButton;
		setDisabled(disabled?: boolean): MessageButton;
		setURL(url: string): MessageButton;
		setID(id: string): MessageButton;
		setEmoji(emoji: string): MessageButton;
		toJSON(): {
			type: any;
			style: string;
			label: string;
			emoji: object;
			disabled: boolean;
			url: string;
			custom_id: string;
		};
	}

	export interface ExtendedTextChannel extends TextChannel {
		send(
			content:
				| APIMessageContentResolvable
				| (ExtendedMessageOptions & { split?: false })
				| MessageAdditions
		): Promise<Message>;
	}

	export interface ExtendedPrivateChannel extends PrivateChannel {
		send(
			content:
				| APIMessageContentResolvable
				| (ExtendedMessageOptions & { split?: false })
				| MessageAdditions
		): Promise<Message>;
	}

	export interface ExtendedNewsChannel extends NewsChannel {
		send(
			content:
				| APIMessageContentResolvable
				| (ExtendedMessageOptions & { split?: false })
				| MessageAdditions
		): Promise<Message>;
	}

	enum MessageComponentTypes {
		ACTION_ROW,
		BUTTON,
		SELECT_MENU,
	}

	export enum MessageButtonStyles {
		blurple = 1,
		grey = 2,
		green = 3,
		red = 4,
		url = 5,
	}

	export enum MessageButtonStylesAliases {
		PRIMARY = 1,
		SECONDARY = 2,
		SUCCESS = 3,
		DESTRUCTIVE = 4,
		LINK = 5,
	}
}
