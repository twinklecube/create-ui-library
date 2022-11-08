import React from 'react';
import { CardWrapper, CardTitle } from './style.js';
import img from '../../assets/images/olympia-park-munich-min.jpg.js';

var Card = function Card() {
  return /*#__PURE__*/React.createElement(CardWrapper, null, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "olympia park - munich"
  }), /*#__PURE__*/React.createElement(CardTitle, null, "Olympia park, Munich"));
};

export { Card };
