webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/css */ \"./node_modules/@styled-system/css/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/esm/index.js\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useFetch */ \"./hooks/useFetch.ts\");\n\n\n\nvar _jsxFileName = \"/Users/jairo/workspace/acoeshoje/frontend/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__[\"useFetch\"])('/b3'),\n      data = _useFetch.data;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    bgImage: \"url('/wave2.svg')\",\n    bgSize: \"100% 100%\",\n    bgPos: \"center\",\n    backgroundRepeat: \"no-repeat\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      as: \"main\",\n      height: \"100vh\",\n      templateColumns: \"1fr 820px 1fr\",\n      templateRows: \"80px 320px 320px 1fr\",\n      templateAreas: \"\\r '. . .'\\r '. acoes .'\\r '. top .'\\r '. . .'\\r \",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        gridArea: \"acoes\",\n        flexDir: \"row\",\n        justifyContent: \"space-between\",\n        alignItems: \"flex-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n            size: \"2xl\",\n            lineHeight: \"shorter\",\n            fontWeight: \"bold\",\n            color: \"black.800\",\n            children: \"IBOVESPA\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 12\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n            size: \"sm\",\n            lineHeight: \"shorter\",\n            fontWeight: \"normal\",\n            color: \"black.800\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 12\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 10\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n          flexDir: \"row\",\n          children: [!data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n            height: \"60px\",\n            width: \"100px\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 20\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: (data === null || data === void 0 ? void 0 : data.ibovespa.porcentagem.indexOf('+')) > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"ArrowUpIcon\"], {\n              mt: 3,\n              mr: 3,\n              bg: \"#48BB78\",\n              lineHeight: \"shorter\",\n              boxSize: \"42px\",\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 13\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"ArrowDownIcon\"], {\n              mt: 3,\n              mr: 3,\n              bg: \"#F56565\",\n              lineHeight: \"shorter\",\n              boxSize: \"42px\",\n              color: \"white\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n              size: \"2xl\",\n              lineHeight: \"shorter\",\n              fontWeight: \"bold\",\n              color: \"black.400\",\n              children: !data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n                height: \"60px\",\n                width: \"200px\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 11\n              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n                css: Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                  color: '#000',\n                  animation: 'change 3s step-end both'\n                }),\n                children: data === null || data === void 0 ? void 0 : data.ibovespa.cotacao\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 11\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 11\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n              size: \"sm\",\n              ml: 2,\n              lineHeight: \"shorter\",\n              fontWeight: \"normal\",\n              color: \"black.800\",\n              children: \"Pontos\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 11\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          children: [!data ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Skeleton\"], {\n            height: \"60px\",\n            width: \"100px\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 22\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: (data === null || data === void 0 ? void 0 : data.ibovespa.porcentagem.indexOf('+')) > -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n              animation: \"fade\",\n              size: \"2xl\",\n              lineHeight: \"shorter\",\n              fontWeight: \"bold\",\n              color: \"green.400\",\n              children: data === null || data === void 0 ? void 0 : data.ibovespa.porcentagem\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 13\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n              animation: \"fade\",\n              size: \"2xl\",\n              lineHeight: \"shorter\",\n              fontWeight: \"bold\",\n              color: \"red.400\",\n              children: data === null || data === void 0 ? void 0 : data.ibovespa.porcentagem\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n            size: \"sm\",\n            ml: 2,\n            lineHeight: \"shorter\",\n            fontWeight: \"normal\",\n            color: \"gray.600\",\n            children: \"varia\\xE7\\xE3o (hoje)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n        children: \"Continuando conteudo...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 229,\n        columnNumber: 12\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"Vu8iEccf+jcD2wTIZXcZ58xipis=\", false, function () {\n  return [_hooks_useFetch__WEBPACK_IMPORTED_MODULE_4__[\"useFetch\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZUZldGNoIiwiZGF0YSIsImlib3Zlc3BhIiwicG9yY2VudGFnZW0iLCJpbmRleE9mIiwiY3NzIiwiY29sb3IiLCJhbmltYXRpb24iLCJjb3RhY2FvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0U7QUFFQTtBQUVBOztBQXFCRixJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFFVkMsZ0VBQVEsQ0FBZ0IsS0FBaEIsQ0FGRTtBQUFBLE1BRW5CQyxJQUZtQixhQUVuQkEsSUFGbUI7O0FBSTNCLHNCQUVFLHFFQUFDLG9EQUFEO0FBQUssV0FBTyxFQUFDLG1CQUFiO0FBQWlDLFVBQU0sRUFBQyxXQUF4QztBQUFvRCxTQUFLLEVBQUMsUUFBMUQ7QUFBbUUsb0JBQWdCLEVBQUMsV0FBcEY7QUFBQSw0QkFDRSxxRUFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxNQURMO0FBRUUsWUFBTSxFQUFDLE9BRlQ7QUFHRSxxQkFBZSxFQUFDLGVBSGxCO0FBSUUsa0JBQVksRUFBQyxzQkFKZjtBQUtFLG1CQUFhLEVBQUMsbURBTGhCO0FBV0Usb0JBQWMsRUFBQyxRQVhqQjtBQVlFLGdCQUFVLEVBQUMsUUFaYjtBQUFBLDZCQWNFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBQyxPQUFmO0FBQXVCLGVBQU8sRUFBQyxLQUEvQjtBQUFxQyxzQkFBYyxFQUFDLGVBQXBEO0FBQW9FLGtCQUFVLEVBQUMsYUFBL0U7QUFBQSxnQ0FDQyxxRUFBQyxvREFBRDtBQUFBLGtDQUNFLHFFQUFDLHdEQUFEO0FBQVMsZ0JBQUksRUFBQyxLQUFkO0FBQW9CLHNCQUFVLEVBQUMsU0FBL0I7QUFBeUMsc0JBQVUsRUFBQyxNQUFwRDtBQUEyRCxpQkFBSyxFQUFDLFdBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURG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QUEvQjtBQUFxQyx3QkFBVSxFQUFDLFNBQWhEO0FBQTBELHdCQUFVLEVBQUMsTUFBckU7QUFBNEUsbUJBQUssRUFBQyxXQUFsRjtBQUFBLHdCQUNDSCxJQURELGFBQ0NBLElBREQsdUJBQ0NBLElBQUksQ0FBRUMsUUFBTixDQUFlQztBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURDLGdCQUtELHFFQUFDLHdEQUFEO0FBQVMsdUJBQVMsRUFBQyxNQUFuQjtBQUEwQixrQkFBSSxFQUFDLEtBQS9CO0FBQXFDLHdCQUFVLEVBQUMsU0FBaEQ7QUFBMEQsd0JBQVUsRUFBQyxNQUFyRTtBQUE0RSxtQkFBSyxFQUFDLFNBQWxGO0FBQUEsd0JBQ0NGLElBREQsYUFDQ0EsSUFERCx1QkFDQ0EsSUFBSSxDQUFFQyxRQUFOLENBQWVDO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQSwyQkFMRixlQWtCQSxxRUFBQyx3REFBRDtBQUFTLGdCQUFJLEVBQUMsSUFBZDtBQUFtQixjQUFFLEVBQUUsQ0FBdkI7QUFBMEIsc0JBQVUsRUFBQyxTQUFyQztBQUErQyxzQkFBVSxFQUFDLFFBQTFEO0FBQW1FLGlCQUFLLEVBQUMsVUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBOExFLHFFQUFDLG9EQUFEO0FBQUEsNkJBQUsscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBcU1ELENBek1EOztHQUFNSixJO1VBRWFDLHdEOzs7S0FGYkQsSTtBQTRNU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBHcmlkLCBGbGV4LCBCb3gsIFN0YXQsIEljb24sXHJcbiAgU3RhdExhYmVsLFxyXG4gIFN0YXROdW1iZXIsXHJcbiAgU3RhdEhlbHBUZXh0LFxyXG4gIFN0YXRBcnJvdyxcclxuICBTdGF0R3JvdXAsIEJ1dHRvbiwgU2xpZGUsIFNrZWxldG9uLCB1c2VEaXNjbG9zdXJlfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuICBpbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NzcydcclxuXHJcbiAgaW1wb3J0IHsgQXJyb3dVcEljb24sIEFycm93RG93bkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5cclxuICBpbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gJy4uL2hvb2tzL3VzZUZldGNoJ1xyXG5cclxuICBkZWNsYXJlIG1vZHVsZSBCMyB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJYm92ZXNwYSB7XHJcbiAgICAgICAgY290YWNhbzogc3RyaW5nO1xyXG4gICAgICAgIHBvcmNlbnRhZ2VtOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVFNBNCB7XHJcbiAgICAgICAgY290YWNhbzogc3RyaW5nO1xyXG4gICAgICAgIHBvcmNlbnRhZ2VtOiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb290T2JqZWN0IHtcclxuICAgICAgICBpYm92ZXNwYTogSWJvdmVzcGE7XHJcbiAgICAgICAgSVRTQTQ6IElUU0E0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VGZXRjaDxCMy5Sb290T2JqZWN0PignL2IzJylcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Qm94IGJnSW1hZ2U9XCJ1cmwoJy93YXZlMi5zdmcnKVwiIGJnU2l6ZT1cIjEwMCUgMTAwJVwiIGJnUG9zPVwiY2VudGVyXCIgYmFja2dyb3VuZFJlcGVhdD1cIm5vLXJlcGVhdFwiPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGFzPVwibWFpblwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxyXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz1cIjFmciA4MjBweCAxZnJcIlxyXG4gICAgICAgIHRlbXBsYXRlUm93cz1cIjgwcHggMzIwcHggMzIwcHggMWZyXCJcclxuICAgICAgICB0ZW1wbGF0ZUFyZWFzPVwiXHJcbiAgICAgICAgJy4gLiAuJ1xyXG4gICAgICAgICcuIGFjb2VzIC4nXHJcbiAgICAgICAgJy4gdG9wIC4nXHJcbiAgICAgICAgJy4gLiAuJ1xyXG4gICAgICAgIFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggZ3JpZEFyZWE9XCJhY29lc1wiIGZsZXhEaXI9XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgPEJveD5cclxuICAgICAgICAgICA8SGVhZGluZyBzaXplPVwiMnhsXCIgbGluZUhlaWdodD1cInNob3J0ZXJcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwiYmxhY2suODAwXCI+SUJPVkVTUEE8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgbGluZUhlaWdodD1cInNob3J0ZXJcIiBmb250V2VpZ2h0PVwibm9ybWFsXCIgY29sb3I9XCJibGFjay44MDBcIj48L0hlYWRpbmc+XHJcbiAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJyb3dcIj5cclxuXHJcblxyXG4gICAgICAgICAgeyFkYXRhID8gPFNrZWxldG9uIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjEwMHB4XCIvPiA6IFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAge2RhdGE/Lmlib3Zlc3BhLnBvcmNlbnRhZ2VtLmluZGV4T2YoJysnKSA+IC0xID8gXHJcbiAgICAgICAgICAgIDxBcnJvd1VwSWNvbiBtdD17M30gbXI9ezN9IGJnPVwiIzQ4QkI3OFwiIGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgYm94U2l6ZT1cIjQycHhcIiBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgPEFycm93RG93bkljb24gbXQ9ezN9IG1yPXszfSBiZz1cIiNGNTY1NjVcIiBsaW5lSGVpZ2h0PVwic2hvcnRlclwiIGJveFNpemU9XCI0MnB4XCIgY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIjJ4bFwiIGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cImJsYWNrLjQwMFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIHshZGF0YSA/IFxyXG4gICAgICAgICAgPFNrZWxldG9uIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjIwMHB4XCIgLz4gOiBcclxuICAgICAgICAgIDxCb3ggY3NzPXtjc3Moe1xyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICBhbmltYXRpb246ICdjaGFuZ2UgM3Mgc3RlcC1lbmQgYm90aCcsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIHtkYXRhPy5pYm92ZXNwYS5jb3RhY2FvfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgbWw9ezJ9IGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgZm9udFdlaWdodD1cIm5vcm1hbFwiIGNvbG9yPVwiYmxhY2suODAwXCI+UG9udG9zPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgXHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8Qm94PlxyXG4gICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHshZGF0YSA/IDxTa2VsZXRvbiBoZWlnaHQ9XCI2MHB4XCIgd2lkdGg9XCIxMDBweFwiLz4gOiBcclxuXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtkYXRhPy5pYm92ZXNwYS5wb3JjZW50YWdlbS5pbmRleE9mKCcrJykgPiAtMSA/IFxyXG4gICAgICAgICAgICA8SGVhZGluZyBhbmltYXRpb249XCJmYWRlXCIgc2l6ZT1cIjJ4bFwiIGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cImdyZWVuLjQwMFwiPlxyXG4gICAgICAgICAgICB7ZGF0YT8uaWJvdmVzcGEucG9yY2VudGFnZW19XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgPEhlYWRpbmcgYW5pbWF0aW9uPVwiZmFkZVwiIHNpemU9XCIyeGxcIiBsaW5lSGVpZ2h0PVwic2hvcnRlclwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJyZWQuNDAwXCI+XHJcbiAgICAgICAgICAgIHtkYXRhPy5pYm92ZXNwYS5wb3JjZW50YWdlbX1cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgbWw9ezJ9IGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgZm9udFdlaWdodD1cIm5vcm1hbFwiIGNvbG9yPVwiZ3JheS42MDBcIj52YXJpYcOnw6NvIChob2plKTwvSGVhZGluZz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuXHJcbnsvKiBcclxuICAgICAgICA8RmxleCBncmlkQXJlYT1cInRvcFwiIGZsZXhEaXI9XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJmbGV4LWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIiBtYXhXPVwiNTAlXCI+XHJcblxyXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+TWFpb3JlcyBBbHRhczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8U3RhdEdyb3VwIG10PXs2fSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPFN0YXQgbWF4Vz1cIjgycHhcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRMYWJlbD5TZW50PC9TdGF0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TnVtYmVyIGZvbnRTaXplPVwiMnhsXCI+NSw2NzwvU3RhdE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRIZWxwVGV4dCBmb250U2l6ZT1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRBcnJvdyB0eXBlPVwiaW5jcmVhc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDIzLjM2JVxyXG4gICAgICAgICAgICAgICAgICA8L1N0YXRIZWxwVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhdCBtYXhXPVwiODJweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdExhYmVsPlNlbnQ8L1N0YXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFN0YXROdW1iZXIgZm9udFNpemU9XCIyeGxcIj4yNDUsNjc8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImluY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAyMy4zNiVcclxuICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YXQgbWF4Vz1cIjgycHhcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRMYWJlbD5TZW50PC9TdGF0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TnVtYmVyIGZvbnRTaXplPVwiMnhsXCI+NDUsNjc8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImluY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAyMy4zNiVcclxuICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YXQgbWF4Vz1cIjgycHhcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRMYWJlbD5TZW50PC9TdGF0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TnVtYmVyIGZvbnRTaXplPVwiMnhsXCI+NzUsNjc8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImluY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAyMy4zNiVcclxuICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YXQgbWF4Vz1cIjgycHhcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRMYWJlbD5TZW50PC9TdGF0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TnVtYmVyIGZvbnRTaXplPVwiMnhsXCI+NDUsNjc8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImluY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAyMy4zNiVcclxuICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcbiAgICAgICAgICAgICAgPC9TdGF0R3JvdXA+XHJcblxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIiBtYXhXPVwiNTAlXCI+XHJcbiAgICAgICAgICA8SGVhZGluZyBhbGlnblNlbGY9XCJmbGV4LXN0YXJ0XCIgc2l6ZT1cIm1kXCI+TWFpb3JlcyBCYWl4YXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxTdGF0R3JvdXAgbXQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxTdGF0IG1heFc9XCI4MnB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TGFiZWw+Q2xpY2tlZDwvU3RhdExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdE51bWJlciBmb250U2l6ZT1cIjJ4bFwiPjE0NSwwMDwvU3RhdE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRIZWxwVGV4dCBmb250U2l6ZT1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRBcnJvdyB0eXBlPVwiZGVjcmVhc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDkuMDUlXHJcbiAgICAgICAgICAgICAgICAgIDwvU3RhdEhlbHBUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TdGF0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGF0IG1heFc9XCI4MnB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TGFiZWw+Q2xpY2tlZDwvU3RhdExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdE51bWJlciBmb250U2l6ZT1cIjJ4bFwiPjQ1LDk0PC9TdGF0TnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdEhlbHBUZXh0IGZvbnRTaXplPVwieHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdEFycm93IHR5cGU9XCJkZWNyZWFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOS4wNSVcclxuICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YXQgbWF4Vz1cIjgycHhcIj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRMYWJlbD5DbGlja2VkPC9TdGF0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TnVtYmVyIGZvbnRTaXplPVwiMnhsXCI+NDUsOTM8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImRlY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA5LjA1JVxyXG4gICAgICAgICAgICAgICAgICA8L1N0YXRIZWxwVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhdCBtYXhXPVwiODJweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdExhYmVsPkNsaWNrZWQ8L1N0YXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFN0YXROdW1iZXIgZm9udFNpemU9XCIyeGxcIj40NSwzNDwvU3RhdE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFN0YXRIZWxwVGV4dCBmb250U2l6ZT1cInhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRBcnJvdyB0eXBlPVwiZGVjcmVhc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDkuMDUlXHJcbiAgICAgICAgICAgICAgICAgIDwvU3RhdEhlbHBUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TdGF0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdGF0IG1heFc9XCI4MnB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0TGFiZWw+Q2xpY2tlZDwvU3RhdExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U3RhdE51bWJlciBmb250U2l6ZT1cIjJ4bFwiPjUsMDM8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQgZm9udFNpemU9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImRlY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA5LjA1JVxyXG4gICAgICAgICAgICAgICAgICA8L1N0YXRIZWxwVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdD5cclxuICAgICAgICAgICAgICA8L1N0YXRHcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICA8L0ZsZXg+ICovfVxyXG5cclxuXHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxCb3g+PEhlYWRpbmc+Q29udGludWFuZG8gY29udGV1ZG8uLi48L0hlYWRpbmc+PC9Cb3g+XHJcblxyXG4gICAgPC9Cb3g+XHJcblxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})