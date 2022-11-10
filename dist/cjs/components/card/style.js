'use strict';

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var styled = require('styled-components');
var bigPartyBlue$1 = require('../../assets/fonts/big-party-blue.woff.js');
var bigPartyBlue = require('../../assets/fonts/big-party-blue.woff2.js');
var olympiaParkMunichMin = require('../../assets/images/olympia-park-munich-min.jpg.js');

var _templateObject, _templateObject2;
var CardWrapper = styled.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    width: 300px;\n    height: 200px;\n    border-radius: 8px;\n    overflow: hidden;\n    position: relative;\n"])));
var CardTitle = styled.div(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    @font-face {\n      font-family: 'Custom Font';\n      src: url(", ") format('woff2'),\n           url(", ") format('woff');\n    }\n\n    position: absolute;\n    bottom: 15px;\n    left: 15px;\n    font-size: 48px;\n    color: white; \n    font-family: 'Custom Font';\n    background-image: url(", ");\n"])), bigPartyBlue, bigPartyBlue$1, olympiaParkMunichMin);

exports.CardTitle = CardTitle;
exports.CardWrapper = CardWrapper;
