'use strict';

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var styled = require('styled-components');

var _templateObject;
var OverlayHeader = styled.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    background: green;\n    color: ", ";\n    font-size: 36px;\n    padding: 50px;\n    margin: 10px 0;\n"])), function (props) {
  return props.active ? 'white' : 'black';
});

exports.OverlayHeader = OverlayHeader;
