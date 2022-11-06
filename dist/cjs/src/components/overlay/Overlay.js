'use strict';

var React = require('react');
var style_module = require('./style.module.scss.js');
var style = require('./style.js');

var Overlay = function Overlay(_ref) {
  var active = _ref.active;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(style.OverlayHeader, {
    active: active
  }, "malin"), /*#__PURE__*/React.createElement("div", {
    className: style_module["overlay-wrapper"]
  }, "overlay", /*#__PURE__*/React.createElement("div", {
    className: "bullet-wrapper"
  }, "aa")));
};

exports.Overlay = Overlay;
