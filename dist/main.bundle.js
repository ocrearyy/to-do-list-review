/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* /src/styles.css */\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f3f3f3;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  padding: 0.5em;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\nh2,\\r\\np {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/* reusable classes */\\r\\n\\r\\n.txt-mPlus {\\r\\n  font-size: 1.1em;\\r\\n}\\r\\n\\r\\n.txt-mLG {\\r\\n  font-size: 1.25em;\\r\\n}\\r\\n\\r\\n.appItem {\\r\\n  height: 50px;\\r\\n  border-bottom: 1px grey solid;\\r\\n}\\r\\n\\r\\n.ftr {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n/* content */\\r\\n\\r\\n.mainContent {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  margin-top: 4em;\\r\\n}\\r\\n\\r\\n#todoApp {\\r\\n  background-color: white;\\r\\n  box-shadow: 0 4px 8px 0 grey, 0 6px 20px 0 grey;\\r\\n  border: 1px grey solid;\\r\\n\\r\\n  /* width: 70%;\\r\\n  margin: auto;\\r\\n  margin-top: 4em; */\\r\\n\\r\\n  border: 2px solid #cecece;\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 50%;\\r\\n  width: 400px;\\r\\n  margin-top: -200px;\\r\\n  margin-left: -200px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 1.5em;\\r\\n}\\r\\n\\r\\n.taskForm {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 1.5em;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.taskForm input {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  margin-right: 1em;\\r\\n  height: 70%;\\r\\n  padding-left: 0.5em;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n/* booklist */\\r\\n\\r\\n.normalView {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 1.5em;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.edtIcn {\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.pTask {\\r\\n  margin-left: 0.5em;\\r\\n}\\r\\n\\r\\n.noToDos {\\r\\n  text-align: center;\\r\\n  align-self: center;\\r\\n  color: brown;\\r\\n  padding-top: 1em;\\r\\n}\\r\\n\\r\\n.editView {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 1.5em;\\r\\n  background-color: lightyellow;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.editView input {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  margin-right: 1em;\\r\\n  height: 70%;\\r\\n  padding-left: 0.5em;\\r\\n}\\r\\n\\r\\n.acceptIcn {\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.editView a {\\r\\n  padding: 0 0.25em;\\r\\n}\\r\\n\\r\\n/* change */\\r\\n\\r\\n.strikethr {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n/* clear completed */\\r\\n\\r\\n.clearAllBtn {\\r\\n  width: 100%;\\r\\n  height: 65px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: #ececec;\\r\\n}\\r\\n\\r\\n#clearCompleted {\\r\\n  padding: 1em;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo-test/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo-test/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo-test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpfulFunctions.js */ \"./src/modules/helpfulFunctions.js\");\n// /src/index.js - entry point\r\n\r\n\r\n\r\n\r\n\r\n// Event: on content load\r\ndocument.addEventListener('DOMContentLoaded', _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTasks());\r\n\r\n// Event: when form is submitted\r\ndocument.querySelector('#newTask').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n\r\n  // Get form values\r\n  const taskDescription = document.querySelector('#taskDesc').value.trim();\r\n  if ((0,_modules_helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(taskDescription)) {\r\n    // Add task\r\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(taskDescription);\r\n  }\r\n  document.querySelector('#taskDesc').value = '';\r\n});\r\n\r\n// Event: when icon is clicked to add task\r\ndocument.querySelector('#clickEnterIcon').addEventListener('click', () => {\r\n  // Get form values\r\n  const taskDescription = document.querySelector('#taskDesc').value.trim();\r\n  if ((0,_modules_helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(taskDescription)) {\r\n    // Add task\r\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(taskDescription);\r\n  }\r\n  document.querySelector('#taskDesc').value = '';\r\n});\r\n\r\n// Event: click anything on taskList\r\ndocument.querySelector('#taskList').addEventListener('click', (e) => {\r\n  const classesIcn = e.target.parentElement.className;\r\n  const classesArr = classesIcn.split(' ');\r\n\r\n  const li = e.target.parentElement.parentElement.parentElement;\r\n\r\n  // Event: when the three dots icon gets clicked\r\n  if (classesArr.indexOf('edtIcn') !== -1) {\r\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLiToEditMode(li);\r\n  }\r\n\r\n  // Event: when the check icon gets clicked to REMOVE\r\n  if (classesArr.indexOf('removeIcn') !== -1) {\r\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(li);\r\n  }\r\n\r\n  // Event: when the the accept icon gets clicked to UPDATE\r\n  if (classesArr.indexOf('acceptIcn') !== -1) {\r\n    const inputId = `input-${li.dataset.id}`;\r\n    const newDescrip = document.getElementById(inputId).value.trim();\r\n    if ((0,_modules_helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(newDescrip)) {\r\n      _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(newDescrip, li);\r\n    }\r\n  }\r\n});\r\n\r\n// Event: when checkboxes are clicked\r\ndocument.querySelector('#taskList').addEventListener('change', (e) => {\r\n  // checks if this is trigerring for the correct element\r\n  const checkedCheckbox = e.target;\r\n  if (checkedCheckbox.tagName === 'INPUT' && checkedCheckbox.type === 'checkbox') {\r\n    // Gets the state of the checked checkbox\r\n    const li = e.target.parentElement.parentElement;\r\n\r\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].taskCompleted(li);\r\n  }\r\n});\r\n\r\ndocument.querySelector('#clearCompleted').addEventListener('click', () => {\r\n  _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCompleted();\r\n});\n\n//# sourceURL=webpack://webpack-demo-test/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkboxes.js":
/*!***********************************!*\
  !*** ./src/modules/checkboxes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n// checkboxes.js\r\n\r\n\r\n\r\n// function to change isCompleted value of tasks\r\nconst taskCompleted = (li) => {\r\n  // Gets list from local storage\r\n  const toDos = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\r\n\r\n  const position2chage = li.dataset.id - 1;\r\n  const value = li.children[0].children[0].checked;\r\n\r\n  toDos[position2chage].isCompleted = value;\r\n\r\n  // Set items to storage\r\n  _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTasks(toDos);\r\n\r\n  // change strike through class\r\n  if (value) {\r\n    li.children[0].children[1].classList.add('strikethr');\r\n  } else {\r\n    li.children[0].children[1].classList.remove('strikethr');\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/checkboxes.js?");

/***/ }),

/***/ "./src/modules/helpfulFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/helpfulFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"validateDescription\": () => (/* binding */ validateDescription)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _returnsUncompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnsUncompleted.js */ \"./src/modules/returnsUncompleted.js\");\n// /src/modules/helpfulFunctions - handy funcitons\r\n\r\n\r\n\r\n\r\n// function to help validate input\r\nconst validateDescription = (text) => {\r\n  if (text === null || text === '') {\r\n    return false;\r\n  }\r\n  return true;\r\n};\r\n\r\nconst clearCompleted = () => {\r\n  // gets todos from local storage\r\n  const tasks = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\r\n  // create new array from filter()\r\n  const uncompletedTasks = tasks.filter(_returnsUncompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  // updates indexes\r\n  uncompletedTasks.forEach((todo, i) => { todo.index = i + 1; });\r\n\r\n  _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTasks(uncompletedTasks);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/helpfulFunctions.js?");

/***/ }),

/***/ "./src/modules/returnsUncompleted.js":
/*!*******************************************!*\
  !*** ./src/modules/returnsUncompleted.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnsUncompleted)\n/* harmony export */ });\n// /src/modules/returnsUncompleted.js\r\n\r\nfunction returnsUncompleted(task) {\r\n  return !task.isCompleted;\r\n}\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/returnsUncompleted.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n// /src/modules/store.js - Store Class: Encapsulates de locacl storage\r\n\r\nclass Store {\r\n  // gets tasks from storage and returns an array of objects\r\n  static getTasks() {\r\n    let tasks;\r\n    if (localStorage.getItem('tasks') === null) {\r\n      tasks = [];\r\n    } else {\r\n      tasks = JSON.parse(localStorage.getItem('tasks'));\r\n    }\r\n\r\n    return tasks;\r\n  }\r\n\r\n  static setTasks(tasks) {\r\n    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n  }\r\n}\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/store.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// /src/modules/task.js - TASK: class that reps a single task or 'to-do'\r\nclass Task {\r\n  constructor(description, index) { // recieves description and index\r\n    this.description = description;\r\n    this.isCompleted = false;\r\n    this.index = index;\r\n  }\r\n\r\n  task2str() {\r\n    const isDone = (isCompleted) => (isCompleted ? 'yes' : 'no');\r\n    const myStr = `Task#${this.index}: ${this.description} -- done? ${isDone(this.isCompleted)}`;\r\n    return myStr;\r\n  }\r\n}\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\");\n/* harmony import */ var _checkboxes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxes.js */ \"./src/modules/checkboxes.js\");\n/* harmony import */ var _helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpfulFunctions.js */ \"./src/modules/helpfulFunctions.js\");\n// /src/modules/ui.js - User Interface class: deals with manipulating the DOM\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass UI {\r\n  static addTask2list(task) {\r\n    const list = document.querySelector('#taskList');\r\n\r\n    const item = document.createElement('li'); // creates list item\r\n    item.className = 'listItem appItem';\r\n    item.dataset.id = task.index;\r\n    item.id = `todo-${task.index}`;\r\n\r\n    // creates div for normal view\r\n    const divNormal = document.createElement('div');\r\n    divNormal.className = 'normalView';\r\n\r\n    const checkbox = document.createElement('input'); // creates checkbox\r\n    checkbox.setAttribute('type', 'checkbox');\r\n    checkbox.checked = task.isCompleted;\r\n    checkbox.className = 'form-check-label p-0';\r\n    divNormal.appendChild(checkbox); // appends checkbox to item\r\n\r\n    const text = document.createElement('p'); // creates p\r\n    text.textContent = task.description;\r\n    text.className = 'pTask txt-mLG';\r\n    if (task.isCompleted === true) {\r\n      text.classList.add('strikethr');\r\n    }\r\n    divNormal.appendChild(text); // appends p to item\r\n\r\n    const aEdit = document.createElement('a');\r\n    aEdit.className = 'edtIcn';\r\n    const iconEdit = document.createElement('i'); // creates edit icon\r\n    iconEdit.className = 'fas fa-ellipsis-v txt-mPlus';\r\n    aEdit.appendChild(iconEdit); // appends edit icon to anchor\r\n    divNormal.appendChild(aEdit); // appends achor to divNormal\r\n\r\n    item.appendChild(divNormal);// -- appends divNormal to item\r\n\r\n    // Create div for edit view\r\n    const divEdit = document.createElement('div');\r\n    divEdit.className = 'editView hide';\r\n\r\n    const inputEdit = document.createElement('input');\r\n    inputEdit.setAttribute('type', 'text');\r\n    inputEdit.setAttribute('id', `input-${task.index}`);\r\n    inputEdit.className = 'inputEdit txt-mPlus';\r\n    inputEdit.value = task.description;\r\n\r\n    divEdit.appendChild(inputEdit);\r\n\r\n    const aAccept = document.createElement('a');\r\n    aAccept.className = 'acceptIcn';\r\n    const iconAccept = document.createElement('i'); // creates accept icon\r\n    iconAccept.className = 'fas fa-check-circle txt-mPlus';\r\n    aAccept.appendChild(iconAccept); // appends accept icon to anchor\r\n    divEdit.appendChild(aAccept); // appends accpet anchor to item\r\n\r\n    const aRemove = document.createElement('a');\r\n    aRemove.className = 'removeIcn';\r\n    const iconRemove = document.createElement('i'); // creates remove icon\r\n    iconRemove.className = 'fas fa-trash txt-mPlus';\r\n    aRemove.appendChild(iconRemove); // appends remove icon to anchor\r\n    divEdit.appendChild(aRemove); // appends remove anchor to item\r\n\r\n    item.appendChild(divEdit);// -- appends divEdit to item\r\n\r\n    list.appendChild(item); // appends item to list\r\n  }\r\n\r\n  static addEmptyToDoMessage() {\r\n    const list = document.querySelector('#taskList');\r\n\r\n    const item = document.createElement('li'); // creates list item\r\n    item.className = 'appItem';\r\n\r\n    const p = document.createElement('p');\r\n    p.className = 'noToDos';\r\n    p.textContent = 'Please Enter a Task';\r\n\r\n    item.appendChild(p);\r\n    list.appendChild(item);\r\n  }\r\n\r\n  static displayTasks() {\r\n    const list = document.querySelector('#taskList');\r\n    list.innerHTML = '';\r\n\r\n    const todos = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n    if (todos.length === 0) {\r\n      this.addEmptyToDoMessage();\r\n    } else {\r\n      todos.forEach((task) => this.addTask2list(task));\r\n    }\r\n  }\r\n\r\n  static addTask(newDescrip) {\r\n    const todos = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n    const neo = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newDescrip, todos.length + 1);\r\n    todos.push(neo);\r\n    // updates indexes\r\n    todos.forEach((todo, i) => { todo.index = i + 1; });\r\n    _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTasks(todos);\r\n    if (todos.length === 1) {\r\n      document.querySelector('#taskList').innerHTML = '';\r\n    }\r\n    // adds single task: neo\r\n    this.addTask2list(todos[todos.length - 1]);\r\n  }\r\n\r\n  static changeLiToEditMode(li) {\r\n    const lisChildren = li.children;\r\n    // change clases of divs\r\n    const normalView = lisChildren[0];\r\n    normalView.classList.add('hide');\r\n\r\n    const editView = lisChildren[1];\r\n    editView.classList.remove('hide');\r\n\r\n    // sets focus con the input to edit\r\n    const inputEdit = editView.querySelector('input');\r\n    inputEdit.focus();\r\n  }\r\n\r\n  static removeTask(li) {\r\n    const todos = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n    const i = li.dataset.id - 1;\r\n    todos.splice(i, 1);\r\n    // updates indexes\r\n    todos.forEach((todo, j) => { todo.index = j + 1; });\r\n    _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTasks(todos);\r\n    li.remove();\r\n    if (todos.length === 0) {\r\n      this.addEmptyToDoMessage();\r\n    } else {\r\n      this.reIndexLiIds();\r\n    }\r\n  }\r\n\r\n  static reIndexLiIds() {\r\n    const taskList = document.querySelector('#taskList');\r\n    const lisTL = Array.from(taskList.children);\r\n    lisTL.forEach((li, i) => {\r\n      li.dataset.id = i + 1;\r\n      li.id = `todo-${i + 1}`;\r\n      li.children[1].children[0].id = `input-${li.dataset.id}`;\r\n    });\r\n    // console.log('ui.js - reIndex() - totalLis: ', totalLis);\r\n  }\r\n\r\n  static updateTask(newDesc, li) {\r\n    const todos = _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks();\r\n    const pos2change = li.dataset.id - 1;\r\n    todos[pos2change].description = newDesc;\r\n    _store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setTasks(todos);\r\n    // changes li to normal view with new task description\r\n    this.changeLiToNormalView(newDesc, li);\r\n  }\r\n\r\n  static changeLiToNormalView(newDesc, li) {\r\n    const lisChildren = li.children;\r\n    // change clases of divs\r\n    const normalView = lisChildren[0];\r\n    normalView.classList.remove('hide');\r\n    const editView = lisChildren[1];\r\n    editView.classList.add('hide');\r\n\r\n    // change task desc\r\n    const childrenNV = normalView.children;\r\n    childrenNV[1].textContent = newDesc;\r\n  }\r\n\r\n  static taskCompleted(li) {\r\n    (0,_checkboxes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(li);\r\n  }\r\n\r\n  static clearCompleted() {\r\n    (0,_helpfulFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)();\r\n    this.displayTasks();\r\n  }\r\n}\n\n//# sourceURL=webpack://webpack-demo-test/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;