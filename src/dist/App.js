"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var twin_macro_1 = require("twin.macro");
var TopSection_1 = require("./containers/TopSection");
var ExploreSection_1 = require("./containers/ExploreSection");
var footer_1 = require("./components/footer");
var AppContainer = twin_macro_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex\n  w-full\n  h-full\n  flex-col\n  overflow-hidden\n"], ["\n  flex\n  w-full\n  h-full\n  flex-col\n  overflow-hidden\n"])));
function App() {
    return (react_1["default"].createElement(AppContainer, null,
        react_1["default"].createElement(TopSection_1.TopSection, null),
        react_1["default"].createElement(ExploreSection_1.ExploreSection, null),
        react_1["default"].createElement(footer_1.Footer, null)));
}
exports["default"] = App;
var templateObject_1;
