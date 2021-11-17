"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Navbar = void 0;
var react_1 = require("react");
var twin_macro_1 = require("twin.macro");
var styled_components_1 = require("styled-components");
var Logo_1 = require("../Logo");
var react_scroll_1 = require("react-scroll");
var react_responsive_1 = require("react-responsive");
var responsive_1 = require("../responsive");
var react_burger_menu_1 = require("react-burger-menu");
var menuStyles_1 = require("./menuStyles");
var Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width:90%;\n    ", "\n"], ["\n    width:90%;\n    ",
    "\n"])), twin_macro_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        flex\n        self-center\n        h-20\n        pl-6\n        pr-6\n        pt-4\n        border-b-2\n        border-gray-200\n        border-opacity-50\n        items-center\n    "], ["\n        flex\n        self-center\n        h-20\n        pl-6\n        pr-6\n        pt-4\n        border-b-2\n        border-gray-200\n        border-opacity-50\n        items-center\n    "]))));
var NavItems = twin_macro_1["default"].ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    list-none\n    w-full\n    h-auto\n    lg:w-auto\n    lg:h-full\n    flex\n    lg:ml-20\n    justify-center\n    items-center\n"], ["\n    list-none\n    w-full\n    h-auto\n    lg:w-auto\n    lg:h-full\n    flex\n    lg:ml-20\n    justify-center\n    items-center\n"])));
var NavItem = twin_macro_1["default"].li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    lg:mr-8\n    flex\n    items-center\n    justify-center\n    min-h-full\n    text-white\n    cursor-pointer\n    font-medium\n    text-lg\n    lg:text-base\n    transition-colors\n    transition-duration[300ms]\n    hover:text-gray-300\n    box-content\n    mb-2\n    lg:mb-0\n"], ["\n    lg:mr-8\n    flex\n    items-center\n    justify-center\n    min-h-full\n    text-white\n    cursor-pointer\n    font-medium\n    text-lg\n    lg:text-base\n    transition-colors\n    transition-duration[300ms]\n    hover:text-gray-300\n    box-content\n    mb-2\n    lg:mb-0\n"])));
function Navbar() {
    var isMobile = react_responsive_1.useMediaQuery({ maxWidth: responsive_1.deviceSize.mobile });
    var navItems = react_1["default"].createElement(NavItems, null,
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement(react_scroll_1.Link, { to: "Home" }, "Home")),
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement(react_scroll_1.Link, { to: "Explore" }, "Explore")),
        react_1["default"].createElement(NavItem, null,
            react_1["default"].createElement(react_scroll_1.Link, { to: "TravelPlacess" }, "Travel Places")));
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(Logo_1.Logo, null),
        isMobile && react_1["default"].createElement(react_burger_menu_1.slide, { right: true, styles: menuStyles_1["default"] }, navItems),
        !isMobile && navItems));
}
exports.Navbar = Navbar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
