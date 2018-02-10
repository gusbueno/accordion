/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AccordionManager = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accordionManager = new _AccordionManager.default('accordion');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccordionManager =
/*#__PURE__*/
function () {
  function AccordionManager(containerName) {
    _classCallCheck(this, AccordionManager);

    this.accordionHeaders = [];
    this.accordionHeaders.push.apply(this.accordionHeaders, document.getElementById(containerName).getElementsByClassName("".concat(containerName, "-header")));
    this.addOnclickEventToHeaders();
  }

  _createClass(AccordionManager, [{
    key: "toggleAccordion",
    value: function toggleAccordion(accordionHeader, accordionContent) {
      accordionHeader.classList.contains('is-open') ? accordionHeader.classList.remove('is-open') : accordionHeader.classList.add('is-open');
      accordionContent.classList.contains('is-open') ? accordionContent.classList.remove('is-open') : accordionContent.classList.add('is-open');
    }
  }, {
    key: "addOnclickEventToHeaders",
    value: function addOnclickEventToHeaders() {
      var _this = this;

      this.accordionHeaders.forEach(function (accordionHeader, index) {
        accordionHeader.onclick = function () {
          var accordionContent = document.getElementsByClassName('accordion-content')[index]; // bonus section

          if (_this.accordionHeaders.length === index + 1 && !accordionHeader.classList.contains('is-open')) {
            var textElement = accordionContent.getElementsByClassName('accordion-content-text')[0];
            textElement.innerHTML = 'Getting data, please wait...';
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                // readyState 4 means the request is done.
                if (xhr.status === 200) {
                  // status 200 is a successful return.
                  var jsonData = JSON.parse(xhr.responseText);
                  textElement.innerHTML = "The temperature on ".concat(jsonData.title, " is ").concat(jsonData.temp, "\xBA");
                }
              } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.

                textElement.innerHTML = 'Error on getting data...';
              }
            };

            xhr.open('GET', 'data.json'); // weather in Barcelona

            xhr.send();
          }

          _this.toggleAccordion(accordionHeader, accordionContent);
        };
      });
    }
  }]);

  return AccordionManager;
}();

var _default = AccordionManager;
exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);