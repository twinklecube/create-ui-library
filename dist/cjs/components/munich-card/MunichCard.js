'use strict';

var React = require('react');
var style = require('./style.js');
var Chip = require('../chip/Chip.js');
var types = require('../chip/types.js');
var olympiaParkMunichMin = require('../../assets/images/olympia-park-munich-min.jpg.js');
var Card = require('../card/Card.js');

var MunichCard = function MunichCard() {
  return /*#__PURE__*/React.createElement(Card.Card, null, /*#__PURE__*/React.createElement(style.ImageWrapper, null, /*#__PURE__*/React.createElement(style.Image, {
    src: olympiaParkMunichMin
  }), /*#__PURE__*/React.createElement(style.CityName, null, "Munich")), /*#__PURE__*/React.createElement(style.ChipWrapper, null, /*#__PURE__*/React.createElement(Chip.Chip, {
    type: types.ChipType.ICON
  }, "select"), /*#__PURE__*/React.createElement(Chip.Chip, null, "pin")));
};

exports.MunichCard = MunichCard;
