module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavbarMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarMobile */ \"./components/Header/NavbarMobile.js\");\n\nvar _jsxFileName = \"/home/rinspiron/Desktop/portfolio/portfolio/components/Header/Header.js\";\n\n\n\nconst Header = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    as: \"header\",\n    position: \"fixed\",\n    zIndex: \"1000\",\n    p: \"1rem 2rem\",\n    justify: \"space-between\",\n    w: \"100%\",\n    align: \"center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      children: \"R\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavbarMobile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanM/ZjMxZSJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixzQkFDRSxxRUFBQyxxREFBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsWUFBUSxFQUFDLE9BRlg7QUFHRSxVQUFNLEVBQUMsTUFIVDtBQUlFLEtBQUMsRUFBQyxXQUpKO0FBS0UsV0FBTyxFQUFDLGVBTFY7QUFNRSxLQUFDLEVBQUMsTUFOSjtBQU9FLFNBQUssRUFBQyxRQVBSO0FBQUEsNEJBU0UscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFVRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBY0QsQ0FmRDs7QUFpQmVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOYXZiYXJNb2JpbGUgZnJvbSBcIi4vTmF2YmFyTW9iaWxlXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICB6SW5kZXg9XCIxMDAwXCJcbiAgICAgIHA9XCIxcmVtIDJyZW1cIlxuICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxUZXh0PlI8L1RleHQ+XG4gICAgICA8TmF2YmFyTW9iaWxlIC8+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n");

/***/ }),

/***/ "./components/Header/NavbarMobile.js":
/*!*******************************************!*\
  !*** ./components/Header/NavbarMobile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ \"react-icons/gi\");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/rinspiron/Desktop/portfolio/portfolio/components/Header/NavbarMobile.js\";\n\n\n\n\nconst NavbarMobile = () => {\n  const {\n    isOpen,\n    onOpen,\n    onClose\n  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useDisclosure\"])();\n  const btnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    as: \"nav\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n      \"aria-label\": \"Open Navigation Menu\",\n      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__[\"GiHamburgerMenu\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, undefined),\n      onClick: onOpen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Drawer\"], {\n      isOpen: isOpen,\n      placement: \"top\",\n      onClose: onClose,\n      finalFocusRef: btnRef,\n      isFullHeight: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerOverlay\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerContent\"], {\n        background: \"transparent\",\n        backdropFilter: \"blur(20px)\",\n        py: \"2rem\",\n        fontSize: \"2rem\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerCloseButton\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerHeader\"], {\n          fontFamily: \"Rajdhani\",\n          textTransform: \"uppercase\",\n          children: \"Geremi Ramos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerBody\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n            placeholder: \"Type here...\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"DrawerFooter\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            variant: \"outline\",\n            mr: 3,\n            onClick: onClose,\n            children: \"Cancel\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            colorScheme: \"blue\",\n            children: \"Save\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavbarMobile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9OYXZiYXJNb2JpbGUuanM/Y2YzMiJdLCJuYW1lcyI6WyJOYXZiYXJNb2JpbGUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlRGlzY2xvc3VyZSIsImJ0blJlZiIsInVzZVJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBZUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFVBQVY7QUFBa0JDO0FBQWxCLE1BQThCQyxzRUFBYSxFQUFqRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7QUFFQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQUEsNEJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxvQkFBVyxzQkFEYjtBQUVFLFVBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZSO0FBR0UsYUFBTyxFQUFFSjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSxxRUFBQyx1REFBRDtBQUNFLFlBQU0sRUFBRUQsTUFEVjtBQUVFLGVBQVMsRUFBQyxLQUZaO0FBR0UsYUFBTyxFQUFFRSxPQUhYO0FBSUUsbUJBQWEsRUFBRUUsTUFKakI7QUFLRSxrQkFBWSxNQUxkO0FBQUEsOEJBT0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFLHFFQUFDLDhEQUFEO0FBQ0Usa0JBQVUsRUFBQyxhQURiO0FBRUUsc0JBQWMsRUFBQyxZQUZqQjtBQUdFLFVBQUUsRUFBQyxNQUhMO0FBSUUsZ0JBQVEsRUFBQyxNQUpYO0FBQUEsZ0NBTUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FLHFFQUFDLDZEQUFEO0FBQWMsb0JBQVUsRUFBQyxVQUF6QjtBQUFvQyx1QkFBYSxFQUFDLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBV0UscUVBQUMsMkRBQUQ7QUFBQSxpQ0FDRSxxRUFBQyxzREFBRDtBQUFPLHVCQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEYsZUFlRSxxRUFBQyw2REFBRDtBQUFBLGtDQUNFLHFFQUFDLHVEQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUEwQixjQUFFLEVBQUUsQ0FBOUI7QUFBaUMsbUJBQU8sRUFBRUYsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRSxxRUFBQyx1REFBRDtBQUFRLHVCQUFXLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF3Q0QsQ0E1Q0Q7O0FBOENlSCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL05hdmJhck1vYmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBCb3gsXG4gIERyYXdlcixcbiAgRHJhd2VyQm9keSxcbiAgRHJhd2VyRm9vdGVyLFxuICBEcmF3ZXJIZWFkZXIsXG4gIERyYXdlck92ZXJsYXksXG4gIERyYXdlckNvbnRlbnQsXG4gIERyYXdlckNsb3NlQnV0dG9uLFxuICBCdXR0b24sXG4gIElucHV0LFxuICB1c2VEaXNjbG9zdXJlLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcblxuY29uc3QgTmF2YmFyTW9iaWxlID0gKCkgPT4ge1xuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IGJ0blJlZiA9IHVzZVJlZigpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cIm5hdlwiPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gTmF2aWdhdGlvbiBNZW51XCJcbiAgICAgICAgaWNvbj17PEdpSGFtYnVyZ2VyTWVudSAvPn1cbiAgICAgICAgb25DbGljaz17b25PcGVufVxuICAgICAgLz5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIGZpbmFsRm9jdXNSZWY9e2J0blJlZn1cbiAgICAgICAgaXNGdWxsSGVpZ2h0XG4gICAgICA+XG4gICAgICAgIDxEcmF3ZXJPdmVybGF5IC8+XG4gICAgICAgIDxEcmF3ZXJDb250ZW50XG4gICAgICAgICAgYmFja2dyb3VuZD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBiYWNrZHJvcEZpbHRlcj1cImJsdXIoMjBweClcIlxuICAgICAgICAgIHB5PVwiMnJlbVwiXG4gICAgICAgICAgZm9udFNpemU9XCIycmVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxEcmF3ZXJDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDxEcmF3ZXJIZWFkZXIgZm9udEZhbWlseT1cIlJhamRoYW5pXCIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgR2VyZW1pIFJhbW9zXG4gICAgICAgICAgPC9EcmF3ZXJIZWFkZXI+XG5cbiAgICAgICAgICA8RHJhd2VyQm9keT5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZS4uLlwiIC8+XG4gICAgICAgICAgPC9EcmF3ZXJCb2R5PlxuXG4gICAgICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPC9EcmF3ZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJNb2JpbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/NavbarMobile.js\n");

/***/ }),

/***/ "./components/Typewriter/index.js":
/*!****************************************!*\
  !*** ./components/Typewriter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-typewriter */ \"react-simple-typewriter\");\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/rinspiron/Desktop/portfolio/portfolio/components/Typewriter/index.js\";\n\n\nconst index = ({\n  loop,\n  words,\n  cursor,\n  speed\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_1__[\"Typewriter\"], {\n    words: words,\n    loop: loop,\n    cursor: cursor,\n    cursorStyle: \"|\",\n    typeSpeed: speed,\n    deleteSpeed: 50,\n    delaySpeed: 2000 // onLoopDone={handleDone}\n    // onType={handleType}\n\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1R5cGV3cml0ZXIvaW5kZXguanM/YjM1NiJdLCJuYW1lcyI6WyJpbmRleCIsImxvb3AiLCJ3b3JkcyIsImN1cnNvciIsInNwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLFFBQWY7QUFBdUJDO0FBQXZCLENBQUQsS0FBb0M7QUFDaEQsc0JBQ0UscUVBQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUVGLEtBRFQ7QUFFRSxRQUFJLEVBQUVELElBRlI7QUFHRSxVQUFNLEVBQUVFLE1BSFY7QUFJRSxlQUFXLEVBQUMsR0FKZDtBQUtFLGFBQVMsRUFBRUMsS0FMYjtBQU1FLGVBQVcsRUFBRSxFQU5mO0FBT0UsY0FBVSxFQUFFLElBUGQsQ0FRRTtBQUNBOztBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBZEQ7O0FBZ0JlSixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVHlwZXdyaXRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGV3cml0ZXIgfSBmcm9tIFwicmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXJcIjtcblxuY29uc3QgaW5kZXggPSAoeyBsb29wLCB3b3JkcywgY3Vyc29yLCBzcGVlZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFR5cGV3cml0ZXJcbiAgICAgIHdvcmRzPXt3b3Jkc31cbiAgICAgIGxvb3A9e2xvb3B9XG4gICAgICBjdXJzb3I9e2N1cnNvcn1cbiAgICAgIGN1cnNvclN0eWxlPVwifFwiXG4gICAgICB0eXBlU3BlZWQ9e3NwZWVkfVxuICAgICAgZGVsZXRlU3BlZWQ9ezUwfVxuICAgICAgZGVsYXlTcGVlZD17MjAwMH1cbiAgICAgIC8vIG9uTG9vcERvbmU9e2hhbmRsZURvbmV9XG4gICAgICAvLyBvblR5cGU9e2hhbmRsZVR5cGV9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Typewriter/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Typewriter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Typewriter */ \"./components/Typewriter/index.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.js\");\n\nvar _jsxFileName = \"/home/rinspiron/Desktop/portfolio/portfolio/pages/index.js\";\n\n\n\n\n\n\nconst DisplacementSphere = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/DisplacementSphere */ \"./components/DisplacementSphere/index.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/DisplacementSphere */ \"./components/DisplacementSphere/index.js\")],\n    modules: [\"../components/DisplacementSphere\"]\n  }\n});\nfunction Home() {\n  const MotionBox = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\n  const MotionFlex = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MotionBox, {\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        duration: 1\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DisplacementSphere, {\n        className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.introBackground,\n        theme: {\n          rgbBackground: \"25 25 25\",\n          themeId: \"light\",\n          colorWhite: \"#ffffff\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MotionFlex, {\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        duration: 1\n      },\n      align: \"center\",\n      justify: \"center\",\n      minH: \"100vh\",\n      p: {\n        base: \"0 0.5rem 0 2rem\"\n      },\n      position: \"relative\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        w: {\n          base: \"100%\",\n          md: \"80%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n          color: \"rgba(255,255,255, 0.75)\",\n          fontFamily: \"Rajdhani\",\n          fontSize: \"2.25rem\",\n          fontWeight: \"600\",\n          letterSpacing: \"3px\",\n          textShadow: \"-4px 3px 2px rgba(50,50,50, 1)\",\n          textTransform: \"uppercase\",\n          children: \"Geremi Ramos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          spacing: \"-1rem\",\n          pb: \"10vh\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n            align: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n              fontFamily: \"Montserrat\",\n              fontSize: {\n                base: \"3.5rem\",\n                md: \"5rem\",\n                lg: \"7rem\",\n                xl: \"9rem\"\n              },\n              mr: \"1.5rem\",\n              letterSpacing: \"2px\",\n              textShadow: \"-4px 3px 2px rgba(50,50,50, 1)\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Typewriter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                words: [\"Software\"],\n                loop: 1,\n                speed: 80\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n              bg: \"#e7537a80\",\n              flex: \"1\",\n              h: \"2.5px\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n            color: \"#e7537b\",\n            fontFamily: \"Montserrat\",\n            fontSize: {\n              base: \"3.5rem\",\n              md: \"5rem\",\n              lg: \"7rem\",\n              xl: \"9rem\"\n            },\n            letterSpacing: \"2px\",\n            textShadow: \"-4px 3px 2px rgba(50,50,50, 1)\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Typewriter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              cursor: true,\n              loop: false,\n              words: [\"Developer\"] // speed={50}\n\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRpc3BsYWNlbWVudFNwaGVyZSIsImR5bmFtaWMiLCJIb21lIiwiTW90aW9uQm94IiwibW90aW9uIiwiQm94IiwiTW90aW9uRmxleCIsIkZsZXgiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJzdHlsZXMiLCJpbnRyb0JhY2tncm91bmQiLCJyZ2JCYWNrZ3JvdW5kIiwidGhlbWVJZCIsImNvbG9yV2hpdGUiLCJiYXNlIiwibWQiLCJsZyIsInhsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0EsTUFBTUEsa0JBQWtCLEdBQUdDLG1EQUFPLENBQUMsTUFDakMsaUtBRGdDO0FBQUE7QUFBQSx3Q0FDekIsa0ZBRHlCO0FBQUEsY0FDekIsa0NBRHlCO0FBQUE7QUFBQSxFQUFsQztBQUllLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTUMsU0FBUyxHQUFHQyw0REFBTSxDQUFDQyxvREFBRCxDQUF4QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsNERBQU0sQ0FBQ0cscURBQUQsQ0FBekI7QUFFQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDRCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLFNBQUQ7QUFDRSxhQUFPLEVBQUU7QUFDUEMsZUFBTyxFQUFFO0FBREYsT0FEWDtBQUlFLGFBQU8sRUFBRTtBQUNQQSxlQUFPLEVBQUU7QUFERixPQUpYO0FBT0UsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFO0FBREEsT0FQZDtBQUFBLDZCQVdFLHFFQUFDLGtCQUFEO0FBQ0UsaUJBQVMsRUFBRUMsK0RBQU0sQ0FBQ0MsZUFEcEI7QUFFRSxhQUFLLEVBQUU7QUFDTEMsdUJBQWEsRUFBRSxVQURWO0FBRUxDLGlCQUFPLEVBQUUsT0FGSjtBQUdMQyxvQkFBVSxFQUFFO0FBSFA7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBc0JFLHFFQUFDLFVBQUQ7QUFDRSxhQUFPLEVBQUU7QUFDUE4sZUFBTyxFQUFFO0FBREYsT0FEWDtBQUlFLGFBQU8sRUFBRTtBQUNQQSxlQUFPLEVBQUU7QUFERixPQUpYO0FBT0UsZ0JBQVUsRUFBRTtBQUNWQyxnQkFBUSxFQUFFO0FBREEsT0FQZDtBQVVFLFdBQUssRUFBQyxRQVZSO0FBV0UsYUFBTyxFQUFDLFFBWFY7QUFZRSxVQUFJLEVBQUMsT0FaUDtBQWFFLE9BQUMsRUFBRTtBQUFFTSxZQUFJLEVBQUU7QUFBUixPQWJMO0FBY0UsY0FBUSxFQUFDLFVBZFg7QUFBQSw2QkFnQkUscUVBQUMsc0RBQUQ7QUFBTyxTQUFDLEVBQUU7QUFBRUEsY0FBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQUUsRUFBRTtBQUFwQixTQUFWO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFDRSxlQUFLLEVBQUMseUJBRFI7QUFFRSxvQkFBVSxFQUFDLFVBRmI7QUFHRSxrQkFBUSxFQUFDLFNBSFg7QUFJRSxvQkFBVSxFQUFDLEtBSmI7QUFLRSx1QkFBYSxFQUFDLEtBTGhCO0FBTUUsb0JBQVUsRUFBQyxnQ0FOYjtBQU9FLHVCQUFhLEVBQUMsV0FQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRSxxRUFBQyxzREFBRDtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUF1QixZQUFFLEVBQUMsTUFBMUI7QUFBQSxrQ0FDRSxxRUFBQyxxREFBRDtBQUFNLGlCQUFLLEVBQUMsUUFBWjtBQUFBLG9DQUNFLHFFQUFDLHdEQUFEO0FBQ0Usd0JBQVUsRUFBQyxZQURiO0FBRUUsc0JBQVEsRUFBRTtBQUNSRCxvQkFBSSxFQUFFLFFBREU7QUFFUkMsa0JBQUUsRUFBRSxNQUZJO0FBR1JDLGtCQUFFLEVBQUUsTUFISTtBQUlSQyxrQkFBRSxFQUFFO0FBSkksZUFGWjtBQVFFLGdCQUFFLEVBQUMsUUFSTDtBQVNFLDJCQUFhLEVBQUMsS0FUaEI7QUFVRSx3QkFBVSxFQUFDLGdDQVZiO0FBQUEscUNBWUUscUVBQUMsOERBQUQ7QUFBWSxxQkFBSyxFQUFFLENBQUMsVUFBRCxDQUFuQjtBQUFpQyxvQkFBSSxFQUFFLENBQXZDO0FBQTBDLHFCQUFLLEVBQUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFlRSxxRUFBQyxvREFBRDtBQUFLLGdCQUFFLEVBQUMsV0FBUjtBQUFvQixrQkFBSSxFQUFDLEdBQXpCO0FBQTZCLGVBQUMsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWtCRSxxRUFBQyx3REFBRDtBQUNFLGlCQUFLLEVBQUMsU0FEUjtBQUVFLHNCQUFVLEVBQUMsWUFGYjtBQUdFLG9CQUFRLEVBQUU7QUFBRUgsa0JBQUksRUFBRSxRQUFSO0FBQWtCQyxnQkFBRSxFQUFFLE1BQXRCO0FBQThCQyxnQkFBRSxFQUFFLE1BQWxDO0FBQTBDQyxnQkFBRSxFQUFFO0FBQTlDLGFBSFo7QUFJRSx5QkFBYSxFQUFDLEtBSmhCO0FBS0Usc0JBQVUsRUFBQyxnQ0FMYjtBQUFBLG1DQU9FLHFFQUFDLDhEQUFEO0FBQ0Usb0JBQU0sRUFBRSxJQURWO0FBRUUsa0JBQUksRUFBRSxLQUZSO0FBR0UsbUJBQUssRUFBRSxDQUFDLFdBQUQsQ0FIVCxDQUtFOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBGbGV4LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBUeXBld3JpdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1R5cGV3cml0ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuY29uc3QgRGlzcGxhY2VtZW50U3BoZXJlID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0Rpc3BsYWNlbWVudFNwaGVyZVwiKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgTW90aW9uQm94ID0gbW90aW9uKEJveCk7XG4gIGNvbnN0IE1vdGlvbkZsZXggPSBtb3Rpb24oRmxleCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1vdGlvbkJveFxuICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfX1cbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIH19XG4gICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPERpc3BsYWNlbWVudFNwaGVyZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmludHJvQmFja2dyb3VuZH1cbiAgICAgICAgICB0aGVtZT17e1xuICAgICAgICAgICAgcmdiQmFja2dyb3VuZDogXCIyNSAyNSAyNVwiLFxuICAgICAgICAgICAgdGhlbWVJZDogXCJsaWdodFwiLFxuICAgICAgICAgICAgY29sb3JXaGl0ZTogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTW90aW9uQm94PlxuICAgICAgPE1vdGlvbkZsZXhcbiAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH19XG4gICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIH19XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgICAgIHA9e3sgYmFzZTogXCIwIDAuNXJlbSAwIDJyZW1cIiB9fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgID5cbiAgICAgICAgPFN0YWNrIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjgwJVwiIH19PlxuICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICBjb2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsIDAuNzUpXCJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJSYWpkaGFuaVwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjIuMjVyZW1cIlxuICAgICAgICAgICAgZm9udFdlaWdodD1cIjYwMFwiXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwiM3B4XCJcbiAgICAgICAgICAgIHRleHRTaGFkb3c9XCItNHB4IDNweCAycHggcmdiYSg1MCw1MCw1MCwgMSlcIlxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2VyZW1pIFJhbW9zXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiLTFyZW1cIiBwYj1cIjEwdmhcIj5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXRcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7XG4gICAgICAgICAgICAgICAgICBiYXNlOiBcIjMuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgbWQ6IFwiNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgbGc6IFwiN3JlbVwiLFxuICAgICAgICAgICAgICAgICAgeGw6IFwiOXJlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbXI9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCIycHhcIlxuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c9XCItNHB4IDNweCAycHggcmdiYSg1MCw1MCw1MCwgMSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXIgd29yZHM9e1tcIlNvZnR3YXJlXCJdfSBsb29wPXsxfSBzcGVlZD17ODB9IC8+XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPEJveCBiZz1cIiNlNzUzN2E4MFwiIGZsZXg9XCIxXCIgaD1cIjIuNXB4XCI+PC9Cb3g+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgICBjb2xvcj1cIiNlNzUzN2JcIlxuICAgICAgICAgICAgICBmb250RmFtaWx5PVwiTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMy41cmVtXCIsIG1kOiBcIjVyZW1cIiwgbGc6IFwiN3JlbVwiLCB4bDogXCI5cmVtXCIgfX1cbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIjJweFwiXG4gICAgICAgICAgICAgIHRleHRTaGFkb3c9XCItNHB4IDNweCAycHggcmdiYSg1MCw1MCw1MCwgMSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgICAgIGN1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBsb29wPXtmYWxzZX1cbiAgICAgICAgICAgICAgICB3b3Jkcz17W1wiRGV2ZWxvcGVyXCJdfVxuXG4gICAgICAgICAgICAgICAgLy8gc3BlZWQ9ezUwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L01vdGlvbkZsZXg+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"white\": \"Home_white__2TQMr\",\n\t\"black\": \"Home_black__3OZ5X\",\n\t\"container\": \"Home_container__3sao-\",\n\t\"introBackground\": \"Home_introBackground__3_K1c\",\n\t\"titleSection\": \"Home_titleSection__1xpZ4\",\n\t\"title\": \"Home_title__28pEg\",\n\t\"subtitle\": \"Home_subtitle__3IlVB\",\n\t\"typewriter\": \"Home_typewriter__1fir2\",\n\t\"subtitleLine\": \"Home_subtitleLine__bACaK\",\n\t\"introSection\": \"Home_introSection__1icZp\",\n\t\"introLeft\": \"Home_introLeft__3_dNL\",\n\t\"introRight\": \"Home_introRight__3Zngg\",\n\t\"profilePicture\": \"Home_profilePicture__1K99L\",\n\t\"pronounciation\": \"Home_pronounciation__VEQLv\",\n\t\"introDescription\": \"Home_introDescription__1oh-e\",\n\t\"projectsSection\": \"Home_projectsSection__33Egq\",\n\t\"skillsSection\": \"Home_skillsSection__3tOeu\",\n\t\"skillsHeader\": \"Home_skillsHeader__2VeU_\",\n\t\"skillsContainer\": \"Home_skillsContainer__1Rpz9\",\n\t\"headerGrid\": \"Home_headerGrid__RjiP3\",\n\t\"col\": \"Home_col__1k1BC\",\n\t\"thirdGrid\": \"Home_thirdGrid__37-t9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz81MzVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3aGl0ZVwiOiBcIkhvbWVfd2hpdGVfXzJUUU1yXCIsXG5cdFwiYmxhY2tcIjogXCJIb21lX2JsYWNrX18zT1o1WFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18zc2FvLVwiLFxuXHRcImludHJvQmFja2dyb3VuZFwiOiBcIkhvbWVfaW50cm9CYWNrZ3JvdW5kX18zX0sxY1wiLFxuXHRcInRpdGxlU2VjdGlvblwiOiBcIkhvbWVfdGl0bGVTZWN0aW9uX18xeHBaNFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fMjhwRWdcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkhvbWVfc3VidGl0bGVfXzNJbFZCXCIsXG5cdFwidHlwZXdyaXRlclwiOiBcIkhvbWVfdHlwZXdyaXRlcl9fMWZpcjJcIixcblx0XCJzdWJ0aXRsZUxpbmVcIjogXCJIb21lX3N1YnRpdGxlTGluZV9fYkFDYUtcIixcblx0XCJpbnRyb1NlY3Rpb25cIjogXCJIb21lX2ludHJvU2VjdGlvbl9fMWljWnBcIixcblx0XCJpbnRyb0xlZnRcIjogXCJIb21lX2ludHJvTGVmdF9fM19kTkxcIixcblx0XCJpbnRyb1JpZ2h0XCI6IFwiSG9tZV9pbnRyb1JpZ2h0X18zWm5nZ1wiLFxuXHRcInByb2ZpbGVQaWN0dXJlXCI6IFwiSG9tZV9wcm9maWxlUGljdHVyZV9fMUs5OUxcIixcblx0XCJwcm9ub3VuY2lhdGlvblwiOiBcIkhvbWVfcHJvbm91bmNpYXRpb25fX1ZFUUx2XCIsXG5cdFwiaW50cm9EZXNjcmlwdGlvblwiOiBcIkhvbWVfaW50cm9EZXNjcmlwdGlvbl9fMW9oLWVcIixcblx0XCJwcm9qZWN0c1NlY3Rpb25cIjogXCJIb21lX3Byb2plY3RzU2VjdGlvbl9fMzNFZ3FcIixcblx0XCJza2lsbHNTZWN0aW9uXCI6IFwiSG9tZV9za2lsbHNTZWN0aW9uX18zdE9ldVwiLFxuXHRcInNraWxsc0hlYWRlclwiOiBcIkhvbWVfc2tpbGxzSGVhZGVyX18yVmVVX1wiLFxuXHRcInNraWxsc0NvbnRhaW5lclwiOiBcIkhvbWVfc2tpbGxzQ29udGFpbmVyX18xUnB6OVwiLFxuXHRcImhlYWRlckdyaWRcIjogXCJIb21lX2hlYWRlckdyaWRfX1JqaVAzXCIsXG5cdFwiY29sXCI6IFwiSG9tZV9jb2xfXzFrMUJDXCIsXG5cdFwidGhpcmRHcmlkXCI6IFwiSG9tZV90aGlyZEdyaWRfXzM3LXQ5XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "popmotion":
/*!****************************!*\
  !*** external "popmotion" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"popmotion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3Btb3Rpb25cIj9hN2VkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvcG1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///popmotion\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/gi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9naVwiPzk4NTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZ2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9naVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/gi\n");

/***/ }),

/***/ "react-simple-typewriter":
/*!******************************************!*\
  !*** external "react-simple-typewriter" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-simple-typewriter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaW1wbGUtdHlwZXdyaXRlclwiPzEyYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaW1wbGUtdHlwZXdyaXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-simple-typewriter\n");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI/ZGRlMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC10cmFuc2l0aW9uLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-transition-group\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"three\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aHJlZVwiP2U4YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aHJlZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///three\n");

/***/ })

/******/ });