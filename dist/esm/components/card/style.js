import { taggedTemplateLiteral as _taggedTemplateLiteral } from '../../_virtual/_rollupPluginBabelHelpers.js';
import styled from 'styled-components';
import customFontWoff from '../../assets/fonts/big-party-blue.woff.js';
import customFontWoff2 from '../../assets/fonts/big-party-blue.woff2.js';
import img from '../../assets/images/olympia-park-munich-min.jpg.js';

var _templateObject, _templateObject2;
var CardWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 300px;\n    height: 200px;\n    border-radius: 8px;\n    overflow: hidden;\n    position: relative;\n"])));
var CardTitle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @font-face {\n      font-family: 'Custom Font';\n      src: url(", ") format('woff2'),\n           url(", ") format('woff');\n    }\n\n    position: absolute;\n    bottom: 15px;\n    left: 15px;\n    font-size: 48px;\n    color: white; \n    font-family: 'Custom Font';\n    background-image: url(", ");\n"])), customFontWoff2, customFontWoff, img);

export { CardTitle, CardWrapper };
