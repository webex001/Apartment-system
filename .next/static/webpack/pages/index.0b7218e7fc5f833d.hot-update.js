"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import BannerImage from '../images/showcase.png'\nfunction Banner() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] \",\n        __source: {\n            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/illuminated-tent-beach-beautiful-mysterious-night-sky.jpg\",\n                layout: \"fill\",\n                objectFit: \"cover\",\n                __source: {\n                    fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"group absolute top-1/3 w-full bg-transparent text-center\",\n                __source: {\n                    fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-sm sm:text-3xl bg-transparent text-white mb-5\",\n                        __source: {\n                            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"Not sure where to go? Perfect.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        className: \"text-purple-500 group-hover:bg-red-500 group-hover:text-white bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 focus:outline-none\",\n                        __source: {\n                            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"I'm flexible\"\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQzlCLEVBQWtEO1NBR3pDQyxNQUFNLEdBQUcsQ0FBQztJQUNmLE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTBFOzs7Ozs7OztpRkFDcEZILG1EQUFLO2dCQUFDSSxHQUFHLEVBQUMsQ0FBNEQ7Z0JBQUNDLE1BQU0sRUFBQyxDQUFNO2dCQUNyRkMsU0FBUyxFQUFDLENBQU87Ozs7Ozs7O2tGQUdoQkosQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBEOzs7Ozs7Ozt5RkFDcEVJLENBQUM7d0JBQUNKLFNBQVMsRUFBQyxDQUFvRDs7Ozs7OztrQ0FBQyxDQUE4Qjs7eUZBQy9GSyxDQUFNO3dCQUFDTCxTQUFTLEVBQUMsQ0FDd0U7Ozs7Ozs7a0NBQUMsQ0FBWTs7Ozs7O0FBSXZILENBQUM7S0FkUUYsTUFBTTtBQWdCZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhbm5lci5qcz9iYjZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG4vL2ltcG9ydCBCYW5uZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMvc2hvd2Nhc2UucG5nJ1xuXG5cbmZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzMwMHB4XSBzbTpoLVs0MDBweF0gbGc6aC1bNTAwcHhdIHhsOmgtWzYwMHB4XSAyeGw6aC1bNzAwcHhdIFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbGx1bWluYXRlZC10ZW50LWJlYWNoLWJlYXV0aWZ1bC1teXN0ZXJpb3VzLW5pZ2h0LXNreS5qcGdcIiBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIvPlxuICAgICAgICAgICAgey8qIDxJbWFnZSBjbGFzcz1cImhlcm9cIiBzcmM9XCJcIiBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgYWJzb2x1dGUgdG9wLTEvMyB3LWZ1bGwgYmctdHJhbnNwYXJlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNtOnRleHQtM3hsIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbWItNVwiPk5vdCBzdXJlIHdoZXJlIHRvIGdvPyBQZXJmZWN0LjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTUwMCBncm91cC1ob3ZlcjpiZy1yZWQtNTAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgYmctd2hpdGUgcHgtMTAgcHktNCBzaGFkb3ctbWQgcm91bmRlZC1mdWxsXG4gICAgICAgICAgICAgICAgZm9udC1ib2xkIG15LTMgaG92ZXI6c2hhZG93LXhsIGFjdGl2ZTpzY2FsZS05MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBmb2N1czpvdXRsaW5lLW5vbmVcIj5JJ20gZmxleGlibGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQmFubmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner.js\n");

/***/ })

});