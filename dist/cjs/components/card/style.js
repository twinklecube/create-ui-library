'use strict';

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var styled = require('styled-components');

var _templateObject, _templateObject2;
// import customFontWoff from '../../assets/fonts/big-party-blue.woff';
// import customFontWoff2 from '../../assets/fonts/big-party-blue.woff2';
// import img from '../../assets/images/olympia-park-munich-min.jpg';

var CardWrapper = styled.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    width: 300px;\n    height: 200px;\n    border-radius: 8px;\n    overflow: hidden;\n    position: relative;\n"])));
var CardTitle = styled.div(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    \n\n    position: absolute;\n    bottom: 15px;\n    left: 15px;\n    font-size: 48px;\n    color: white; \n    font-family: 'Custom Font';\n    \n"])));

exports.CardTitle = CardTitle;
exports.CardWrapper = CardWrapper;
