"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Logo = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var LogoContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        font-family[\"ZCOOL KuaiLe\"]\n        font-black\n        text-2xl\n        text-white\n    "], ["\n        font-family[\"ZCOOL KuaiLe\"]\n        font-black\n        text-2xl\n        text-white\n    "]))));
function Logo() {
    return react_1["default"].createElement(LogoContainer, null, "TRAVELYA");
}
exports.Logo = Logo;
var templateObject_1, templateObject_2;
