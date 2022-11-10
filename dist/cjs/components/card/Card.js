'use strict';

var React = require('react');
var style = require('./style.js');

// import img from '../../assets/images/olympia-park-munich-min.jpg';

var Card = function Card() {
  return /*#__PURE__*/React.createElement(style.CardWrapper, null, /*#__PURE__*/React.createElement(style.CardTitle, null, "Olympia park, Munich"));
};

exports.Card = Card;
