'use strict';

var React = require('react');
var style_module = require('./style.module.css.js');

var Bullet = function Bullet() {
  return /*#__PURE__*/React.createElement("div", {
    className: style_module["bullet-wrapper"]
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay-wrapper"
  }, "ss"));
};

exports.Bullet = Bullet;
