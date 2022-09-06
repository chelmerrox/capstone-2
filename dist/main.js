/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone_2"] = self["webpackChunkcapstone_2"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//var express = require('express')\n//var cors = require('cors')\n//var app = express()\n \n//import './style.css';\n\n//app.use(cors())\n\nconst mealsContainer = document.querySelector('.meals-container');\nlet rowNum= [1,2];\n\nconst displayMeals = (data) => {\n  const row = document.createElement('div');\n\n  if (rowNum.length === 2){\n    row.classList.add(`row-${rowNum[0]}`);\n  } else {\n    row.classList.add(`row-${rowNum[1]}`);\n  }\n  \n  data.forEach((mealData, i) => {\n    const mealContainer = document.createElement('div');\n    mealContainer.classList.add(`meal-${mealData.idCategory}-container`);\n\n    mealContainer.innerHTML = `\n      <img src=\"${mealData.strCategoryThumb}\" alt=\"Meal ${mealData.idCategory}\"/>\n\n      <div class=\"name-and-likes\">\n        <h3>Meal ${mealData.idCategory}</h3>\n        \n        <div>\n          <i class=\"material-icons\">favorite_border</i>\n          <p class=\"likes\"><span class=\"num-of-likes\">5</span> likes</p>\n        </div>\n      </div>\n  \n      <button type=\"button\" class=\"comments-btn\">Comments</button>\n      <button type=\"button\" class=\"reservations-btn\">Reservations</button>\n    `;\n\n    row.appendChild(mealContainer);\n    mealsContainer.appendChild(row);\n  });\n\n\n};\n\nconst getAllMeals = async () => {\n  const options = {\n    method: 'GET',\n    headers: { 'Content-type': 'application/json; charset=UTF-8;' },\n  };\n\n  await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', options)\n    .then((response) => response.json())\n    .then((data) => displayMeals(data.categories));\n};\n\ngetAllMeals();\n\n\n//# sourceURL=webpack://capstone-2/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);