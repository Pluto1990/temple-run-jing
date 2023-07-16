exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 4637:
/***/ ((module) => {

// Exports
module.exports = {
	"black": "#000",
	"hot_pink": "#e4007e",
	"green": "#47b990",
	"brown": "#c39a6b",
	"flex": "title_flex__2iMfQ",
	"title": "title_title__dUcxw",
	"title2": "title_title2__cjOO9",
	"line": "title_line__uAEA6"
};


/***/ }),

/***/ 2290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _title_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4637);
/* harmony import */ var _title_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_title_module_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_variables_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6804);
/* harmony import */ var _styles_variables_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_module_sass__WEBPACK_IMPORTED_MODULE_1__);



//text = 大標
//text2 = 小標
// lineColor = black, green, hot_pink, brown
function Title({ text ="text" , text2 ="text" , lineColor ="green"  }) {
    const var_color = (_styles_variables_module_sass__WEBPACK_IMPORTED_MODULE_1___default())[lineColor];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_title_module_sass__WEBPACK_IMPORTED_MODULE_2___default().flex)} mt120px`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_title_module_sass__WEBPACK_IMPORTED_MODULE_2___default().title)}`,
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_title_module_sass__WEBPACK_IMPORTED_MODULE_2___default().title2)}`,
                children: text2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_title_module_sass__WEBPACK_IMPORTED_MODULE_2___default().line)}`,
                style: {
                    backgroundColor: var_color
                }
            })
        ]
    });
}


/***/ })

};
;