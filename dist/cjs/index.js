'use strict';

var Chip = require('./components/chip/Chip.js');
var types = require('./components/chip/types.js');



exports.Chip = Chip.Chip;
Object.defineProperty(exports, 'ChipType', {
	enumerable: true,
	get: function () { return types.ChipType; }
});
