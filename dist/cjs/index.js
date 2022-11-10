'use strict';

var Chip = require('./components/chip/Chip.js');
var types = require('./components/chip/types.js');
var Icon = require('./components/icon/Icon.js');



exports.Chip = Chip.Chip;
Object.defineProperty(exports, 'ChipType', {
	enumerable: true,
	get: function () { return types.ChipType; }
});
exports.Icon = Icon.Icon;
