'use strict';
var __values =
	(this && this.__values) ||
	function (o) {
		var s = typeof Symbol === 'function' && Symbol.iterator,
			m = s && o[s],
			i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === 'number')
			return {
				next: function () {
					if (o && i >= o.length) o = void 0;
					return { value: o && o[i++], done: !o };
				},
			};
		throw new TypeError(
			s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
		);
	};
var __read =
	(this && this.__read) ||
	function (o, n) {
		var m = typeof Symbol === 'function' && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o),
			r,
			ar = [],
			e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
				ar.push(r.value);
		} catch (error) {
			e = { error: error };
		} finally {
			try {
				if (r && !r.done && (m = i['return'])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.createEnum =
	exports.MessageButtonStyles =
	exports.MessageComponentTypes =
		void 0;
var MessageComponentTypes;
(function (MessageComponentTypes) {
	MessageComponentTypes[(MessageComponentTypes['ACTION_ROW'] = 1)] =
		'ACTION_ROW';
	MessageComponentTypes[(MessageComponentTypes['BUTTON'] = 2)] = 'BUTTON';
	MessageComponentTypes[(MessageComponentTypes['SELECT_MENU'] = 3)] =
		'SELECT_MENU';
})(
	(MessageComponentTypes =
		exports.MessageComponentTypes || (exports.MessageComponentTypes = {}))
);
var MessageButtonStyles;
(function (MessageButtonStyles) {
	MessageButtonStyles[(MessageButtonStyles['blurple'] = 1)] = 'blurple';
	MessageButtonStyles[(MessageButtonStyles['grey'] = 2)] = 'grey';
	MessageButtonStyles[(MessageButtonStyles['gray'] = 2)] = 'gray';
	MessageButtonStyles[(MessageButtonStyles['green'] = 3)] = 'green';
	MessageButtonStyles[(MessageButtonStyles['red'] = 4)] = 'red';
	MessageButtonStyles[(MessageButtonStyles['url'] = 5)] = 'url';
	// aliases
	MessageButtonStyles[(MessageButtonStyles['PRIMARY'] = 1)] = 'PRIMARY';
	MessageButtonStyles[(MessageButtonStyles['SECONDARY'] = 2)] = 'SECONDARY';
	MessageButtonStyles[(MessageButtonStyles['SUCCESS'] = 3)] = 'SUCCESS';
	MessageButtonStyles[(MessageButtonStyles['DESTRUCTIVE'] = 4)] = 'DESTRUCTIVE';
	MessageButtonStyles[(MessageButtonStyles['LINK'] = 5)] = 'LINK';
})(
	(MessageButtonStyles =
		exports.MessageButtonStyles || (exports.MessageButtonStyles = {}))
);
function createEnum(keys) {
	var e_1, _a;
	var obj = {};
	var entries = keys.entries();
	try {
		for (
			var entries_1 = __values(entries), entries_1_1 = entries_1.next();
			!entries_1_1.done;
			entries_1_1 = entries_1.next()
		) {
			var _b = __read(entries_1_1.value, 2),
				index = _b[0],
				key = _b[1];
			obj[key] = index;
			obj[index] = key;
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return))
				_a.call(entries_1);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	return obj;
}
exports.createEnum = createEnum;
//# sourceMappingURL=Constants.js.map
