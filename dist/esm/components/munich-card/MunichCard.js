import React from 'react';
import { ImageWrapper, Image, CityName, ChipWrapper } from './style.js';
import { Chip } from '../chip/Chip.js';
import { ChipType } from '../chip/types.js';
import munichBg from '../../assets/images/olympia-park-munich-min.jpg.js';
import { Card } from '../card/Card.js';

var MunichCard = function MunichCard() {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(ImageWrapper, null, /*#__PURE__*/React.createElement(Image, {
    src: munichBg
  }), /*#__PURE__*/React.createElement(CityName, null, "Munich")), /*#__PURE__*/React.createElement(ChipWrapper, null, /*#__PURE__*/React.createElement(Chip, {
    type: ChipType.ICON
  }, "select"), /*#__PURE__*/React.createElement(Chip, null, "pin")));
};

export { MunichCard };
