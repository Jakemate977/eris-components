"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnum = void 0;
function createEnum(keys) {
    var obj = {};
    var entries = keys.entries();
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _a = entries_1[_i], index = _a[0], key = _a[1];
        if (key === null)
            continue;
        obj[key] = index;
        obj[index] = key;
    }
    return obj;
}
exports.createEnum = createEnum;
