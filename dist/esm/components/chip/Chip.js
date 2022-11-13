import React from 'react';
import { ChipType } from './types.js';
import { ChipWrapper } from './style.js';
import { Icon } from '../icon/Icon.js';
import img from '../../assets/images/olympia-park-munich-min.jpg.js';

var Chip = function Chip(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? ChipType.DEFAULT : _ref$type,
    error = _ref.error,
    active = _ref.active;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChipWrapper, {
    error: error,
    active: active,
    type: type
  }, children, type === ChipType.ICON && /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("img", {
    src: img
  }), /*#__PURE__*/React.createElement("div", null, "malin"));
};

export { Chip };
