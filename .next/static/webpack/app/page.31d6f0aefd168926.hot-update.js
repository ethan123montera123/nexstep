"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { usePathname } from 'next/navigation'\n\nfunction Menu() {\n    _s();\n    // const pathname = usePathname()\n    // const [currentMenuItem, setCurrentMenuItem] = useState(\"\")\n    // useEffect(() => {\n    //     setCurrentMenuItem(pathname)\n    // }, [pathname])\n    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? \"active\" : \"\"\n    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? \"active\" : \"\"\n    const [isAccordion, setIsAccordion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleAccordion = (key)=>{\n        setIsAccordion((prevState)=>prevState === key ? null : key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"position-relative ps-5  white-clr fw_500 cus-z1\",\n                        onClick: ()=>handleAccordion(1),\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"position-relative  ps-5 fw_500 white-clr cus-z1\",\n                        onClick: ()=>handleAccordion(4),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/about\",\n                            className: \"fw_500 white-clr\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"position-relative  ps-5 fw_500 white-clr cus-z1\",\n                            onClick: ()=>handleAccordion(3),\n                            children: \"Protfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"sub-menu px-lg-4 py-xxl-3 py-2\",\n                            style: {\n                                display: \"\".concat(isAccordion == 3 ? \"block\" : \"none\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"menu-link py-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/study-grid\",\n                                        className: \"fw_500 white-clr\",\n                                        children: \"Case Study\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"menu-link py-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/study-details\",\n                                        className: \"fw_500 white-clr\",\n                                        children: \"Case Study Details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"position-relative  ps-5 fw_500 white-clr cus-z1\",\n                        onClick: ()=>handleAccordion(5),\n                        children: \"Services\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 108,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"position-relative  ps-5 fw_500 white-clr cus-z1\",\n                        onClick: ()=>handleAccordion(4),\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                        lineNumber: 122,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"menu-item position-relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/contact\",\n                        className: \"fw_500\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                        lineNumber: 138,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n                    lineNumber: 137,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\novmo\\\\OneDrive\\\\Desktop\\\\final project\\\\nexstep\\\\xstar-package\\\\xstar-next\\\\components\\\\layout\\\\Menu.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Menu, \"L8ApEue9hMhhrxUMNB1DgvI3cQM=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L01lbnUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QjtBQUM1QixnREFBZ0Q7QUFDaEI7QUFFakIsU0FBU0U7O0lBQ3BCLGlDQUFpQztJQUNqQyw2REFBNkQ7SUFFN0Qsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFFakIsa0ZBQWtGO0lBQ2xGLDRHQUE0RztJQUM1RyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTUksa0JBQWtCLENBQUNDO1FBQ3JCRixlQUFlRyxDQUFBQSxZQUFhQSxjQUFjRCxNQUFNLE9BQU9BO0lBQzNEO0lBRUEscUJBQ0k7a0JBaUJJLDRFQUFDRTtZQUFHQyxXQUFVOzs4QkFDViw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQ1YsNEVBQUNFO3dCQUFPRixXQUFVO3dCQUFrREcsU0FBUyxJQUFNUCxnQkFBZ0I7a0NBQUk7Ozs7Ozs7Ozs7OzhCQWtCM0csOERBQUNLO29CQUFHRCxXQUFVOzhCQUNWLDRFQUFDRTt3QkFBT0YsV0FBVTt3QkFBa0RHLFNBQVMsSUFBTVAsZ0JBQWdCO2tDQUNuRyw0RUFBQ0wsaURBQUlBOzRCQUFDYSxNQUFLOzRCQUFTSixXQUFVO3NDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFnQ3JELDhEQUFDQztvQkFBR0QsV0FBVTs7c0NBQ1YsOERBQUNFOzRCQUFPRixXQUFVOzRCQUFrREcsU0FBUyxJQUFNUCxnQkFBZ0I7c0NBQUk7Ozs7OztzQ0FHdkcsOERBQUNHOzRCQUFHQyxXQUFVOzRCQUFpQ0ssT0FBTztnQ0FBRUMsU0FBUyxHQUF1QyxPQUFwQ1osZUFBZSxJQUFJLFVBQVU7NEJBQVM7OzhDQUN0Ryw4REFBQ087b0NBQUdELFdBQVU7OENBQ1YsNEVBQUNULGlEQUFJQTt3Q0FBQ2EsTUFBSzt3Q0FBY0osV0FBVTtrREFBbUI7Ozs7Ozs7Ozs7OzhDQUUxRCw4REFBQ0M7b0NBQUdELFdBQVU7OENBQ1YsNEVBQUNULGlEQUFJQTt3Q0FBQ2EsTUFBSzt3Q0FBaUJKLFdBQVU7a0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJckUsOERBQUNDO29CQUFHRCxXQUFVOzhCQUNWLDRFQUFDRTt3QkFBT0YsV0FBVTt3QkFBa0RHLFNBQVMsSUFBTVAsZ0JBQWdCO2tDQUFJOzs7Ozs7Ozs7Ozs4QkFZM0csOERBQUNLO29CQUFHRCxXQUFVOzhCQUNWLDRFQUFDRTt3QkFBT0YsV0FBVTt3QkFBa0RHLFNBQVMsSUFBTVAsZ0JBQWdCO2tDQUFJOzs7Ozs7Ozs7Ozs4QkFlM0csOERBQUNLO29CQUFHRCxXQUFVOzhCQUNWLDRFQUFDVCxpREFBSUE7d0JBQUNhLE1BQUs7d0JBQVdKLFdBQVU7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RDtHQTFJd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L01lbnUuanM/Y2NkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xyXG4gICAgLy8gY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXHJcbiAgICAvLyBjb25zdCBbY3VycmVudE1lbnVJdGVtLCBzZXRDdXJyZW50TWVudUl0ZW1dID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldEN1cnJlbnRNZW51SXRlbShwYXRobmFtZSlcclxuICAgIC8vIH0sIFtwYXRobmFtZV0pXHJcblxyXG4gICAgLy8gY29uc3QgY2hlY2tDdXJyZW50TWVudUl0ZW0gPSAocGF0aCkgPT4gY3VycmVudE1lbnVJdGVtID09PSBwYXRoID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgIC8vIGNvbnN0IGNoZWNrUGFyZW50QWN0aXZlID0gKHBhdGhzKSA9PiBwYXRocy5zb21lKHBhdGggPT4gY3VycmVudE1lbnVJdGVtLnN0YXJ0c1dpdGgocGF0aCkpID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgIGNvbnN0IFtpc0FjY29yZGlvbiwgc2V0SXNBY2NvcmRpb25dID0gdXNlU3RhdGUoMClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NvcmRpb24gPSAoa2V5KSA9PiB7XHJcbiAgICAgICAgc2V0SXNBY2NvcmRpb24ocHJldlN0YXRlID0+IHByZXZTdGF0ZSA9PT0ga2V5ID8gbnVsbCA6IGtleSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGRyb3Bkb3duICR7Y2hlY2tQYXJlbnRBY3RpdmUoW1wiL2hvbWUtMDJcIiwgXCIvaG9tZS0wM1wiXSl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGl0ZW0gJHtjaGVja0N1cnJlbnRNZW51SXRlbShcIi9cIil9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLy9cIj5Ib21lIDE8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BpdGVtICR7Y2hlY2tDdXJyZW50TWVudUl0ZW0oXCIvaG9tZS0wMlwiKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvL2hvbWUtMDJcIj5Ib21lIDI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgaXRlbSAke3BhdGhuYW1lID09PSBcIi9hYm91dFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8vYWJvdXRcIj5hYm91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3VzdG9tLW5hdiBkLWxnLWZsZXggZC1ncmlkIGdhcC14eGwtMTAgZ2FwLXhsLTggZ2FwLWxnLTUgZ2FwLW1kLTIgZ2FwLTIgcHQtbGctMCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBwcy01ICB3aGl0ZS1jbHIgZndfNTAwIGN1cy16MVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjY29yZGlvbigxKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51IHB4LWxnLTQgcHkteHhsLTMgcHktMlwiIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWNjb3JkaW9uID09IDEgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkhvbWUgVmVyc2lvbi0xPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXgyXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkhvbWUgVmVyc2lvbi0yPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXgzXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkhvbWUgVmVyc2lvbi0zPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXg0XCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkhvbWUgVmVyc2lvbi00PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0gcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlICBwcy01IGZ3XzUwMCB3aGl0ZS1jbHIgY3VzLXoxXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWNjb3JkaW9uKDQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkFib3V0PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgIHBzLTUgZndfNTAwIHdoaXRlLWNsciBjdXMtejFcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NvcmRpb24oMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudSBweC1sZy00IHB5LXh4bC0zIHB5LTJcIiBzdHlsZT17eyBkaXNwbGF5OiBgJHtpc0FjY29yZGlvbiA9PSAyID8gXCJibG9ja1wiIDogXCJub25lXCJ9YCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtbGluayBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiIGNsYXNzTmFtZT1cImZ3XzUwMCB3aGl0ZS1jbHJcIj5QcmljaW5nIFBsYW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWxpbmsgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPlRlYW0gR3JpZDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtbGluayBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlYW0tZGV0YWlsc1wiIGNsYXNzTmFtZT1cImZ3XzUwMCB3aGl0ZS1jbHJcIj5UZWFtIERldGFpbHM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWxpbmsgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIiBjbGFzc05hbWU9XCJmd181MDAgd2hpdGUtY2xyXCI+RmFxczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtbGluayBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmd181MDAgd2hpdGUtY2xyXCI+Q29udGFjdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtbGluayBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29vcHNcIiBjbGFzc05hbWU9XCJmd181MDAgd2hpdGUtY2xyXCI+T29wcyA0MDQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgIHBzLTUgZndfNTAwIHdoaXRlLWNsciBjdXMtejFcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY2NvcmRpb24oMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm90Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUgcHgtbGctNCBweS14eGwtMyBweS0yXCIgc3R5bGU9e3sgZGlzcGxheTogYCR7aXNBY2NvcmRpb24gPT0gMyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifWAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWxpbmsgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkeS1ncmlkXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkNhc2UgU3R1ZHk8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWxpbmsgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkeS1kZXRhaWxzXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkNhc2UgU3R1ZHkgRGV0YWlsczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0gcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlICBwcy01IGZ3XzUwMCB3aGl0ZS1jbHIgY3VzLXoxXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWNjb3JkaW9uKDUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51IHB4LWxnLTQgcHkteHhsLTMgcHktMlwiIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWNjb3JkaW9uID09IDUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZVwiIGNsYXNzTmFtZT1cImZ3XzUwMCB3aGl0ZS1jbHJcIj5TZXJ2aWNlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZS1kZXRhaWxzXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPlNlcnZpY2UgRGV0YWlsczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSAgcHMtNSBmd181MDAgd2hpdGUtY2xyIGN1cy16MVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjY29yZGlvbig0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51IHB4LWxnLTQgcHkteHhsLTMgcHktMlwiIHN0eWxlPXt7IGRpc3BsYXk6IGAke2lzQWNjb3JkaW9uID09IDQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn1gIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudS1saW5rIHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy1ncmlkXCIgY2xhc3NOYW1lPVwiZndfNTAwIHdoaXRlLWNsclwiPkJsb2cgR3JpZDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lbnUtbGluayBweS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctbGlzdFwiIGNsYXNzTmFtZT1cImZ3XzUwMCB3aGl0ZS1jbHJcIj5CbG9nIExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWxpbmsgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIiBjbGFzc05hbWU9XCJmd181MDAgd2hpdGUtY2xyXCI+QmxvZyBEZXRhaWxzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0gcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJmd181MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJNZW51IiwiaXNBY2NvcmRpb24iLCJzZXRJc0FjY29yZGlvbiIsImhhbmRsZUFjY29yZGlvbiIsImtleSIsInByZXZTdGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/Menu.js\n"));

/***/ })

});