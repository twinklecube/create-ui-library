'use strict';

var React = require('react');
var types = require('./types.js');
var style = require('./style.js');
var Icon = require('../icon/Icon.js');

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? types.ChipType.DEFAULT : _ref$type,
    error = _ref.error,
    active = _ref.active;
  return /*#__PURE__*/React.createElement(style.ChipWrapper, {
    error: error,
    active: active,
    type: type
  }, children, type === types.ChipType.ICON && /*#__PURE__*/React.createElement(Icon.Icon, null));
};

exports.Chip = Chip;
