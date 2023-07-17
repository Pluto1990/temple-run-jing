exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 8190:
/***/ ((module) => {

// Exports
module.exports = {
	"black": "#000",
	"hot_pink": "#e4007e",
	"green": "#47b990",
	"brown": "#c39a6b",
	"btn": "button_btn__tLmaa",
	"IconContainer": "button_IconContainer__Mi6xi",
	"IconContainer2": "button_IconContainer2__xOaaO",
	"icon": "button_icon__2JT5l",
	"text": "button_text__MR1gQ",
	"img": "button_img__Rk4_n",
	"Star": "button_Star__XPAnU"
};


/***/ }),

/***/ 6804:
/***/ ((module) => {

// Exports
module.exports = {
	"black": "#000",
	"hot_pink": "#e4007e",
	"green": "#47b990",
	"brown": "#c39a6b"
};


/***/ }),

/***/ 5877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/common/button/button.module.sass
var button_module = __webpack_require__(8190);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
// EXTERNAL MODULE: ./styles/_variables.module.sass
var _variables_module = __webpack_require__(6804);
var _variables_module_default = /*#__PURE__*/__webpack_require__.n(_variables_module);
;// CONCATENATED MODULE: ./assets/Star_white.svg
/* harmony default export */ const Star_white = ({"src":"/temple-run-jing/_next/static/media/Star_white.15b8dc53.svg","height":39,"width":38,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/common/button/index.js





// text = Button content
// btnColor = black, green, hot_pink, brown
function Button({ text ="text" , btnColor ="btn"  }) {
    const var_color = (_variables_module_default())[btnColor];
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: `${(button_module_default()).btn}`,
                style: {
                    backgroundColor: var_color
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: `${(button_module_default()).IconContainer} `,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: Star_white,
                            alt: "",
                            width: "25",
                            className: `${(button_module_default()).img}`
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `${(button_module_default()).text}`,
                        children: [
                            " ",
                            text
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: `${(button_module_default()).IconContainer2}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: Star_white,
                            alt: "",
                            width: "25",
                            className: `${(button_module_default()).img}`
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;