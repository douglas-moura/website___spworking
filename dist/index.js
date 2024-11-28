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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://spworking-2025/./src/assets/css/style.css?");

/***/ }),

/***/ "./src/functions/_layouts.ts":
/*!***********************************!*\
  !*** ./src/functions/_layouts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   rodapeFinal: () => (/* binding */ rodapeFinal),\n/* harmony export */   rodapeInfos: () => (/* binding */ rodapeInfos)\n/* harmony export */ });\nconst logoSrc = 'img/5b43d2e7a72e4336b5bb.png';\nconst menu = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('py-6');\n    sessao.innerHTML +=\n        `\r\n            <nav class=\"container grid-cols-3\">\r\n                <img src=\"${logoSrc}\" alt=\"Logotipo SPWorking\" class=\"h-6 cursor-pointer\">\r\n                <ul class=\"inline-flex items-center h-full justify-between text-white col-span-2\">\r\n                    <li class=\"\"><a href=\"/#banner\">Home</a></li>\r\n                    <li class=\"\"><a href=\"/#servicos\">Serviços</a></li>\r\n                    <li class=\"\"><a href=\"/#galeria\">Galeria</a></li>\r\n                    <li class=\"\"><a href=\"/#localizacao\">Localização</a></li>\r\n                    <li class=\"\"><a href=\"pages/planos.html\">Planos</a></li>\r\n                    <li class=\"\">\r\n                        <span class=\"ml-2 text-sm items-center\">\r\n                            <iconify-icon icon=\"tabler:brand-whatsapp\" height=\"1rem\" class=\"mr-2 bg-[#25D366] rounded-full p-2\"></iconify-icon>\r\n                            11 98765-4321\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        `;\n    return sessao;\n};\nconst rodapeInfos = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('bg-neutral-800');\n    sessao.innerHTML +=\n        `\r\n            <div class=\"container px-28 text-center mb-8\">\r\n                <img src=\"${logoSrc}\" alt=\"\" class=\"mx-auto w-2/6\">\r\n                <h2 class=\"text-neutral-400\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur quaerat eum illo temporibus</h2>\r\n            </div>\r\n            <div class=\"container grid-cols-4 w-1/4\">\r\n                <a href=\"https://www.linkedin.com/company/spworkingcoworking/\" target=\"_blank\">\r\n                    <iconify-icon icon=\"tabler:brand-linkedin\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"https://www.instagram.com/spworking/\" target=\"_blank\">\r\n                    <iconify-icon icon=\"tabler:brand-instagram\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"https://www.whatsapp.com/?lang=pt_BR\" target=\"_blank\">\r\n                    <iconify-icon icon=\"tabler:brand-whatsapp\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"mailto:contato@spworking.com.br\" target=\"_blank\">\r\n                    <iconify-icon icon=\"tabler:mail\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n            </div>\r\n        `;\n    return sessao;\n};\nconst rodapeFinal = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('bg-neutral-900');\n    sessao.classList.add('py-8');\n    sessao.innerHTML +=\n        `\r\n            <div class=\"container\">\r\n                <span class=\"justify-between\">\r\n                    <h5 class=\"text-neutral-200\">SPWorking Butantã - 2024 | Todos os direitos reservados</h5>\r\n                    <h5 class=\"text-neutral-200\">criador por <a href=\"https://github.com/douglas-moura\" target=\"_blank\" class=\"text-roxo-100\">Douglas Moura</a></h5>\r\n                </span>\r\n            </div>\r\n        `;\n    return sessao;\n};\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/_layouts.ts?");

/***/ }),

/***/ "./src/functions/imgFunctions.ts":
/*!***************************************!*\
  !*** ./src/functions/imgFunctions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   abrirImagem: () => (/* binding */ abrirImagem)\n/* harmony export */ });\nconst visualizadorContainer = document.getElementById('visualizador-img-bloco');\nconst abrirImagem = (source, title) => {\n    const btnFechar = document.getElementById('btn-fechar-visualizador');\n    const imgSelecionada = document.getElementById('img-visualizador');\n    const titulo = document.getElementById('img-title');\n    visualizadorContainer.classList.remove('-translate-y-full');\n    imgSelecionada.attributes[2].value = source;\n    titulo.innerText = title;\n    btnFechar.addEventListener('click', () => fecharVisualizador());\n};\nconst fecharVisualizador = () => {\n    visualizadorContainer.classList.add('-translate-y-full');\n};\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/imgFunctions.ts?");

/***/ }),

/***/ "./src/functions/sliderShow.ts":
/*!*************************************!*\
  !*** ./src/functions/sliderShow.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slide: () => (/* binding */ slide)\n/* harmony export */ });\nconst slide = (n) => {\n    const slider = document.getElementById('slider');\n    const slides = document.getElementsByClassName(\"slide\");\n    const marginBase = 440;\n    const maxxMargin = (slides.length - 2) * marginBase;\n    const marginLeftAtual = parseInt(slider.style.marginLeft.slice(0, -2));\n    const marginRightAtual = parseInt(slider.style.marginRight.slice(0, -2));\n    if (n == 1) {\n        const novoMarginL = marginLeftAtual - marginBase;\n        const novoMarginR = marginRightAtual + marginBase;\n        if (marginRightAtual < maxxMargin) {\n            slider.style.marginLeft = novoMarginL.toString() + 'px';\n            slider.style.marginRight = novoMarginR.toString() + 'px';\n        }\n        else {\n            slider.style.marginLeft = '0px';\n            slider.style.marginRight = '0px';\n        }\n    }\n    else {\n        const novoMarginL = marginLeftAtual + marginBase;\n        const novoMarginR = marginRightAtual - marginBase;\n        if (marginLeftAtual < 0) {\n            slider.style.marginLeft = novoMarginL.toString() + 'px';\n            slider.style.marginRight = novoMarginR.toString() + 'px';\n        }\n    }\n};\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/sliderShow.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _functions_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/_layouts */ \"./src/functions/_layouts.ts\");\n/* harmony import */ var _functions_imgFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/imgFunctions */ \"./src/functions/imgFunctions.ts\");\n/* harmony import */ var _functions_sliderShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/sliderShow */ \"./src/functions/sliderShow.ts\");\n\n\n\n\nconsole.log(window.location.pathname);\nwindow.addEventListener('DOMContentLoaded', () => {\n    const headerPagina = document.getElementById('header-pagina');\n    const footerPagina = document.getElementById('footer-pagina');\n    const menuContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.menu)();\n    headerPagina.appendChild(menuContent);\n    const rodapeInfosContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.rodapeInfos)();\n    footerPagina.appendChild(rodapeInfosContent);\n    const rodapFimContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.rodapeFinal)();\n    footerPagina.appendChild(rodapFimContent);\n});\nconst btnPrev = document.getElementById('prev');\nbtnPrev.addEventListener('click', () => (0,_functions_sliderShow__WEBPACK_IMPORTED_MODULE_3__.slide)(0));\nconst btnNext = document.getElementById('next');\nbtnNext.addEventListener('click', () => (0,_functions_sliderShow__WEBPACK_IMPORTED_MODULE_3__.slide)(1));\nconst galeriaImagens = document.getElementsByClassName('img-galeria');\nfor (let i = 0; i < galeriaImagens.length; i++) {\n    galeriaImagens[i].addEventListener('click', () => (0,_functions_imgFunctions__WEBPACK_IMPORTED_MODULE_2__.abrirImagem)(galeriaImagens[i].attributes[2].value, galeriaImagens[i].attributes[1].value));\n}\n\n\n//# sourceURL=webpack://spworking-2025/./src/index.ts?");

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