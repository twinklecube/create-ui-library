'use strict';

var React = require('react');
var style = require('./style.js');

var Card = function Card(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(style.CardWrapper, null, children);
};

exports.Card = Card;
