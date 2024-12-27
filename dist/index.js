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

/***/ "./src/functions/helpers.ts":
/*!**********************************!*\
  !*** ./src/functions/helpers.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   abrirImagem: () => (/* binding */ abrirImagem),\n/* harmony export */   slide: () => (/* binding */ slide)\n/* harmony export */ });\nconst visualizadorContainer = document.getElementById('visualizador-img-bloco');\nconst abrirImagem = (source, title) => {\n    const btnFechar = document.getElementById('btn-fechar-visualizador');\n    const imgSelecionada = document.getElementById('img-visualizador');\n    const titulo = document.getElementById('img-title');\n    visualizadorContainer.classList.remove('-translate-y-full');\n    imgSelecionada.attributes[2].value = source;\n    titulo.innerText = title;\n    btnFechar.addEventListener('click', () => fecharVisualizador());\n};\nconst fecharVisualizador = () => {\n    visualizadorContainer.classList.add('-translate-y-full');\n};\nconst slide = (n) => {\n    const slider = document.getElementById('slider');\n    const slides = document.getElementsByClassName(\"slide\");\n    const marginBase = slides[0].getBoundingClientRect().width;\n    const maxxMargin = (slides.length - 1) * marginBase;\n    const marginLeftAtual = parseInt(slider.style.marginLeft.slice(0, -2));\n    const marginRightAtual = parseInt(slider.style.marginRight.slice(0, -2));\n    if (n == 1) {\n        const novoMarginL = marginLeftAtual - marginBase;\n        const novoMarginR = marginRightAtual + marginBase;\n        if (marginRightAtual < maxxMargin) {\n            slider.style.marginLeft = novoMarginL.toString() + 'px';\n            slider.style.marginRight = novoMarginR.toString() + 'px';\n        }\n        else {\n            slider.style.marginLeft = '0px';\n            slider.style.marginRight = '0px';\n        }\n    }\n    else {\n        const novoMarginL = marginLeftAtual + marginBase;\n        const novoMarginR = marginRightAtual - marginBase;\n        if (marginLeftAtual < 0) {\n            slider.style.marginLeft = novoMarginL.toString() + 'px';\n            slider.style.marginRight = novoMarginR.toString() + 'px';\n        }\n    }\n};\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/helpers.ts?");

/***/ }),

/***/ "./src/functions/infos.ts":
/*!********************************!*\
  !*** ./src/functions/infos.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   perguntasFrequentes: () => (/* binding */ perguntasFrequentes),\n/* harmony export */   planos: () => (/* binding */ planos),\n/* harmony export */   servicos: () => (/* binding */ servicos)\n/* harmony export */ });\nconst planos = [\n    {\n        id: 0, servico: \"Mesa Individual\", valor: 49, periodo: \"dia\", promo: false,\n        beneficios: [\"Rede Wi-fi\", \"Café, água e chá disponível\"]\n    },\n    {\n        id: 1, servico: \"Mesa Individual\", valor: 199, periodo: \"mês\", promo: true,\n        beneficios: [\"Rede Wi-fi\", \"Café, água e chá disponível\", \"1 almoço/dia no local\"]\n    },\n    {\n        id: 2, servico: \"Sala de Reunião\", valor: 149, periodo: \"dia\", promo: false,\n        beneficios: [\"Rede Wi-fi\", \"Café, água e chá disponível\", \"Guarda volumes com chave\", \"SmartTV 52 polegadas\"]\n    },\n    {\n        id: 4, servico: \"Sala 6 Lugares\", valor: 1599, periodo: \"mês\", promo: false,\n        beneficios: [\"2 Rede Wi-fi\", \"Café, água e chá disponível\", \"6 almoços/dia no local\", \"Guarda volumes com chave\", \"Happy Hour\", \"Endereço fiscal\", \"Horário comercial extendido\"]\n    },\n    {\n        id: 5, servico: \"Sala 12 Lugares\", valor: 3199, periodo: \"mês\", promo: false,\n        beneficios: [\"2 Rede Wi-fi\", \"Café, água e chá disponível\", \"12 almoços/dia no local\", \"Guarda volumes com chave\", \"Happy Hour\", \"Endereço fiscal\", \"Horário comercial extendido\"]\n    }\n];\nconst servicos = [\n    { icon: \"tabler:wifi\", descr: \"Redes Wi-Fi\" },\n    { icon: \"tabler:packages\", descr: \"Armários\" },\n    { icon: \"tabler:glass-cocktail\", descr: \"Happy Hour\" },\n    { icon: \"tabler:tools-kitchen-2\", descr: \"Copa\" },\n    { icon: \"tabler:hand-sanitizer\", descr: \"Faxina\" },\n    { icon: \"tabler:file-text\", descr: \"Impressoras\" },\n    { icon: \"tabler:brand-wechat\", descr: \"Networks\" }\n];\nconst perguntasFrequentes = [\n    {\n        pergunta: \"Qual é a capacidade das salas privadas, reuniões e áreas compartilhadas?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"É permitido personalizar as salas privativas?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"Como é a política de cancelamento ou mudanças no plano?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"O espaço é pet-friendly?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"O ambiente é adequado para chamadas ou trabalho silencioso?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"Que medidas de segurança são adotadas?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"Há estacionamento ou transporte público próximo?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n    {\n        pergunta: \"O espaço é acessível 24/7?\",\n        resposta: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. At commodi perspiciatis, mollitia unde accusantium, reiciendis repudiandae asperiores consequuntur fugiat sunt libero nam!\"\n    },\n];\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/infos.ts?");

/***/ }),

/***/ "./src/functions/layouts.ts":
/*!**********************************!*\
  !*** ./src/functions/layouts.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blocoPlano: () => (/* binding */ blocoPlano),\n/* harmony export */   boxServico: () => (/* binding */ boxServico),\n/* harmony export */   menu: () => (/* binding */ menu),\n/* harmony export */   rodapeFinal: () => (/* binding */ rodapeFinal),\n/* harmony export */   rodapeInfos: () => (/* binding */ rodapeInfos)\n/* harmony export */ });\nconst menu = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('py-6');\n    sessao.innerHTML +=\n        `\r\n            <nav class=\"container grid-cols-2 lg:grid-cols-3\">\r\n                <img src=\"./img/logo-spworking-branco.png\" alt=\"Logotipo SPWorking\" loading=\"lazy\" class=\"h-6 my-auto cursor-pointer\">\r\n\r\n                <!-- menu mobile -->\r\n                <span class=\"justify-end lg:hidden\">\r\n                    <iconify-icon icon=\"tabler:menu-2\" height=\"1rem\" class=\"text-neutral-200 p-2\" id=\"abrir-menu-mobile\"></iconify-icon>\r\n                    <ul id=\"mobile-menu-lista\" class=\"absolute top-0 left-0 bg-white h-dvh text-neutral-800 p-8 w-full -translate-x-full transition-all\">\r\n                        <iconify-icon icon=\"tabler:x\" height=\"2rem\" class=\"mb-8 w-full text-verde-700\" id=\"fechar-menu-mobile\"></iconify-icon>\r\n                        <li class=\"mb-6\"><a href=\"/#banner\">Home</a></li>\r\n                        <li class=\"mb-6\"><a href=\"/#servicos\">Serviços</a></li>\r\n                        <li class=\"mb-6\"><a href=\"/#galeria\">Galeria</a></li>\r\n                        <li class=\"mb-6\"><a href=\"/#localizacao\">Localização</a></li>\r\n                        <li class=\"mb-6\"><a href=\"pages/planos.html\">Planos</a></li>\r\n                        <li class=\"\">\r\n                            <span class=\"text-sm items-center\">\r\n                                <iconify-icon icon=\"tabler:brand-whatsapp\" height=\"1rem\" class=\"mr-2 bg-[#25D366] rounded-full p-2\"></iconify-icon>\r\n                                11 98765-4321\r\n                            </span>\r\n                        </li>\r\n                    </ul>\r\n                </span>\r\n\r\n                <!-- menu desktop -->\r\n                <ul class=\"items-center h-full justify-between text-white col-span-2 hidden lg:inline-flex\">\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\"><a href=\"/#banner\">Home</a></li>\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\"><a href=\"/#servicos\">Serviços</a></li>\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\"><a href=\"/#galeria\">Galeria</a></li>\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\"><a href=\"/#localizacao\">Localização</a></li>\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\"><a href=\"pages/planos.html\">Planos</a></li>\r\n                    <li class=\"text-sm xl:text-base 2xl:text-sm\">\r\n                        <span class=\"ml-4 items-center text-sm xl:text-base 2xl:text-sm\">\r\n                            <iconify-icon icon=\"tabler:brand-whatsapp\" height=\"1rem\" class=\"mr-2 bg-[#25D366] rounded-full p-2\"></iconify-icon>\r\n                            11 98765-4321\r\n                        </span>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        `;\n    return sessao;\n};\nconst rodapeInfos = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('bg-neutral-800');\n    sessao.innerHTML +=\n        `\r\n            <div class=\"container text-center mb-8 lg:px-28\">\r\n                <img src=\"./img/logo-spworking-branco.png\" alt=\"Logotipo SPWorking\" loading=\"lazy\" class=\"mx-auto w-3/6 lg:w-2/6\">\r\n                <h2 class=\"text-neutral-400 text-xl\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur quaerat eum illo temporibus</h2>\r\n            </div>\r\n            <div class=\"container grid-cols-4 gap-0 w-3/4 lg:w-1/4\">\r\n                <a href=\"https://www.linkedin.com/company/spworkingcoworking/\" target=\"_blank\" class=\"flex\">\r\n                    <iconify-icon icon=\"tabler:brand-linkedin\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"https://www.instagram.com/spworking/\" target=\"_blank\" class=\"flex\">\r\n                    <iconify-icon icon=\"tabler:brand-instagram\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"https://www.whatsapp.com/?lang=pt_BR\" target=\"_blank\" class=\"flex\">\r\n                    <iconify-icon icon=\"tabler:brand-whatsapp\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n                <a href=\"mailto:contato@spworking.com.br\" target=\"_blank\" class=\"flex\">\r\n                    <iconify-icon icon=\"tabler:mail\" height=\"1.5rem\" class=\"m-auto border-2 border-verde-500 text-verde-500 p-2 rounded-full cursor-pointer\"></iconify-icon>\r\n                </a>\r\n            </div>\r\n            <script src=\"../index.ts\"></script>\r\n        `;\n    return sessao;\n};\nconst rodapeFinal = () => {\n    const sessao = document.createElement('section');\n    sessao.classList.add('bg-neutral-900');\n    sessao.classList.add('py-8');\n    sessao.innerHTML +=\n        `\r\n            <div class=\"container\">\r\n                <span class=\"justify-between flex-col lg:flex-row\">\r\n                    <h5 class=\"text-neutral-200\" class=\"mb-4 lg:m-0\">SPWorking Butantã - 2024 | Todos os direitos reservados</h5>\r\n                    <h5 class=\"text-neutral-200\">criador por <a href=\"https://github.com/douglas-moura\" target=\"_blank\" class=\"text-roxo-100\">Douglas Moura</a></h5>\r\n                </span>\r\n            </div>\r\n        `;\n    return sessao;\n};\nconst blocoPlano = (plano) => {\n    const planoBloco = document.createElement('div');\n    const planoInformacoes = document.createElement('span');\n    const listaBeneficios = document.createElement('ul');\n    const planoPreco = document.createElement('span');\n    planoBloco.classList.add('bloco-plano');\n    planoInformacoes.classList.add('flex-col');\n    planoPreco.classList.add('flex-col');\n    planoPreco.classList.add('sessao-preco');\n    if (plano.promo)\n        planoBloco.classList.add('plano-especial');\n    planoInformacoes.innerHTML = `<h3 class=\"mb-6\">${plano.servico}</h3>`;\n    for (let i = 0; i < plano.beneficios.length; i++) {\n        listaBeneficios.innerHTML +=\n            `\r\n            <li class=\"flex items-center mb-2\">\r\n                <iconify-icon height=\"1rem\" class=\"mr-3 text-roxo-500\" icon=\"tabler:check\"></iconify-icon>\r\n                <p class=\"m-0 text-xs\">${plano.beneficios[i]}</p>\r\n            </li>\r\n        `;\n    }\n    planoPreco.innerHTML =\n        `\r\n            <span class=\"items-start mb-4\">\r\n                <p class=\"m-0 text-neutral-600 text-xs leading-3\">R$</p>\r\n                <p class=\"m-0 text-neutral-800 text-3xl leading-6 font-extrabold\">${(plano === null || plano === void 0 ? void 0 : plano.valor.toLocaleString('pt-BR')) || ''}</p>\r\n                <p class=\"m-0 text-neutral-600 text-xs leading-3\">,00</p>\r\n                <p class=\"m-0 text-neutral-400 ml-1 text-sm\" id=\"periodo-plano\">/${(plano === null || plano === void 0 ? void 0 : plano.periodo) || ''}</p>\r\n            </span>\r\n            <button class=\"btn btn-verde-2 w-full font-extrabold\">Contratar</button>\r\n        `;\n    planoInformacoes.appendChild(listaBeneficios);\n    planoBloco.appendChild(planoInformacoes);\n    planoBloco.appendChild(planoPreco);\n    return planoBloco;\n};\nconst boxServico = (servico) => {\n    const bloco = document.createElement('span');\n    bloco.classList.add('bloco-servico');\n    const icone = document.createElement('iconify-icon');\n    icone.setAttribute('icon', servico.icon);\n    icone.setAttribute('height', '2.5rem');\n    const texto = document.createElement('p');\n    texto.innerText = servico.descr;\n    bloco.appendChild(icone);\n    bloco.appendChild(texto);\n    return bloco;\n};\n\n\n//# sourceURL=webpack://spworking-2025/./src/functions/layouts.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _functions_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/layouts */ \"./src/functions/layouts.ts\");\n/* harmony import */ var _functions_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/helpers */ \"./src/functions/helpers.ts\");\n/* harmony import */ var _functions_infos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/infos */ \"./src/functions/infos.ts\");\n\n\n\n\n\nconsole.log(window.location.pathname);\nwindow.addEventListener('DOMContentLoaded', () => {\n    const headerPagina = document.getElementById('header-pagina');\n    const footerPagina = document.getElementById('footer-pagina');\n    const menuContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.menu)();\n    headerPagina.appendChild(menuContent);\n    const rodapeInfosContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.rodapeInfos)();\n    footerPagina.appendChild(rodapeInfosContent);\n    const rodapFimContent = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.rodapeFinal)();\n    footerPagina.appendChild(rodapFimContent);\n    const abrirMenu = document.getElementById('abrir-menu-mobile');\n    const fecharMenu = document.getElementById('fechar-menu-mobile');\n    const menuLateral = () => {\n        document.getElementById('mobile-menu-lista').classList.toggle('-translate-x-full');\n    };\n    abrirMenu.addEventListener('click', () => menuLateral());\n    fecharMenu.addEventListener('click', () => menuLateral());\n});\nif (window.location.pathname == '/') {\n    const blocoServicos = document.getElementById('box-servicos');\n    for (let index = 0; index < _functions_infos__WEBPACK_IMPORTED_MODULE_3__.servicos.length; index++) {\n        const element = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.boxServico)(_functions_infos__WEBPACK_IMPORTED_MODULE_3__.servicos[index]);\n        blocoServicos.appendChild(element);\n    }\n    const btnPrev = document.getElementById('prev');\n    btnPrev.addEventListener('click', () => (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.slide)(0));\n    const btnNext = document.getElementById('next');\n    btnNext.addEventListener('click', () => (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.slide)(1));\n    const galeriaImagens = document.getElementsByClassName('img-galeria');\n    for (let i = 0; i < galeriaImagens.length; i++) {\n        galeriaImagens[i].addEventListener('click', () => (0,_functions_helpers__WEBPACK_IMPORTED_MODULE_2__.abrirImagem)(galeriaImagens[i].attributes[2].value, galeriaImagens[i].attributes[1].value));\n    }\n}\nif (window.location.pathname == '/pages/planos.html') {\n    const planosContainer = document.getElementById('planos-container');\n    const blocoFAQ = document.getElementById('faq-bloco');\n    for (let index = 0; index < _functions_infos__WEBPACK_IMPORTED_MODULE_3__.planos.length; index++) {\n        const plano = _functions_infos__WEBPACK_IMPORTED_MODULE_3__.planos[index];\n        const blocoMontado = (0,_functions_layouts__WEBPACK_IMPORTED_MODULE_1__.blocoPlano)(plano);\n        planosContainer.appendChild(blocoMontado);\n    }\n    for (let index = 0; index < _functions_infos__WEBPACK_IMPORTED_MODULE_3__.perguntasFrequentes.length; index++) {\n        const question = _functions_infos__WEBPACK_IMPORTED_MODULE_3__.perguntasFrequentes[index];\n        const novaPergunta = `<details class=\"border-b border-neutral-200 pb-4 m-0\">\r\n                <summary class=\"cursor-pointer text-neutral-600 font-semibold\">${question.pergunta}</summary>\r\n                <p class=\"pt-2 text-sm\">${question.resposta}</p>\r\n            </details>`;\n        blocoFAQ.innerHTML += novaPergunta;\n    }\n}\n\n\n//# sourceURL=webpack://spworking-2025/./src/index.ts?");

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