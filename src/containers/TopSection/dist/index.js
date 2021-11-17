"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TopSection = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var twin_macro_1 = require("twin.macro");
var Navbar_1 = require("../../components/Navbar");
var react_scroll_1 = require("react-scroll");
var indonesia_high_res_jpg_1 = require("../../images/indonesia-high-res.jpg");
var bs_1 = require("react-icons/bs");
var TopSectionContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        w-full\n        flex\n        flex-col\n        h-screen\n        relative\n    "], ["\n        w-full\n        flex\n        flex-col\n        h-screen\n        relative\n    "]))));
var LandingSection = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  background-image: url(", "),\n    linear-gradient(to left, #005b9c, #b1d1b148);\n  background-size: cover;\n  background-position: bottom 10% left;\n  background-blend-mode: overlay;\n"], ["\n  ",
    ";\n  background-image: url(", "),\n    linear-gradient(to left, #005b9c, #b1d1b148);\n  background-size: cover;\n  background-position: bottom 10% left;\n  background-blend-mode: overlay;\n"])), twin_macro_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        w-full\n        h-screen\n        flex\n        flex-col\n    "], ["\n        w-full\n        h-screen\n        flex\n        flex-col\n    "]))), indonesia_high_res_jpg_1["default"]);
var InfoSection = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        absolute\n        top[150px]\n        left-3\n        lg:top[150px]\n        lg:right-10\n        lg:left-auto\n        2xl:right-60\n        2xl:top[240px]\n        2xl:left-auto\n    "], ["\n        absolute\n        top[150px]\n        left-3\n        lg:top[150px]\n        lg:right-10\n        lg:left-auto\n        2xl:right-60\n        2xl:top[240px]\n        2xl:left-auto\n    "]))));
var FloatingText = styled_components_1["default"].h1(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        m-0\n        font-black\n        text-white\n        font-size[60px]\n        line-height[25px]\n        lg:font-size[125px]\n        lg:line-height[90px]\n        2xl:font-size[170px]\n        2xl:line-height[125px]\n        font-family[\"Archivo Narrow\"]\n        flex\n        items-center\n    "], ["\n        m-0\n        font-black\n        text-white\n        font-size[60px]\n        line-height[25px]\n        lg:font-size[125px]\n        lg:line-height[90px]\n        2xl:font-size[170px]\n        2xl:line-height[125px]\n        font-family[\"Archivo Narrow\"]\n        flex\n        items-center\n    "]))));
var OutlinedTextSvg = styled_components_1["default"].svg(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font: bold 100px Century \"Archivo Narrow\", Arial;\n  ", ";\n  overflow: overlay;\n  text {\n    max-height: 100%;\n    flex: 1;\n    fill: none;\n    stroke: white;\n    stroke-width: 2px;\n    stroke-linejoin: round;\n    z-index: 99;\n    ", ";\n    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);\n  }\n"], ["\n  font: bold 100px Century \"Archivo Narrow\", Arial;\n  ",
    ";\n  overflow: overlay;\n  text {\n    max-height: 100%;\n    flex: 1;\n    fill: none;\n    stroke: white;\n    stroke-width: 2px;\n    stroke-linejoin: round;\n    z-index: 99;\n    ",
    ";\n    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);\n  }\n"])), twin_macro_1["default"](templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        width[550px]\n        height[100px]\n        lg:width[580px]\n        lg:height[110px]\n        2xl:width[550px]\n        2xl:height[110px]\n        flex\n    "], ["\n        width[550px]\n        height[100px]\n        lg:width[580px]\n        lg:height[110px]\n        2xl:width[550px]\n        2xl:height[110px]\n        flex\n    "]))), twin_macro_1["default"](templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      2xl:transform[translateY(113px)]\n      lg:transform[translateY(97px)]\n      transform[translateY(71px)]\n    "], ["\n      2xl:transform[translateY(113px)]\n      lg:transform[translateY(97px)]\n      transform[translateY(71px)]\n    "]))));
var DescriptionText = styled_components_1["default"].p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        text-xl\n        lg:text-lg\n        text-white\n        text-opacity-80\n        mt-10\n        max-w-xs\n        lg:max-w-lg\n        2xl:max-w-xl\n    "], ["\n        text-xl\n        lg:text-lg\n        text-white\n        text-opacity-80\n        mt-10\n        max-w-xs\n        lg:max-w-lg\n        2xl:max-w-xl\n    "]))));
var ViewMoreButton = styled_components_1["default"].button(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), twin_macro_1["default"](templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        absolute\n        bottom-4\n        left-1/2\n        -translate-x-1/2\n        text-white\n        text-4xl\n        transition-colors\n        duration-200\n        hover:text-green-400\n    "], ["\n        absolute\n        bottom-4\n        left-1/2\n        -translate-x-1/2\n        text-white\n        text-4xl\n        transition-colors\n        duration-200\n        hover:text-green-400\n    "]))));
function TopSection() {
    return react_1["default"].createElement(TopSectionContainer, null,
        react_1["default"].createElement(LandingSection, null,
            react_1["default"].createElement(Navbar_1.Navbar, null),
            react_1["default"].createElement(InfoSection, null,
                react_1["default"].createElement(FloatingText, null, "WORLD"),
                react_1["default"].createElement(FloatingText, { style: { display: "inline-flex" } },
                    "OF",
                    react_1["default"].createElement(OutlinedTextSvg, { viewBox: "0 0 530 100" },
                        react_1["default"].createElement("text", null, "PARADISE"))),
                react_1["default"].createElement(FloatingText, null, "INDONESIA."),
                react_1["default"].createElement(DescriptionText, null, "Let's explore of the third largest countries in the world, namely indonesia. Enjoy 3 vacation packages at competitive prices and strong soul.")),
            react_1["default"].createElement(ViewMoreButton, null,
                react_1["default"].createElement(react_scroll_1.Link, { to: "Explore", smooth: "easeInOutQuad", duration: 1500 },
                    react_1["default"].createElement(bs_1.BsArrowDownCircle, null)))));
}
exports.TopSection = TopSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
