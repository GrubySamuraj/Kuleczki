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

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ \"./src/path.ts\");\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usefulVariables */ \"./src/usefulVariables.ts\");\n\r\n\r\nvar pathClass = new _path__WEBPACK_IMPORTED_MODULE_0__.PathFunctions();\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n    }\r\n    Board.prototype.create = function () {\r\n        for (var x = 0; x < _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.width; x++) {\r\n            _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.pola.push([]);\r\n            _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.kulki.push([]);\r\n            var _loop_1 = function (y) {\r\n                _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.kulki[x].push(0);\r\n                var div = document.createElement(\"div\");\r\n                div.classList.add(\"klocek\");\r\n                div.setAttribute(\"col\", x.toString());\r\n                div.setAttribute(\"row\", y.toString());\r\n                _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.plansza.appendChild(div);\r\n                var pole = {\r\n                    col: x,\r\n                    row: y,\r\n                    isblocked: false,\r\n                    number: 0,\r\n                    div: div,\r\n                    isset: true,\r\n                    id: \"\".concat(x, \"_\").concat(y),\r\n                    iskulka: false\r\n                };\r\n                div.addEventListener(\"click\", function () {\r\n                    pathClass.clickDiv(pole.div, _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.pola);\r\n                });\r\n                _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.pola[x].push(pole);\r\n                if (y == _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.width - 1) {\r\n                    var br = document.createElement(\"br\");\r\n                    _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.plansza.appendChild(br);\r\n                }\r\n            };\r\n            for (var y = 0; y < _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.height; y++) {\r\n                _loop_1(y);\r\n            }\r\n        }\r\n        // console.log(tableID);\r\n        this.losuj(_usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.pola);\r\n    };\r\n    Board.prototype.losuj = function (pola) {\r\n        var losowe = 3;\r\n        for (var x = 0; x < losowe; x++) {\r\n            var kulka = document.createElement(\"div\");\r\n            var randomColorID = Math.floor(Math.random() * 7);\r\n            var randomColor = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.colors[randomColorID];\r\n            kulka.classList.add(\"kulka\");\r\n            kulka.style.backgroundColor = randomColor;\r\n            var randomX = Math.floor(Math.random() * pola.length);\r\n            var randomY = Math.floor(Math.random() * pola[randomX].length);\r\n            kulka.setAttribute(\"idKulki\", \"\".concat(randomX.toString(), \"_\").concat(randomY.toString()));\r\n            kulka.setAttribute(\"kulka\", \"true\");\r\n            pola[randomX][randomY].iskulka = true;\r\n            pola[randomX][randomY].clicked = false;\r\n            if (pola[randomX][randomY].isblocked === false) {\r\n                _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.kulki[randomX][randomY] = {\r\n                    color: randomColor,\r\n                    colorID: randomColorID\r\n                };\r\n                pola[randomX][randomY].div.appendChild(kulka);\r\n                pola[randomX][randomY].kulka = kulka;\r\n            }\r\n            else {\r\n                x--;\r\n            }\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://typescript/./src/board.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n\r\nvar board = new _board__WEBPACK_IMPORTED_MODULE_0__.Board();\r\nboard.create();\r\n\n\n//# sourceURL=webpack://typescript/./src/index.ts?");

/***/ }),

/***/ "./src/path.ts":
/*!*********************!*\
  !*** ./src/path.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PathFunctions\": () => (/* binding */ PathFunctions)\n/* harmony export */ });\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usefulVariables */ \"./src/usefulVariables.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\nvar PathFunctions = /** @class */ (function () {\r\n    function PathFunctions() {\r\n    }\r\n    PathFunctions.prototype.liczOdl = function (FirstItem, LastItem, tabID) {\r\n        var _a, _b, _c, _d;\r\n        var _this = this;\r\n        var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;\r\n        if (LastItem.getAttribute(\"kulka\") === \"true\") {\r\n            var id = (_e = LastItem.getAttribute(\"idkulki\")) === null || _e === void 0 ? void 0 : _e.split(\"_\");\r\n            var x_1 = parseInt(id[0]);\r\n            var y_1 = parseInt(id[1]);\r\n            LastItem = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x_1][y_1].div;\r\n        }\r\n        var x = parseInt(FirstItem.div.getAttribute(\"col\"));\r\n        var y = parseInt(FirstItem.div.getAttribute(\"row\"));\r\n        if (FirstItem.div == LastItem) {\r\n            _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.isPathFound = true;\r\n        }\r\n        if (!_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.isPathFound) {\r\n            if (((_f = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x - 1]) === null || _f === void 0 ? void 0 : _f[y]) && ((_g = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x - 1]) === null || _g === void 0 ? void 0 : _g[y].isblocked) == false && ((_h = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x - 1]) === null || _h === void 0 ? void 0 : _h[y].iskulka) == false) {\r\n                (_a = tabID[x - 1][y]).push.apply(_a, __spreadArray(__spreadArray([], tabID[x][y], false), [_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y].id], false));\r\n                this.Dodaj(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x - 1][y], _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y]);\r\n                window.setTimeout(function () {\r\n                    _this.liczOdl(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x - 1][y], LastItem, tabID);\r\n                }, 1);\r\n            }\r\n            if (((_j = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x + 1]) === null || _j === void 0 ? void 0 : _j[y]) && ((_k = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x + 1]) === null || _k === void 0 ? void 0 : _k[y].isblocked) == false && ((_l = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x + 1]) === null || _l === void 0 ? void 0 : _l[y].iskulka) == false) {\r\n                (_b = tabID[x + 1][y]).push.apply(_b, __spreadArray(__spreadArray([], tabID[x][y], false), [_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y].id], false));\r\n                this.Dodaj(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x + 1][y], _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y]);\r\n                window.setTimeout(function () {\r\n                    _this.liczOdl(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x + 1][y], LastItem, tabID);\r\n                }, 1);\r\n            }\r\n            if (((_m = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _m === void 0 ? void 0 : _m[y + 1]) && ((_o = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _o === void 0 ? void 0 : _o[y + 1].isblocked) == false && ((_p = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _p === void 0 ? void 0 : _p[y + 1].iskulka) == false) {\r\n                (_c = tabID[x][y + 1]).push.apply(_c, __spreadArray(__spreadArray([], tabID[x][y], false), [_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y].id], false));\r\n                this.Dodaj(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y + 1], _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y]);\r\n                window.setTimeout(function () {\r\n                    _this.liczOdl(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y + 1], LastItem, tabID);\r\n                }, 1);\r\n            }\r\n            if (((_q = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _q === void 0 ? void 0 : _q[y - 1]) && ((_r = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _r === void 0 ? void 0 : _r[y - 1].isblocked) == false && ((_s = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x]) === null || _s === void 0 ? void 0 : _s[y - 1].iskulka) == false) {\r\n                (_d = tabID[x][y - 1]).push.apply(_d, __spreadArray(__spreadArray([], tabID[x][y], false), [_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y].id], false));\r\n                this.Dodaj(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y - 1], _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y]);\r\n                window.setTimeout(function () {\r\n                    _this.liczOdl(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y - 1], LastItem, tabID);\r\n                }, 1);\r\n            }\r\n        }\r\n        else {\r\n            if (LastItem == _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[x][y].div) {\r\n                LastItem.style.backgroundColor = \"red\";\r\n                var posx = LastItem.getAttribute(\"col\");\r\n                var posy = LastItem.getAttribute(\"row\");\r\n                this.showPath(parseInt(posx), parseInt(posy), tabID);\r\n                console.log(\"koniec\");\r\n            }\r\n        }\r\n    };\r\n    PathFunctions.prototype.showPath = function (x, y, tabID) {\r\n        tabID[x][y].forEach(function (id) {\r\n            var posx = parseInt(id.split(\"_\")[0]);\r\n            var posy = parseInt(id.split(\"_\")[1]);\r\n            _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola[posx][posy].div.style.backgroundColor = \"red\";\r\n        });\r\n    };\r\n    PathFunctions.prototype.clickDiv = function (div, pola) {\r\n        var _this = this;\r\n        var x = div.getAttribute(\"col\");\r\n        var y = div.getAttribute(\"row\");\r\n        var obj = pola[parseInt(x)][parseInt(y)];\r\n        var kulka = obj.kulka;\r\n        if (obj.iskulka) {\r\n            if (obj.clicked) {\r\n                this.unFocus(kulka, pola);\r\n            }\r\n            else if (kulka != _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) {\r\n                this.unFocus(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked, pola);\r\n            }\r\n            else {\r\n                kulka.style.width = \"30px\";\r\n                kulka.style.height = \"30px\";\r\n                obj.clicked = true;\r\n                _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked = kulka;\r\n                for (var x_2 = 0; x_2 < pola.length; x_2++) {\r\n                    for (var y_2 = 0; y_2 < pola[x_2].length; y_2++) {\r\n                        pola[x_2][y_2].div.onmouseover = function (e) {\r\n                            if (_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) {\r\n                                var tabID_1 = _this.clearTable();\r\n                                _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.isPathFound = false;\r\n                                _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola.forEach(function (item) {\r\n                                    item.forEach(function (item2) {\r\n                                        item2.isblocked = false;\r\n                                        item2.div.style.backgroundColor = \"transparent\";\r\n                                        item2.number = 0;\r\n                                    });\r\n                                    _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.path = [];\r\n                                    _this.liczOdl(obj, e.target, tabID_1);\r\n                                }, 1);\r\n                            }\r\n                        };\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            if (_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) {\r\n                console.log(\"przemieszczenie\");\r\n            }\r\n            console.log(\"niekulka\");\r\n        }\r\n    };\r\n    PathFunctions.prototype.Dodaj = function (pole, poprzedni) {\r\n        pole.number = poprzedni.number + 1;\r\n        pole.isblocked = true;\r\n        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.path.push(pole);\r\n    };\r\n    PathFunctions.prototype.clearTable = function () {\r\n        var tabID = [];\r\n        for (var x = 0; x < _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.width; x++) {\r\n            tabID.push([]);\r\n            for (var y = 0; y < _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.height; y++) {\r\n                tabID[x].push([]);\r\n            }\r\n        }\r\n        return tabID;\r\n    };\r\n    PathFunctions.prototype.unFocus = function (kulka, pola) {\r\n        var _a, _b, _c, _d;\r\n        kulka.style.width = \"25px\";\r\n        kulka.style.height = \"25px\";\r\n        var idx = parseInt((_b = (_a = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) === null || _a === void 0 ? void 0 : _a.getAttribute(\"idKulki\")) === null || _b === void 0 ? void 0 : _b.split(\"_\")[0]);\r\n        var idy = parseInt((_d = (_c = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) === null || _c === void 0 ? void 0 : _c.getAttribute(\"idKulki\")) === null || _d === void 0 ? void 0 : _d.split(\"_\")[1]);\r\n        pola[idx][idy].clicked = false;\r\n        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked = null;\r\n    };\r\n    PathFunctions.prototype.Focus = function (kulka, obj, pola) {\r\n        var _this = this;\r\n        kulka.style.width = \"30px\";\r\n        kulka.style.height = \"30px\";\r\n        obj.clicked = true;\r\n        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked = kulka;\r\n        for (var x = 0; x < pola.length; x++) {\r\n            for (var y = 0; y < pola[x].length; y++) {\r\n                pola[x][y].div.onmouseover = function (e) {\r\n                    if (_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.clicked) {\r\n                        var tabID_2 = _this.clearTable();\r\n                        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.isPathFound = false;\r\n                        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.pola.forEach(function (item) {\r\n                            item.forEach(function (item2) {\r\n                                item2.isblocked = false;\r\n                                item2.div.style.backgroundColor = \"transparent\";\r\n                                item2.number = 0;\r\n                            });\r\n                            _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.path = [];\r\n                            _this.liczOdl(obj, e.target, tabID_2);\r\n                        }, 1);\r\n                    }\r\n                };\r\n            }\r\n        }\r\n    };\r\n    return PathFunctions;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://typescript/./src/path.ts?");

/***/ }),

/***/ "./src/usefulVariables.ts":
/*!********************************!*\
  !*** ./src/usefulVariables.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usefulVariables\": () => (/* binding */ usefulVariables)\n/* harmony export */ });\nvar usefulVariables = {\r\n    plansza: document.getElementById(\"plansza\"),\r\n    colors: [\"#FFFFFF\", \"#000000\", \"#fa05e1\", \"#0734fa\", \"#02f76d\", \"#f51d05\", \"#faf202\", \"rgb(25,255,0)\"],\r\n    kulki: [],\r\n    path: [],\r\n    pola: [],\r\n    isPathFound: false,\r\n    polaID: [],\r\n    clicked: null,\r\n    width: 9,\r\n    height: 9,\r\n};\r\n\n\n//# sourceURL=webpack://typescript/./src/usefulVariables.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;