"use strict";var e,n,t=require("react"),r=require("styled-components");function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}exports.ChipType=void 0,(e=exports.ChipType||(exports.ChipType={})).DEFAULT="DEFAULT",e.ICON="ICON";var i,l=r.div(n||(n=c(["\n    padding: 5px 15px;\n    display: inline-flex;\n    gap: 10px;\n    border-radius: 15px;\n    border: ",";\n    cursor: pointer;\n    background-color: white;\n    font-family: Arial;\n"])),(function(e){return"1px solid ".concat(e.error?"#E0144C":e.active?"#81C6E8":"#C6950A")})),o=r.div(i||(i=c(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: grey;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n"]))),s=function(){return t.createElement(o,null,"i")};function a(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css","top"===t&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}var d="style-module_chip-module-css__lYz7E";a(".style-module_chip-module-css__lYz7E {\r\n    background-color: pink;\r\n}");var p="style-module_chip-module-less__eQkaE";a(".style-module_chip-module-less__eQkaE {\n  background-color: aqua;\n}\n");var u="chip-module_chip-module-scss__kBI7H";a(".chip-module_chip-module-scss__kBI7H {\n  background-color: darkolivegreen;\n}");a(".chip-css {\r\n    background-color: green;\r\n}");a(".chip-less {\n  background-color: purple;\n}\n");a(".chip-scss {\n  background-color: chartreuse;\n}");var h,m,f,x,v,y=function(e){var n=e.children,r=e.type,c=void 0===r?exports.ChipType.DEFAULT:r,i=e.error,o=e.active;return t.createElement(t.Fragment,null,t.createElement(l,{error:i,active:o,type:c},n,c===exports.ChipType.ICON&&t.createElement(s,null)),t.createElement("div",{className:"chip-css"},"style css"),t.createElement("div",{className:d},"style module css"),t.createElement("div",{className:"chip-less"},"chip less"),t.createElement("div",{className:p},"chip module less"),t.createElement("div",{className:"chip-scss"},"chip scss"),t.createElement("div",{className:u},"chip module scss"))},E=r.div(h||(h=c(["\n    width: 300px;\n    height: 250px;\n    border: solid 1px #eaeaea;\n    border-radius: 10px;\n    overflow: hidden;\n    filter: drop-shadow(2px 2px 2px #00000080);\n"]))),g=function(e){var n=e.children;return t.createElement(E,null,n)},b=r.div(m||(m=c(["\n    width: 100%;\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n"]))),C=r.img(f||(f=c(["\n    width: auto;\n    height: 100%;\n"]))),_=r.div(x||(x=c(["\n    @font-face {\n        font-family: 'custom font';\n        src: url(",");\n    }\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    font-family: 'custom font';\n    font-size: 60px;\n"])),"fonts/711c0bd1285d4209.woff2"),k=r.div(v||(v=c(["\n    height: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background: cadetblue;\n"])));exports.Card=g,exports.Chip=y,exports.Icon=s,exports.MunichCard=function(){return t.createElement(g,null,t.createElement(b,null,t.createElement(C,{src:"images/c107ca59de736ea1.jpg"}),t.createElement(_,null,"Munich")),t.createElement(k,null,t.createElement(y,{type:exports.ChipType.ICON},"select"),t.createElement(y,null,"pin")))};
