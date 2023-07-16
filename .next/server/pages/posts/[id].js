"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 6521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/posts/[id].js


// 頁面元件，對照`/posts/[id].js`，因為是單一篇張貼文的元件，所以命名為`Post`單數詞
// `{ post }`是由`getStaticProps`最後回傳給此頁面元件的props(屬性)
// 即Next透過網址上獲得動態參數後，經由`getStaticProps`與`getStaticPaths`，
// `getStaticPaths`告訴`getStaticProps`有哪些參數值能用
// `getStaticProps`得到目前的網址參數後，找到對應的內容，然後傳給`Post`元件呈現
// 這是SSG要產生靜態網頁的必要過程
function Post({ post  }) {
    const { asPath  } = (0,router_namespaceObject.useRouter)();
    const { title , content  } = post;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                children: [
                    "Title: ",
                    title
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    "Path: ",
                    asPath
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                children: [
                    "Content: ",
                    content
                ]
            })
        ]
    });
}
// params: 在動態路由頁面中，專門配合getStaticPaths使用的，
// 代表目前context包含的params屬性，因參數同時可能不只一個，以複數名詞代表
// 例如頁面的名稱為`[id].js`，params參數物件會是像 `{ id: ... }`，其它屬性命名以此類推
async function getStaticProps({ params  }) {
    // 範例內容 (這裡視情況fetch伺服器要求資料)
    const posts = [
        {
            id: "1",
            title: "主角我覺得雖然",
            content: "主角我覺得雖然可以，我樹茶就好辦導演。"
        },
        {
            id: "2",
            title: "造火鍋能用",
            content: "不行了小後就，雙較其的圖真的很的衣服造火鍋能用。"
        }
    ];
    // ex.{id:'2'}
    console.log(params);
    // get post by id
    const post = posts.find((v)=>v.id === params.id);
    return {
        props: {
            post
        }
    };
}
// 回傳靜態路徑參數值，SSG預先渲染後產生對應的頁面使用。
// 注意，這裡需要產生所有可能的params(參數)物件，用於限制動態路由用(!!必要!!)。
// `{ fallback: false }`代表其它路由皆為404頁面。
async function getStaticPaths() {
    // 範例內容 (這裡視情況fetch伺服器要求資料)
    const posts = [
        {
            id: "1",
            title: "主角我覺得雖然",
            content: "主角我覺得雖然可以，我樹茶就好辦導演。"
        },
        {
            id: "2",
            title: "造火鍋能用",
            content: "不行了小後就，雙較其的圖真的很的衣服造火鍋能用。"
        }
    ];
    const paths = posts.map((post)=>{
        return {
            params: {
                id: post.id
            }
        };
    });
    // [ { params: { id: '1' } }, { params: { id: '2' } } ]
    console.log(paths);
    return {
        paths,
        fallback: false
    };
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(6521)));
module.exports = __webpack_exports__;

})();