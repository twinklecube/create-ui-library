'use strict';

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var styled = require('styled-components');
var bigPartyBlue = require('../../assets/fonts/big-party-blue.woff2.js');

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var ImageWrapper = styled.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    width: 100%;\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n"])));
var Image = styled.img(_templateObject2 || (_templateObject2 = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    width: auto;\n    height: 100%;\n"])));
var CityName = styled.div(_templateObject3 || (_templateObject3 = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    @font-face {\n        font-family: 'custom font';\n        src: url(", ");\n    }\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    font-family: 'custom font';\n    font-size: 60px;\n"])), bigPartyBlue);
var ChipWrapper = styled.div(_templateObject4 || (_templateObject4 = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background: cadetblue;\n"])));

exports.ChipWrapper = ChipWrapper;
exports.CityName = CityName;
exports.Image = Image;
exports.ImageWrapper = ImageWrapper;
