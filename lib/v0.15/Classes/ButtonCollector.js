'use strict';
var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b)
						if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== 'function' && b !== null)
				throw new TypeError(
					'Class extends value ' + String(b) + ' is not a constructor or null'
				);
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
Object.defineProperty(exports, '__esModule', { value: true });
var ButtonCollector = /** @class */ (function (_super) {
	__extends(ButtonCollector, _super);
	function ButtonCollector(data, filter, options) {
		if (options === void 0) {
			options = {};
		}
		var _this = _super.call(this, data.client, filter, options) || this;
		_this.message = data;
		_this.users = new Map();
		_this.total = 0;
		_this.empty = _this.empty.bind(_this);
		_this._handleChannelDeletion = _this._handleChannelDeletion.bind(_this);
		_this._handleGuildDeletion = _this._handleGuildDeletion.bind(_this);
		_this._handleMessageDeletion = _this._handleMessageDeletion.bind(_this);
		_this.client.incrementMaxListeners();
		_this.client.on('clickButton', _this.handleCollect);
		_this.client.on(Events.MESSAGE_DELETE, _this._handleMessageDeletion);
		_this.client.on(Events.CHANNEL_DELETE, _this._handleChannelDeletion);
		_this.client.on(Events.GUILD_DELETE, _this._handleGuildDeletion);
		_this.once('end', function () {
			_this.client.removeListener('clickButton', _this.handleCollect);
			_this.client.removeListener(
				Events.MESSAGE_DELETE,
				_this._handleMessageDeletion
			);
			_this.client.removeListener(
				Events.CHANNEL_DELETE,
				_this._handleChannelDeletion
			);
			_this.client.removeListener(
				Events.GUILD_DELETE,
				_this._handleGuildDeletion
			);
			_this.client.decrementMaxListeners();
		});
		_this.on('collect', function (button) {
			return __awaiter(_this, void 0, void 0, function () {
				return __generator(this, function (_a) {
					switch (_a.label) {
						case 0:
							this.total++;
							if (!!button.clicker.user) return [3 /*break*/, 2];
							return [4 /*yield*/, button.clicker.fetch()];
						case 1:
							_a.sent();
							_a.label = 2;
						case 2:
							this.users.set(button.clicker.user.id, button.clicker.user);
							return [2 /*return*/];
					}
				});
			});
		});
		return _this;
	}
	ButtonCollector.prototype.collect = function (button) {
		if (this.message) {
			return button.message.id === this.message.id ? button.discordID : null;
		}
		return button.channel.id === this.channel.id ? button.discordID : null;
	};
	ButtonCollector.prototype.dispose = function (button) {
		if (this.message) {
			return button.message.id === this.message.id ? button.discordID : null;
		}
		return button.channel.id === this.channel.id ? button.discordID : null;
	};
	ButtonCollector.prototype.empty = function () {
		this.total = 0;
		this.collected.clear();
		this.users.clear();
		this.checkEnd();
	};
	ButtonCollector.prototype.endReason = function () {
		if (this.options.max && this.total >= this.options.max) return 'limit';
		if (
			this.options.maxButtons &&
			this.collected.size >= this.options.maxButtons
		)
			return 'buttonLimit';
		if (this.options.maxUsers && this.users.size >= this.options.maxUsers)
			return 'userLimit';
		return null;
	};
	ButtonCollector.prototype._handleMessageDeletion = function (message) {
		if (message.id === this.message.id) {
			this.stop('messageDelete');
		}
	};
	ButtonCollector.prototype._handleChannelDeletion = function (channel) {
		if (channel.id === this.message.channel.id) {
			this.stop('channelDelete');
		}
	};
	ButtonCollector.prototype._handleGuildDeletion = function (guild) {
		if (this.message.guild && guild.id === this.message.guild.id) {
			this.stop('guildDelete');
		}
	};
	return ButtonCollector;
})(Collector);
module.exports = ButtonCollector;
//# sourceMappingURL=ButtonCollector.js.map
