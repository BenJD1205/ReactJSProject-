"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var twin_macro_1 = require("twin.macro");
var Logo_1 = require("../Logo");
var si_1 = require("react-icons/si");
var react_scroll_1 = require("react-scroll");
var FooterContainer = twin_macro_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    w-full\n    h-96\n    bg-dark-blue-500\n    mt-10\n    flex\n    pt-6\n    pl-2\n    pr-2\n    lg:pt-16\n    lg:pr-16\n    lg:pl-16\n    text-white\n    items-center\n    justify-center\n    flex-col\n"], ["\n    w-full\n    h-96\n    bg-dark-blue-500\n    mt-10\n    flex\n    pt-6\n    pl-2\n    pr-2\n    lg:pt-16\n    lg:pr-16\n    lg:pl-16\n    text-white\n    items-center\n    justify-center\n    flex-col\n"])));
var Wrapper = twin_macro_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex \n    h-full\n    w-full\n    justify-center\n    flex-col\n    max-w-6xl\n    lg:max-w-7xl\n    lg:justify-start\n"], ["\n    flex \n    h-full\n    w-full\n    justify-center\n    flex-col\n    max-w-6xl\n    lg:max-w-7xl\n    lg:justify-start\n"])));
var TopSection = twin_macro_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex\n    w-full\n    justify-center\n    lg:justify-start\n"], ["\n    flex\n    w-full\n    justify-center\n    lg:justify-start\n"])));
var InnerContainer = twin_macro_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    w-full\n    flex\n    flex-col\n    lg:flex-row\n    flex-wrap\n    pt-16\n    lg:pt-9\n    justify-between\n    lg:justify-start\n    h-full\n"], ["\n    w-full\n    flex\n    flex-col\n    lg:flex-row\n    flex-wrap\n    pt-16\n    lg:pt-9\n    justify-between\n    lg:justify-start\n    h-full\n"])));
var LeftInnerContainer = twin_macro_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex\n    flex[5]\n    w-full\n    h-full\n    justify-between\n    lg:justify-start\n"], ["\n    flex\n    flex[5]\n    w-full\n    h-full\n    justify-between\n    lg:justify-start\n"])));
var RightInnerContainer = twin_macro_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex\n    flex-col\n    lg:flex-row\n    flex[1]\n    w-full\n    h-full\n    mb-5\n    lg:mb-0\n    flex-wrap\n"], ["\n    flex\n    flex-col\n    lg:flex-row\n    flex[1]\n    w-full\n    h-full\n    mb-5\n    lg:mb-0\n    flex-wrap\n"])));
var Menu = twin_macro_1["default"].ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    flex\n    flex-col\n    list-none\n    mr-3\n    lg:ml-5\n    lg:mr-16\n"], ["\n    flex\n    flex-col\n    list-none\n    mr-3\n    lg:ml-5\n    lg:mr-16\n"])));
var MenuItem = twin_macro_1["default"].li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    flex\n    text-white\n    text-sm\n    lg:text-base\n    mt-2\n"], ["\n    flex\n    text-white\n    text-sm\n    lg:text-base\n    mt-2\n"])));
var BottomSection = twin_macro_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    w-full\n    flex\n    flex-wrap\n    items-center\n    justify-between\n    pl-4\n    pr-4\n    h-28\n    lg:h-14\n    bottom-0\n    border-t\n    border-t-gray-300\n    border-opacity-50\n"], ["\n    w-full\n    flex\n    flex-wrap\n    items-center\n    justify-between\n    pl-4\n    pr-4\n    h-28\n    lg:h-14\n    bottom-0\n    border-t\n    border-t-gray-300\n    border-opacity-50\n"])));
var Copyright = twin_macro_1["default"].span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    font-size[x-small]\n    text-gray-300\n    w-full\n    lg:w-auto\n    text-center\n"], ["\n    font-size[x-small]\n    text-gray-300\n    w-full\n    lg:w-auto\n    text-center\n"])));
var SmallText = twin_macro_1["default"].span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    font-size[small]\n    text-gray-300\n"], ["\n    font-size[small]\n    text-gray-300\n"])));
var SocialMedia = twin_macro_1["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    flex\n    justify-center\n"], ["\n    flex\n    justify-center\n"])));
var Icon = twin_macro_1["default"].span(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    h-6\n    flex\n    mr-4\n    cursor-pointer\n    transition-colors\n    hover:text-gray-300\n"], ["\n    h-6\n    flex\n    mr-4\n    cursor-pointer\n    transition-colors\n    hover:text-gray-300\n"])));
function Footer() {
    return (react_1["default"].createElement(FooterContainer, null,
        react_1["default"].createElement(Wrapper, null,
            react_1["default"].createElement(TopSection, null,
                react_1["default"].createElement(Logo_1.Logo, null)),
            react_1["default"].createElement(InnerContainer, null,
                react_1["default"].createElement(LeftInnerContainer, null,
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "Home" }, "Home")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "Explore" }, "Explore")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "TravelPlaces" }, "Travel Places"))),
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "#" }, "About Us")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "# " }, "Contact Us")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "#" }, "Our Travel Terms"))),
                    react_1["default"].createElement(Menu, null,
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "#" }, "Company")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "#" }, "Careers")),
                        react_1["default"].createElement(MenuItem, null,
                            react_1["default"].createElement(react_scroll_1.Link, { to: "#" }, "Travel Guide")))),
                react_1["default"].createElement(RightInnerContainer, null,
                    react_1["default"].createElement(SocialMedia, null,
                        react_1["default"].createElement(Icon, null,
                            react_1["default"].createElement(si_1.SiFacebook, { size: 25 })),
                        react_1["default"].createElement(Icon, null,
                            react_1["default"].createElement(si_1.SiInstagram, { size: 25 })),
                        react_1["default"].createElement(Icon, null,
                            react_1["default"].createElement(si_1.SiTwitter, { size: 25 }))))),
            react_1["default"].createElement(BottomSection, null,
                react_1["default"].createElement(Copyright, null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " TRAVELYA. All rights reserved."),
                react_1["default"].createElement(SmallText, null,
                    react_1["default"].createElement("a", { href: "#" }, "Terms of Service")),
                react_1["default"].createElement(SmallText, null,
                    react_1["default"].createElement("a", { href: "#" }, "Privacy Policy")),
                react_1["default"].createElement(SmallText, null,
                    react_1["default"].createElement("a", { href: "#" }, "Security")),
                react_1["default"].createElement(SmallText, null,
                    react_1["default"].createElement("a", { href: "#" }, "Sitemap"))))));
}
exports.Footer = Footer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
