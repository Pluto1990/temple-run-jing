exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 6193:
/***/ ((module) => {

// Exports
module.exports = {
	"black": "#000",
	"hot_pink": "#e4007e",
	"green": "#47b990",
	"brown": "#c39a6b",
	"flex_row": "header_flex_row__cC3xV",
	"head": "header_head__xo4rb",
	"headerBg": "header_headerBg__qSF4D",
	"title": "header_title__L__Pj",
	"title2": "header_title2__jxTiD",
	"flex_col": "header_flex_col__oK1rD",
	"drop_down_menu": "header_drop_down_menu__YPeh3"
};


/***/ }),

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout/header/header.module.sass
var header_module = __webpack_require__(6193);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/header/navbaritem.js




function NavbarItem({ title , title2 , links  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        className: `mt10px`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(header_module_default()).title} fs14px ps30px `,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(header_module_default()).title2} fs16px mt5px pb15px ps30px pe30px`,
                children: title2
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                children: links.map((link, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: `mt10px mb20px`,
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: link.url,
                            className: `fs14px`,
                            children: link.label
                        })
                    }, index))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/navbar.js




function Navbar({ info ="left"  }) {
    const info_left = [
        {
            title: "01",
            title2: "會員中心",
            links: [
                {
                    label: "變更資料",
                    url: "#"
                },
                {
                    label: "拜拜紀錄",
                    url: "#"
                },
                {
                    label: "訂單記錄",
                    url: "#"
                },
                {
                    label: "喜好商品",
                    url: "#"
                },
                {
                    label: "我的優惠券",
                    url: "#"
                },
                {
                    label: "護身符",
                    url: "#"
                },
                {
                    label: "每日簽到",
                    url: "#"
                }
            ]
        },
        {
            title: "02",
            title2: "線上拜拜",
            links: [
                {
                    label: "服務據點",
                    url: "#"
                },
                {
                    label: "服務客戶",
                    url: "#"
                },
                {
                    label: "服務地區",
                    url: "#"
                },
                {
                    label: "徵才資訊",
                    url: "#"
                }
            ]
        },
        {
            title: "03",
            title2: "供品商城",
            links: [
                {
                    label: "服務據點",
                    url: "#"
                },
                {
                    label: "服務客戶",
                    url: "#"
                },
                {
                    label: "服務地區",
                    url: "#"
                },
                {
                    label: "徵才資訊",
                    url: "#"
                }
            ]
        }
    ];
    const info_right = [
        {
            title: "04",
            title2: "線上遶境",
            links: [
                {
                    label: "線上測驗",
                    url: "#"
                },
                {
                    label: "遶境直播",
                    url: "#"
                }
            ]
        },
        {
            title: "05",
            title2: "求神問卜",
            links: [
                {
                    label: "求籤詩",
                    url: "#"
                },
                {
                    label: "求紅線",
                    url: "#"
                },
                {
                    label: "點姻緣燈",
                    url: "#"
                },
                {
                    label: "點學業燈",
                    url: "#"
                },
                {
                    label: "上傳准考證",
                    url: "#"
                }
            ]
        },
        {
            title: "06",
            title2: "民俗論壇",
            links: [
                {
                    label: "八卦板",
                    url: "#"
                },
                {
                    label: "鬼故事板",
                    url: "#"
                },
                {
                    label: "愛情板",
                    url: "#"
                },
                {
                    label: "籤詩板",
                    url: "#"
                },
                {
                    label: "神佛介紹",
                    url: "#"
                },
                {
                    label: "禁忌百科",
                    url: "#"
                },
                {
                    label: "節期拜法",
                    url: "#"
                },
                {
                    label: "山野怪談",
                    url: "#"
                }
            ]
        }
    ];
    const data = info === "left" ? info_left : info_right;
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: `${(header_module_default()).drop_down_menu}`,
        children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx(NavbarItem, {
                title: item.title,
                title2: item.title2,
                links: item.links
            }, index))
    });
}

;// CONCATENATED MODULE: ./assets/logoChiHeader.svg
/* harmony default export */ const logoChiHeader = ({"src":"/_next/static/media/logoChiHeader.41bd4765.svg","height":20,"width":92,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./assets/logoEngHeader.svg
/* harmony default export */ const logoEngHeader = ({"src":"/_next/static/media/logoEngHeader.a8398193.svg","height":8,"width":103,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/layout/header/logo.js







function Logo() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${(header_module_default()).flex_col} ms14px`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: logoChiHeader,
                    width: 100,
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: logoEngHeader,
                    width: 118,
                    alt: "logo"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./assets/header.svg
/* harmony default export */ const header = ({"src":"/_next/static/media/header.b02d3f4b.svg","height":159,"width":1938,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/layout/header/index.js







function Header() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(header_module_default()).flex_row} ${(header_module_default()).head} pt20px`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Navbar, {
                        info: "left"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Logo, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Navbar, {
                        info: "right"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: header,
                alt: "header",
                className: `${(header_module_default()).headerBg}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(header_module_default()).box}`
            })
        ]
    });
}


/***/ })

};
;