'use strict';

var React = require('react');
var style = require('./style.js');
var olympiaParkMunichMin = require('../../assets/images/olympia-park-munich-min.jpg.js');

var Card = function Card() {
  return /*#__PURE__*/React.createElement(style.CardWrapper, null, /*#__PURE__*/React.createElement("img", {
    src: olympiaParkMunichMin,
    alt: "olympia park - munich"
  }), /*#__PURE__*/React.createElement(style.CardTitle, null, "Olympia park, Munich"));
};

exports.Card = Card;
