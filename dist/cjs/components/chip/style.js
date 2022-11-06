'use strict';

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var styled = require('styled-components');

var _templateObject;
var ChipWrapper = styled.div(_templateObject || (_templateObject = _rollupPluginBabelHelpers.taggedTemplateLiteral(["\n    padding: 5px 15px;\n    display: inline-flex;\n    gap: 10px;\n    border-radius: 15px;\n    border: ", ";\n    cursor: pointer;\n"])), function (props) {
  return "2px solid ".concat(props.error ? '#E0144C' : props.active ? '#81C6E8' : '#333333');
});

exports.ChipWrapper = ChipWrapper;
