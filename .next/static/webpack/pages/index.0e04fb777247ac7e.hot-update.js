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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//import Image from \"next/image\"\n//import BannerImage from '../images/showcase.png'\nfunction Banner() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-[url('/img/hero-pattern.svg')] relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] \",\n        __source: {\n            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {\n                src: \"https://links.papareact.com/0fm\",\n                layout: \"fill\",\n                objectFit: \"cover\",\n                __source: {\n                    fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"group absolute top-1/2 w-full bg-transparent text-center\",\n                __source: {\n                    fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-sm sm:text-3xl bg-transparent\",\n                        __source: {\n                            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"Not sure where to go? Perfect.\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        className: \"text-purple-500 group-hover:bg-red-500 group-hover:text-white bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 focus:outline-none\",\n                        __source: {\n                            fileName: \"/Users/davidyakubu/Documents/GitHub/Apartment-system/components/Banner.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: \"I'm flexible\"\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLEVBQWdDO0FBQ2hDLEVBQWtEO1NBR3pDQSxNQUFNLEdBQUcsQ0FBQztJQUNmLE1BQU0sdUVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTRHOzs7Ozs7OztpRkFDdEhDLEtBQUs7Z0JBQUNDLEdBQUcsRUFBQyxDQUFpQztnQkFBQ0MsTUFBTSxFQUFDLENBQU07Z0JBQzFEQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7a0ZBR2hCTCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEQ7Ozs7Ozs7O3lGQUNwRUssQ0FBQzt3QkFBQ0wsU0FBUyxFQUFDLENBQW9DOzs7Ozs7O2tDQUFDLENBQThCOzt5RkFDL0VNLENBQU07d0JBQUNOLFNBQVMsRUFBQyxDQUN3RTs7Ozs7OztrQ0FBQyxDQUFZOzs7Ozs7QUFJdkgsQ0FBQztLQWRRRixNQUFNO0FBZ0JmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyLmpzP2JiNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuLy9pbXBvcnQgQmFubmVySW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3Nob3djYXNlLnBuZydcblxuXG5mdW5jdGlvbiBCYW5uZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bdXJsKCcvaW1nL2hlcm8tcGF0dGVybi5zdmcnKV0gcmVsYXRpdmUgaC1bMzAwcHhdIHNtOmgtWzQwMHB4XSBsZzpoLVs1MDBweF0geGw6aC1bNjAwcHhdIDJ4bDpoLVs3MDBweF0gXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzBmbVwiIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIi8+XG4gICAgICAgICAgICB7LyogPEltYWdlIGNsYXNzPVwiaGVyb1wiIHNyYz1cIlwiIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIi8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBhYnNvbHV0ZSB0b3AtMS8yIHctZnVsbCBiZy10cmFuc3BhcmVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC0zeGwgYmctdHJhbnNwYXJlbnRcIj5Ob3Qgc3VyZSB3aGVyZSB0byBnbz8gUGVyZmVjdC48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS01MDAgZ3JvdXAtaG92ZXI6YmctcmVkLTUwMCBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIGJnLXdoaXRlIHB4LTEwIHB5LTQgc2hhZG93LW1kIHJvdW5kZWQtZnVsbFxuICAgICAgICAgICAgICAgIGZvbnQtYm9sZCBteS0zIGhvdmVyOnNoYWRvdy14bCBhY3RpdmU6c2NhbGUtOTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZm9jdXM6b3V0bGluZS1ub25lXCI+SSdtIGZsZXhpYmxlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcbiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Banner.js\n");

/***/ })

});