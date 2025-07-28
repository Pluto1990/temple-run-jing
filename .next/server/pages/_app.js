(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4846:
/***/ ((module) => {

// Exports
module.exports = {
	"black": "#000",
	"hot_pink": "#e4007e",
	"green": "#47b990",
	"brown": "#c39a6b",
	"footer": "footer_footer__4w_L3",
	"flex_col": "footer_flex_col__fL8VW",
	"flex_row": "footer_flex_row__Z4ZMX",
	"star": "footer_star__8GQ_D",
	"ahref": "footer_ahref__sB9Lr"
};


/***/ }),

/***/ 5693:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "head_header__muzcb",
	"menu_wrap": "head_menu_wrap__D390J",
	"active": "head_active__NwRCS",
	"nav_wrap": "head_nav_wrap__JFOTe",
	"item": "head_item__yuvCz",
	"num": "head_num__t6FX5",
	"title": "head_title__QhCHD",
	"logo": "head_logo__sNsBa",
	"ham_wrap": "head_ham_wrap__oxa44",
	"line": "head_line__3MThN"
};


/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/temple-run-jing//_next/static/media/logo.77192a2b.svg","height":54,"width":123,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.sass
var globals = __webpack_require__(3227);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./hooks/use-auth.js


const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
// 最上層元件使用
const AuthProvider = ({ children  })=>{
    const [auth, setAuth] = (0,external_react_.useState)({
        id: 0,
        name: "",
        token: ""
    });
    return /*#__PURE__*/ jsx_runtime.jsx(AuthContext.Provider, {
        value: {
            auth,
            setAuth
        },
        children: children
    });
};
// 消費者(後代元件)使用
const useAuth = ()=>useContext(AuthContext);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout/head.module.scss
var head_module = __webpack_require__(5693);
var head_module_default = /*#__PURE__*/__webpack_require__.n(head_module);
// EXTERNAL MODULE: ./assets/logo.svg
var logo = __webpack_require__(6444);
;// CONCATENATED MODULE: ./components/layout/header.js
"use client";






const navLeft = [
    {
        num: "01",
        title: "會員中心"
    },
    {
        num: "02",
        title: "線上拜拜"
    },
    {
        num: "03",
        title: "供品商城"
    }
];
const navRight = [
    {
        num: "04",
        title: "線上遶境"
    },
    {
        num: "05",
        title: "求神問卜"
    },
    {
        num: "06",
        title: "民俗論壇"
    }
];
function Header() {
    const [isActive, setIsActive] = (0,external_react_.useState)(false);
    const toggleMenu = ()=>{
        setIsActive(!isActive);
    };
    (0,external_react_.useEffect)(()=>{
        document.body.style.overflowY = isActive ? "hidden" : "auto";
        return ()=>{
            document.body.style.overflowY = "auto";
        };
    }, [
        isActive
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: (head_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(head_module_default()).menu_wrap} ${isActive ? (head_module_default()).active : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: (head_module_default()).nav_wrap,
                        children: navLeft.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: (head_module_default()).item,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (head_module_default()).num,
                                        children: item.num
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (head_module_default()).title,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            onClick: (e)=>e.preventDefault(),
                                            children: item.title
                                        })
                                    })
                                ]
                            }, item.num))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: (head_module_default()).logo,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: logo/* default */.Z,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: (head_module_default()).nav_wrap,
                        children: navRight.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: (head_module_default()).item,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (head_module_default()).num,
                                        children: item.num
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: (head_module_default()).title,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            onClick: (e)=>e.preventDefault(),
                                            children: item.title
                                        })
                                    })
                                ]
                            }, item.num))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: `${(head_module_default()).ham_wrap} ${isActive ? (head_module_default()).active : ""}`,
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (head_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (head_module_default()).line
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: (head_module_default()).line
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/navbar.js


function Navbar() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {});
}

// EXTERNAL MODULE: ./components/layout/footer.module.sass
var footer_module = __webpack_require__(4846);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./assets/stars.svg
/* harmony default export */ const stars = ({"src":"/temple-run-jing//_next/static/media/stars.72f81524.svg","height":29,"width":174,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/logoChi.svg
/* harmony default export */ const logoChi = ({"src":"/temple-run-jing//_next/static/media/logoChi.8e47496f.svg","height":23,"width":109,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/logoEng.svg
/* harmony default export */ const logoEng = ({"src":"/temple-run-jing//_next/static/media/logoEng.0666d5ab.svg","height":10,"width":123,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/layout/footer.js








function Footer() {
    const info = [
        "購物須知",
        "訂單疑問",
        "與我們聯繫",
        "隱私權使用聲明"
    ];
    const len = info.length;
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "mt100px",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `${(footer_module_default()).footer} wBold`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `${(footer_module_default()).flex_col}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: logoChi,
                                width: 85,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: logoEng,
                                width: 100,
                                alt: "logo"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `${(footer_module_default()).flex_row} fs15px fwBolder`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: stars,
                            className: `${(footer_module_default()).star}`,
                            alt: "stars"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: info.map((v, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "#",
                                            className: (footer_module_default()).ahref,
                                            children: v
                                        }),
                                        i !== len - 1 && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: " ｜ "
                                        })
                                    ]
                                }, i))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: stars,
                            className: `${(footer_module_default()).star}`,
                            alt: "stars"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `${(footer_module_default()).flex_row} fs12px`,
                    children: "copyright \xa9 2023 Temple Round Jing Co.,Ltd"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/default-layout.js




function DefaultLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page)=>/*#__PURE__*/ jsx_runtime.jsx(DefaultLayout, {
            children: page
        }));
    return /*#__PURE__*/ jsx_runtime.jsx(AuthProvider, {
        children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        }))
    });
}


/***/ }),

/***/ 3227:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,675,664], () => (__webpack_exec__(8471)));
module.exports = __webpack_exports__;

})();