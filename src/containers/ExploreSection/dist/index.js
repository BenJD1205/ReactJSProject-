"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ExploreSection = void 0;
var react_1 = require("react");
var twin_macro_1 = require("twin.macro");
var styled_components_1 = require("styled-components");
var react_scroll_1 = require("react-scroll");
var react_responsive_carousel_1 = require("react-responsive-carousel");
require("react-responsive-carousel/lib/styles/carousel.min.css");
//Images
var bali_temple_jpg_1 = require("../../images/bali-temple.jpg");
var rice_terrace_jpg_1 = require("../../images/rice-terrace.jpg");
var exotic_bromo_jpg_1 = require("../../images/exotic-bromo.jpg");
var male_maldives_jpg_1 = require("../../images/male-maldives.jpg");
var ice_tea_jpg_1 = require("../../images/ice-tea.jpg");
var ExploreSectionContainer = twin_macro_1["default"](react_scroll_1.Element)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    w-full\n    h-screen\n    flex\n    flex-col\n    relative\n    pt-1\n    pb-1\n    xl:pt-2\n    xl:pb-2\n    items-center\n"], ["\n    w-full\n    h-screen\n    flex\n    flex-col\n    relative\n    pt-1\n    pb-1\n    xl:pt-2\n    xl:pb-2\n    items-center\n"])));
var Title = twin_macro_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-2xl\n    xl:text-3xl\n    2xl:text-5xl\n    2xl:mt-6\n    2xl:mb-6\n    text-gray-800\n    font-bold\n    text-center\n"], ["\n    text-2xl\n    xl:text-3xl\n    2xl:text-5xl\n    2xl:mt-6\n    2xl:mb-6\n    text-gray-800\n    font-bold\n    text-center\n"])));
var SectionInfo = twin_macro_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-base\n    2xl:text-lg\n    text-gray-700\n    text-center\n    mt-4\n    2xl:mt-2\n    max-w-lg\n    xl:max-w-3xl\n"], ["\n    text-base\n    2xl:text-lg\n    text-gray-700\n    text-center\n    mt-4\n    2xl:mt-2\n    max-w-lg\n    xl:max-w-3xl\n"])));
var ExploreSectionWrapper = twin_macro_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    w-full\n    h-full\n    flex\n    flex-col\n    justify-center\n    items-center\n    mt-3\n    xl:mt-6\n    2xl:mt-10\n    max-w-sm\n    xl:max-w-2xl\n    2xl:max-w-4xl\n"], ["\n    w-full\n    h-full\n    flex\n    flex-col\n    justify-center\n    items-center\n    mt-3\n    xl:mt-6\n    2xl:mt-10\n    max-w-sm\n    xl:max-w-2xl\n    2xl:max-w-4xl\n"])));
var Item = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  img {\n    ", "\n  }\n"], ["\n  ",
    "\n  img {\n    ",
    "\n  }\n"])), twin_macro_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        flex\n        flex-col\n    "], ["\n        flex\n        flex-col\n    "]))), twin_macro_1["default"](templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            max-w-full\n            max-h-full\n        "], ["\n            max-w-full\n            max-h-full\n        "]))));
var Description = twin_macro_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    text-gray-300\n    text-center\n    bg-black\n    bottom-10\n    left-1/2\n    pl-4\n    pr-4\n    pt-2\n    pb-2\n    rounded-2xl\n    opacity-80\n    transform[translateX(-50%)]\n    absolute\n"], ["\n    text-gray-300\n    text-center\n    bg-black\n    bottom-10\n    left-1/2\n    pl-4\n    pr-4\n    pt-2\n    pb-2\n    rounded-2xl\n    opacity-80\n    transform[translateX(-50%)]\n    absolute\n"])));
function ExploreSection() {
    return (react_1["default"].createElement(ExploreSectionContainer, { name: "Explore" },
        react_1["default"].createElement(Title, null, "Explore Travel Places"),
        react_1["default"].createElement(SectionInfo, null, "View our tour package and find out more about the places we will visit together on this journey to the beautifull of indonesia, exploring so many historical and amazing locations with the group and having so much fun."),
        react_1["default"].createElement(ExploreSectionWrapper, null,
            react_1["default"].createElement(react_responsive_carousel_1.Carousel, { dynamicHeight: false },
                react_1["default"].createElement(Item, null,
                    react_1["default"].createElement("img", { src: bali_temple_jpg_1["default"] }),
                    react_1["default"].createElement(Description, null, "Bali Temple")),
                react_1["default"].createElement(Item, null,
                    react_1["default"].createElement("img", { src: rice_terrace_jpg_1["default"] }),
                    react_1["default"].createElement(Description, null, "Rice Terrace")),
                react_1["default"].createElement(Item, null,
                    react_1["default"].createElement("img", { src: exotic_bromo_jpg_1["default"] }),
                    react_1["default"].createElement(Description, null, "Exotic Bromo")),
                react_1["default"].createElement(Item, null,
                    react_1["default"].createElement("img", { src: male_maldives_jpg_1["default"] }),
                    react_1["default"].createElement(Description, null, "Male Maldives")),
                react_1["default"].createElement(Item, null,
                    react_1["default"].createElement("img", { src: ice_tea_jpg_1["default"] }),
                    react_1["default"].createElement(Description, null, "Ice Tea"))))));
}
exports.ExploreSection = ExploreSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
