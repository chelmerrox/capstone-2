"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_2"] = self["webpackChunkcapstone_2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --olive-green: #606c38;\\r\\n  --kombu-green: #283618;\\r\\n  --cornsilk: #fefae0;\\r\\n  --earth-yellow: #dda15e;\\r\\n  --liver-dogs: #bc6c25;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  background-color: #fffef5;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 1.5rem;\\r\\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.nav-title {\\r\\n  font-family: 'DM Serif Display', serif;\\r\\n  font-size: 2.6rem;\\r\\n  color: var(--olive-green);\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  list-style: none;\\r\\n  font-size: 18px;\\r\\n  text-transform: uppercase;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.nav-items li {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n  text-decoration: none;\\r\\n  justify-content: space-evenly;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.nav-link::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  transform: scaleX(0);\\r\\n  height: 2px;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  background-color: var(--olive-green);\\r\\n  transform-origin: bottom right;\\r\\n  transition: transform 0.25s ease-out;\\r\\n}\\r\\n\\r\\n.nav-link:hover::after {\\r\\n  transform: scaleX(1);\\r\\n  transform-origin: bottom left;\\r\\n}\\r\\n\\r\\n.meals-container {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 85px;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: repeat(5, 1fr);\\r\\n  grid-column-gap: 100px;\\r\\n  grid-row-gap: 100px;\\r\\n}\\r\\n\\r\\n/* All children of grid class */\\r\\ndiv.grid > div {\\r\\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.1);\\r\\n  background-color: white;\\r\\n  border-radius: 15px;\\r\\n  padding: 42px 23px;\\r\\n}\\r\\n\\r\\n.name-and-like-icon-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 12px;\\r\\n}\\r\\n\\r\\n.likes-text {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  color: #bc6c25;\\r\\n  font-size: large;\\r\\n  font-weight: 700;\\r\\n  margin-top: 9px;\\r\\n}\\r\\n\\r\\n.num-of-likes {\\r\\n  margin-right: 4px;\\r\\n}\\r\\n\\r\\n.comment-and-reservations-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  row-gap: 20px;\\r\\n  margin-top: 35px;\\r\\n}\\r\\n\\r\\n.dish-name {\\r\\n  font-family: 'DM Serif Display', serif;\\r\\n  font-size: 27px;\\r\\n  color: #2b3618;\\r\\n}\\r\\n\\r\\n.comments-btn,\\r\\n.reservations-btn {\\r\\n  border: 3.5px solid #2b3618;\\r\\n  background-color: #fefae0;\\r\\n  padding: 10px;\\r\\n  border-radius: 15px;\\r\\n  width: 55%;\\r\\n  font-size: 15px;\\r\\n  font-weight: 700;\\r\\n  color: #2b3618;\\r\\n}\\r\\n\\r\\n.comments-btn:hover,\\r\\n.reservations-btn:hover {\\r\\n  background-color: #2b3618;\\r\\n  color: #fefae0;\\r\\n}\\r\\n\\r\\n.comments-btn:active,\\r\\n.reservations-btn:active {\\r\\n  border: 3.5px solid #5c7e36;\\r\\n}\\r\\n\\r\\n/* Styles for the popup window/modal */\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 15rem;\\r\\n  left: 45%;\\r\\n  transform: translate(-50%, -50%) scale(0);\\r\\n  transition: 200ms ease-in-out;\\r\\n  border: 1px solid #1a2236;\\r\\n  border-radius: 15px;\\r\\n  z-index: 10;\\r\\n  background-color: white;\\r\\n  height: 42rem;\\r\\n  width: 68rem;\\r\\n  max-width: 90%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.modal.active {\\r\\n  transform: translate(-43%, -30%) scale(1);\\r\\n}\\r\\n\\r\\n.modal-header {\\r\\n  padding: 8px 20px;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal-header .close-button {\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: lighter;\\r\\n}\\r\\n\\r\\n/* Styles for the content in modal body */\\r\\n.modal-body {\\r\\n  padding: 25px 40px;\\r\\n  position: relative;\\r\\n  top: -24px;\\r\\n}\\r\\n\\r\\n.modal-body img {\\r\\n  margin: 0 30%;\\r\\n}\\r\\n\\r\\n.modal-body h2 {\\r\\n  font-family: 'DM Serif Display', serif;\\r\\n  font-size: 1.8rem;\\r\\n  color: #2b3618;\\r\\n}\\r\\n\\r\\n.modal-body .description {\\r\\n  margin: 1% 0;\\r\\n  text-align: justify;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n.comments-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  width: 100%;\\r\\n  margin-top: 0.8%;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  font-family: 'DM Serif Display', serif;\\r\\n  color: #bc6c25;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.comments-form input,\\r\\n.comments-form textarea {\\r\\n  width: 55%;\\r\\n  border: 1px solid #787777;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.1);\\r\\n  padding: 1% 2%;\\r\\n}\\r\\n\\r\\n.comments-form input::placeholder,\\r\\n.comments-form textarea::placeholder {\\r\\n  color: #787777;\\r\\n  font-size: 1rem;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.comments-form .submit-btn {\\r\\n  background-color: #2b3618;\\r\\n  padding: 1%;\\r\\n  border-radius: 15px;\\r\\n  width: 20%;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 700;\\r\\n  color: #fefae0;\\r\\n}\\r\\n\\r\\n.comments-form .submit-btn:hover {\\r\\n  border: 3.5px solid #2b3618;\\r\\n  background-color: #fefae0;\\r\\n  color: #2b3618;\\r\\n}\\r\\n\\r\\n.comments-form .submit-btn:active {\\r\\n  border: 3.5px solid #5c7e36;\\r\\n}\\r\\n\\r\\n.form-input {\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 10rem;\\r\\n}\\r\\n\\r\\n/* <ul> for list of comments in popup window */\\r\\n\\r\\n.user-comments {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin: 1.5% 10%;\\r\\n  height: 10rem;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n/* All children of <ul> for user comments */\\r\\nul.user-comments > li {\\r\\n  padding: 10px 20px;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.user-comments li:nth-child(odd) {\\r\\n  background-color: #283618;\\r\\n  color: #fefae0;\\r\\n}\\r\\n\\r\\n.user-comments li:nth-child(even) {\\r\\n  background-color: #fefae0;\\r\\n  color: #2b3618;\\r\\n}\\r\\n\\r\\n/* All children of <li> in user comments */\\r\\n.user-comments li > span {\\r\\n  font-size: 16px;\\r\\n  padding-right: 8px;\\r\\n}\\r\\n\\r\\n#overlay {\\r\\n  position: fixed;\\r\\n  opacity: 0;\\r\\n  transition: 200ms ease-in-out;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: rgb(0, 0, 0, 0.5);\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n#overlay.active {\\r\\n  opacity: 1;\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.11);\\r\\n  background-color: white;\\r\\n  padding: 41px;\\r\\n  font-size: larger;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getAllMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getAllMeals.js */ \"./src/modules/getAllMeals.js\");\n\r\n\r\n\r\n(0,_modules_getAllMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://capstone-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/getAllMeals.js":
/*!************************************!*\
  !*** ./src/modules/getAllMeals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealsContainer = document.querySelector('.meals-container');\r\nlet k = 0;\r\nlet overlay;\r\nconst dataModalTarget = [\r\n  'modal-1',\r\n  'modal-2',\r\n  'modal-3',\r\n  'modal-4',\r\n  'modal-5',\r\n  'modal-6',\r\n  'modal-7',\r\n  'modal-8',\r\n  'modal-9',\r\n  'modal-10',\r\n  'modal-11',\r\n  'modal-12',\r\n  'modal-13',\r\n  'modal-14',\r\n];\r\nconst involvementAPIComments =\r\n  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/52ymOtxpjWvVDyNrJLWi/comments';\r\n\r\nconst getAllComments = async (id, list) => {\r\n  await fetch(`${involvementAPIComments}?item_id=${id}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      data.forEach((commentsData) => {\r\n        list.innerHTML += `<li><span>${commentsData.creation_date}</span><span>${commentsData.username}</span><span>: ${commentsData.comment}</span></li>`;\r\n      });\r\n    });\r\n  const commentCounter = document.querySelector('.comment-counter');\r\n  commentCounter.innerHTML = countAllComments();\r\n};\r\n\r\nconst countAllComments = () => {\r\n  const comments = document.querySelector('.user-comments');\r\n  return `(${comments.childElementCount})`;\r\n};\r\n\r\nconst getComment = async (id, list) => {\r\n  await fetch(`${involvementAPIComments}?item_id=${id}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      let lastElement = data.length - 1;\r\n\r\n      data.forEach((commentsData, j) => {\r\n        if (j === lastElement) {\r\n          const li = document.createElement('li');\r\n          li.innerHTML = `<span>${commentsData.creation_date}</span><span>${commentsData.username}</span><span>: ${commentsData.comment}</span>`;\r\n          list.appendChild(li);\r\n        }\r\n      });\r\n    });\r\n};\r\n\r\nconst postComment = async (id, user, comment, list) => {\r\n  await fetch(involvementAPIComments, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: user,\r\n      comment: comment,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n  }).then(() => getComment(id, list));\r\n};\r\n\r\nconst displayMeals = (data) => {\r\n  const grid = document.createElement('div');\r\n  grid.classList.add('grid');\r\n\r\n  data.forEach((mealData, i) => {\r\n    const mealContainer = document.createElement('div');\r\n    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);\r\n\r\n    mealContainer.innerHTML = `\r\n      <img src=\"${mealData.strCategoryThumb}\" alt=\"Meal ${i + 1}\"/>\r\n \r\n      <div class=\"name-and-like-icon-container\">\r\n        <h3 class=\"dish-name\">${mealData.strCategory}</h3>\r\n        <i class=\"material-icons\">favorite_border</i>\r\n      </div>\r\n     \r\n      <p class=\"likes-text\"><span class=\"num-of-likes\">5</span>likes</p>\r\n     \r\n      <div class=\"comment-and-reservations-container\">\r\n        <button type=\"button\" class=\"comments-btn modal-${i + 1}\"\r\n        data-modal-target=\"modal-${mealData.idCategory}\">Comments</button>\r\n \r\n        <!--Popup window container for Comments Button-->\r\n        <div class=\"modal popup-${i + 1}\" id=\"modal-${i + 1}\">\r\n          <div class=\"modal-header\">\r\n            <span class=\"close-button close-button-${i + 1}\r\n            data-close-button\"><i>X</i></span>\r\n          </div>\r\n \r\n          <div class=\"modal-body\">\r\n            <img src=\"${mealData.strCategoryThumb}\" />\r\n            <h2>${mealData.strCategory}</h2>\r\n            <p class=\"description\">${mealData.strCategoryDescription}</p>\r\n            <div>\r\n              <br><h3 class=\"comments\">Comments<span class=\"comment-counter\"></span></h3>\r\n            </div>\r\n            <ul class=\"user-comments\"></ul>\r\n            <form class=\"comments-form\">\r\n              <input class=\"form-input user-${\r\n                i + 1\r\n              }\" type=\"text\" placeholder=\"Your Name\" />\r\n              <textarea class=\"form-input comment-${\r\n                i + 1\r\n              }\" placeholder=\"Your Comment\" rows=\"3\"></textarea>\r\n              <input id=\"submitBtn\"\r\n              class=\"submit-btn\" type=\"button\" value=\"Comment\" />\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div id=\"overlay\"></div>\r\n      </div>\r\n    `;\r\n\r\n    grid.appendChild(mealContainer);\r\n    mealsContainer.appendChild(grid);\r\n  });\r\n\r\n  dataModalTarget.forEach((id) => {\r\n    // the open a Modal button\r\n    const commentBtn1 = document.querySelector(`[data-modal-target='${id}']`);\r\n\r\n    k += 1; // for the close-button-number class\r\n    const closeModalButtons = document.querySelector(`.close-button-${k}`); // the close a Modal button\r\n\r\n    // To open modal button\r\n    commentBtn1.addEventListener('click', () => {\r\n      const modal = document.getElementById(`${id}`);\r\n      openModal(modal);\r\n    });\r\n\r\n    overlay = document.getElementById('overlay');\r\n\r\n    // To close a modal by clicking on the close button\r\n    closeModalButtons.addEventListener('click', () => {\r\n      const modal = closeModalButtons.closest('.modal');\r\n      closeModal(modal);\r\n    });\r\n  });\r\n\r\n  const userComments = Array.from(\r\n    document.querySelectorAll('ul.user-comments')\r\n  );\r\n  const submitBtns = Array.from(document.getElementsByClassName('submit-btn'));\r\n  submitBtns.forEach((btn, j) => {\r\n    btn.addEventListener('click', () => {\r\n      const userName = document.querySelector(`.user-${j + 1}`);\r\n      const userComment = document.querySelector(`.comment-${j + 1}`);\r\n      if (userName.value !== '' && userComment.value !== '') {\r\n        postComment(j + 1, userName.value, userComment.value, userComments[j]);\r\n\r\n        userName.value = '';\r\n        userComment.value = '';\r\n      }\r\n    });\r\n    getAllComments(j + 1, userComments[j]);\r\n  });\r\n};\r\n\r\nconst getAllMeals = async () => {\r\n  const options = {\r\n    method: 'GET',\r\n    headers: { 'Content-type': 'application/json; charset=UTF-8;\"' },\r\n  };\r\n\r\n  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)\r\n    .then((response) => response.json())\r\n    .then((data) => displayMeals(data.categories));\r\n};\r\n\r\nconst openModal = (modal) => {\r\n  if (modal === null) {\r\n    return;\r\n  }\r\n  modal.classList.add('active');\r\n  overlay.classList.add('active');\r\n};\r\n\r\nconst closeModal = (modal) => {\r\n  if (modal === null) {\r\n    return;\r\n  }\r\n  modal.classList.remove('active');\r\n  overlay.classList.remove('active');\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllMeals);\r\n\n\n//# sourceURL=webpack://capstone-2/./src/modules/getAllMeals.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);