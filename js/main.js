/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/spin.js */ "./src/js/components/spin.js");
/* harmony import */ var _components_spin_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_spin_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/validation.js */ "./src/js/components/validation.js");
/* harmony import */ var _components_validation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_validation_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ajaxTitle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ajaxTitle.js */ "./src/js/components/ajaxTitle.js");
/* harmony import */ var _components_ajaxTitle_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ajaxTitle_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_headerMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/headerMenu.js */ "./src/js/components/headerMenu.js");
/* harmony import */ var _components_headerMenu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_headerMenu_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/components/ajaxTitle.js":
/*!****************************************!*\
  !*** ./src/js/components/ajaxTitle.js ***!
  \****************************************/
/***/ (() => {

const heroSubtitle = document.querySelector('.hero__subtitle');
const getTitle = async function (http) {
  try {
    const response = await fetch(`${http}`);
    if (!response.ok) throw new Error('Пролема с API');
    const data = await response.json();
    heroSubtitle.textContent = `${data[1]}`;
  } catch {
    console.error('Ошибка с доступом');
    heroSubtitle.textContent = 'We Make international calling simple, relible, and cheap basedon your unique calling behavior.';
  }
};
getTitle('https://baconipsum.com/api/?type=lucky');

/***/ }),

/***/ "./src/js/components/headerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/headerMenu.js ***!
  \*****************************************/
/***/ (() => {

const headerNav = document.querySelector('.header__list');
const burgerContainer = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');
const overlay = document.querySelector('.overlay');
const stateActiveHandler = (elem, selector) => elem.classList.toggle(`${selector}`);
const removeActiveHandler = (elem, selector) => elem.classList.remove(`${selector}`);
burgerContainer.addEventListener('click', () => {
  stateActiveHandler(headerNav, 'header__list--active');
  stateActiveHandler(burgerButton, 'burger__button--active');
  stateActiveHandler(overlay, 'overlay--active');
});
document.addEventListener('click', e => {
  const target = e.target;
  if (target.classList.contains('header__link') || target.classList.contains('overlay')) {
    removeActiveHandler(headerNav, 'header__list--active');
    removeActiveHandler(burgerButton, 'burger__button--active');
    removeActiveHandler(overlay, 'overlay--active');
  }
});

/***/ }),

/***/ "./src/js/components/spin.js":
/*!***********************************!*\
  !*** ./src/js/components/spin.js ***!
  \***********************************/
/***/ (() => {

const spin = document.querySelectorAll('.carousel__spin li');
const spinAnimation = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};
spin.forEach(item => {
  spinAnimation(2.5).then(() => {
    item.classList.add('active');
    return spinAnimation(1.5);
  }).then(() => {
    item.style.animation = 'spin 20s infinite linear';
    setInterval(() => {
      const random = Math.random().toFixed(2) * 1.2;
      if (random < 0.5) return;
      item.firstElementChild.style.transform = `scale(${random})`;
    }, 1000);
  });
});

/***/ }),

/***/ "./src/js/components/validation.js":
/*!*****************************************!*\
  !*** ./src/js/components/validation.js ***!
  \*****************************************/
/***/ (() => {

const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar__input');
const regExp = /[!@#$%^&*()]/g;
const errorMessage = "В форму введены недопустимые значения '!@#$%^&*()'";
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  regExp.test(searchInput.value) ? alert(errorMessage) : searchInput.value = '';
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map