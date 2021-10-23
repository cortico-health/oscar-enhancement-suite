<<<<<<< Updated upstream
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _readOnlyError)
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./modules/Icons/CorticoIcon.js":
/*!**************************************!*\
  !*** ./modules/Icons/CorticoIcon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorticoIcon": () => (/* binding */ CorticoIcon)
/* harmony export */ });
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");

var image = document.createElement("img");
image.setAttribute("src", _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_0__.default);
image.setAttribute("alt", "Cortico");
var CorticoIcon = function CorticoIcon(_ref) {
  var attrs = _ref.attrs;
  var clone = image.cloneNode();

  if (attrs) {
    for (var prop in attrs) {
      clone.setAttribute(prop, attrs[prop]);
    }
  }

  return clone;
};

/***/ }),

/***/ "./modules/Icons/Ellipsis.js":
/*!***********************************!*\
  !*** ./modules/Icons/Ellipsis.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ellipsis": () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _Ellipsis_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ellipsis.css */ "./modules/Icons/Ellipsis.css");


var Ellipsis = function Ellipsis() {
  return (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.htmlToElement)("\n    <div class=\"ellip-dot-container\">\n      <div class=\"ellip-dot\"></div>\n      <div class=\"ellip-dot\"></div>\n      <div class=\"ellip-dot\"></div>\n    </div>\n  ");
};

/***/ }),

/***/ "./modules/Loader/Loader.js":
/*!**********************************!*\
  !*** ./modules/Loader/Loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.css */ "./modules/Loader/Loader.css");


function Loader() {
  var inner = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.create)("div", {
    attrs: {
      class: "inner-loader"
    }
  });
  var loader = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.create)("div", {
    attrs: {
      class: "loader"
    }
  }, inner);
  var loaderContainer = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.create)("div", {
    attrs: {
      class: "loader-container"
    }
  }, loader);
  return loaderContainer;
}

/***/ }),

/***/ "./modules/Modal/Modal.js":
/*!********************************!*\
  !*** ./modules/Modal/Modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.css */ "./modules/Modal/Modal.css");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");




var Modal = /*#__PURE__*/function () {
  function Modal() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Modal);

    this.modalContainer = null;
    this.modal = null;
    var modalContainer = document.querySelector(".cortico-modal-container");
    var modal = document.querySelector(".cortico-modal");

    if (modalContainer && modal) {
      this.modalContainer = modalContainer;
      this.modal = modal;
      return;
    }

    this.modal = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__.create)("div", {
      attrs: {
        class: "cortico-modal"
      }
    });
    this.modalContainer = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_3__.create)("div", {
      attrs: {
        class: "cortico-modal-container tailwind"
      }
    }, this.modal);
    document.body.prepend(this.modalContainer);
    this.modalContainer.addEventListener("click", function (e) {
      if (e.target.isEqualNode(_this.modalContainer)) {
        _this.hide();
      }
    });

    if (window.pubsub) {
      window.pubsub.subscribe("modal.close", function () {
        _this.hide();
      });
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Modal, [{
    key: "setContent",
    value: function setContent(content) {
      if (!content) {
        return;
      }

      if (typeof content === "string") {
        this.modal.innerHTML = content;
      }

      if (content instanceof Element) {
        this.modal.appendChild(content);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.modalContainer && this.modalContainer.classList.remove("show");
    }
  }, {
    key: "show",
    value: function show() {
      this.modalContainer && this.modalContainer.classList.add("show");
    }
  }]);

  return Modal;
}();

/***/ }),

/***/ "./modules/PubSub/PubSub.js":
/*!**********************************!*\
  !*** ./modules/PubSub/PubSub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubSubInit": () => (/* binding */ pubSubInit)
/* harmony export */ });
// PubSub
var pubSubInit = function pubSubInit() {
  var pubsub = {};

  (function (myObject) {
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {}; // A topic identifier

    var subUid = -1; // Publish or broadcast events of interest
    // with a specific topic name and arguments
    // such as the data to pass along

    myObject.publish = function (topic, args) {
      if (!topics[topic]) {
        return false;
      }

      var subscribers = topics[topic],
          len = subscribers ? subscribers.length : 0;

      while (len--) {
        subscribers[len].func(topic, args);
      }

      return this;
    }; // Subscribe to events of interest
    // with a specific topic name and a
    // callback function, to be executed
    // when the topic/event is observed


    myObject.subscribe = function (topic, func) {
      if (!topics[topic]) {
        topics[topic] = [];
      }

      var token = (++subUid).toString();
      topics[topic].push({
        token: token,
        func: func
      });
      return token;
    }; // Unsubscribe from a specific
    // topic, based on a tokenized reference
    // to the subscription


    myObject.unsubscribe = function (token) {
      for (var m in topics) {
        if (topics[m]) {
          for (var i = 0, j = topics[m].length; i < j; i++) {
            if (topics[m][i].token === token) {
              topics[m].splice(i, 1);
              return token;
            }
          }
        }
      }

      return this;
    };
  })(pubsub);

  return pubsub;
};

/***/ }),

/***/ "./modules/Utils/Utils.js":
/*!********************************!*\
  !*** ./modules/Utils/Utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "waitForElm": () => (/* binding */ waitForElm),
/* harmony export */   "getOrigin": () => (/* binding */ getOrigin),
/* harmony export */   "getNamespace": () => (/* binding */ getNamespace),
/* harmony export */   "getCorticoUrl": () => (/* binding */ getCorticoUrl),
/* harmony export */   "getPortalPage": () => (/* binding */ getPortalPage),
/* harmony export */   "getCorticoAppointmentUrl": () => (/* binding */ getCorticoAppointmentUrl),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "loadExtensionStorageValue": () => (/* binding */ loadExtensionStorageValue),
/* harmony export */   "htmlToElement": () => (/* binding */ htmlToElement),
/* harmony export */   "getDemographicNo": () => (/* binding */ getDemographicNo),
/* harmony export */   "getAppointmentNo": () => (/* binding */ getAppointmentNo),
/* harmony export */   "addToCache": () => (/* binding */ addToCache),
/* harmony export */   "createSidebarContainer": () => (/* binding */ createSidebarContainer),
/* harmony export */   "checkCorticoUrl": () => (/* binding */ checkCorticoUrl),
/* harmony export */   "showLoginForm": () => (/* binding */ showLoginForm)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cortico_Login_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cortico/Login/Login */ "./modules/cortico/Login/Login.js");


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    var observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
function getOrigin() {
  return window.location.origin;
}
function getNamespace() {
  return window.location.pathname.split("/")[1];
}
function getCorticoUrl() {
  // FOR TESTING:
  //return 'http://localhost';
  var clinicName = window.localStorage["clinicname"];
  var suffix = window.localStorage["customUrlSuffix"] || 'cortico.ca';

  if (suffix.charAt(0) === ".") {
    suffix = suffix.substring(1);
  }

  if (!clinicName) {
    return null;
  }

  return "https://".concat(clinicName, ".").concat(suffix);
}
function getPortalPage() {
  var corticoUrl = getCorticoUrl();

  if (!corticoUrl) {
    return null;
  }

  return "".concat(getCorticoUrl(), "/virtual-portal");
}
function getCorticoAppointmentUrl(providerNo, appointmentNo) {
  var corticoUrl = getCorticoUrl();

  if (!corticoUrl) {
    return null;
  }

  return "".concat(getCorticoUrl(), "/provider/schedule/").concat(providerNo, "/?appointment_id=").concat(appointmentNo);
}
function create(_element, options) {
  if (!_element) {
    return null;
  }

  var element;

  if (_element.trim().startsWith("<")) {
    element = htmlToElement(_element);
  } else {
    element = document.createElement(_element);
  }

  if (!options) {
    return element;
  }

  if (options.attrs) {
    for (var prop in options.attrs) {
      element.setAttribute(prop, options.attrs[prop]);
    }
  }

  if (options.text) {
    element.textContent = options.text;
  }

  if (options.events) {
    for (var event in options.events) {
      console.log('*', event);
      var chunks = event.split(' ');
      var trigger = chunks.shift();
      var selector = chunks.join(' '); // closure

      var tmp = function tmp(trigger, selector, handler) {
        element.addEventListener(trigger, function (e) {
          var target = selector ? e.target.closest(selector) : e.target;
          if (target) handler({
            target: target,
            originalEvent: e
          });
        });
      };

      tmp(trigger, selector, options.events[event]);
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  children.map(function (child) {
    element.appendChild(child);
  });
  return element;
}
function loadExtensionStorageValue(key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.get(key, function (result) {
      resolve(result[key]);
    });
  });
}
function htmlToElement(html) {
  var placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  return placeholder.children.length ? placeholder.firstElementChild : undefined;
}
function getDemographicNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl);
  return searchParams.get("demographic_no") || searchParams.get("demographicNo");
}
function getAppointmentNo(apptUrl) {
  console.log(apptUrl);
  var searchParams = new URLSearchParams(apptUrl.split('?')[1]);
  return searchParams.get("appointment_no");
}
function addToCache(demographic_no, _verified) {
  var verified = _verified || false;

  var _cache = window.localStorage.getItem("checkCache");

  var _today = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");

  var cache = JSON.parse(_cache) || {};
  cache[demographic_no] = {
    date: _today,
    verified: verified
  };
  window.localStorage.setItem("checkCache", JSON.stringify(cache));
}
function createSidebarContainer(child, events) {
  var html = child ? typeof child === 'string' ? child : child.outerHTML : '';
  var events = events ? events : {};
  var container = create("<div style='width: 100%; padding: 0px 10px; box-sizing: border-box'>\n    ".concat(html, "\n  </div>"), events);
  return container;
}
function checkCorticoUrl(event) {
  if (!getCorticoUrl()) {
    event.preventDefault();
    alert("Please set the cortico URL to use this feature.");
    return false;
  }

  return true;
}
function showLoginForm() {
  chrome.storage.local.set({
    "jwt_expired": true
  });
  alert("Your credentials have expired. Please login again");
  (0,_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_1__.addLoginForm)(chrome);
  var loginForm = document.querySelector(".login-form");
  loginForm.classList.add("show");
}

/***/ }),

/***/ "./modules/core/Appointment.js":
/*!*************************************!*\
  !*** ./modules/core/Appointment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Appointment": () => (/* binding */ Appointment)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var Appointment = /*#__PURE__*/function () {
  function Appointment(apptTd) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Appointment);

    this.element = null;
    this.element = apptTd;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Appointment, [{
    key: "getEncounterBtnUrl",
    value: function getEncounterBtnUrl() {
      if (!this.element) {
        return null;
      }

      var encounterBtn = this.element.querySelector(".encounterBtn");

      if (!encounterBtn) {
        return null;
      }

      var clickContent = encounterBtn.attributes.onclick.textContent;

      if (!clickContent) {
        return null;
      }

      clickContent = clickContent.split(",");
      var url = clickContent[2];

      if (!url) {
        return null;
      }

      return url.substring(3).replace(/'/g, "");
    }
  }, {
    key: "getCurrentProvider",
    value: function getCurrentProvider() {
      var url = this.getEncounterBtnUrl();

      if (!url) {
        return null;
      }

      var searchParams = new URLSearchParams(url);
      var providerNo = searchParams.get("curProviderNo");

      if (!providerNo || providerNo === "null") {
        //Juno
        providerNo = searchParams.get("apptProvider_no");
      }

      return providerNo;
    }
  }, {
    key: "getAppointmentNo",
    value: function getAppointmentNo() {
      var url = this.getEncounterBtnUrl();

      if (!url) {
        return null;
      }

      var searchParams = new URLSearchParams(url);
      var appointmentNo = searchParams.get("appointmentNo");
      return appointmentNo;
    }
  }]);

  return Appointment;
}();

/***/ }),

/***/ "./modules/core/Masterfile.js":
/*!************************************!*\
  !*** ./modules/core/Masterfile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Masterfile": () => (/* binding */ Masterfile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");






var originalFetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");

var fetch = __webpack_require__(/*! fetch-retry */ "./node_modules/fetch-retry/index.js")(originalFetch);
/**
 * Tries to represent the masterfile in oscar.
 */


var Masterfile = /*#__PURE__*/function () {
  function Masterfile(apptTd) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Masterfile);

    this.apptTD = null;
    this.url = null;
    this.page = null;
    this.container = null;
    this.apptTD = apptTd;
    this.url = this.getMasterFileUrl(apptTd);
  }
  /**
   * Returns master file URL for the given appointment
   * @params {HTMLTableDataCellElement} the appointment TD element.
   * @return {null} the url or null if the algorithm fails.
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Masterfile, [{
    key: "getMasterFileUrl",
    value: function getMasterFileUrl(apptTd) {
      if (!apptTd) {
        return null;
      }

      var masterAnchor = apptTd.querySelector(".masterBtn");

      if (!masterAnchor) {
        return null;
      }

      var clickContent = masterAnchor.attributes.onclick.textContent;

      if (!clickContent) {
        return null;
      }

      clickContent = clickContent.split(",");
      var url = clickContent[2];

      if (!url) {
        return null;
      }

      url = url.substring(3).replace(/'/g, "");
      return url;
    }
  }, {
    key: "fetchPage",
    value: function () {
      var _fetchPage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var url, result, page, container;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.url) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                url = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.getOrigin)() + "/" + (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.getNamespace)() + this.url;
                _context.next = 6;
                return fetch(url, {
                  retryDelay: 3000,
                  retryOn: function retryOn(attempt, error, response) {
                    if (error !== null || response.status >= 400) {
                      if (attempt === 1) {
                        return false;
                      }

                      return true;
                    }
                  }
                });

              case 6:
                result = _context.sent;

                if (!(result.status !== 200)) {
                  _context.next = 9;
                  break;
                }

                throw result;

              case 9:
                _context.next = 11;
                return result.text();

              case 11:
                page = _context.sent;
                container = document.createElement("div");
                container.innerHTML = page;
                this.page = container;
                return _context.abrupt("return", this.page);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);
                console.error("Fetch error", _context.t0);
                return _context.abrupt("return", false);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 18]]);
      }));

      function fetchPage() {
        return _fetchPage.apply(this, arguments);
      }

      return fetchPage;
    }()
  }, {
    key: "getEmail",
    value: function getEmail() {
      if (!this.page) {
        throw new Error("Masterfile Page does not exist");
      }

      var emailInput = this.page.querySelector('input[name="email"]');

      if (!emailInput) {
        return null;
      }

      return emailInput.value;
    }
    /**
     * Returns an array of phone numbers
     * @return []
     */

  }, {
    key: "getPhoneNumbers",
    value: function getPhoneNumbers() {
      if (!this.page) {
        throw new Error("Masterfile Page does not exist");
      }

      var homePhone = this.page.querySelector('input[name="phone"]');
      var workPhone = this.page.querySelector('input[name="phone2"]');
      var cellPhone = this.page.querySelector('input[name="demo_cell"]');
      return [{
        type: "home",
        phone: homePhone && homePhone.value
      }, {
        type: "work",
        phone: workPhone && workPhone.value
      }, {
        type: "cell",
        phone: cellPhone && cellPhone.value
      }];
    }
  }]);

  return Masterfile;
}();

/***/ }),

/***/ "./modules/core/Oscar.js":
/*!*******************************!*\
  !*** ./modules/core/Oscar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oscar": () => (/* binding */ Oscar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");



var Oscar = /*#__PURE__*/function () {
  function Oscar() {
    var hostname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hostname;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Oscar);

    this.hostname = null;
    this.hostname = hostname;

    if (this.isJuno()) {
      // Juno already has a sticky primary navbar. Lift it to preven collisions with Cortico UI.
      var top_menu = document.getElementById('firstMenu');
      if (top_menu) top_menu.parentNode.parentNode.parentNode.zIndex = 1;
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Oscar, [{
    key: "isJuno",
    value: function isJuno() {
      var isJunoHost = this.hostname.indexOf(".junoemr.com") !== -1;
      var containsJunoLink = document.querySelectorAll("a#helpLink").length > 0 && document.querySelectorAll("a#helpLink")[0].outerHTML.indexOf("help.junoemr.com") !== -1;
      return isJunoHost || containsJunoLink;
    } // disable sticky headers on WELL Oscar (KAI or Oscar Go), because they have
    // implemented their own sticky headers

  }, {
    key: "isOscarGoHost",
    value: function isOscarGoHost() {
      return this.hostname.indexOf(".oscargo.com") !== -1;
    }
  }, {
    key: "isKaiOscarHost",
    value: function isKaiOscarHost() {
      return this.hostname.indexOf(".kai-oscar.com") !== -1;
    } // some clinics use a local network IP address to access oscar inside the clinic
    // in these cases, we can't rely on the hostname but have to look for specific elements instead
    // this may be less reliable, so we still prefer the hostname check

  }, {
    key: "containsKaiBar",
    value: function containsKaiBar() {
      return document.querySelectorAll("div.KaiBar").length !== 0;
    }
  }, {
    key: "containsOscarGoOceanScript",
    value: function containsOscarGoOceanScript() {
      return document.querySelectorAll('script[src="/oscar/js/custom/ocean/global.js"]').length !== 0;
    } // sticky headers for doctor schedule page

  }, {
    key: "updateDoctorHeadings",
    value: function updateDoctorHeadings() {
      var _this = this;

      var ifv = document.querySelectorAll("tbody>tr:first-child>td.infirmaryView");

      if (window.scrollY > 50) {
        ifv.forEach(function (view) {
          view.style.position = "sticky";
          view.style.zIndex = 1;
          view.style.marginLeft = "unset";

          if (_this.isJuno()) {
            // for juno, position the sticky doctor headers under the sticky top menu
            view.style.top = "18px";
          }
        });
      } else {
        ifv.forEach(function (view) {
          view.style.position = "static";
        });
      }
    }
  }]);

  return Oscar;
}();

/***/ }),

/***/ "./modules/cortico/Appointments/AppointmentMenu.js":
/*!*********************************************************!*\
  !*** ./modules/cortico/Appointments/AppointmentMenu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAppointmentMenu": () => (/* binding */ addAppointmentMenu),
/* harmony export */   "appointmentMenu": () => (/* binding */ appointmentMenu),
/* harmony export */   "getCorticoLinks": () => (/* binding */ getCorticoLinks),
/* harmony export */   "setAppointmentCheckbox": () => (/* binding */ setAppointmentCheckbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons_Ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icons/Ellipsis */ "./modules/Icons/Ellipsis.js");
/* harmony import */ var _Appointments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Appointments */ "./modules/cortico/Appointments/Appointments.js");
/* harmony import */ var _AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppointmentMenu.css */ "./modules/cortico/Appointments/AppointmentMenu.css");
/* harmony import */ var _core_Masterfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Masterfile */ "./modules/core/Masterfile.js");
/* harmony import */ var _core_Appointment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Appointment */ "./modules/core/Appointment.js");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Icons/CorticoIcon */ "./modules/Icons/CorticoIcon.js");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Loader/Loader */ "./modules/Loader/Loader.js");











function addAppointmentMenu() {
  var appointments = (0,_Appointments__WEBPACK_IMPORTED_MODULE_3__.getAppointments)();
  var checkCache = JSON.parse(localStorage.checkCache || '{}');
  var pharmaciesCache = JSON.parse(localStorage.pharmaciesCache || '{"demographics":[]}');
  var apptInfo = (0,_Appointments__WEBPACK_IMPORTED_MODULE_3__.getAppointmentInfo)(appointments);
  console.log(apptInfo);
  appointments.map(function (appt) {
    appt.appendChild(appointmentMenu(appt));
    setAppointmentCheckbox(appt, apptInfo, checkCache, pharmaciesCache);
  }); // clicks outside the menu, close it.

  var html = document.documentElement;
  html.addEventListener("click", function (e) {
    var menu = e.target.closest(".appointment-menu-container");
    var menuToggle = e.target.closest(".ellip-dot-wrapper");

    if (!menu && !menuToggle) {
      var openMenu = document.querySelector(".appointment-menu.show");

      if (openMenu) {
        openMenu.classList.remove("show");
      }
    }
  });
}
function appointmentMenu(apptTd) {
  var corticoIcon = (0,_Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_8__.CorticoIcon)({
    attrs: {
      height: "15"
    }
  });
  var corticoLinks = getCorticoLinks(apptTd);
  var menuIcon = (0,_Icons_Ellipsis__WEBPACK_IMPORTED_MODULE_2__.Ellipsis)();
  var wrapper = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.create)("\n  <div class='appointment-menu-wrapper'>\n    <div class='appointment-menu-container' style='background-color:#5b6ce2'>\n      <div class='appointment-menu'>\n        <div class='appointment-menu-close'>x</div>\n        <div class='appointment-menu-header'>\n          ".concat(corticoIcon.outerHTML, "\n          <h5 class='color-primary appointment-menu-heading'>Cortico</h5>\n        </div>\n        <h5 class='color-primary appointment-menu-subheading'>Cortico Links</h5>\n        ").concat(corticoLinks, "\n        <hr style='margin: 10px 0; border-color: rgba(255,255,255,0.3)'></hr>\n        <h5 class='appointment-menu-subheading'>Contact Information</h5>\n        <div class='contactInfo'></div>\n      </div>\n      ").concat(menuIcon.outerHTML, "\n    </div>\n  </div>\n  "), {
    events: {
      "click .appointment-menu-container": function clickAppointmentMenuContainer(e) {
        // close button doesn't re-open
        if (e.target.className == 'appointment-menu-close') {
          return;
        }

        var openMenu = document.querySelector(".appointment-menu.show");

        if (openMenu) {
          openMenu.classList.remove("show");
        }

        var menu = wrapper.querySelector('.appointment-menu');
        menu.classList.toggle("show");
      },
      "click .appointment-menu-close": function clickAppointmentMenuClose(e) {
        var openMenu = document.querySelector(".appointment-menu.show");
        openMenu.classList.remove("show");
      }
    }
  }); // additional one-off event listener for initial render.

  wrapper.addEventListener("click", /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var menu, left;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return renderPatientInfo(apptTd);

            case 2:
              menu = wrapper.querySelector('.appointment-menu');
              left = menu.getBoundingClientRect().left;

              if (left < 0) {
                menu.style = "left: 0; right: unset;";
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), {
    once: true
  });
  return wrapper;
}
function getCorticoLinks(apptTd) {
  if (!(0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getCorticoUrl)()) {
    return "\n      <div style=\"white-space: initial;\">\n        Cortico clinic has not been set. Please set the Cortico Clinic URL from the sidebar.\n      </div>\n    ";
  }

  var appointment = new _core_Appointment__WEBPACK_IMPORTED_MODULE_6__.Appointment(apptTd);
  var providerNo = appointment.getCurrentProvider();
  var appointmentNo = appointment.getAppointmentNo();
  return "\n  <ul>\n    <li>\n      <a href=\"".concat((0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getPortalPage)(), "\" target=\"_blank\">\n        \u261B Portal Page\n      </a>\n    </li><li>\n      <a href=\"").concat((0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.getCorticoAppointmentUrl)(providerNo, appointmentNo), "\" target=\"_blank\">\u261B Go To Appointment (Cortico)\n      </a>\n      </li>\n  </ul>\n  ");
}

function renderPatientInfo(_x2) {
  return _renderPatientInfo.apply(this, arguments);
}

function _renderPatientInfo() {
  _renderPatientInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(apptTd) {
    var masterFile, contactInfoContainer, loaderContainer, result, email, phoneNumbers, homePhone, workPhone, cellphone, html;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (apptTd) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            masterFile = new _core_Masterfile__WEBPACK_IMPORTED_MODULE_5__.Masterfile(apptTd);
            contactInfoContainer = apptTd.querySelector(".contactInfo");
            loaderContainer = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.create)("div", {
              attrs: {
                style: "display: flex; width: 100%; justify-content: center; padding: 5px 0;"
              }
            }, (0,_Loader_Loader__WEBPACK_IMPORTED_MODULE_9__.Loader)());
            contactInfoContainer.appendChild(loaderContainer);
            _context2.prev = 6;
            _context2.next = 9;
            return masterFile.fetchPage();

          case 9:
            result = _context2.sent;

            if (!(result === false)) {
              _context2.next = 12;
              break;
            }

            throw "Could not fetch page";

          case 12:
            email = masterFile.getEmail();
            phoneNumbers = masterFile.getPhoneNumbers();
            homePhone = phoneNumbers.find(function (p) {
              return p.type === "home";
            });
            workPhone = phoneNumbers.find(function (p) {
              return p.type === "work";
            });
            cellphone = phoneNumbers.find(function (p) {
              return p.type === "cell";
            });
            html = "";

            if (email) {
              html += "<div>\u261B <a href=\"mailto:".concat(email, "\">").concat(email, "</a></div>");
            }

            if (homePhone && homePhone.phone) {
              html += "<div>\u261B (Home) <a href=\"tel:".concat(homePhone.phone, "\">").concat(homePhone.phone, "</a></div>");
            }

            if (workPhone && workPhone.phone) {
              html += "<div>\u261B (Work) <a href=\"tel:".concat(workPhone.phone, "\">").concat(workPhone.phone, "</a></div>");
            }

            if (cellphone && cellphone.phone) {
              html += "<div>\u261B (Cell) <a href=\"tel:".concat(cellphone.phone, "\">").concat(cellphone.phone, "</a></div>");
            }

            contactInfoContainer.innerHTML = html;
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](6);
            console.error(_context2.t0);
            contactInfoContainer.innerHTML = "<div style=\"white-space: initial;\">Could not load contact information for this patient.</div>";

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 25]]);
  }));
  return _renderPatientInfo.apply(this, arguments);
}

function setAppointmentCheckbox(apptTd, apptInfo, checkCache, pharmaciesCache) {
  var appointment = new _core_Appointment__WEBPACK_IMPORTED_MODULE_6__.Appointment(apptTd);
  var appointmentNo = appointment.getAppointmentNo();
  var apptInfoItem = apptInfo.find(function (item) {
    return item.appointment_no === appointmentNo;
  }) || {};
  var cacheValue = checkCache[apptInfoItem.demographic_no];
  var isPharmacyCached = pharmaciesCache.demographics.includes(apptInfoItem.demographic_no);
  var menuIcon = '<small>&#10006;</small>';
  var cacheColor = '#555555';
  var apptStatus = apptTd.querySelector("a.apptStatus").querySelector("img").title;

  if (cacheValue != undefined) {
    cacheColor = cacheValue.verified ? '#00cc51' : '#cc0063';
    menuIcon = cacheValue.verified ? '<small>&#10004;</small>' : menuIcon;

    if (apptStatus.toLowerCase() === 'private') {
      menuIcon = '<small>$</small>';
      cacheColor = '#555555';
    }

    var masterRecord = apptTd.querySelector("a.masterbtn");
    masterRecord.append((0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.create)("\n    <div class='appointment-checkbox-wrapper'>\n      <div class='appointment-checkbox' style='background-color:".concat(cacheColor, "'>\n        ").concat(menuIcon, "\n      </div>\n    </div>\n    ")));
  }

  if (isPharmacyCached) {
    cacheColor = '#00cc51';
    menuIcon = '<small>&#10004;</small>';
    var rx = apptTd.querySelector("a[title='Prescriptions']");
    rx.innerHTML = ' Rx';
    rx.append((0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_7__.create)("\n      <div class='appointment-checkbox-wrapper'>\n        <div class='appointment-checkbox' style='background-color:".concat(cacheColor, "'>\n          ").concat(menuIcon, "\n        </div>\n      </div>\n      ")));
  }
}

/***/ }),

/***/ "./modules/cortico/Appointments/Appointments.js":
/*!******************************************************!*\
  !*** ./modules/cortico/Appointments/Appointments.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAppointments": () => (/* binding */ getAppointments),
/* harmony export */   "getAppointmentLink": () => (/* binding */ getAppointmentLink),
/* harmony export */   "extractApptUrl": () => (/* binding */ extractApptUrl),
/* harmony export */   "getAppointmentInfo": () => (/* binding */ getAppointmentInfo)
/* harmony export */ });
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/Utils */ "./modules/Utils/Utils.js");

function getAppointments() {
  var demographic_no = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var appointments = [];
  var apptNodes = document.querySelectorAll("td.appt");
  apptNodes.forEach(function (node) {
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);

    if (demographic_no) {
      var _demographic_no = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.getDemographicNo)(apptUrl);

      if (demographic_no === _demographic_no) {
        appointments.push(node);
      }
    } else {
      appointments.push(node);
    }
  });
  return appointments;
}
function getAppointmentLink(apptTdElement) {
  var apptLink = apptTdElement.querySelector("a.apptLink");

  if (apptLink) {
    return apptLink;
  } // If doctor isn't set, the anchor element has no class called apptLink, so we traverse through all anchor elements


  if (!apptLink) {
    var anchors = apptTdElement.querySelectorAll("a");
    anchors.forEach(function (anchor) {
      var temp = anchor && anchor.attributes && anchor.attributes.onclick && anchor.attributes.onclick.nodeValue;

      if (temp && temp.includes("popupPage") && temp.includes("appointmentcontrol.jsp")) {
        if (!apptLink) {
          apptLink = anchor;
        }
      }
    });
  }

  return apptLink;
}
function extractApptUrl(s) {
  return s.match(/'([^']+)'/)[1].substring(2);
}
function getAppointmentInfo(apptNodes) {
  var appointmentInfo = [];
  apptNodes.forEach(function (node) {
    var temp = {};
    var apptLink = getAppointmentLink(node);
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var demographicNo = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.getDemographicNo)(apptUrl); // No Appointment link

    if (!apptLink) {
      return null;
    } // Already verified


    if (apptLink.textContent.includes("+")) {
      (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.addToCache)(demographicNo, true);
    }

    var apptNo = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.getAppointmentNo)(apptUrl);
    temp.demographic_no = demographicNo;
    temp.appointment_no = apptNo;
    temp.info = apptLink.attributes.title.nodeValue;
    appointmentInfo.push(temp);
  }); //Remove duplicates and return

  return appointmentInfo.filter(function (v, i, a) {
    return a.findIndex(function (t) {
      return t.demographic_no === v.demographic_no;
    }) === i;
  });
}

/***/ }),

/***/ "./modules/cortico/Dashboard/Sidebar.js":
/*!**********************************************!*\
  !*** ./modules/cortico/Dashboard/Sidebar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return h("div", {
    className: "tw-flex tw-h-full tw-w-[400px]"
  }, h("div", {
    className: "tw-bg-blue-700 tw-w-[70px] tw-h-full tw-p-2 text-center tw-rounded-l-md"
  }, h("img", {
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_0__.default,
    className: "tw-w-2/3 tw-inline-block tw-mx-auto"
  })), h("div", {
    className: "tw-p-4 tw-bg-gray-100 tw-w-[300px]"
  }, "Easy Menu"));
}

/***/ }),

/***/ "./modules/cortico/Dashboard/index.js":
/*!********************************************!*\
  !*** ./modules/cortico/Dashboard/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.css */ "./modules/cortico/Dashboard/Dashboard.css");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./modules/cortico/Dashboard/Sidebar.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var container = document.querySelector(".cortico-modal");

  var Dashboard = function Dashboard() {
    return h("div", {
      className: "tw-flex tw-text-xl tw-h-[800px]"
    }, h(_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, null), h("div", {
      className: "tw-w-full tw-p-4"
    }, "Content goes here"));
  };

  console.log("its failing here");
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(h(Dashboard, null), container);
}

/***/ }),

/***/ "./modules/cortico/Disclaimer.js":
/*!***************************************!*\
  !*** ./modules/cortico/Disclaimer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


function Disclaimer() {
  var container = document.querySelector(".cortico-modal");

  var handleClick = function handleClick() {
    if (window.pubsub) {
      window.pubsub.publish("modal.close");
    }
  };

  function Content() {
    return h("div", {
      className: "tw-bg-cortico-blue tw-p-10 tw-mx-auto tw-rounded-xl tw-max-w-3xl tw-text-white"
    }, h("p", {
      className: "tw-text-2xl"
    }, "By popular demand, Cortico has developed this free and Open Source plug-in for Oscar. Due to the nature of a browser plug-in, we're unable to guarantee it will work with every EMR update, and you use it at your own risk", h("div", {
      className: "tw-my-2"
    }, "(See Licence at", " ", h("a", {
      href: "https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE"
    }, "https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE"), ")."), " ", "It is a browser plug-in, so will be active for ALL EMRs you use, not just the ones for which you have a Cortico subscription. The plug-in is optional, and for convenience only. It's not required for Cortico itself to function."), h("div", {
      className: "tw-flex tw-justify-end tw-mt-10"
    }, h("button", {
      onClick: handleClick,
      className: "tw-bg-white tw-px-4 tw-py-2 tw-rounded-xl tw-text-cortico-blue tw-font-bold tw-text-2xl"
    }, "I understand :)")));
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(h(Content, null), container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disclaimer);

/***/ }),

/***/ "./modules/cortico/Login/Login.js":
/*!****************************************!*\
  !*** ./modules/cortico/Login/Login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLoginForm": () => (/* binding */ addLoginForm),
/* harmony export */   "loginForm": () => (/* binding */ loginForm),
/* harmony export */   "corticoSignIn": () => (/* binding */ corticoSignIn),
/* harmony export */   "signInRequest": () => (/* binding */ signInRequest)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ "./modules/cortico/Login/Login.css");
/* harmony import */ var _Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/CorticoIcon */ "./modules/Icons/CorticoIcon.js");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/Utils */ "./modules/Utils/Utils.js");





function addLoginForm(browser) {
  var currentUser = localStorage.getItem("currentUser"); // if (getCorticoUrl() && currentUser == null)

  document.body.appendChild(loginForm(browser));
}
function loginForm(browser) {
  var corticoIcon = (0,_Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_3__.CorticoIcon)({
    attrs: {
      height: "15"
    }
  });
  var wrapper = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.create)("<div class='login-form-wrapper'>\n      <div class='login-form-container'>\n        <div class='login-form'>\n          <div class='login-form-close'>x</div>\n          <div class='login-form-header'>\n            ".concat(corticoIcon.outerHTML, "\n            <h5 class='color-primary login-form-heading'>Cortico</h5>\n          </div>\n          <h5 class='color-primary login-form-subheading'>Cortico Login Form</h5>\n          <input type='text' placeholder='Username' id='loginUsername' />\n          <input type='password' placeholder='Password' id='loginPassword' />\n          <button type='button' id='loginButton'>Sign in</button>\n        </div>\n      </div>\n    </div>"), {
    events: {
      "click .login-form-close": function clickLoginFormClose(e) {
        var openMenu = document.querySelector(".login-form.show");
        openMenu.classList.remove("show");
      },
      "click #loginButton": function clickLoginButton(e) {
        var loginUserName = document.getElementById("loginUsername").value;
        var loginPassword = document.getElementById("loginPassword").value;
        corticoSignIn(loginUserName, loginPassword, browser);
      }
    }
  });
  return wrapper;
}
function corticoSignIn(_x, _x2, _x3) {
  return _corticoSignIn.apply(this, arguments);
}

function _corticoSignIn() {
  _corticoSignIn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, password, browser) {
    var response, json, openMenu;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return signInRequest(username, password);

          case 2:
            response = _context.sent;

            if (response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", alert('Login failed. Check username and password.'));

          case 5:
            if (!response) {
              _context.next = 22;
              break;
            }

            _context.t0 = JSON;
            _context.next = 9;
            return response.text();

          case 9:
            _context.t1 = _context.sent;
            json = _context.t0.parse.call(_context.t0, _context.t1);
            browser = browser ? browser : chrome;

            if (!browser) {
              _context.next = 21;
              break;
            }

            browser.storage.local.set({
              "jwt_access_token": json.access
            });
            browser.storage.local.set({
              "jwt_expired": false
            });
            browser.storage.local.set({
              "jwt_username": username
            });
            openMenu = document.querySelector(".login-form.show");
            openMenu.classList.remove("show");
            alert("Successfully signed in, the page will now reload");
            window.location.reload();
            return _context.abrupt("return");

          case 21:
            return _context.abrupt("return");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _corticoSignIn.apply(this, arguments);
}

function signInRequest(_x4, _x5) {
  return _signInRequest.apply(this, arguments);
}

function _signInRequest() {
  _signInRequest = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(username, password) {
    var data, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              "username": username,
              "password": password
            };
            url = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.getCorticoUrl)() + '/api/token/';
            return _context2.abrupt("return", fetch(url, {
              "method": 'POST',
              "headers": {
                "Content-Type": "application/json"
              },
              "body": JSON.stringify(data)
            }).catch(function (err) {
              console.error(err);

              if (('' + err).includes('Failed to fetch')) {
                alert('Cortico instance cannot be reached. Check clinic name.');
              } else {
                alert('Cortico: Unknown Login Error: ' + err);
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _signInRequest.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tailwind {\n  /*! tailwindcss v2.2.6 | MIT License | https://tailwindcss.com\n*/\n}\n\n/**\nUse a better box model (opinionated).\n*/\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n.tailwind html {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\n.tailwind html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\nRemove the margin in all browsers.\n*/\n\n.tailwind body {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\n.tailwind body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n.tailwind hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n.tailwind abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n.tailwind b,\n.tailwind strong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n.tailwind code,\n.tailwind kbd,\n.tailwind samp,\n.tailwind pre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n.tailwind small {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n.tailwind sub,\n.tailwind sup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n.tailwind sub {\n\tbottom: -0.25em;\n}\n\n/*\nGrouping content\n================\n*/\n\n.tailwind sup {\n\ttop: -0.5em;\n}\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n.tailwind table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\n.tailwind button,\n.tailwind select { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\n.tailwind button,\n.tailwind [type='button'],\n.tailwind [type='reset'],\n.tailwind [type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n.tailwind ::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n.tailwind :-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n.tailwind :-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n.tailwind legend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n.tailwind progress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n.tailwind ::-webkit-inner-spin-button,\n.tailwind ::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n.tailwind [type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n.tailwind ::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n.tailwind ::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n.tailwind summary {\n\tdisplay: list-item;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n.tailwind blockquote,\n.tailwind dl,\n.tailwind dd,\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6,\n.tailwind hr,\n.tailwind figure,\n.tailwind p,\n.tailwind pre {\n  margin: 0;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n.tailwind button {\n  background-color: transparent;\n  background-image: none;\n}\n\n/*\nInteractive\n===========\n*/\n\n.tailwind fieldset {\n  margin: 0;\n  padding: 0;\n}\n\n/*\nForms\n=====\n*/\n\n.tailwind ol,\n.tailwind ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n.tailwind html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\n.tailwind body {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n.tailwind hr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\n.tailwind img {\n  border-style: solid;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n.tailwind textarea {\n  resize: vertical;\n}\n\n/*\nTabular data\n============\n*/\n\n.tailwind input::-moz-placeholder, .tailwind textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input:-ms-input-placeholder, .tailwind textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input::placeholder,\n.tailwind textarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n/*\nSections\n========\n*/\n\n.tailwind button,\n.tailwind [role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nDocument\n========\n*/\n\n.tailwind table {\n  border-collapse: collapse;\n}\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n.tailwind a {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n.tailwind pre,\n.tailwind code,\n.tailwind kbd,\n.tailwind samp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\n.tailwind img,\n.tailwind svg,\n.tailwind video,\n.tailwind canvas,\n.tailwind audio,\n.tailwind iframe,\n.tailwind embed,\n.tailwind object {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n.tailwind img,\n.tailwind video {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n.tailwind [hidden] {\n  display: none;\n}\n.tw-mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n.tw-my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.tw-mt-10 {\n  margin-top: 2.5rem !important;\n}\n.tw-inline-block {\n  display: inline-block !important;\n}\n.tw-flex {\n  display: flex !important;\n}\n.tw-h-\\[800px\\] {\n  height: 800px !important;\n}\n.tw-h-full {\n  height: 100% !important;\n}\n.tw-w-full {\n  width: 100% !important;\n}\n.tw-w-\\[400px\\] {\n  width: 400px !important;\n}\n.tw-w-\\[70px\\] {\n  width: 70px !important;\n}\n.tw-w-2\\/3 {\n  width: 66.666667% !important;\n}\n.tw-w-\\[300px\\] {\n  width: 300px !important;\n}\n.tw-max-w-3xl {\n  max-width: 48rem !important;\n}\n.tw-justify-end {\n  justify-content: flex-end !important;\n}\n.tw-rounded-xl {\n  border-radius: 0.75rem !important;\n}\n.tw-rounded-l-md {\n  border-top-left-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important;\n}\n.tw-bg-cortico-blue {\n  background-color: rgba(75, 84, 246, 1) !important;\n}\n.tw-bg-white {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-blue-700 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-100 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity)) !important;\n}\n.tw-p-10 {\n  padding: 2.5rem !important;\n}\n.tw-p-4 {\n  padding: 1rem !important;\n}\n.tw-p-2 {\n  padding: 0.5rem !important;\n}\n.tw-px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n.tw-py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.tw-text-2xl {\n  font-size: 1.5rem !important;\n  line-height: 2rem !important;\n}\n.tw-text-xl {\n  font-size: 1.25rem !important;\n  line-height: 1.75rem !important;\n}\n.tw-font-bold {\n  font-weight: 700 !important;\n}\n.tw-text-white {\n  --tw-text-opacity: 1 !important;\n  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n.tw-text-cortico-blue {\n  color: rgba(75, 84, 246, 1) !important;\n}\n\n.sidebar-instructions {\n  text-align: center;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n}\n\n.sidebar-instructions-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./index.css","webpack://./%3Cinput%20css%20NszuDD%3E","webpack://./%3Cinput%20css%20TRoUWp%3E","<no source>"],"names":[],"mappings":"AAAA;EACE;CAAc;AAChB;;AADE;;CAAc;;AAAd;;;CCaD,sBAAsB;ADbP;;AAAd;;CAAc;;AAAd;CCqBD,gBAAgB;CAChB,cAAW;IAAX,WAAW;ADtBI;;AAAd;;;CAAc;;AAAd;CC+BD,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;ADhCvB;;AAAd;;CAAc;;AAAd;CC6CD,SAAS;AD7CM;;AAAd;;CAAc;;AAAd;CCqDD;;;;;;;;;kBASiB;AD9DF;;AAAd;;;CAAc;;AAAd;CC4ED,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AD7EP;;AAAd;;CAAc;;AAAd;CC0FD,yCAAiC;SAAjC,iCAAiC;AD1FlB;;AAAd;;CAAc;;AAAd;;CCmGD,mBAAmB;ADnGJ;;AAAd;;;CAAc;;AAAd;;;;CC+GD;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;ADtHP;;AAAd;;CAAc;;AAAd;CC8HD,cAAc;AD9HC;;AAAd;;CAAc;;AAAd;;CCuID,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AD1IT;;AAAd;;;CAAc;;AAAd;CC8ID,eAAe;AD9IA;;AAAd;;;CAAc;;AAAd;CCkJD,WAAW;ADlJI;;AAAd;;;CAAc;;AAAd;CCgKD,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;ADjKd;;AAAd;;;CAAc;;AAAd;;;;;CCmLD,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;ADtLF;;AAAd;;;CAAc;;AAAd;mBC+LO,MAAM;CACd,oBAAoB;ADhML;;AAAd;;CAAc;;AAAd;;;;CC2MD,0BAA0B;AD3MX;;AAAd;;CAAc;;AAAd;CCmND,kBAAkB;CAClB,UAAU;ADpNK;;AAAd;;CAAc;;AAAd;CC4ND,8BAA8B;AD5Nf;;AAAd;;;CAAc;;AAAd;CCqOD,gBAAgB;ADrOD;;AAAd;;CAAc;;AAAd;CC6OD,UAAU;AD7OK;;AAAd;;CAAc;;AAAd;CCqPD,wBAAwB;ADrPT;;AAAd;;CAAc;;AAAd;;CC8PD,YAAY;AD9PG;;AAAd;;;CAAc;;AAAd;CCuQD,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;ADxQb;;AAAd;;CAAc;;AAAd;CCgRD,wBAAwB;ADhRT;;AAAd;;;CAAc;;AAAd;CCyRD,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AD1RN;;AAAd;;CAAc;;AAAd;CCuSD,kBAAkB;ADvSH;;AAAd;;EAAc;;AAAd;;;;;;;;;;;;;EEsBA,SAAS;AFtBK;;AAAd;;;;EAAc;;AAAd;EE0BA,6BAA6B;EAC7B,sBAAsB;AF3BR;;AAAd;;;CAAc;;AAAd;EE+BA,SAAS;EACT,UAAU;AFhCI;;AAAd;;;CAAc;;AAAd;;EEqCA,gBAAgB;EAChB,SAAS;EACT,UAAU;AFvCI;;AAAd;;;;;EAAc;;AAAd;EEsDA,4NAAsP,EAAE,MAAM;EAC9P,gBAAgB,EAAE,MAAM;AFvDV;;AAAd;;;EAAc;;AAAd;EEiEA,oBAAoB;EACpB,oBAAoB;AFlEN;;AAAd;;;;;;;;;;;;;;;;;;;;;;;;EAAc;;AAAd;;;EEkGA,sBAAsB,EAAE,MAAM;EAC9B,eAAe,EAAE,MAAM;EACvB,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;AFrGpB;;AAAd;;EAAc;;AAAd;EE6GA,qBAAqB;AF7GP;;AAAd;;;;;;;;EAAc;;AAAd;EE2HA,mBAAmB;AF3HL;;AAAd;;EAAc;;AAAd;EE+HA,gBAAgB;AF/HF;;AAAd;;;CAAc;;AAAd;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;;;CAAc;;AAAd;;EE0IA,eAAe;AF1ID;;AAAd;;;CAAc;;AAAd;EE8IA,yBAAyB;AF9IX;;AAAd,8FAAc;;AAAd;;;;;;EEuJA,kBAAkB;EAClB,oBAAoB;AFxJN;;AAAd;;;EAAc;;AAAd;EEiKA,cAAc;EACd,wBAAwB;AFlKV;;AAAd;;;;;;EAAc;;AAAd;;;;;EEkLA,UAAU;EACV,oBAAoB;EACpB,cAAc;AFpLA;;AAAd;;;;;EAAc;;AAAd;;;;EEkMA,+GAAyI;AFlM3H;;AAAd;;;;;;;;;;;;;;;EAAc;;AAAd;;;;;;;;EE8NA,cAAc,EAAE,MAAM;EACtB,sBAAsB,EAAE,MAAM;AF/NhB;;AAAd;;;;;EAAc;;AAAd;;EE2OA,eAAe;EACf,YAAY;AF5OE;;AAAd;;EAAc;;AAAd;EEoPA,aAAa;AFpPC;AAIhB;EGLA,6BAAA;EAAA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA,4CAAA;EAAA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA,+BAAA;EAAA;AHKmB;AAAnB;EGLA,6BAAA;EAAA;AHKmB;AAAnB;EGLA,8BAAA;EAAA;AHKmB;AAAnB;EGLA;AHKmB;AAAnB;EGLA,gCAAA;EAAA;AHKmB;AAAnB;EGLA;AHKmB;;AGLnB;EAAA,mBAAA;EAAA,oBAAA;EAAA,qBAAA;EAAA;CAAA;;AAAA;EAAA;CAAA","sourcesContent":[".tailwind {\n  @tailwind base;\n}\n\n@tailwind components;\n@tailwind utilities;\n\n.sidebar-instructions {\n  @apply tw-text-3xl tw-text-center tw-font-bold;\n}\n\n.sidebar-instructions-hidden {\n  @apply tw-hidden;\n}\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Icons/Ellipsis.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Icons/Ellipsis.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ellip-dot-wrapper {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.ellip-dot-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ellip-dot {\n  display: flex;\n  width: 2px;\n  height: 2px;\n  background-color: #d8ddff;\n  border-radius: 50%;\n  margin: 1px;\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./modules/Icons/Ellipsis.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;AACxB","sourcesContent":[".ellip-dot-wrapper {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.ellip-dot-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ellip-dot {\n  display: flex;\n  width: 2px;\n  height: 2px;\n  background-color: #d8ddff;\n  border-radius: 50%;\n  margin: 1px;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Loader/Loader.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Loader/Loader.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.inner-loader {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n  -webkit-animation: scale 1s infinite;\n          animation: scale 1s infinite;\n}\n\n@-webkit-keyframes scale {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(2);\n  }\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(2);\n  }\n}\n", "",{"version":3,"sources":["webpack://./modules/Loader/Loader.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0CAA0C;EAC1C,oCAA4B;UAA5B,4BAA4B;AAC9B;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AARA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".loader {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.inner-loader {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n  animation: scale 1s infinite;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(2);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Modal/Modal.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Modal/Modal.css ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cortico-modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  opacity: 0;\n  transition: opacity 1s;\n  z-index: 10002;\n}\n\n.cortico-modal-container.show {\n  display: flex;\n  opacity: 1;\n}\n\n.cortico-modal {\n  background-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./modules/Modal/Modal.css","<no source>"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,UAAU;EACV,sBAAsB;ECZxB,eAAA;ADcA;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":[".cortico-modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  opacity: 0;\n  transition: opacity 1s;\n  @apply tw-z-10002;\n}\n\n.cortico-modal-container.show {\n  display: flex;\n  opacity: 1;\n}\n\n.cortico-modal {\n  background-color: transparent;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Appointments/AppointmentMenu.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Appointments/AppointmentMenu.css ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "td.appt {\n  overflow: visible;\n}\n\n.color-primary {\n  color: #5b6ce2;\n}\n\n.appointment-menu {\n  background-color: #5b6ce2;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #d8ddff;\n  display: none;\n  z-index: 1500;\n  font-size: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n    0 10px 10px -5px rgba(0, 0, 0, 0.15);\n}\n\n.appointment-menu-wrapper.rx-synced::after {\n  content: '';\n  position: absolute;\n  z-index: 10;\n  top: -10px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n  /*background: green;*/\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg%3E%3Cg transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'%3E%3Cpath d='M990.8,1085.4v-3932.6h688.9h688.9v1464v1464h694.7h696.6L4682.3-1144c507.1-673.6,926.2-1236.3,930.1-1247.8c7.7-21-321.5-463.1-1552-2076.3L3823.1-4780h801.8h801.8l493.7,660.2c352.1,472.7,497.6,656.4,512.9,641.1c11.5-11.5,237.3-306.2,499.5-656.4l478.4-635.3l799.9-5.8c438.2-1.9,798,0,798,5.8c0,5.7-403.8,535.8-899.4,1176.9c-493.7,643-899.4,1176.9-899.4,1186.5c0,11.5,398,555,886,1211.3c488,654.5,893.7,1201.8,901.4,1215.2c11.5,17.2-143.5,23-748.3,23h-761.6L6952-665.6c-294.7-388.5-539.7-708.1-545.4-706.2c-13.4,0-1226.7,1582.6-1226.7,1597.9c0,7.6,76.5,32.5,170.3,55.5c746.3,189.5,1322.4,715.7,1552,1421.9c101.4,306.2,124.4,474.6,124.4,855.4c-1.9,384.7-34.5,591.3-143.5,903.3c-283.2,799.9-924.3,1320.4-1863.9,1511.8c-134,26.8-392.3,32.5-2089.8,38.3L990.8,5020V1085.4z M4770.4,3730.2c191.4-68.9,302.4-128.2,428.7-231.6c287.1-235.4,442.1-616.2,417.2-1016.2c-40.2-599-415.3-1023.8-1012.3-1146.3c-124.4-24.9-315.8-30.6-1192.2-30.6h-1043v1243.9v1245.8l1125.2-5.7l1123.3-5.7L4770.4,3730.2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.appointment-menu.show {\n  display: block;\n}\n\n.appointment-menu a {\n  color: white !important;\n  text-decoration: underline;\n}\n\n.appointment-menu a:hover {\n  color: #d8ddff !important;\n}\n\n.appointment-menu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.appointment-menu ul li,\n.contactInfo > div {\n  margin: 1px 0;\n  color: white !important;\n}\n\n.appointment-menu-container {\n  position: absolute;\n  display: flex;\n  background-color: #5b6ce2;\n  padding: 1px 5px;\n  border: 1px solid #d8ddff;\n  top: -8px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  left: 7.5px;\n}\n\n.appointment-menu-wrapper {\n  display: inline-block;\n  position: relative;\n  top: -5px;\n  cursor: pointer;\n}\n\n.appointment-menu-header {\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: top;\n  margin-bottom: 5px;\n}\n\n.appointment-menu-heading {\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 14px;\n}\n\n.appointment-menu-hr {\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.appointment-menu-subheading {\n  color: #d8ddff;\n  font-size: 12px;\n}\n\n.appointment-menu-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 1.2rem;\n  padding: 0 5px;\n  color: white;\n}\n\n.appointment-checkbox-wrapper {\n  display: inline-block;\n  position: relative;\n  top: 1px;\n}\n\n.appointment-checkbox {\n  top: -8px;\n  left: -1px;\n  position: absolute;\n  padding: 1px 2.5px;\n  background-color: #5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 6px;\n}", "",{"version":3,"sources":["webpack://./modules/cortico/Appointments/AppointmentMenu.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,eAAe;EACf,qBAAqB;EACrB,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,eAAe;EACf;wCACsC;AACxC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,8mDAA8mD;AAChnD;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,yBAAyB;EACzB,SAAS;EACT,kBAAkB;EAClB,4CAA4C;EAC5C,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,SAAS;EACT,8CAA8C;AAChD;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB","sourcesContent":["td.appt {\n  overflow: visible;\n}\n\n.color-primary {\n  color: #5b6ce2;\n}\n\n.appointment-menu {\n  background-color: #5b6ce2;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #d8ddff;\n  display: none;\n  z-index: 1500;\n  font-size: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n    0 10px 10px -5px rgba(0, 0, 0, 0.15);\n}\n\n.appointment-menu-wrapper.rx-synced::after {\n  content: '';\n  position: absolute;\n  z-index: 10;\n  top: -10px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n  /*background: green;*/\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg%3E%3Cg transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'%3E%3Cpath d='M990.8,1085.4v-3932.6h688.9h688.9v1464v1464h694.7h696.6L4682.3-1144c507.1-673.6,926.2-1236.3,930.1-1247.8c7.7-21-321.5-463.1-1552-2076.3L3823.1-4780h801.8h801.8l493.7,660.2c352.1,472.7,497.6,656.4,512.9,641.1c11.5-11.5,237.3-306.2,499.5-656.4l478.4-635.3l799.9-5.8c438.2-1.9,798,0,798,5.8c0,5.7-403.8,535.8-899.4,1176.9c-493.7,643-899.4,1176.9-899.4,1186.5c0,11.5,398,555,886,1211.3c488,654.5,893.7,1201.8,901.4,1215.2c11.5,17.2-143.5,23-748.3,23h-761.6L6952-665.6c-294.7-388.5-539.7-708.1-545.4-706.2c-13.4,0-1226.7,1582.6-1226.7,1597.9c0,7.6,76.5,32.5,170.3,55.5c746.3,189.5,1322.4,715.7,1552,1421.9c101.4,306.2,124.4,474.6,124.4,855.4c-1.9,384.7-34.5,591.3-143.5,903.3c-283.2,799.9-924.3,1320.4-1863.9,1511.8c-134,26.8-392.3,32.5-2089.8,38.3L990.8,5020V1085.4z M4770.4,3730.2c191.4-68.9,302.4-128.2,428.7-231.6c287.1-235.4,442.1-616.2,417.2-1016.2c-40.2-599-415.3-1023.8-1012.3-1146.3c-124.4-24.9-315.8-30.6-1192.2-30.6h-1043v1243.9v1245.8l1125.2-5.7l1123.3-5.7L4770.4,3730.2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.appointment-menu.show {\n  display: block;\n}\n\n.appointment-menu a {\n  color: white !important;\n  text-decoration: underline;\n}\n\n.appointment-menu a:hover {\n  color: #d8ddff !important;\n}\n\n.appointment-menu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.appointment-menu ul li,\n.contactInfo > div {\n  margin: 1px 0;\n  color: white !important;\n}\n\n.appointment-menu-container {\n  position: absolute;\n  display: flex;\n  background-color: #5b6ce2;\n  padding: 1px 5px;\n  border: 1px solid #d8ddff;\n  top: -8px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  left: 7.5px;\n}\n\n.appointment-menu-wrapper {\n  display: inline-block;\n  position: relative;\n  top: -5px;\n  cursor: pointer;\n}\n\n.appointment-menu-header {\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: top;\n  margin-bottom: 5px;\n}\n\n.appointment-menu-heading {\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 14px;\n}\n\n.appointment-menu-hr {\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.appointment-menu-subheading {\n  color: #d8ddff;\n  font-size: 12px;\n}\n\n.appointment-menu-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 1.2rem;\n  padding: 0 5px;\n  color: white;\n}\n\n.appointment-checkbox-wrapper {\n  display: inline-block;\n  position: relative;\n  top: 1px;\n}\n\n.appointment-checkbox {\n  top: -8px;\n  left: -1px;\n  position: absolute;\n  padding: 1px 2.5px;\n  background-color: #5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 6px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Dashboard/Dashboard.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Dashboard/Dashboard.css ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dashboard-container {\n    min-height: 800px;\n    overflow: auto\n}\n", "",{"version":3,"sources":["<no source>"],"names":[],"mappings":"AAAA;IAAA,kBAAA;IAAA;CAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Login/Login.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Login/Login.css ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "td.appt {\n    overflow: visible;\n  }\n  \n  .color-primary {\n    color: #5b6ce2;\n  }\n\n  .login-form {\n    background-color: #5b6ce2;\n    color: white;\n    position: fixed;\n    padding: 1.5rem;\n    border-radius: 0.5rem;\n    border: 1px solid #d8ddff;\n    display: none;\n    z-index: 1500;\n    font-size: 12px;\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n      0 10px 10px -5px rgba(0, 0, 0, 0.15);\n    top: 20%; \n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n\n  .login-form input {\n      display: block;\n      border-radius: 5px;\n      font-size: 14px\n  }\n  \n  .login-form.show {\n    display: block;\n  }\n  \n  .login-form a {\n    color: white !important;\n    text-decoration: underline;\n  }\n  \n  .login-form a:hover {\n    color: #d8ddff !important;\n  }\n  \n  .login-form ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  .login-form ul li,\n  .contactInfo > div {\n    margin: 1px 0;\n    color: white !important;\n  }\n  \n  .login-form-container {\n    position: absolute;\n    display: flex;\n    background-color: #5b6ce2;\n    padding: 1px 5px;\n    border: 1px solid #d8ddff;\n    top: -8px;\n    border-radius: 50%;\n    box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  }\n  \n  .login-form-wrapper {\n    display: inline-block;\n    position: relative;\n    top: -5px;\n  }\n  \n  .login-form-header {\n    background-color: white;\n    border-radius: 0.5rem;\n    padding: 5px 10px;\n    display: flex;\n    align-items: top;\n    margin-bottom: 5px;\n  }\n  \n  .login-form-heading {\n    margin: 0;\n    padding: 0;\n    margin-left: 5px;\n    font-size: 16px;\n  }\n  \n  .login-form-hr {\n    margin: 0;\n    padding: 0;\n    margin: 5px 0;\n    border: 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  \n  .login-form-subheading {\n    color: #d8ddff;\n    font-size: 14px;\n  }\n  \n  .login-form-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.2rem;\n    padding: 0 5px;\n    color: white;\n  }\n  \n  .login-form-button {\n    position: absolute;\n    top: 1px;\n    left: 10px;\n  }", "",{"version":3,"sources":["webpack://./modules/cortico/Login/Login.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;EACnB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,eAAe;IACf;0CACsC;IACtC,QAAQ;IACR,SAAS;IACT,6BAA6B;EAC/B;;EAEA;MACI,cAAc;MACd,kBAAkB;MAClB;EACJ;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,uBAAuB;IACvB,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,UAAU;IACV,SAAS;IACT,gBAAgB;EAClB;;EAEA;;IAEE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,yBAAyB;IACzB,SAAS;IACT,kBAAkB;IAClB,4CAA4C;EAC9C;;EAEA;IACE,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,uBAAuB;IACvB,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,aAAa;IACb,SAAS;IACT,8CAA8C;EAChD;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,iBAAiB;IACjB,cAAc;IACd,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,UAAU;EACZ","sourcesContent":["td.appt {\n    overflow: visible;\n  }\n  \n  .color-primary {\n    color: #5b6ce2;\n  }\n\n  .login-form {\n    background-color: #5b6ce2;\n    color: white;\n    position: fixed;\n    padding: 1.5rem;\n    border-radius: 0.5rem;\n    border: 1px solid #d8ddff;\n    display: none;\n    z-index: 1500;\n    font-size: 12px;\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n      0 10px 10px -5px rgba(0, 0, 0, 0.15);\n    top: 20%; \n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n\n  .login-form input {\n      display: block;\n      border-radius: 5px;\n      font-size: 14px\n  }\n  \n  .login-form.show {\n    display: block;\n  }\n  \n  .login-form a {\n    color: white !important;\n    text-decoration: underline;\n  }\n  \n  .login-form a:hover {\n    color: #d8ddff !important;\n  }\n  \n  .login-form ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  .login-form ul li,\n  .contactInfo > div {\n    margin: 1px 0;\n    color: white !important;\n  }\n  \n  .login-form-container {\n    position: absolute;\n    display: flex;\n    background-color: #5b6ce2;\n    padding: 1px 5px;\n    border: 1px solid #d8ddff;\n    top: -8px;\n    border-radius: 50%;\n    box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  }\n  \n  .login-form-wrapper {\n    display: inline-block;\n    position: relative;\n    top: -5px;\n  }\n  \n  .login-form-header {\n    background-color: white;\n    border-radius: 0.5rem;\n    padding: 5px 10px;\n    display: flex;\n    align-items: top;\n    margin-bottom: 5px;\n  }\n  \n  .login-form-heading {\n    margin: 0;\n    padding: 0;\n    margin-left: 5px;\n    font-size: 16px;\n  }\n  \n  .login-form-hr {\n    margin: 0;\n    padding: 0;\n    margin: 5px 0;\n    border: 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  \n  .login-form-subheading {\n    color: #d8ddff;\n    font-size: 14px;\n  }\n  \n  .login-form-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.2rem;\n    padding: 0 5px;\n    color: white;\n  }\n  \n  .login-form-button {\n    position: absolute;\n    top: 1px;\n    left: 10px;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/element-closest-polyfill/index.js":
/*!********************************************************!*\
  !*** ./node_modules/element-closest-polyfill/index.js ***!
  \********************************************************/
/***/ (() => {

if (typeof Element !== "undefined") {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;

            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            
            return null;
        };
    }
}


/***/ }),

/***/ "./node_modules/fetch-retry/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fetch-retry/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function (fetch, defaults) {
  defaults = defaults || {};
  if (typeof fetch !== 'function') {
    throw new ArgumentError('fetch must be a function');
  }

  if (typeof defaults !== 'object') {
    throw new ArgumentError('defaults must be an object');
  }

  if (defaults.retries !== undefined && !isPositiveInteger(defaults.retries)) {
    throw new ArgumentError('retries must be a positive integer');
  }

  if (defaults.retryDelay !== undefined && !isPositiveInteger(defaults.retryDelay) && typeof defaults.retryDelay !== 'function') {
    throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
  }

  if (defaults.retryOn !== undefined && !Array.isArray(defaults.retryOn) && typeof defaults.retryOn !== 'function') {
    throw new ArgumentError('retryOn property expects an array or function');
  }

  var baseDefaults = {
    retries: 3,
    retryDelay: 1000,
    retryOn: [],
  };

  defaults = Object.assign(baseDefaults, defaults);

  return function fetchRetry(input, init) {
    var retries = defaults.retries;
    var retryDelay = defaults.retryDelay;
    var retryOn = defaults.retryOn;

    if (init && init.retries !== undefined) {
      if (isPositiveInteger(init.retries)) {
        retries = init.retries;
      } else {
        throw new ArgumentError('retries must be a positive integer');
      }
    }

    if (init && init.retryDelay !== undefined) {
      if (isPositiveInteger(init.retryDelay) || (typeof init.retryDelay === 'function')) {
        retryDelay = init.retryDelay;
      } else {
        throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
      }
    }

    if (init && init.retryOn) {
      if (Array.isArray(init.retryOn) || (typeof init.retryOn === 'function')) {
        retryOn = init.retryOn;
      } else {
        throw new ArgumentError('retryOn property expects an array or function');
      }
    }

    // eslint-disable-next-line no-undef
    return new Promise(function (resolve, reject) {
      var wrappedFetch = function (attempt) {
        fetch(input, init)
          .then(function (response) {
            if (Array.isArray(retryOn) && retryOn.indexOf(response.status) === -1) {
              resolve(response);
            } else if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                return Promise.resolve(retryOn(attempt, null, response))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, null, response);
                    } else {
                      resolve(response);
                    }
                  }).catch(reject);
              } catch (error) {
                reject(error);
              }
            } else {
              if (attempt < retries) {
                retry(attempt, null, response);
              } else {
                resolve(response);
              }
            }
          })
          .catch(function (error) {
            if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                Promise.resolve(retryOn(attempt, error, null))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, error, null);
                    } else {
                      reject(error);
                    }
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              } catch(error) {
                reject(error);
              }
            } else if (attempt < retries) {
              retry(attempt, error, null);
            } else {
              reject(error);
            }
          });
      };

      function retry(attempt, error, response) {
        var delay = (typeof retryDelay === 'function') ?
          retryDelay(attempt, error, response) : retryDelay;
        setTimeout(function () {
          wrappedFetch(++attempt);
        }, delay);
      }

      wrappedFetch(0);
    });
  };
};

function isPositiveInteger(value) {
  return Number.isInteger(value) && value >= 0;
}

function ArgumentError(message) {
  this.name = 'ArgumentError';
  this.message = message;
}


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ A),
/* harmony export */   "options": () => (/* binding */ l)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x(t,l,u):P(u,t,t,n.__k,t.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/Icons/Ellipsis.css":
/*!************************************!*\
  !*** ./modules/Icons/Ellipsis.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Ellipsis.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Icons/Ellipsis.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/Loader/Loader.css":
/*!***********************************!*\
  !*** ./modules/Loader/Loader.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Loader.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Loader/Loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/Modal/Modal.css":
/*!*********************************!*\
  !*** ./modules/Modal/Modal.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Modal.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/Modal/Modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/cortico/Appointments/AppointmentMenu.css":
/*!**********************************************************!*\
  !*** ./modules/cortico/Appointments/AppointmentMenu.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./AppointmentMenu.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Appointments/AppointmentMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/cortico/Dashboard/Dashboard.css":
/*!*************************************************!*\
  !*** ./modules/cortico/Dashboard/Dashboard.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Dashboard.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Dashboard/Dashboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./modules/cortico/Login/Login.css":
/*!*****************************************!*\
  !*** ./modules/cortico/Login/Login.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./Login.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./modules/cortico/Login/Login.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./resources/icons/96x96.png":
/*!***********************************!*\
  !*** ./resources/icons/96x96.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/*!********************!*\
  !*** ./cortico.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_PubSub_PubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/PubSub/PubSub */ "./modules/PubSub/PubSub.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cortico/Appointments/Appointments */ "./modules/cortico/Appointments/Appointments.js");
/* harmony import */ var _modules_cortico_Appointments_AppointmentMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/cortico/Appointments/AppointmentMenu */ "./modules/cortico/Appointments/AppointmentMenu.js");
/* harmony import */ var _modules_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/cortico/Login/Login */ "./modules/cortico/Login/Login.js");
/* harmony import */ var _modules_core_Oscar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/core/Oscar.js */ "./modules/core/Oscar.js");
/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! element-closest-polyfill */ "./node_modules/element-closest-polyfill/index.js");
/* harmony import */ var element_closest_polyfill__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(element_closest_polyfill__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _modules_Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/Icons/CorticoIcon */ "./modules/Icons/CorticoIcon.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.css */ "./index.css");
/* harmony import */ var _modules_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/Modal/Modal */ "./modules/Modal/Modal.js");
/* harmony import */ var _modules_cortico_Dashboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/cortico/Dashboard */ "./modules/cortico/Dashboard/index.js");
/* harmony import */ var _modules_cortico_Disclaimer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/cortico/Disclaimer */ "./modules/cortico/Disclaimer.js");





// ==UserScript==
// @name     Cortico
// @version  3.8
// @grant    none
// ==/UserScript==















var CORTICO = {}; // container for global state. Use this rather than `window`

 // manually update this variable with the version in manifest.json

var version = 3.8;
var pubsub = (0,_modules_PubSub_PubSub__WEBPACK_IMPORTED_MODULE_5__.pubSubInit)();
var oscar = new _modules_core_Oscar_js__WEBPACK_IMPORTED_MODULE_10__.Oscar(window.location.hostname);
var cortico_media = ["phone", "clinic", "virtual", "", "quiet"];

var init_cortico = function init_cortico() {
  // create an element to indicate the library is loaded in the dom, and to contain fixed menus/elements.
  var anchor = document.createElement("div");
  anchor.id = "cortico_anchor";
  document.body.appendChild(anchor);
  var route = "" + window.location;
  var oscar_elements = Array.from(document.getElementsByTagName("script")).filter(function (s) {
    return s.src.indexOf("/Oscar.js") > 0 || s.src.indexOf("/oscar/js/") > 0 || s.src.indexOf("/appointment.js") > 0 || s.src.indexOf("phr/phr.js" > -1) // Encounter page
    ;
  }); // some pages have no scripts, but they have other elements.

  if (!oscar_elements) {
    document.querySelectorAll("div.DoNotPrint>table"), (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_3__.default)("oscar_elements");
  } // do not run unless we're on an Oscar page.


  if (oscar_elements.length === 0) {
    console.log("Cortico could not find any oscar script");
    return;
  }

  console.log("cortico plug-in initializing, version:", version);
  window.pubsub = pubsub;
  /*
  const modal = new Modal();
  modal.setContent(Dashboard());
  modal.show();
  */

  if (route.indexOf("/appointment/addappointment.jsp") > -1 || route.indexOf("/appointment/appointmentcontrol.jsp") > -1) {
    init_appointment_page();

    if ((window.location.href + '').includes("appointment_no")) {
      init_recall_button();
      init_diagnostic_viewer_button();
    } // only show on add appointment


    if (route.indexOf("/appointment/addappointment.jsp") > -1) {
      init_medium_option();
    } // Temporary fix, adding event listener does not work inside init_appointment_page
    // Note: event listeners inside init_recall_button seems to be working fine


    var resources_field = document.querySelector('[name="resources"]');
    var cortico_button = document.getElementById("cortico-video-appt-btn"); // open a windows to the cortico video page for this appointment.

    window.addEventListener("click", function (e) {
      if (e.target.id === "cortico-video-appt-btn") {
        if (!(0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) return;
        open_video_appointment_page(e);
      }
    }); //You need to delegate
    //cortico_button.addEventListener("click", open_video_appointment_page);

    resources_field.addEventListener("change", update_video_button);
  } else if (route.indexOf("/provider/providercontrol.jsp") > -1) {
    init_schedule();
    /**
     * Drag and drop - disabled for stability reasons.
     * TODO: fixme?
     */

    if (!oscar.isJuno() && !oscar.isKaiOscarHost()) {
      dragAndDrop();
    }

    addCorticoLogo();
    addMenu();
    (0,_modules_cortico_Appointments_AppointmentMenu__WEBPACK_IMPORTED_MODULE_8__.addAppointmentMenu)();
    (0,_modules_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_9__.addLoginForm)(chrome);

    if (!oscar.isJuno() && !oscar.containsKaiBar()) {
      plusSignFromCache();
    }

    var isMarkham = window.location.href.includes("mmfcc");

    if (isMarkham) {
      plusSignFromCache();
    }

    setupPrescriptionButtons();
  } else if (route.indexOf("/eform/efmformadd_data.jsp") > -1 || route.indexOf("/eform/efmshowform_data.jsp") > -1 || route.indexOf("/casemgmt/forward.jsp") > -1) {
    setupPatientEmailButton();
  } else if (route.indexOf("/oscarRx/ViewScript2.jsp") > -1) {
    // We need to determine first if the prescription is "delivery"
    var currentPharmacyCode = localStorage.getItem("currentPharmacyCode");

    if (currentPharmacyCode.toLowerCase().indexOf("dlvr") > -1) {
      var additionalNotes = document.getElementById("additionalNotes");
      additionalNotes.value = "FOR DELIVERY"; // make sure the preview frame is loaded before adding the notes

      var previewFrame = document.getElementById("preview");
      previewFrame.addEventListener("load", function () {
        // addNotes is a function in oscar
        addNotes();
      }); // setupFaxButton();
    }
  }

  init_styles();
};

var init_schedule = function init_schedule() {
  if (!(oscar.isOscarGoHost() || oscar.isKaiOscarHost() || oscar.containsKaiBar() || oscar.containsOscarGoOceanScript())) {
    var debounced = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.debounce)(oscar.updateDoctorHeadings.bind(oscar), 50);
    window.addEventListener("scroll", debounced);
  } else {
    console.log("Oscar Go or KAI Oscar detected; disabling sticky headers for doctor names");
  } // cancel the <meta http-equiv="refresh" content="60;">
  // note: this is currently set to 30 seconds, which is enough time (the refresh occurs
  // at 60s). Calling window.stop() too early breaks the Oscar menus ("Inbox" "Msg" "Consultations"
  // "Tickler") that are loaded by ajax


  window.setTimeout(window.stop, 10000); // refresh when idle for 1 minute.

  var last_interaction = new Date();
  window.addEventListener("click", function (e) {
    last_interaction = new Date();
  });
  window.addEventListener("keydown", function (e) {
    last_interaction = new Date();
  });
  var reloadHandler = setInterval(function () {
    var now = new Date();

    if (now.valueOf() - last_interaction.valueOf() > 180000) {
      clearInterval(reloadHandler);

      if (window.checkAllEligibilityRunning !== true && window.setupPreferredPharmaciesRunning !== true) {
        window.location.reload();
      }
    }
  }, 1000);
};

function update_video_button() {
  var cortico_button = document.getElementById("cortico-video-appt-btn");
  var resources_field = document.querySelector('[name="resources"]');
  /* TODO: when other appoitment types supported. 
  cortico_button.innerText =
    resources_field.value === "virtual" ? "Join Video Call" : "Join Appointment";
  */

  cortico_button.style.display = resources_field.value === "virtual" ? "inline-block" : "none";
}

function open_video_appointment_page(e) {
  e.preventDefault(); // don't submit the form.

  if (!localStorage["clinicname"]) {
    var clinicname = prompt("what is your Cortico website URL?");

    if (clinicname.indexOf(".cortico.ca") > -1) {
      clinicname = clinicname.substr(0, clinicname.indexOf(".cortico.ca"));
      clinicname = clinicname.replace(/https?:\/\//, "");
    }

    localStorage["clinicname"] = clinicname;
  }

  var appt_no = getQueryStringValue("appointment_no");

  if (!appt_no) {
    return alert("Please save your appointment first, before starting a video call.");
  }

  window.open((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)() + "/appointment/" + appt_no);
}

function getResourceSelect(resources_field) {
  var selectHtml = '<select name="resources">';
  var selected = resources_field ? resources_field.value : localStorage.getItem("medium-option");
  cortico_media.forEach(function (value) {
    selectHtml += "<option " + (value == selected ? "selected " : "") + 'value="' + value + '">' + (value || "n/a") + "</option>";
  });
  selectHtml += "</select>";
  return selectHtml;
}

function init_appointment_page() {
  // resources dropdown
  var resources_field = document.querySelector('input[type="text"][name="resources"]');
  var parent = resources_field ? resources_field.parentNode : null;
  var resourceValue = resources_field ? resources_field.value : null;
  console.log("If test", cortico_media.indexOf(), resourceValue);

  if (resources_field && cortico_media.indexOf(resourceValue) > -1) {
    parent.innerHTML = getResourceSelect(resources_field);
    var resourceCheckbox = document.createElement("input");
    resourceCheckbox.setAttribute("type", "checkbox");
    resourceCheckbox.setAttribute("id", "resourceCheck");
    var resourceLabel = document.createElement("label");
    resourceLabel.setAttribute("for", "resourceCheck");
    resourceLabel.textContent = "Text field";
    parent.appendChild(resourceCheckbox);
    parent.appendChild(resourceLabel);
    var resourceTextInput = document.createElement("input");
    resourceTextInput.setAttribute("type", "TEXT");
    resourceTextInput.setAttribute("name", "resources");
    resourceTextInput.setAttribute("tabindex", "5");
    resourceTextInput.setAttribute("width", "25");
    resourceCheckbox.addEventListener("input", function (e) {
      parent.innerHTML = "";

      if (e.target.checked === true) {
        parent.appendChild(resourceTextInput);
      } else {
        parent.innerHTML = selectHtml;
      }

      parent.appendChild(resourceCheckbox);
      parent.appendChild(resourceLabel);
    });
    resources_field = document.querySelector('[name="resources"]');
  } // telehealth button


  var last_button = document.querySelector("#printReceiptButton");
  var last_button_parent = last_button ? last_button.parentNode : null;

  if (last_button_parent) {
    last_button_parent.parentNode.appendChild((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn' type='button' id='cortico-video-appt-btn'>\n          Video Call &phone;\n        </button>"));
    update_video_button();
  }
}

function setupPatientEmailButton() {
  return _setupPatientEmailButton.apply(this, arguments);
}

function _setupPatientEmailButton() {
  _setupPatientEmailButton = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
    var is_eform_page, clinicName, email_parent, _email_parent, patient_info, email_btn;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            is_eform_page = true;
            clinicName = localStorage["clinicname"];
            email_parent = document.querySelector(".DoNotPrint td") || document.querySelector("#BottomButtons");

            if (!email_parent) {
              is_eform_page = false;
              _email_parent = document.querySelector("#save div:last-child");
            }

            _context7.next = 6;
            return getPatientInfo();

          case 6:
            patient_info = _context7.sent;
            email_btn = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n  <p style='margin-bottom:2em'>\n    <a id='cortico-email-patient' class='cortico-btn'>Email Patient</a>\n  </p>\n  ");
            email_btn.addEventListener("click", /*#__PURE__*/function () {
              var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6(e) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e)) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 2:
                        _context6.next = 4;
                        return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token").then( /*#__PURE__*/function () {
                          var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(access_token) {
                            var html, doNotPrintList, patientFormResponse;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    // copy document and remove unnecessary stuff
                                    html = document.cloneNode(true);
                                    doNotPrintList = html.querySelectorAll(".DoNotPrint");
                                    _context5.next = 4;
                                    return emailPatientEForm(patient_info, html.documentElement.outerHTML, access_token);

                                  case 4:
                                    patientFormResponse = _context5.sent;
                                    console.log('RSP: ', patientFormResponse);

                                  case 6:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x16) {
                            return _ref3.apply(this, arguments);
                          };
                        }());

                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x15) {
                return _ref2.apply(this, arguments);
              };
            }());
            email_parent.appendChild(email_btn);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _setupPatientEmailButton.apply(this, arguments);
}

function delegate(element, event, descendentSelector, callback) {
  element.addEventListener(event, function (e) {
    var elem = e.target.closest(descendentSelector); // returns null if no matching parentNode is found

    if (elem) {
      callback(elem, e);
    }
  }, false);
}

var init_styles = function init_styles() {
  var style = ".cortico-btn {\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none;\n  margin: 0.5rem;\n  background:#5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius:.5rem;\n  color:#fff;\n  cursor:pointer;\n  display:inline-block;\n  font-family:Montserrat,sans-serif;\n  font-size:.8rem;\n  font-weight:600;\n  height:30px;\n  line-height:1.2rem;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  outline:0;\n  padding:0 1rem;\n  text-align:center;\n  text-decoration:none;\n  transition:background .2s,border .2s,box-shadow .2s,color .2s;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  vertical-align:middle;\n  white-space:nowrap;\n  }\n  .cortico-btn:focus {\n  box-shadow:0 0 0 .1rem rgba(92,112,255,.2)\n  }\n  .cortico-btn:focus,\n  .cortico-btn:hover {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-btn.active,\n  .cortico-btn:active {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-input {\n  font-size: 16px;\n  padding: 5px 5px;\n  margin: 0px 10px;\n  width: 35%;\n  background-color: transparent;\n  border: 1px solid rgb(75, 84, 246);\n  }\n  .cortico-input.disabled {\n  background-color: #DDD;\n  color: #999;\n  }\n  .cortico-btn.inline {\n  width: 100%;\n  display: inline-block;\n  margin: 10px auto;\n  }\n  .bottom {\n  position: absolute;\n  bottom: 1px;\n  left: 10px;\n  }\n  .warning {\n  background-color: #cc3300;\n  }\n  ";

  if (!(oscar.isKaiOscarHost() || oscar.containsKaiBar())) {
    style += "\n  .infirmaryView:first-child {\n  /*position:fixed;*/\n  margin-left: 57px;\n  padding: 1px 15px;\n\n  }";
  }

  addGlobalStyle(style);
};

if (!document.getElementById("cortico_anchor")) {
  // avoid duplicating the extension/script.
  init_cortico();
} else {
  console.warn("Cortico plug-in installed more than once. A");
} // -- utilities


function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];

  if (!head) {
    return;
  }

  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}

function addCorticoLogo() {
  var menu = document.querySelector("#firstMenu #navList") || document.querySelector("#firstMenu #navlist");
  var listitem = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n    <li>\n      <a href=\"https://cortico.health\"></a>\n    </li>\n  ");
  var corticoLogo = (0,_modules_Icons_CorticoIcon__WEBPACK_IMPORTED_MODULE_13__.CorticoIcon)({
    attrs: {
      height: "15",
      style: "position:relative; top: 2px;"
    }
  });
  listitem.firstElementChild.appendChild(corticoLogo);
  menu.appendChild(listitem);
}

function styleSheetFactory(namespace) {
  if (!window[namespace]) {
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
    window[namespace] = styleSheet;
    return styleSheet;
  }

  return window[namespace];
}

function createSideBar() {
  return _createSideBar.apply(this, arguments);
}

function _createSideBar() {
  _createSideBar = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8() {
    var sidebar, styleSheet, styles;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!window.corticoSidebar) {
              _context8.next = 2;
              break;
            }

            return _context8.abrupt("return");

          case 2:
            sidebar = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n  <div class='cortico-sidebar'>\n    <a href=\"https://cortico.ca\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC\"  alt=\"Cortico\" style=\"margin-bottom: 25px;\" /></a>\n    <div class='cortico-sidebar-close'>Close</div>\n  </div>\n  ", {
              events: {
                'click .cortico-sidebar-close': function clickCorticoSidebarClose() {
                  sidebar.classList.remove("cortico-sidebar-show");

                  if (window.localStorage["firstRun"] === "true") {
                    closeSidebarInstructions();
                    window.localStorage["firstRun"] = false;
                  }
                }
              }
            });
            window.corticoSidebar = sidebar; //var newUiOption = getNewUIOption();
            //sidebar.appendChild(newUiOption);

            _context8.t0 = sidebar;
            _context8.next = 7;
            return getCorticoLogin();

          case 7:
            _context8.t1 = _context8.sent;

            _context8.t0.appendChild.call(_context8.t0, _context8.t1);

            sidebar.appendChild(getCorticoUrlOption());
            sidebar.appendChild(getRecallStatusOption());
            sidebar.appendChild(getMediumOption());
            sidebar.appendChild(getEligButton());
            sidebar.appendChild(getEligStatus());
            sidebar.appendChild(getEligFailed());
            sidebar.appendChild(getBatchPharmaciesButton());
            sidebar.appendChild(getResetCacheButton());
            sidebar.appendChild(getBatchPharmaciesStatus());
            styleSheet = styleSheetFactory("cortico_sidebar");
            styles = "\n    .cortico-sidebar { position: fixed; top: 0; right: 0; bottom: 0; width: 300px; background-color: white; height: 100%; z-index: 10000; }\n    .cortico-sidebar { transition: transform 0.25s ease-in; transform: translateX(300px); }\n    .cortico-sidebar { display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 1px 5px 5px rgb(0, 0, 0); }\n    .cortico-sidebar-show { transform: translateX(0); }\n    .cortico-sidebar-close { cursor:pointer; position: absolute; top: 10px; right: 10px; z-index: 500; }\n  ";
            styleSheet.innerText = styles;
            return _context8.abrupt("return", sidebar);

          case 22:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _createSideBar.apply(this, arguments);
}

function closeSidebarInstructions() {
  var sidebarInstructions = document.querySelector(".sidebar-instructions");

  if (sidebarInstructions) {
    sidebarInstructions.classList.add("sidebar-instructions-hidden");
  }
}

function showDiagnosticResults(html_string) {
  var container = document.createElement("div");

  if (CORTICO.diagnosticResults) {
    CORTICO.diagnosticResults.style.display = "block";
  } else {
    CORTICO.diagnosticResults = container;
    container.classList.add("cortico-diagnostic-viewer");
    container.innerHTML = html_string;
    var containerClose = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-diagnostic-close' style='cursor: pointer;'>Close</button>");
    containerClose.addEventListener("click", function () {
      container.style.display = "none";
    });
    container.appendChild(containerClose);
  }

  var styleSheet = styleSheetFactory("cortico_sidebar");
  var styles = "\n    .cortico-diagnostic-viewer { position: fixed; top: 20%; left: 50% ;width: 300px; background-color: white; transform: translate(-50%, 0) }\n    .cortico-diagnostic-viewer { padding: 20px; padding-top: 30px; border: 1px solid }\n    .cortico-diagnostic-viewer { overflow-y: scroll; max-height: 500px }\n    .cortico-diagnostic-close { position: absolute; top: 10px; right: 10px; z-index: 500; }\n  ";
  styleSheet.innerText = styles;
  document.body.prepend(container);
}

function addMenu(_x) {
  return _addMenu.apply(this, arguments);
}

function _addMenu() {
  _addMenu = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9(container) {
    var navigation, menu, sidebar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            navigation = document.querySelector("#firstMenu #navList") || document.querySelector("#firstMenu #navlist");
            menu = document.createElement("li");
            menu.textContent = "Cortico";
            menu.style.color = "rgb(75, 84, 246)";
            menu.style.cursor = "pointer";
            _context9.next = 7;
            return createSideBar();

          case 7:
            sidebar = _context9.sent;
            menu.addEventListener("click", function () {
              sidebar.classList.toggle("cortico-sidebar-show");

              if (window.localStorage["firstRun"] === "true") {
                closeSidebarInstructions();
                window.localStorage["firstRun"] = false;
              }
            });
            menu.addEventListener("click", function () {
              var opened = window.localStorage["disclaimer"];

              if (!opened) {
                var modal = new _modules_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__.Modal();
                modal.setContent((0,_modules_cortico_Disclaimer__WEBPACK_IMPORTED_MODULE_17__.default)());
                modal.show();
                window.localStorage["disclaimer"] = true;
              }
            });
            menu.addEventListener("click", function () {
              if (window.localStorage["firstRun"] === undefined) {
                window.localStorage["firstRun"] = true;
              }
            }, {
              once: true
            });
            document.body.prepend(sidebar);
            navigation.appendChild(menu);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _addMenu.apply(this, arguments);
}

function getRecallStatusOption() {
  var container = document.createElement("div");
  container.style.width = "100%";
  container.style.padding = "0px 10px";
  container.style.boxSizing = "border-box";
  var inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.justifyContent = "center";
  var input = document.createElement("input");
  input.setAttribute("id", "recall-status");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Recall Status");
  input.style.fontSize = "16px";
  input.style.padding = "5px 5px";
  input.style.margin = "0px 10px";
  input.style.width = "35%";
  inputContainer.appendChild(input);

  if (localStorage.getItem("recall-status")) {
    input.value = localStorage.getItem("recall-status");
  }

  var label = document.createElement("label");
  label.setAttribute("for", "recall-status");
  label.textContent = "Status to check for recall button";
  label.style.display = "block";
  label.style.marginTop = "30px";
  label.style.marginBottom = "10px";
  label.style.textAlign = "center";
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn inline'>Save</button>");
  container.appendChild(label);
  container.appendChild(inputContainer);
  container.appendChild(button);
  button.addEventListener("click", function () {
    if (input.value) {
      localStorage.setItem("recall-status", input.value);
      alert("Your recall status has changed");
    }
  });
  return container;
}

function getMediumOption() {
  var container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<div style='100%; padding: 0px 10px; box-sizing: border-box'>\n    <label for='medium-option' \n    style='display: block; margin-top: 30px; margin-bottom: 10px; text-align: center;'>\n      Default appointment type for reminder\n    </label>\n\n    <div id='selectContainer' style='display: flex; align-items: center; justify-content: center'>\n      ".concat(getResourceSelect(), "\n    </div>\n    \n    <button style='width: 100%; display: inline-block; margin: 10px auto' class='cortico-btn'>Save</button>\n  </div>"), {
    events: {
      "click .cortico-btn": function clickCorticoBtn(e) {
        var resourceSelect = document.querySelector('select[name="resources"]');
        var value = resourceSelect.options[resourceSelect.selectedIndex].value;
        localStorage.setItem("medium-option", value);
        alert("Your default medium has changed");
      }
    }
  });
  return container;
}

function getEligStatus() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-eligibility", function (topic, data) {
    var progress = "(" + data.current + "/" + data.total + ")";

    if (data.complete === true) {
      container.innerHTML = "Check Complete!";
    } else {
      var header = "Currently Processing" + progress + ":";
      var name = data.info.split("\n")[1];
      container.innerHTML = "<p>" + header + "<br/>" + name + "</p>";
    }
  });
  return container;
}

function getBatchPharmaciesStatus() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-batch-pharmacies", function (topic, data) {
    var progress = "(" + data.current + "/" + data.total + ")";

    if (data.complete === true) {
      container.innerHTML = "Setup Complete!";
    } else {
      var header = "Currently Processing" + progress + ":";
      container.innerHTML = "<p>" + header + "<br/>" + "</p>";
    }
  });
  return container;
}

function getEligFailed() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-eligibility-failed", function (topic, data) {
    container.innerHTML = '<p style="margin-top: 10px;">Failed to Verify:</p>';
    var list = getFailedList(data);
    container.appendChild(list);
  });
  return container;
}

function getFailedList(data) {
  var failed = JSON.parse(data);
  var listItems = ""; // make sure that failed is of type array so map function works

  if (typeof failed === "string") {
    failed = JSON.parse(failed);
  }

  if (failed) {
    failed.map(function (f) {
      listItems += "<li>Demographic No: ".concat(f.demographic_no, "</li>");
    });
  }

  var list = document.createElement("ul");
  list.innerHTML = listItems;
  return list;
}

function getNewUIOption() {
  var container = document.createElement("div");
  var input = document.createElement("input");
  input.setAttribute("id", "corticoui");
  input.setAttribute("type", "checkbox");
  input.style.verticalAlign = "middle";
  container.appendChild(input);
  input.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("newui", "true");
      addNewUI();
    } else {
      localStorage.setItem("newui", "false");
      removeNewUI();
    }
  });

  if (localStorage.getItem("newui") === "true") {
    input.checked = true;
    addNewUI();
  }

  var label = document.createElement("label");
  label.setAttribute("for", "corticoui");
  label.textContent = "Activate New UI";
  label.style.marginLeft = "5px";
  container.appendChild(label);
  return container;
}

function getCorticoLogin() {
  return _getCorticoLogin.apply(this, arguments);
}

function _getCorticoLogin() {
  _getCorticoLogin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11() {
    var container, jwt_expired, loginButton, loggedInAsText, loggedInAsHtml, btnEvent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)('<div></div>');

            if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)()) {
              _context11.next = 3;
              break;
            }

            return _context11.abrupt("return", container);

          case 3:
            jwt_expired = null;
            loginButton = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn'>Sign in at Cortico</button>");
            loggedInAsText = '';
            loggedInAsHtml = '';
            btnEvent = {
              "click .cortico-btn": function clickCorticoBtn(e) {
                if (!(0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) return;

                if (e.target.className == 'cortico-btn') {
                  var loginForm = document.querySelector(".login-form");
                  loginForm.classList.add("show");
                }
              }
            };
            _context11.next = 10;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_username").then(function (username) {
              loggedInAsText = "Logged in as ".concat(username);
            });

          case 10:
            _context11.next = 12;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_expired").then(function (expired) {
              jwt_expired = expired;

              if (jwt_expired === false) {
                loginButton = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn'>Log out</button>");
                loggedInAsHtml = "<p>".concat(loggedInAsText, "</p>");
                btnEvent = {
                  "click .cortico-btn": function () {
                    var _clickCorticoBtn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10(e) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              if (e.target.className == 'cortico-btn') {
                                chrome.storage.local.remove(['jwt_access_token', 'jwt_expired']);
                                alert("Logged out from cortico, reloading...");
                                window.location.reload();
                              }

                            case 1:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10);
                    }));

                    function clickCorticoBtn(_x17) {
                      return _clickCorticoBtn.apply(this, arguments);
                    }

                    return clickCorticoBtn;
                  }()
                };
              }
            });

          case 12:
            container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<div class='login-form-button'>\n    ".concat(loginButton.outerHTML, "\n    ").concat(loggedInAsHtml, "\n    </div>"), {
              events: btnEvent
            });
            return _context11.abrupt("return", container);

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _getCorticoLogin.apply(this, arguments);
}

function getCorticoUrlOption() {
  var container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.createSidebarContainer)();
  var inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.justifyContent = "center";
  var prefix = document.createElement("span");
  prefix.textContent = "https://";
  var suffix = document.createElement("input");
  suffix.classList.add("cortico-input");
  suffix.classList.add("disabled");
  suffix.textContent = ".cortico.ca";
  suffix.setAttribute("type", "text");
  suffix.setAttribute("value", ".cortico.ca");
  suffix.setAttribute("placeholder", ".cortico.ca");
  suffix.setAttribute("readonly", "true");
  suffix.addEventListener("click", function (e) {
    suffix.classList.remove("disabled");
    suffix.removeAttribute("readonly");
  });

  if (localStorage.getItem("customUrlSuffix")) {
    suffix.value = localStorage.getItem("customUrlSuffix");
  }

  var input = document.createElement("input");
  input.setAttribute("id", "cortico-url");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Clinic Name");
  input.classList.add("cortico-input");
  inputContainer.appendChild(prefix);
  inputContainer.appendChild(input);
  inputContainer.appendChild(suffix);

  if (localStorage.getItem("clinicname")) {
    input.value = localStorage.getItem("clinicname");
  }

  var label = document.createElement("label");
  label.setAttribute("for", "cortico-url");
  label.textContent = "Your cortico clinic name";
  label.style.display = "block";
  label.style.marginTop = "30px";
  label.style.marginBottom = "10px";
  label.style.textAlign = "center";
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn inline'>Save</button>");

  if (window.localStorage["firstRun"] !== "false") {
    var instructions = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("div", {
      attrs: {
        class: "sidebar-instructions"
      },
      text: "Welcome to the Cortico Oscar plugin! Please set your cortico clinic name"
    });
    container.appendChild(instructions);
  }

  container.appendChild(label);
  container.appendChild(inputContainer);
  container.appendChild(button);
  button.addEventListener("click", function () {
    if (suffix.value) {
      localStorage.setItem("customUrlSuffix", suffix.value);
    }

    if (input.value) {
      localStorage.setItem("clinicname", input.value);
      alert("Your clinic name has changed, the page will now reload");
      window.location.reload();
    }
  });
  return container;
}

function getEligButton() {
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n    <button class='cortico-btn inline'>Check Eligibility</button>");
  var container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.createSidebarContainer)(button, {
    events: {
      "click .cortico-btn.inline": function () {
        var _clickCorticoBtnInline = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(e) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log("Check Eligibility Start");
                  _context.next = 3;
                  return checkAllEligibility();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function clickCorticoBtnInline(_x2) {
          return _clickCorticoBtnInline.apply(this, arguments);
        }

        return clickCorticoBtnInline;
      }()
    }
  }); //button.addEventListener("click", window.checkAllEligibility);

  return container;
}

function getBatchPharmaciesButton() {
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n  <button class='cortico-btn inline'>\n    Set preferred pharmacies\n  </button>");
  var container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.createSidebarContainer)(button, {
    events: {
      "click .cortico-btn.inline": function clickCorticoBtnInline(e) {
        if (!(0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) return;
        console.log("Batch Pharmacy Setup running...", e);
        setupPreferredPharmacies();
      }
    }
  });
  return container;
}

function getResetCacheButton() {
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn warning bottom'>Reset Cache</button>", {
    events: {
      "click .cortico-btn.warning.bottom": function () {
        var _clickCorticoBtnWarningBottom = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(e) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!confirm("Are you sure you want to clear your cache?")) {
                    _context2.next = 8;
                    break;
                  }

                  localStorage.clear();
                  _context2.next = 4;
                  return chrome.storage.local.clear();

                case 4:
                  alert("Successfully reset cache, the page will now reload.");
                  window.location.reload();
                  _context2.next = 9;
                  break;

                case 8:
                  console.log("Clear cache cancelled");

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function clickCorticoBtnWarningBottom(_x3) {
          return _clickCorticoBtnWarningBottom.apply(this, arguments);
        }

        return clickCorticoBtnWarningBottom;
      }()
    }
  });
  return button;
}

function addNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "#providerSchedule td { padding: 2px; }";
  styles += ".adhour { text-shadow: 1px 1px 1px rgba(0,0,0,1); font-size: 14px; }";
  styles += ".appt { box-shadow: 1px 3px 3px rgba(0,0,0,0.1); }";
  styles += "#providerSchedule { border: 0; }";
  styles += "#providerSchedule td { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles += "#providerSchedule td.noGrid { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles += "#firstTable { background-color: #efeef3; } #firstMenu a { font-weight: 400; color: #171458; font-size: 14px; }";
  styles += "#ivoryBar td { background-color: white; padding: 5px; }";
  styles += ".infirmaryView { background-color: #efeef3; }";
  styles += "#ivoryBar input, #ivoryBar select, .infirmaryView input, .infirmaryView .ds-btn { background-color: #171458 !important; color: white !important; font-weight: bold !important; padding: 2px;  }";
  styles += "#ivoryBar input:placeholder { font-weight: bold; color: white; }";
  styleSheet.innerText = styles;
}

function removeNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "";
  styleSheet.innerText = styles;
}
/* Drag and Drop Feature Begin */


function appointmentRowDragStart(ev) {
  if (ev.target.matches("td.appt")) {
    window.dragSelectedTarget = ev.target;
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
  } else {
    ev.preventDefault();
  }
}

function isValidDragItem() {
  return !!window.dragSelectedTarget;
}

function isSameDay(startDate, endDate) {
  return startDate.isSame(endDate, "day");
}

function dragAndDrop() {
  if (document.readyState !== "loading") {
    var appointmentRows = document.querySelectorAll("td.appt");
    appointmentRows.forEach(function (node) {
      node.setAttribute("draggable", true);
      node.addEventListener("dragstart", appointmentRowDragStart);
    });
  } else {
    window.addEventListener("DOMContentLoaded", function () {
      var appointmentRows = document.querySelectorAll("td.appt");
      appointmentRows.forEach(function (node) {
        node.setAttribute("draggable", true);
        node.addEventListener("dragstart", appointmentRowDragStart);
      });
    });
  }

  function dragover_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "link";
    var target = ev.target;
    var isAppt = target.classList.contains("appt");
    var isEmpty = target.classList.contains("noGrid");

    if (isAppt || isEmpty) {
      target.style.backgroundColor = "yellow";
      window.dragTarget = target;
    }
  }

  function dragleave_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }

    if (!dragTarget) {
      return;
    } //Comment because unstable, this will undo highlight multiple rows in the table
    //target.setAttribute('rowspan', 1)


    handleColors(dragTarget);
  }

  function handleColors(target) {
    //Appropriately reset colors on hover and dragend, dragover
    var isAppt = target.classList.contains("appt");
    var isEmpty = target.classList.contains("noGrid");

    if (isAppt) {
      target.style.backgroundColor = "#FDFEC7";
    } else if (isEmpty) {
      target.style.backgroundColor = "#486ebd";
    }
  }

  function drop_handler(_x4) {
    return _drop_handler.apply(this, arguments);
  } // Maybe better to use event delegation in the future


  function _drop_handler() {
    _drop_handler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(ev) {
      var newStartTime, apptLink, apptLinkText, apptUrl, origin, namespace, result, text, temp, formData, originalStartTime, apptDate, duration, newEndTime, _newStartTime, _newEndTime, apptDoctor, targetDoctor, isSameDoctor, doctor, parent;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (isValidDragItem()) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              handleColors(ev.target); // Sibling table cell has the start time

              newStartTime = ev.target.parentElement.firstElementChild.firstElementChild.textContent.trim(); // Get the appointment edit link, we're going to fetch this page in memory later

              apptLink = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointmentLink)(dragSelectedTarget);

              if (apptLink) {
                _context3.next = 8;
                break;
              }

              alert("No Valid Appointment Link Found");
              return _context3.abrupt("return", false);

            case 8:
              apptLinkText = apptLink.attributes.onclick.textContent; //Get the URL and Take out the "../" in front

              apptUrl = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.extractApptUrl)(apptLinkText); //Get our base url with the provider

              origin = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)();
              namespace = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)();
              _context3.next = 14;
              return appointmentEditRequest(origin, namespace, apptUrl);

            case 14:
              result = _context3.sent;
              _context3.next = 17;
              return result.text();

            case 17:
              text = _context3.sent;
              //Make an element in memory, and we're gonna place the contents of the fetched page here, so we can grab the formdata
              temp = document.createElement("div");
              temp.style.display = "none";
              temp.innerHTML = text;
              formData = new FormData(temp.querySelector("FORM"));
              originalStartTime = formData.get("start_time");
              apptDate = formData.get("appointment_date");
              duration = formData.get("duration") - 1;
              newEndTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(apptDate + "T" + newStartTime).add(duration, "minute").format("HH:mm"); // We check to see if the drag and drop overlaps to the next day, if it does we prevent.

              _newStartTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(apptDate + "T" + newStartTime);
              _newEndTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(apptDate + "T" + newStartTime).add(duration, "minute");

              if (isSameDay(_newStartTime, _newEndTime)) {
                _context3.next = 31;
                break;
              }

              alert("Cannot overlap to the next day");
              return _context3.abrupt("return");

            case 31:
              apptDoctor = formData.get("provider_no");
              targetDoctor = getCurrentProviderNoFromTd(ev.target);
              isSameDoctor = apptDoctor === targetDoctor;
              doctor = targetDoctor;
              formData.set("start_time", newStartTime);
              formData.set("end_time", newEndTime);

              if (!isSameDoctor) {
                _context3.next = 49;
                break;
              }

              _context3.next = 40;
              return updateAppointment(origin, namespace, formData);

            case 40:
              result = _context3.sent;
              _context3.next = 43;
              return result.text();

            case 43:
              text = _context3.sent;
              parent = ev.target.parentElement;
              parent.insertBefore(dragSelectedTarget, ev.target);
              updateAppointmentAnchorLinks(dragSelectedTarget, {
                start_time: originalStartTime,
                provider_no: apptDoctor
              }, {
                start_time: newStartTime,
                provider_no: targetDoctor
              });
              _context3.next = 50;
              break;

            case 49:
              alert("Moving appointments to other providers is currently disabled."); // result = await cutAppointment(origin, namespace, formData);
              // formData.set("provider_no", targetDoctor);
              // handleAddData(formData);
              // const data = new URLSearchParams(formData);
              // result = await addAppointment(origin, namespace, data);
              // window.location.reload();

            case 50:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _drop_handler.apply(this, arguments);
  }

  var emptyRows = document.querySelectorAll("td.noGrid");
  emptyRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });
  var appointmentRows = document.querySelectorAll("td.appt");
  appointmentRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });
}
/* Drag and Drop Feature end */


function addToFailures(metadata) {
  var _cache = getFailureCache();

  var cache = JSON.parse(_cache) || [];

  if (cache && cache.push) {
    cache.push(metadata);
  }

  localStorage.setItem("failureCache", JSON.stringify(cache));
}

function clearFailureCache() {
  return localStorage.removeItem("failureCache");
}

function getFailureCache() {
  return localStorage.getItem("failureCache");
}

function filterAppointments(appointments) {
  var _cache = localStorage.getItem("checkCache");

  var _today = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD");

  if (!_cache) {
    return appointments;
  }

  var cache = JSON.parse(_cache);
  return appointments.filter(function (appt) {
    var demographic_no = appt.demographic_no; // Check appointment if it doesn't exist in cache

    if (!cache.hasOwnProperty(demographic_no)) {
      return true;
    }

    var cachedDate = cache[demographic_no].date; // Check appointment if it exists in cache, but expired

    if (isDateExpired(dayjs__WEBPACK_IMPORTED_MODULE_6___default()(cachedDate), _today, 5)) {
      return true;
    }

    return false;
  });
}

function isDateExpired(past, now, days) {
  var diff = past.diff(now, "day");
  return Math.abs(diff) > days;
}

function checkAllEligibility() {
  return _checkAllEligibility.apply(this, arguments);
}

function _checkAllEligibility() {
  _checkAllEligibility = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee12() {
    var nodes, appointmentInfo, length, providerNo, error, i, temp, demographic_no, result, patientInfo, healthNumber, province, text, lowerCaseText, requestSuccess, _text, jsonRes, verified;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!(window.checkAllEligibilityRunning === true)) {
              _context12.next = 2;
              break;
            }

            return _context12.abrupt("return", alert("Check Already Running"));

          case 2:
            clearFailureCache();
            nodes = document.querySelectorAll("td.appt");
            appointmentInfo = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointmentInfo)(nodes);
            console.log(appointmentInfo);
            appointmentInfo = filterAppointments(appointmentInfo);
            length = appointmentInfo.length;

            if (appointmentInfo.length === 0) {
              alert("No Appointments to Check");
            }

            providerNo = getProviderNoFromTd(nodes[0]);
            error = false;
            window.checkAllEligibilityRunning = true;
            _context12.prev = 12;
            i = 0;

          case 14:
            if (!(i < length)) {
              _context12.next = 64;
              break;
            }

            temp = Object.assign({}, appointmentInfo[i]);
            temp.total = length;
            temp.current = i + 1;
            pubsub.publish("check-eligibility", temp);
            demographic_no = appointmentInfo[i].demographic_no;
            result = null; // empty appointment node, do not check

            if (!(!demographic_no || demographic_no == 0)) {
              _context12.next = 23;
              break;
            }

            return _context12.abrupt("continue", 61);

          case 23:
            // In cases where the first appointment in the schedule is an empty
            // appointment, get the providerNo from the node itself
            if (!providerNo) providerNo = getProviderNoFromTd(nodes[i]);
            _context12.next = 26;
            return getPatientInfo(demographic_no);

          case 26:
            patientInfo = _context12.sent;
            healthNumber = patientInfo["Health Ins"].replace(/\s+/g, ' ').trim();
            province = patientInfo["Province"].replace(/\s+/g, ' ').trim();
            _context12.prev = 29;
            _context12.next = 32;
            return checkEligiblity(demographic_no, (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)(), (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)(), providerNo, healthNumber, province);

          case 32:
            result = _context12.sent;
            _context12.next = 38;
            break;

          case 35:
            _context12.prev = 35;
            _context12.t0 = _context12["catch"](29);
            console.error(_context12.t0);

          case 38:
            text = null;
            lowerCaseText = null;
            requestSuccess = false;

            if (!(result && result.status === 200)) {
              _context12.next = 49;
              break;
            }

            _context12.next = 44;
            return result.text();

          case 44:
            _text = _context12.sent;
            lowerCaseText = _text.toLowerCase();

            if (oscar.isOscarGoHost()) {
              jsonRes = JSON.parse(lowerCaseText);

              if (jsonRes && jsonRes.ret) {
                requestSuccess = true;
              }
            }

            _context12.next = 51;
            break;

          case 49:
            text = "Failed to fetch";
            lowerCaseText = "Failed to fetch";

          case 51:
            if (!lowerCaseText.includes("error in teleplan connection")) {
              _context12.next = 55;
              break;
            }

            alert("Automatic Eligiblity Check Aborted. \n" + text);
            error = true;
            return _context12.abrupt("break", 64);

          case 55:
            verified = false;

            if (!lowerCaseText.includes("failure-phn") && lowerCaseText.includes("success") || lowerCaseText.includes("health card passed validation") || requestSuccess) {
              plusSignAppointments(demographic_no);
              verified = true;
              console.log("Success!");
            } else {
              appointmentInfo[i]["reason"] = text;
              addToFailures(appointmentInfo[i]);
              pubsub.publish("check-eligibility-failed", getFailureCache());
            }

            (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.addToCache)(demographic_no, verified);
            console.log("Cached.");
            _context12.next = 61;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, 1500);
            });

          case 61:
            i++;
            _context12.next = 14;
            break;

          case 64:
            _context12.next = 70;
            break;

          case 66:
            _context12.prev = 66;
            _context12.t1 = _context12["catch"](12);
            console.log(_context12.t1);
            alert(_context12.t1);

          case 70:
            _context12.prev = 70;
            window.checkAllEligibilityRunning = false;
            pubsub.publish("check-eligibility", {
              complete: true,
              total: length,
              error: error
            });
            return _context12.finish(70);

          case 74:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[12, 66, 70, 74], [29, 35]]);
  }));
  return _checkAllEligibility.apply(this, arguments);
}

function getPharmacyResults(searchTerm) {
  var uriSafeSearch = searchTerm.toLowerCase().replace(" ", "+");
  var newLocal = "oscarRx/managePharmacy.do?method=search&search&term=" + uriSafeSearch;
  var url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)() + "/" + (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)() + "/" + newLocal;
  return fetch(url, {
    method: "GET",
    headers: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }, "Content-Type", "application/json")
  });
}

function getCurrentPharmacy(demographicNo) {
  var newLocal = "oscarRx/managePharmacy.do?method=getPharmacyFromDemographic&demographicNo=" + demographicNo;
  var url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)() + "/" + (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)() + "/" + newLocal;
  return fetch(url, {
    method: "GET",
    headers: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }, "Content-Type", "application/json")
  });
}

function setPreferredPharmacy(pharmacyObj, demographicNo) {
  var url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)() + "/" + (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)() + "/" + "oscarRx/managePharmacy.do?method=setPreferred";
  pharmacyObj.name = pharmacyObj.name.replace(" ", "+");
  var formData = new FormData(); // Used by LDRS, and possibly other WELL oscars

  formData.append("pharmId", pharmacyObj.id);
  formData.append("pharmacyId", pharmacyObj.id);
  formData.append("demographicNo", demographicNo);
  formData.append("pharmacyName", pharmacyObj.name);
  formData.append("pharmacyAddress", pharmacyObj.address);
  formData.append("pharmacyCity", pharmacyObj.city);
  formData.append("pharmacyProvince", pharmacyObj.province);
  formData.append("pharmacyPostalCode", pharmacyObj.postalCode);
  formData.append("pharmacyPhone1", pharmacyObj.phone1);
  formData.append("pharmacyPhone2", pharmacyObj.phone2);
  formData.append("pharmacyFax", pharmacyObj.fax);
  formData.append("pharmacyEmail", pharmacyObj.email);
  formData.append("pharmacyServiceLocationId", pharmacyObj.serviceLocationIdentifier);
  formData.append("pharmacyNotes", pharmacyObj.notes);
  formData.append("preferredOrder", "1");
  var data = new URLSearchParams(formData);
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

function checkEligiblity(demographicNo, origin, namespace, providerNo, healthNumber, province) {
  var url = "".concat(origin, "/").concat(namespace, "/billing/CA/BC/ManageTeleplan.do?") + "demographic=".concat(demographicNo, "&method=checkElig"); // Taken from oscar, they bust cache with this

  var ran_number = Math.round(Math.random() * 1000000);
  url += "&rand=" + ran_number;

  if (oscar.isOscarGoHost() && province === "ON") {
    var _healthNumber$split = healthNumber.split(" "),
        _healthNumber$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_healthNumber$split, 2),
        hin = _healthNumber$split2[0],
        ver = _healthNumber$split2[1];

    url = "".concat(origin, "/").concat(namespace, "/hcv/validate.do?") + "method=validateHin&hin=".concat(hin, "&ver=").concat(ver, "&sc=");
  }

  if (oscar.isKaiOscarHost() && province === "ON") {
    url = "".concat(origin, "/CardSwipe/?hc=").concat(healthNumber);
  }

  if (providerNo || providerNo === 0) {
    url += "&provider=" + providerNo;
  }

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  });
}

function appointmentEditRequest(origin, namespace, apptUrl) {
  return fetch(origin + "/" + namespace + apptUrl);
}

function handleAddData(data) {
  if (!oscar.isJuno()) {
    return data;
  }

  data.set("appointmentNo", data.get("appointment_no"));
  data.delete("appointment_no");
  data.set("dboperation", "search_titlename");
  data.set("sendBookingNotification", "false");
  data.set("outofdomain", "true");
  data.set("operationType", "CUT");
  data.set("fromAppt", "1");
}

function addAppointment(origin, namespace, data) {
  data.set("displaymode", "Add Appointment");

  var _data = new URLSearchParams(data);

  return appointmentRequest(origin, namespace, _data);
}

function cutAppointment(origin, namespace, data) {
  data.set("displaymode", "Cut");

  var _data = new URLSearchParams(data);

  return appointmentRequest(origin, namespace, _data);
}

function updateAppointment(origin, namespace, data) {
  data.set("displaymode", "Update Appt");

  var _data = new URLSearchParams(data);

  return appointmentRequest(origin, namespace, _data);
}

function appointmentRequest(origin, namespace, data) {
  return fetch(origin + "/" + namespace + "/appointment/appointmentcontrol.jsp", {
    method: "POST",
    body: data,
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
} // This TD Element needs to be an appointment or empty slot.


function getProviderNoFromTd(tdElement) {
  if (!tdElement) {
    return null;
  }

  var encounterButton = tdElement.querySelector(".encounterBtn");

  if (!encounterButton) {
    return null;
  }

  var value = encounterButton.attributes.onclick.textContent;

  if (!value) {
    return null;
  }

  var split = value.split(",");
  var url = split[2];

  if (!url) {
    return null;
  }

  var queryString = url.split("?")[1];
  var searchParams = new URLSearchParams(queryString);
  var providerNo = searchParams.get("providerNo");
  return providerNo;
}

function getCurrentProviderNoFromTd(tdElement) {
  //oscar osp
  var dsButton = tdElement.closest("table").closest("tbody").querySelector(".ds-btn");

  if (dsButton) {
    return dsButton.dataset.provider_no;
  } //juno


  var dsInput = tdElement.closest("table").closest("tbody").querySelector('input[name="searchview"]');

  if (dsInput) {
    return dsInput.attributes.onclick.nodeValue.match(/'([^']+)'/)[1];
  }

  return null;
}

function updateAppointmentAnchorLinks(apptTdElement, oldOptions, newOptions) {
  apptTdElement.querySelectorAll("a").forEach(function (node) {
    var linkAttribute = node.attributes.onclick || node.attributes.href;
    var linkValue = linkAttribute.nodeValue;
    var oldStartTime = oldOptions.start_time,
        oldProviderNo = oldOptions.provider_no;
    var newStartTime = newOptions.start_time,
        newProviderNo = newOptions.provider_no;
    linkValue = linkValue.replace("start_time=" + oldStartTime, "start_time=" + newStartTime);
    linkValue = linkValue.replace("startTime=" + oldStartTime, "startTime=" + newStartTime);
    /*
    linkValue = linkValue.replace("providerNo=" + oldProviderNo, "providerNo=" + newProviderNo);
    linkValue = linkValue.replace("apptProvider_no=" + oldProviderNo, "apptProvider_no=" + newProviderNo);
    linkValue = linkValue.replace("provider_no=" + oldProviderNo, "provider_no=" + newProviderNo);
    */

    linkAttribute.nodeValue = linkValue;
  });
}

function addVerifiedMark(mark, node) {
  if (node && mark) {
    node.innerHTML = mark + node.innerHTML;
    return node;
  }

  return null;
}

function plusSignAppointments(demographic_no) {
  var appointments = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointments)(demographic_no);
  appointments.map(function (appt) {
    var apptLink = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointmentLink)(appt);
    addVerifiedMark(" + &nbsp;", apptLink);
  });
}

function plusSignFromCache() {
  var _cache = localStorage.getItem("checkCache");

  if (!_cache) return;
  var cache = JSON.parse(_cache);

  var _today = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD");

  for (var key in cache) {
    if (cache[key].verified === true) {
      var cachedDate = cache[key].date; // Check appointment if it exists in cache, but expired

      if (isDateExpired(dayjs__WEBPACK_IMPORTED_MODULE_6___default()(cachedDate), _today, 5)) {
        continue;
      }

      plusSignAppointments(key);
    }
  }
}
/**
 * Parse strings of the form ['key1:value1', 'key2:value2'] -> {key1: value1, key2: value2}
 * @param {} stringArray 
 * @returns 
 */


function stringArrayToObj(stringArray) {
  var obj = {};

  for (var i = 0; i < stringArray.length; i++) {
    var split = stringArray[i].split(":");

    if (!split[0] || !split[1]) {
      continue;
    }

    obj[split[0].trim()] = split[1].trim();
  }

  return obj;
}

function getPharmacyCodeFromReasonOrNotes(textContent) {
  var titleContents = textContent.split("\n");
  var apptFields = stringArrayToObj(titleContents); // assuming that the notes is always the last field in the textContent

  var textContentList = textContent.split("notes: ");
  var notesValue = textContentList[textContentList.length - 1];
  var notesValuesList = notesValue.match(/\[(.*?)\]/g);
  var pharmacyCode = notesValuesList && notesValuesList.length > 0 ? notesValuesList[0] : null; // Check RFV field if not existing in notes

  if (!pharmacyCode) {
    console.log("Checking RFV field");
    var reason = apptFields["reason"];
    var reasonValuesList = reason.match(/\[(.*?)\]/g); // we are assuming here that the pharmacy code is the 2nd

    pharmacyCode = reasonValuesList && reasonValuesList.length > 0 ? reasonValuesList[1] : null;
  }

  if (pharmacyCode) {
    pharmacyCode = pharmacyCode.replace(/[\[\]']+/g, "");
  }

  return pharmacyCode;
}

function setupPrescriptionButtons() {
  var providerSchedule = document.querySelector("#providerSchedule");
  providerSchedule.addEventListener("click", function (e) {
    if (e.target.matches('a[title="Prescriptions"]')) {
      var element = e.target;

      while (element.className != "apptLink") {
        element = element.previousElementSibling;
      }

      var apptTitle = element.attributes.title.textContent;
      var pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);
      localStorage.setItem("currentPharmacyCode", pharmacyCode);
    }
  }, false);
}

function sendPatientPrescriptionNotification() {
  var clinicName = localStorage["clinicname"];
  var url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/notify-prescription/");
  var formData = new FormData();
  formData.append("demographic_no", getDemographicFromLocation());
  formData.append("pharmacy", localStorage.getItem("preferredPharmacy"));
  var data = new URLSearchParams(formData);
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}

function setupFaxButton() {
  var prescriptionFrame = document.getElementById("AutoNumber1");
  prescriptionFrame.addEventListener("click", /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(e) {
      var result, text, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!e.target.matches("#faxBUtton, #faxAndPasteButton")) {
                _context4.next = 8;
                break;
              }

              _context4.next = 3;
              return sendPatientPrescriptionNotification();

            case 3:
              result = _context4.sent;
              _context4.next = 6;
              return result.text();

            case 6:
              text = _context4.sent;
              json = JSON.parse(text);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x5) {
      return _ref.apply(this, arguments);
    };
  }(), false);
}

function getPharmacyDetails(pharmacyCode) {
  var clinicName = localStorage["clinicname"];
  var url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/api/pharmacies/?code=").concat(pharmacyCode);
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

function formatNumber(number) {
  if (!number) return "";
  return "1".concat(number.match(/\d+/g).join(""));
}

function setupPreferredPharmacy(_x6, _x7) {
  return _setupPreferredPharmacy.apply(this, arguments);
}

function _setupPreferredPharmacy() {
  _setupPreferredPharmacy = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee13(code, demographic_no) {
    var pharmacyCode, corticoPharmacy, respText, corticoPharmacyText, faxNumber, searchTerm, demographicNo, currPharmacyResults, currPharmacyText, preferredPharmacy, currentlyUsingPharmacy, results, text, json, pharmacyUpdated, isRxPage, pharmacy, setPharmacyResults, setPharmacyText, msg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            pharmacyCode = localStorage.getItem("currentPharmacyCode");

            if (code) {
              pharmacyCode = code;
            }

            _context13.next = 4;
            return getPharmacyDetails(pharmacyCode);

          case 4:
            corticoPharmacy = _context13.sent;
            _context13.next = 7;
            return corticoPharmacy.text();

          case 7:
            respText = _context13.sent;
            corticoPharmacyText = JSON.parse(respText);
            faxNumber = corticoPharmacyText[0]["fax_number"] || null;
            searchTerm = corticoPharmacyText[0]["name"] || null; // only use the first word on the pharmacy name to search for list

            searchTerm = searchTerm ? searchTerm.split(" ")[0] : null; // cleanup fax number to format starting with 1
            // This might be an issue if the oscar pharmacies don't match this format

            if (faxNumber) faxNumber = formatNumber(faxNumber);
            demographicNo = demographic_no;

            if (!demographic_no) {
              demographicNo = getDemographicFromLocation();
            }

            _context13.next = 17;
            return getCurrentPharmacy(demographicNo);

          case 17:
            currPharmacyResults = _context13.sent;
            _context13.t0 = JSON;
            _context13.next = 21;
            return currPharmacyResults.text();

          case 21:
            _context13.t1 = _context13.sent;
            currPharmacyText = _context13.t0.parse.call(_context13.t0, _context13.t1);
            console.log("Current Pharmacy:", currPharmacyText);

            if (currPharmacyText) {
              preferredPharmacy = currPharmacyText[0];
              localStorage.setItem("preferredPharmacy", preferredPharmacy);
            }

            currentlyUsingPharmacy = preferredPharmacy && preferredPharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) && (preferredPharmacy.fax === faxNumber || faxNumber.includes(preferredPharmacy.fax));
            console.log("currently using pharmacy ".concat(searchTerm.toLowerCase(), ", ").concat(currentlyUsingPharmacy));

            if (!(searchTerm && !currentlyUsingPharmacy)) {
              _context13.next = 54;
              break;
            }

            _context13.next = 30;
            return getPharmacyResults(searchTerm);

          case 30:
            results = _context13.sent;
            _context13.next = 33;
            return results.text();

          case 33:
            text = _context13.sent;
            json = JSON.parse(text);
            pharmacyUpdated = json.length > 0;
            isRxPage = window.location.href.indexOf("oscarRx/choosePatient.do") > -1;

            if (!pharmacyUpdated) {
              _context13.next = 50;
              break;
            }

            pharmacy = null;

            if (json.length > 1) {
              pharmacy = json.find(function (item) {
                var item_name = item.name.toLowerCase();
                var cleaned_item_name = item_name.replace(/[^\w\s]/gi, '');
                return (item_name.includes(searchTerm.toLowerCase()) || cleaned_item_name.includes(searchTerm.toLowerCase())) && item.fax.length > 8 && ( // either if the fax is the same or the formatted fax has the values
                formatNumber(item.fax) === faxNumber || faxNumber.includes(item.fax));
              });
            }

            if (!pharmacy) {
              _context13.next = 48;
              break;
            }

            _context13.next = 43;
            return setPreferredPharmacy(pharmacy, demographicNo);

          case 43:
            setPharmacyResults = _context13.sent;
            _context13.next = 46;
            return setPharmacyResults.text();

          case 46:
            setPharmacyText = _context13.sent;
            if (isRxPage) alert("Updating preferred pharmacy, press Ok to reload");else console.log("Updating preferred pharmacy");

          case 48:
            _context13.next = 54;
            break;

          case 50:
            msg = "Customer pharmacy ".concat(searchTerm, " does not exist in your Oscar pharmacy database!");
            storePharmaciesFailureCache(demographicNo, msg);
            displayPharmaciesFailure(demographicNo, msg);
            if (isRxPage) alert(msg);else console.warn(msg);

          case 54:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _setupPreferredPharmacy.apply(this, arguments);
}

function displayPharmaciesFailure(demograhicNo, msg) {
  var sidebar_panel = document.querySelector(".cortico-sidebar");
  sidebar_panel.appendChild((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.htmlToElement)("<div>demo#" + demograhicNo + " : " + msg));
}

function storePharmaciesCache(demographicNo) {
  console.log("storing demographic in cache", demographicNo);

  var _cache = localStorage.getItem("pharmaciesCache");

  var cache = JSON.parse(_cache);
  var demographics = null;
  var date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD"); // this should be done when we access. not write.

  if (cache && cache["date"] === date) {
    if (cache["demographics"]) {
      demographics = cache["demographics"];
    }
  } // erase the cache when new day (next line)
  // make sure demographics is array before pushing


  if (!Array.isArray(demographics)) {
    demographics = [];
  }

  demographics.push(demographicNo);
  cache = {
    date: date,
    demographics: demographics
  };
  localStorage.setItem("pharmaciesCache", JSON.stringify(cache));
}

function storePharmaciesFailureCache(demographicNo, message) {
  var _cache = localStorage.getItem("pharmaciesCacheFailure");

  var cache = JSON.parse(_cache);
  var date = dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD");
  var failures = new Array();

  if (cache && cache["date"] === date) {
    localStorage["pharmaciesCacheFailure"] = null;
    cache = null;
  }

  if (cache && cache["failures"]) {
    failures = cache["failures"];
  }

  var data = {
    demographicNo: demographicNo,
    message: message
  };
  failures.push(data);
  cache = {
    date: date,
    failures: failures
  };
  localStorage.setItem("pharmaciesCacheFailure", JSON.stringify(cache));
}

function getDiagnosticFromCortico(_x8, _x9, _x10) {
  return _getDiagnosticFromCortico.apply(this, arguments);
}

function _getDiagnosticFromCortico() {
  _getDiagnosticFromCortico = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee14(appt_no, notes, token) {
    var clinicName, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            clinicName = localStorage["clinicname"];
            url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/api/encrypted/diagnostic-results/?appointment_id=").concat(appt_no, "&notes=").concat(notes);
            return _context14.abrupt("return", fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
              }
            }).then(function (res) {
              if ((res + '').includes('Unauthorized') || res.status == 401) {
                (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.showLoginForm)();
                return;
              }

              return res;
            }).catch(function (err) {
              if ((err + '').includes('Unauthorized')) {
                (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.showLoginForm)();
              } else {
                alert("Failed to fetch data. There might be a problem with Cortico or the patient responses do not exist");
              }
            }));

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getDiagnosticFromCortico.apply(this, arguments);
}

function getDemographicFromLocation() {
  var routeParams = new URLSearchParams(window.location.search);
  return routeParams.get("demographicNo");
}

function setupPreferredPharmacies() {
  return _setupPreferredPharmacies.apply(this, arguments);
}

function _setupPreferredPharmacies() {
  _setupPreferredPharmacies = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee15() {
    var appointments, error, i, temp, cancelled, element, demographicNo, apptUrl, _pharmaciesCache, pharmaciesCache, demographics, cachedDemographics, apptTitle, pharmacyCode;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            console.log("setting up batch pharmacies");
            window.setupPreferredPharmaciesRunning = true;
            clearFailureCache();
            appointments = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointments)();
            console.log(appointments);
            error = false;
            i = 0;

          case 7:
            if (!(i < appointments.length)) {
              _context15.next = 52;
              break;
            }

            temp = {};
            temp.total = appointments.length;
            temp.current = i;
            pubsub.publish("check-batch-pharmacies", temp);
            cancelled = appointments[i].querySelector("a.apptStatus[title='Cancelled ']");

            if (!cancelled) {
              _context15.next = 15;
              break;
            }

            return _context15.abrupt("continue", 49);

          case 15:
            element = appointments[i].querySelector("a.apptLink");

            if (!(!element || !element.attributes)) {
              _context15.next = 18;
              break;
            }

            return _context15.abrupt("continue", 49);

          case 18:
            demographicNo = null;
            _context15.prev = 19;
            apptUrl = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.extractApptUrl)(element.attributes.onclick.textContent);
            demographicNo = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)(apptUrl);
            _pharmaciesCache = localStorage.getItem("pharmaciesCache");
            pharmaciesCache = JSON.parse(_pharmaciesCache);
            demographics = new Array();
            console.log("Checking if demographic is cached...");

            if (pharmaciesCache && pharmaciesCache["demographics"]) {
              cachedDemographics = pharmaciesCache["demographics"];
              demographics = Array.isArray(cachedDemographics) ? cachedDemographics : JSON.parse(cachedDemographics);
            }

            if (!(demographics && Array.isArray(demographics) && demographics.includes(demographicNo) && pharmaciesCache.date == dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD"))) {
              _context15.next = 30;
              break;
            }

            console.log("Demographic ".concat(demographicNo, " is cached, skipping"));
            return _context15.abrupt("continue", 49);

          case 30:
            _context15.next = 32;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, 2000);
            });

          case 32:
            storePharmaciesCache(demographicNo);
            console.log("Checking if appt has pharmacy codes...");
            apptTitle = element.attributes.title.textContent;
            pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);

            if (pharmacyCode) {
              _context15.next = 39;
              break;
            }

            console.log("Pharmacy code not found from appt");
            return _context15.abrupt("continue", 49);

          case 39:
            _context15.next = 41;
            return setupPreferredPharmacy(pharmacyCode, demographicNo);

          case 41:
            _context15.next = 47;
            break;

          case 43:
            _context15.prev = 43;
            _context15.t0 = _context15["catch"](19);
            storePharmaciesFailureCache(demographicNo, _context15.t0.message);
            displayPharmaciesFailure(demographicNo, _context15.t0.message);

          case 47:
            _context15.prev = 47;
            return _context15.finish(47);

          case 49:
            i++;
            _context15.next = 7;
            break;

          case 52:
            window.setupPreferredPharmaciesRunning = false;
            pubsub.publish("check-batch-pharmacies", {
              complete: true,
              total: length,
              error: error
            });

          case 54:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[19, 43, 47, 49]]);
  }));
  return _setupPreferredPharmacies.apply(this, arguments);
}

function init_diagnostic_viewer_button() {
  return _init_diagnostic_viewer_button.apply(this, arguments);
}

function _init_diagnostic_viewer_button() {
  _init_diagnostic_viewer_button = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee18() {
    var notesField, notesValue, last_button, corticoDiagnosticViewBtn, update_diagnostic_button_visibility, open_diagnostic_viewer, _open_diagnostic_viewer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _open_diagnostic_viewer = function _open_diagnostic_view2() {
              _open_diagnostic_viewer = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee17(e) {
                var appt_no;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) {
                          _context17.next = 2;
                          break;
                        }

                        return _context17.abrupt("return");

                      case 2:
                        appt_no = getQueryStringValue("appointment_no");
                        _context17.next = 5;
                        return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token").then( /*#__PURE__*/function () {
                          var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee16(access_token) {
                            var diagnostic_response, diagnostic_text;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee16$(_context16) {
                              while (1) {
                                switch (_context16.prev = _context16.next) {
                                  case 0:
                                    _context16.next = 2;
                                    return getDiagnosticFromCortico(appt_no, notesValue, access_token);

                                  case 2:
                                    diagnostic_response = _context16.sent;

                                    if (!diagnostic_response) {
                                      _context16.next = 11;
                                      break;
                                    }

                                    _context16.t0 = String;
                                    _context16.next = 7;
                                    return diagnostic_response.text();

                                  case 7:
                                    _context16.t1 = _context16.sent;
                                    diagnostic_text = (0, _context16.t0)(_context16.t1);
                                    _context16.next = 11;
                                    return showDiagnosticResults(diagnostic_text);

                                  case 11:
                                  case "end":
                                    return _context16.stop();
                                }
                              }
                            }, _callee16);
                          }));

                          return function (_x19) {
                            return _ref4.apply(this, arguments);
                          };
                        }());

                      case 5:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));
              return _open_diagnostic_viewer.apply(this, arguments);
            };

            open_diagnostic_viewer = function _open_diagnostic_view(_x18) {
              return _open_diagnostic_viewer.apply(this, arguments);
            };

            update_diagnostic_button_visibility = function _update_diagnostic_bu() {
              notesValue = notesField.textContent;
              corticoDiagnosticViewBtn.style.display = notesValue.includes("-- Cortico data below, do not change!") ? "inline-block" : "none";
            };

            notesField = document.querySelector("textarea[name='notes']");
            notesValue = notesField.textContent;
            last_button = document.querySelector("#cortico-video-appt-btn").parentNode;
            last_button.parentNode.appendChild((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.htmlToElement)("<a class='cortico-btn' id='diagnostic-viewer-btn'>Patient Responses</a>"));
            corticoDiagnosticViewBtn = document.getElementById("diagnostic-viewer-btn");
            update_diagnostic_button_visibility();
            corticoDiagnosticViewBtn.addEventListener("click", open_diagnostic_viewer);

          case 10:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _init_diagnostic_viewer_button.apply(this, arguments);
}

function init_recall_button() {
  return _init_recall_button.apply(this, arguments);
}

function _init_recall_button() {
  _init_recall_button = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee20() {
    var statusOption, statusValue, last_button, corticoRecallButton, update_recall_button_visibility, send_patient_recall_email, _send_patient_recall_email;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _send_patient_recall_email = function _send_patient_recall_2() {
              _send_patient_recall_email = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee19(e) {
                var patientInfo, patientEmail, formData, apptTime, apptDate, apptPatient, apptSchedule, cleanedSchedule, cleanedPatient, clinicName;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        e.preventDefault();
                        _context19.next = 3;
                        return getPatientInfo();

                      case 3:
                        patientInfo = _context19.sent;
                        patientEmail = patientInfo.email;
                        formData = new FormData(document.querySelector("form[name=EDITAPPT]"));
                        apptTime = formData.get("start_time");
                        apptDate = formData.get("appointment_date");
                        apptPatient = formData.get("keyword");

                        if (patientEmail) {
                          _context19.next = 12;
                          break;
                        }

                        alert("Patient has no email");
                        return _context19.abrupt("return");

                      case 12:
                        if (!(!apptTime || !apptDate)) {
                          _context19.next = 15;
                          break;
                        }

                        alert("Please provide date/time");
                        return _context19.abrupt("return");

                      case 15:
                        apptSchedule = apptDate + "T" + apptTime;
                        cleanedSchedule = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(apptSchedule).format("h:mmA on MMMM D");
                        cleanedPatient = apptPatient ? apptPatient : "Patient";
                        clinicName = localStorage["clinicname"] || 'Your Medical Clinic';
                        window.location.href = "mailto:".concat(patientEmail, "?subject=Your doctor wants to speak with you&") + "body=Dear ".concat(cleanedPatient, ",%0d%0aYour doctor needs to follow up with you regarding some documents or results.%0d%0a") + "We have tentatively booked you an appointment at ".concat(cleanedSchedule, ".%0d%0a%0d%0aPlease confirm with the following link:") + "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/get-patient-appointment-lookup-url/%0d%0a%0d%0a") + "Sincerely,%0d%0a".concat(clinicName.toUpperCase(), " STAFF");

                      case 20:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              }));
              return _send_patient_recall_email.apply(this, arguments);
            };

            send_patient_recall_email = function _send_patient_recall_(_x20) {
              return _send_patient_recall_email.apply(this, arguments);
            };

            update_recall_button_visibility = function _update_recall_button() {
              statusValue = statusOption.options[statusOption.selectedIndex].text;
              var recallStatus = localStorage["recall-status"] ? localStorage["recall-status"] : "todo";
              corticoRecallButton.style.display = statusValue.toLowerCase() === recallStatus.toLowerCase() ? "inline-block" : "none";
            };

            statusOption = document.querySelector("select[name='status']");
            statusValue = statusOption.options[statusOption.selectedIndex].text;
            last_button = document.querySelector("#cortico-video-appt-btn").parentNode;
            last_button.parentNode.appendChild((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.htmlToElement)("<button class='cortico-btn' type='button' id='recall-btn'>Recall email</button>"));
            corticoRecallButton = document.getElementById("recall-btn");
            update_recall_button_visibility();
            statusOption.addEventListener("change", update_recall_button_visibility);
            corticoRecallButton.addEventListener("click", send_patient_recall_email);

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));
  return _init_recall_button.apply(this, arguments);
}

function init_medium_option() {
  return _init_medium_option.apply(this, arguments);
}

function _init_medium_option() {
  _init_medium_option = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee21() {
    var statusOption, storedMedium;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            statusOption = document.querySelector("select[name='resources']");
            storedMedium = localStorage.getItem("medium-option");

            if (statusOption && storedMedium) {
              statusOption.value = storedMedium;
            }

          case 3:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _init_medium_option.apply(this, arguments);
}

function getPatientInfo(_x11) {
  return _getPatientInfo.apply(this, arguments);
}

function _getPatientInfo() {
  _getPatientInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee22(demographicNo) {
    var result, text, el, info, re, emails;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return getDemographicPageResponse(demographicNo);

          case 2:
            result = _context22.sent;
            _context22.next = 5;
            return result.text();

          case 5:
            text = _context22.sent;
            el = document.createElement("html");
            el.innerHTML = text;
            info = {};
            el.querySelectorAll("span.label").forEach(function (label) {
              info[label.innerText.replace(/[^\w\s]+/g, '').trim()] = label.nextElementSibling ? label.nextElementSibling.innerText.trim() : null;
            });
            re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
            emails = text.match(re);
            if (emails && emails.length) info.email = emails[0];
            return _context22.abrupt("return", info);

          case 14:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));
  return _getPatientInfo.apply(this, arguments);
}

function getDemographicPageResponse(demographic) {
  var origin = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)();
  var namespace = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)();
  var demographicNo = demographic || (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)(window.location.search) || (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)(window.opener.location.search);

  if (!demographicNo) {
    console.trace();
    console.error("Failed to load demographics.");
    return "";
  }

  var url = "".concat(origin, "/").concat(namespace, "/demographic/demographiccontrol.jsp?demographic_no=").concat(demographicNo, "&displaymode=edit&dboperation=search_detail");
  return fetch(url);
}

function emailPatientEForm(_x12, _x13, _x14) {
  return _emailPatientEForm.apply(this, arguments);
}

function _emailPatientEForm() {
  _emailPatientEForm = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee23(patientInfo, html, token) {
    var url, patientEmail, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)() + "/api/plug-in/email-form/";
            patientEmail = patientInfo.email || null;

            if (patientEmail) {
              _context23.next = 5;
              break;
            }

            alert("The patient has no email");
            return _context23.abrupt("return");

          case 5:
            data = {
              "clinic_host": (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)().replace(/http.?:\/\//, ''),
              "to": patientEmail,
              "pdf_html": html
            };
            return _context23.abrupt("return", fetch(url, {
              method: "POST",
              body: JSON.stringify(data),
              mode: 'cors',
              headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer ".concat(token)
              } // TODO: handle other cortico api errors the same way

            }).then(handleErrors).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data.success) {
                alert("Successfully emailed PDF to ".concat(patientEmail, "."));
              } else {
                alert("Sending email failed: ".concat(data.message));
              }
            }).catch(function (err) {
              console.error("Cortico: Error sending email: ", err);

              if ((err + '').includes("Unauthorized")) {
                alert("Your credentials have expired. Please login again");
                chrome.storage.local.set({
                  "jwt_expired": true
                });
                (0,_modules_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_9__.addLoginForm)(chrome);
                var loginForm = document.querySelector(".login-form");
                loginForm.classList.add("show");
              } else {
                alert("Something went wrong with Cortico.");
              }
            }));

          case 7:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));
  return _emailPatientEForm.apply(this, arguments);
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}
})();

/******/ })()
;
//# sourceMappingURL=cortico-min.js.map
=======
(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},98:function(t,e){var n="undefined"!=typeof self?self:this,r=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,a="ArrayBuffer"in t;if(a)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function m(t){var e=new FileReader,n=f(e);return e.readAsArrayBuffer(t),n}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&o&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=g(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var t,e,n,r=h(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,n=f(e=new FileReader),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=l(t),e=u(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},p.prototype.delete=function(t){delete this.map[l(t)]},p.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},p.prototype.set=function(t,e){this.map[l(t)]=u(e)},p.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),d(t)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var n,r,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=(n=e.method||this.method||"GET").toUpperCase(),b.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];x.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function k(t,n){return new Promise((function(r,i){var a=new v(t,n);if(a.signal&&a.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function s(){c.abort()}c.onload=function(){var t,e,n={status:c.status,statusText:c.statusText,headers:(t=c.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e)};n.url="responseURL"in c?c.responseURL:n.headers.get("X-Request-URL");var o="response"in c?c.response:c.responseText;r(new x(o,n))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},c.open(a.method,a.url,!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&o&&(c.responseType="blob"),a.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),a.signal&&(a.signal.addEventListener("abort",s),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",s)}),c.send(void 0===a._bodyInit?null:a._bodyInit)}))}k.polyfill=!0,t.fetch||(t.fetch=k,t.Headers=p,t.Request=v,t.Response=x),e.Headers=p,e.Request=v,e.Response=x,e.fetch=k,Object.defineProperty(e,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var o=r;(e=o.fetch).default=o.fetch,e.fetch=o.fetch,e.Headers=o.Headers,e.Request=o.Request,e.Response=o.Response,t.exports=e},820:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".tailwind {\n  /*! tailwindcss v2.2.6 | MIT License | https://tailwindcss.com\n*/\n}\n\n/**\nUse a better box model (opinionated).\n*/\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n.tailwind html {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\n.tailwind html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\nRemove the margin in all browsers.\n*/\n\n.tailwind body {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\n.tailwind body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n.tailwind hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n.tailwind abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n.tailwind b,\n.tailwind strong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n.tailwind code,\n.tailwind kbd,\n.tailwind samp,\n.tailwind pre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n.tailwind small {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n.tailwind sub,\n.tailwind sup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n.tailwind sub {\n\tbottom: -0.25em;\n}\n\n/*\nGrouping content\n================\n*/\n\n.tailwind sup {\n\ttop: -0.5em;\n}\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n.tailwind table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\n.tailwind button,\n.tailwind select { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\n.tailwind button,\n.tailwind [type='button'],\n.tailwind [type='reset'],\n.tailwind [type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n.tailwind ::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n.tailwind :-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n.tailwind :-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n.tailwind legend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n.tailwind progress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n.tailwind ::-webkit-inner-spin-button,\n.tailwind ::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n.tailwind [type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n.tailwind ::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n.tailwind ::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n.tailwind summary {\n\tdisplay: list-item;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n.tailwind blockquote,\n.tailwind dl,\n.tailwind dd,\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6,\n.tailwind hr,\n.tailwind figure,\n.tailwind p,\n.tailwind pre {\n  margin: 0;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n.tailwind button {\n  background-color: transparent;\n  background-image: none;\n}\n\n/*\nInteractive\n===========\n*/\n\n.tailwind fieldset {\n  margin: 0;\n  padding: 0;\n}\n\n/*\nForms\n=====\n*/\n\n.tailwind ol,\n.tailwind ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n.tailwind html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\n.tailwind body {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n.tailwind hr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\n.tailwind img {\n  border-style: solid;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n.tailwind textarea {\n  resize: vertical;\n}\n\n/*\nTabular data\n============\n*/\n\n.tailwind input::-moz-placeholder, .tailwind textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input:-ms-input-placeholder, .tailwind textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input::placeholder,\n.tailwind textarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n/*\nSections\n========\n*/\n\n.tailwind button,\n.tailwind [role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nDocument\n========\n*/\n\n.tailwind table {\n  border-collapse: collapse;\n}\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n.tailwind a {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n.tailwind pre,\n.tailwind code,\n.tailwind kbd,\n.tailwind samp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\n.tailwind img,\n.tailwind svg,\n.tailwind video,\n.tailwind canvas,\n.tailwind audio,\n.tailwind iframe,\n.tailwind embed,\n.tailwind object {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n.tailwind img,\n.tailwind video {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n.tailwind [hidden] {\n  display: none;\n}\n.tw-mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n.tw-my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n.tw-mt-10 {\n  margin-top: 2.5rem !important;\n}\n.tw-inline-block {\n  display: inline-block !important;\n}\n.tw-flex {\n  display: flex !important;\n}\n.tw-h-\\[800px\\] {\n  height: 800px !important;\n}\n.tw-h-full {\n  height: 100% !important;\n}\n.tw-w-full {\n  width: 100% !important;\n}\n.tw-w-\\[400px\\] {\n  width: 400px !important;\n}\n.tw-w-\\[70px\\] {\n  width: 70px !important;\n}\n.tw-w-2\\/3 {\n  width: 66.666667% !important;\n}\n.tw-w-\\[300px\\] {\n  width: 300px !important;\n}\n.tw-max-w-3xl {\n  max-width: 48rem !important;\n}\n.tw-justify-end {\n  justify-content: flex-end !important;\n}\n.tw-rounded-xl {\n  border-radius: 0.75rem !important;\n}\n.tw-rounded-l-md {\n  border-top-left-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important;\n}\n.tw-bg-cortico-blue {\n  background-color: rgba(75, 84, 246, 1) !important;\n}\n.tw-bg-white {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-blue-700 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-100 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity)) !important;\n}\n.tw-p-10 {\n  padding: 2.5rem !important;\n}\n.tw-p-4 {\n  padding: 1rem !important;\n}\n.tw-p-2 {\n  padding: 0.5rem !important;\n}\n.tw-px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n.tw-py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.tw-text-2xl {\n  font-size: 1.5rem !important;\n  line-height: 2rem !important;\n}\n.tw-text-xl {\n  font-size: 1.25rem !important;\n  line-height: 1.75rem !important;\n}\n.tw-font-bold {\n  font-weight: 700 !important;\n}\n.tw-text-white {\n  --tw-text-opacity: 1 !important;\n  color: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n.tw-text-cortico-blue {\n  color: rgba(75, 84, 246, 1) !important;\n}\n\n.sidebar-instructions {\n  text-align: center;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n}\n\n.sidebar-instructions-hidden {\n  display: none;\n}\n",""]);const i=o},802:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".ellip-dot-wrapper {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.ellip-dot-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.ellip-dot {\n  display: flex;\n  width: 2px;\n  height: 2px;\n  background-color: #d8ddff;\n  border-radius: 50%;\n  margin: 1px;\n  flex-direction: column;\n}\n",""]);const i=o},142:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".loader {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.inner-loader {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n  -webkit-animation: scale 1s infinite;\n          animation: scale 1s infinite;\n}\n\n@-webkit-keyframes scale {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(2);\n  }\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(2);\n  }\n}\n",""]);const i=o},55:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".cortico-modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  opacity: 0;\n  transition: opacity 1s;\n  z-index: 10002;\n}\n\n.cortico-modal-container.show {\n  display: flex;\n  opacity: 1;\n}\n\n.cortico-modal {\n  background-color: transparent;\n}\n",""]);const i=o},754:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"td.appt {\n  overflow: visible;\n}\n\n.color-primary {\n  color: #5b6ce2;\n}\n\n.appointment-menu {\n  background-color: #5b6ce2;\n  color: white;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #d8ddff;\n  display: none;\n  z-index: 1500;\n  font-size: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n    0 10px 10px -5px rgba(0, 0, 0, 0.15);\n}\n\n.appointment-menu-wrapper.rx-synced::after {\n  content: '';\n  position: absolute;\n  z-index: 10;\n  top: -10px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  opacity: 0.7;\n  /*background: green;*/\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Svg Vector Icons : http://www.onlinewebfonts.com/icon --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1000 1000' enable-background='new 0 0 1000 1000' xml:space='preserve'%3E%3Cmetadata%3E Svg Vector Icons : http://www.onlinewebfonts.com/icon %3C/metadata%3E%3Cg%3E%3Cg transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'%3E%3Cpath d='M990.8,1085.4v-3932.6h688.9h688.9v1464v1464h694.7h696.6L4682.3-1144c507.1-673.6,926.2-1236.3,930.1-1247.8c7.7-21-321.5-463.1-1552-2076.3L3823.1-4780h801.8h801.8l493.7,660.2c352.1,472.7,497.6,656.4,512.9,641.1c11.5-11.5,237.3-306.2,499.5-656.4l478.4-635.3l799.9-5.8c438.2-1.9,798,0,798,5.8c0,5.7-403.8,535.8-899.4,1176.9c-493.7,643-899.4,1176.9-899.4,1186.5c0,11.5,398,555,886,1211.3c488,654.5,893.7,1201.8,901.4,1215.2c11.5,17.2-143.5,23-748.3,23h-761.6L6952-665.6c-294.7-388.5-539.7-708.1-545.4-706.2c-13.4,0-1226.7,1582.6-1226.7,1597.9c0,7.6,76.5,32.5,170.3,55.5c746.3,189.5,1322.4,715.7,1552,1421.9c101.4,306.2,124.4,474.6,124.4,855.4c-1.9,384.7-34.5,591.3-143.5,903.3c-283.2,799.9-924.3,1320.4-1863.9,1511.8c-134,26.8-392.3,32.5-2089.8,38.3L990.8,5020V1085.4z M4770.4,3730.2c191.4-68.9,302.4-128.2,428.7-231.6c287.1-235.4,442.1-616.2,417.2-1016.2c-40.2-599-415.3-1023.8-1012.3-1146.3c-124.4-24.9-315.8-30.6-1192.2-30.6h-1043v1243.9v1245.8l1125.2-5.7l1123.3-5.7L4770.4,3730.2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.appointment-menu.show {\n  display: block;\n}\n\n.appointment-menu a {\n  color: white !important;\n  text-decoration: underline;\n}\n\n.appointment-menu a:hover {\n  color: #d8ddff !important;\n}\n\n.appointment-menu ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.appointment-menu ul li,\n.contactInfo > div {\n  margin: 1px 0;\n  color: white !important;\n}\n\n.appointment-menu-container {\n  position: absolute;\n  display: flex;\n  background-color: #5b6ce2;\n  padding: 1px 5px;\n  border: 1px solid #d8ddff;\n  top: -8px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  left: 7.5px;\n}\n\n.appointment-menu-wrapper {\n  display: inline-block;\n  position: relative;\n  top: -5px;\n  cursor: pointer;\n}\n\n.appointment-menu-header {\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 5px 10px;\n  display: flex;\n  align-items: top;\n  margin-bottom: 5px;\n}\n\n.appointment-menu-heading {\n  margin: 0;\n  padding: 0;\n  margin-left: 5px;\n  font-size: 14px;\n}\n\n.appointment-menu-hr {\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.appointment-menu-subheading {\n  color: #d8ddff;\n  font-size: 12px;\n}\n\n.appointment-menu-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 1.2rem;\n  padding: 0 5px;\n  color: white;\n}\n\n.appointment-checkbox-wrapper {\n  display: inline-block;\n  position: relative;\n  top: 1px;\n}\n\n.appointment-checkbox {\n  top: -8px;\n  left: -1px;\n  position: absolute;\n  padding: 1px 2.5px;\n  background-color: #5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 6px;\n}",""]);const i=o},517:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".dashboard-container {\n    min-height: 800px;\n    overflow: auto\n}\n",""]);const i=o},76:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"td.appt {\n    overflow: visible;\n  }\n  \n  .color-primary {\n    color: #5b6ce2;\n  }\n\n  .login-form {\n    background-color: #5b6ce2;\n    color: white;\n    position: fixed;\n    padding: 1.5rem;\n    border-radius: 0.5rem;\n    border: 1px solid #d8ddff;\n    display: none;\n    z-index: 1500;\n    font-size: 12px;\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3),\n      0 10px 10px -5px rgba(0, 0, 0, 0.15);\n    top: 20%; \n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n\n  .login-form input {\n      display: block;\n      border-radius: 5px;\n      font-size: 14px\n  }\n  \n  .login-form.show {\n    display: block;\n  }\n  \n  .login-form a {\n    color: white !important;\n    text-decoration: underline;\n  }\n  \n  .login-form a:hover {\n    color: #d8ddff !important;\n  }\n  \n  .login-form ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  .login-form ul li,\n  .contactInfo > div {\n    margin: 1px 0;\n    color: white !important;\n  }\n  \n  .login-form-container {\n    position: absolute;\n    display: flex;\n    background-color: #5b6ce2;\n    padding: 1px 5px;\n    border: 1px solid #d8ddff;\n    top: -8px;\n    border-radius: 50%;\n    box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  }\n  \n  .login-form-wrapper {\n    display: inline-block;\n    position: relative;\n    top: -5px;\n  }\n  \n  .login-form-header {\n    background-color: white;\n    border-radius: 0.5rem;\n    padding: 5px 10px;\n    display: flex;\n    align-items: top;\n    margin-bottom: 5px;\n  }\n  \n  .login-form-heading {\n    margin: 0;\n    padding: 0;\n    margin-left: 5px;\n    font-size: 16px;\n  }\n  \n  .login-form-hr {\n    margin: 0;\n    padding: 0;\n    margin: 5px 0;\n    border: 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  \n  .login-form-subheading {\n    color: #d8ddff;\n    font-size: 14px;\n  }\n  \n  .login-form-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.2rem;\n    padding: 0 5px;\n    color: white;\n  }\n  \n  .login-form-button {\n    position: absolute;\n    top: 1px;\n    left: 10px;\n  }",""]);const i=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",o="minute",i="hour",a="day",c="week",s="month",l="quarter",u="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,s),i=n-o<0,a=e.clone().add(r+(i?-1:1),s);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:u,w:c,d:a,D:d,h:i,m:o,s:r,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",v={};v[b]=m;var w=function(t){return t instanceof S},x=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var o=t.name;v[o]=t,r=o}return!n&&r&&(b=r),r||!n&&b},_=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},k=y;k.l=x,k.i=w,k.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return k},g.isValid=function(){return!(this.$d.toString()===p)},g.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return _(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<_(t)},g.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,l=!!k.u(e)||e,p=k.p(t),h=function(t,e){var r=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?r:r.endOf(a)},f=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(p){case u:return l?h(1,0):h(31,11);case s:return l?h(1,g):h(0,g+1);case c:var v=this.$locale().weekStart||0,w=(m<v?m+7:m)-v;return h(l?y-w:y+(6-w),g);case a:case d:return f(b+"Hours",0);case i:return f(b+"Minutes",1);case o:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var c,l=k.p(t),p="set"+(this.$u?"UTC":""),h=(c={},c[a]=p+"Date",c[d]=p+"Date",c[s]=p+"Month",c[u]=p+"FullYear",c[i]=p+"Hours",c[o]=p+"Minutes",c[r]=p+"Seconds",c[n]=p+"Milliseconds",c)[l],f=l===a?this.$D+(e-this.$W):e;if(l===s||l===u){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[k.p(t)]()},g.add=function(n,l){var d,p=this;n=Number(n);var h=k.p(l),f=function(t){var e=_(p);return k.w(e.date(e.date()+Math.round(t*n)),p)};if(h===s)return this.set(s,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===a)return f(1);if(h===c)return f(7);var m=(d={},d[o]=t,d[i]=e,d[r]=1e3,d)[h]||1,g=this.$d.getTime()+n*m;return k.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this;if(!this.isValid())return p;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),o=this.$locale(),i=this.$H,a=this.$m,c=this.$M,s=o.weekdays,l=o.months,u=function(t,r,o,i){return t&&(t[r]||t(e,n))||o[r].substr(0,i)},d=function(t){return k.s(i%12||12,t,"0")},h=o.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:k.s(c+1,2,"0"),MMM:u(o.monthsShort,c,l,3),MMMM:u(l,c),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:u(o.weekdaysMin,this.$W,s,2),ddd:u(o.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:k.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:k.s(a,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,p){var h,f=k.p(d),m=_(n),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,b=k.m(this,m);return b=(h={},h[u]=b/12,h[s]=b,h[l]=b/3,h[c]=(y-g)/6048e5,h[a]=(y-g)/864e5,h[i]=y/e,h[o]=y/t,h[r]=y/1e3,h)[f]||y,p?b:k.a(b)},g.daysInMonth=function(){return this.endOf(s).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return k.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),A=S.prototype;return _.prototype=A,[["$ms",n],["$s",r],["$m",o],["$H",i],["$W",a],["$M",s],["$y",u],["$D",d]].forEach((function(t){A[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,S,_),t.$i=!0),_},_.locale=x,_.isDayjs=w,_.unix=function(t){return _(1e3*t)},_.en=v[b],_.Ls=v,_.p={},_}()},232:()=>{"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}))},707:t=>{"use strict";function e(t){return Number.isInteger(t)&&t>=0}function n(t){this.name="ArgumentError",this.message=t}t.exports=function(t,r){if(r=r||{},"function"!=typeof t)throw new n("fetch must be a function");if("object"!=typeof r)throw new n("defaults must be an object");if(void 0!==r.retries&&!e(r.retries))throw new n("retries must be a positive integer");if(void 0!==r.retryDelay&&!e(r.retryDelay)&&"function"!=typeof r.retryDelay)throw new n("retryDelay must be a positive integer or a function returning a positive integer");if(void 0!==r.retryOn&&!Array.isArray(r.retryOn)&&"function"!=typeof r.retryOn)throw new n("retryOn property expects an array or function");return r=Object.assign({retries:3,retryDelay:1e3,retryOn:[]},r),function(o,i){var a=r.retries,c=r.retryDelay,s=r.retryOn;if(i&&void 0!==i.retries){if(!e(i.retries))throw new n("retries must be a positive integer");a=i.retries}if(i&&void 0!==i.retryDelay){if(!e(i.retryDelay)&&"function"!=typeof i.retryDelay)throw new n("retryDelay must be a positive integer or a function returning a positive integer");c=i.retryDelay}if(i&&i.retryOn){if(!Array.isArray(i.retryOn)&&"function"!=typeof i.retryOn)throw new n("retryOn property expects an array or function");s=i.retryOn}return new Promise((function(e,n){var r=function(r){t(o,i).then((function(t){if(Array.isArray(s)&&-1===s.indexOf(t.status))e(t);else if("function"==typeof s)try{return Promise.resolve(s(r,null,t)).then((function(n){n?l(r,null,t):e(t)})).catch(n)}catch(t){n(t)}else r<a?l(r,null,t):e(t)})).catch((function(t){if("function"==typeof s)try{Promise.resolve(s(r,t,null)).then((function(e){e?l(r,t,null):n(t)})).catch((function(t){n(t)}))}catch(t){n(t)}else r<a?l(r,t,null):n(t)}))};function l(t,e,n){var o="function"==typeof c?c(t,e,n):c;setTimeout((function(){r(++t)}),o)}r(0)}))}}},400:(t,e,n)=>{"use strict";n.r(e),n.d(e,{render:()=>F,hydrate:()=>U,createElement:()=>g,h:()=>g,Fragment:()=>v,createRef:()=>b,isValidElement:()=>a,Component:()=>w,cloneElement:()=>H,createContext:()=>q,toChildArray:()=>E,options:()=>o});var r,o,i,a,c,s,l,u,d={},p=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(t,e){for(var n in e)t[n]=e[n];return t}function m(t){var e=t.parentNode;e&&e.removeChild(t)}function g(t,e,n){var o,i,a,c={};for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:c[a]=e[a];if(arguments.length>2&&(c.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(a in t.defaultProps)void 0===c[a]&&(c[a]=t.defaultProps[a]);return y(t,c,o,i,null)}function y(t,e,n,r,a){var c={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++i:a};return null!=o.vnode&&o.vnode(c),c}function b(){return{current:null}}function v(t){return t.children}function w(t,e){this.props=t,this.context=e}function x(t,e){if(null==e)return t.__?x(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?x(t):null}function _(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return _(t)}}function k(t){(!t.__d&&(t.__d=!0)&&c.push(t)&&!S.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||s)(S)}function S(){for(var t;S.__r=c.length;)t=c.sort((function(t,e){return t.__v.__b-e.__v.__b})),c=[],t.some((function(t){var e,n,r,o,i,a;t.__d&&(i=(o=(e=t).__v).__e,(a=e.__P)&&(n=[],(r=f({},o)).__v=o.__v+1,M(a,o,r,e.__n,void 0!==a.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?x(o):i,o.__h),I(n,o),o.__e!=i&&_(o)))}))}function A(t,e,n,r,o,i,a,c,s,l){var u,h,f,m,g,b,w,_=r&&r.__k||p,k=_.length;for(n.__k=[],u=0;u<e.length;u++)if(null!=(m=n.__k[u]=null==(m=e[u])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?y(null,m,null,null,m):Array.isArray(m)?y(v,{children:m},null,null,null):m.__b>0?y(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(f=_[u])||f&&m.key==f.key&&m.type===f.type)_[u]=void 0;else for(h=0;h<k;h++){if((f=_[h])&&m.key==f.key&&m.type===f.type){_[h]=void 0;break}f=null}M(t,m,f=f||d,o,i,a,c,s,l),g=m.__e,(h=m.ref)&&f.ref!=h&&(w||(w=[]),f.ref&&w.push(f.ref,null,m),w.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&null!=m.__k&&m.__k===f.__k?m.__d=s=C(m,s,t):s=L(t,m,f,_,g,s),l||"option"!==n.type?"function"==typeof n.type&&(n.__d=s):t.value=""):s&&f.__e==s&&s.parentNode!=t&&(s=x(f))}for(n.__e=b,u=k;u--;)null!=_[u]&&("function"==typeof n.type&&null!=_[u].__e&&_[u].__e==n.__d&&(n.__d=x(r,u+1)),j(_[u],_[u]));if(w)for(u=0;u<w.length;u++)R(w[u],w[++u],w[++u])}function C(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?C(o,e,n):L(n,o,o,t.__k,o.__e,e));return e}function E(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){E(t,e)})):e.push(t)),e}function L(t,e,n,r,o,i){var a,c,s;if(void 0!==e.__d)a=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),a=null;else{for(c=i,s=0;(c=c.nextSibling)&&s<r.length;s+=2)if(c==o)break t;t.insertBefore(o,i),a=i}return void 0!==a?a:o.nextSibling}function T(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||h.test(e)?n:n+"px"}function O(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||T(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||T(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?D:P,i):t.removeEventListener(e,i?D:P,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function P(t){this.l[t.type+!1](o.event?o.event(t):t)}function D(t){this.l[t.type+!0](o.event?o.event(t):t)}function M(t,e,n,r,i,a,c,s,l){var u,d,p,h,m,g,y,b,x,_,k,S=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(l=n.__h,s=e.__e=n.__e,e.__h=null,a=[s]),(u=o.__b)&&u(e);try{t:if("function"==typeof S){if(b=e.props,x=(u=S.contextType)&&r[u.__c],_=u?x?x.props.value:u.__:r,n.__c?y=(d=e.__c=n.__c).__=d.__E:("prototype"in S&&S.prototype.render?e.__c=d=new S(b,_):(e.__c=d=new w(b,_),d.constructor=S,d.render=B),x&&x.sub(d),d.props=b,d.state||(d.state={}),d.context=_,d.__n=r,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=f({},d.__s)),f(d.__s,S.getDerivedStateFromProps(b,d.__s))),h=d.props,m=d.state,p)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,_),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,_)||e.__v===n.__v){d.props=b,d.state=d.__s,e.__v!==n.__v&&(d.__d=!1),d.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),d.__h.length&&c.push(d);break t}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,_),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,m,g)}))}d.context=_,d.props=b,d.state=d.__s,(u=o.__r)&&u(e),d.__d=!1,d.__v=e,d.__P=t,u=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=f(f({},r),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,m)),k=null!=u&&u.type===v&&null==u.key?u.props.children:u,A(t,Array.isArray(k)?k:[k],e,n,r,i,a,c,s,l),d.base=e.__e,e.__h=null,d.__h.length&&c.push(d),y&&(d.__E=d.__=null),d.__e=!1}else null==a&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=N(n.__e,e,n,r,i,a,c,l);(u=o.diffed)&&u(e)}catch(t){e.__v=null,(l||null!=a)&&(e.__e=s,e.__h=!!l,a[a.indexOf(s)]=null),o.__e(t,e,n)}}function I(t,e){o.__c&&o.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){o.__e(t,e.__v)}}))}function N(t,e,n,o,i,a,c,s){var l,u,p,h=n.props,f=e.props,g=e.type,y=0;if("svg"===g&&(i=!0),null!=a)for(;y<a.length;y++)if((l=a[y])&&(l===t||(g?l.localName==g:3==l.nodeType))){t=l,a[y]=null;break}if(null==t){if(null===g)return document.createTextNode(f);t=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,f.is&&f),a=null,s=!1}if(null===g)h===f||s&&t.data===f||(t.data=f);else{if(a=a&&r.call(t.childNodes),u=(h=n.props||d).dangerouslySetInnerHTML,p=f.dangerouslySetInnerHTML,!s){if(null!=a)for(h={},y=0;y<t.attributes.length;y++)h[t.attributes[y].name]=t.attributes[y].value;(p||u)&&(p&&(u&&p.__html==u.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||O(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||O(t,i,e[i],n[i],r)}(t,f,h,i,s),p)e.__k=[];else if(y=e.props.children,A(t,Array.isArray(y)?y:[y],e,n,o,i&&"foreignObject"!==g,a,c,a?a[0]:n.__k&&x(n,0),s),null!=a)for(y=a.length;y--;)null!=a[y]&&m(a[y]);s||("value"in f&&void 0!==(y=f.value)&&(y!==t.value||"progress"===g&&!y)&&O(t,"value",y,h.value,!1),"checked"in f&&void 0!==(y=f.checked)&&y!==t.checked&&O(t,"checked",y,h.checked,!1))}return t}function R(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){o.__e(t,n)}}function j(t,e,n){var r,i;if(o.unmount&&o.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||R(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){o.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],e,"function"!=typeof t.type);n||null==t.__e||m(t.__e),t.__e=t.__d=void 0}function B(t,e,n){return this.constructor(t,n)}function F(t,e,n){var i,a,c;o.__&&o.__(t,e),a=(i="function"==typeof n)?null:n&&n.__k||e.__k,c=[],M(e,t=(!i&&n||e).__k=g(v,null,[t]),a||d,d,void 0!==e.ownerSVGElement,!i&&n?[n]:a?null:e.firstChild?r.call(e.childNodes):null,c,!i&&n?n:a?a.__e:e.firstChild,i),I(c,t)}function U(t,e){F(t,e,U)}function H(t,e,n){var o,i,a,c=f({},t.props);for(a in e)"key"==a?o=e[a]:"ref"==a?i=e[a]:c[a]=e[a];return arguments.length>2&&(c.children=arguments.length>3?r.call(arguments,2):n),y(t.type,c,o||t.key,i||t.ref,null)}function q(t,e){var n={__c:e="__cC"+u++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(k)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}r=p.slice,o={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},i=0,a=function(t){return null!=t&&void 0===t.constructor},w.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof t&&(t=t(f({},n),this.props)),t&&f(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),k(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),k(this))},w.prototype.render=v,c=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,S.__r=0,u=0},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=A(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?f:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",m={};function g(){}function y(){}function b(){}var v={};v[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==n&&r.call(x,i)&&(v=x);var _=b.prototype=g.prototype=Object.create(v);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=_.constructor=b,b.constructor=y,y.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),s(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(h)):e.push({identifier:d,updater:o(h,r),references:1}),a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),l=0;l<i.length;l++){var u=n(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}var i=n(757),a=n.n(i),c=n(484),s=n.n(c),l=n(379),u=n.n(l),d=n(795),p=n.n(d),h=n(569),f=n.n(h),m=n(565),g=n.n(m),y=n(216),b=n.n(y),v=n(589),w=n.n(v),x=n(76),_={};_.styleTagTransform=w(),_.setAttributes=g(),_.insert=f().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=b(),u()(x.Z,_),x.Z&&x.Z.locals&&x.Z.locals;var k=document.createElement("img");k.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC"),k.setAttribute("alt","Cortico");var S=function(t){var e=t.attrs,n=k.cloneNode();if(e)for(var r in e)n.setAttribute(r,e[r]);return n};function A(t){localStorage.getItem("currentUser"),document.body.appendChild(function(t){var e=S({attrs:{height:"15"}});return D("<div class='login-form-wrapper'>\n      <div class='login-form-container'>\n        <div class='login-form'>\n          <div class='login-form-close'>x</div>\n          <div class='login-form-header'>\n            ".concat(e.outerHTML,"\n            <h5 class='color-primary login-form-heading'>Cortico</h5>\n          </div>\n          <h5 class='color-primary login-form-subheading'>Cortico Login Form</h5>\n          <input type='text' placeholder='Username' id='loginUsername' />\n          <input type='password' placeholder='Password' id='loginPassword' />\n          <button type='button' id='loginButton'>Sign in</button>\n        </div>\n      </div>\n    </div>"),{events:{"click .login-form-close":function(t){document.querySelector(".login-form.show").classList.remove("show")},"click #loginButton":function(e){!function(t,e,n){C.apply(this,arguments)}(document.getElementById("loginUsername").value,document.getElementById("loginPassword").value,t)}}})}(t))}function C(){return(C=o(a().mark((function t(e,n,r){var o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e,n);case 2:if((o=t.sent).ok){t.next=5;break}return t.abrupt("return",alert("Login failed. Check username and password."));case 5:if(!o){t.next=22;break}return t.t0=JSON,t.next=9,o.text();case 9:if(t.t1=t.sent,i=t.t0.parse.call(t.t0,t.t1),!(r=r||chrome)){t.next=21;break}return r.storage.local.set({jwt_access_token:i.access}),r.storage.local.set({jwt_expired:!1}),r.storage.local.set({jwt_username:e}),document.querySelector(".login-form.show").classList.remove("show"),alert("Successfully signed in, the page will now reload"),window.location.reload(),t.abrupt("return");case 21:return t.abrupt("return");case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return L.apply(this,arguments)}function L(){return(L=o(a().mark((function t(e,n){var r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={username:e,password:n},o=P()+"/api/token/",t.abrupt("return",fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).catch((function(t){console.error(t),(""+t).includes("Failed to fetch")?alert("Cortico instance cannot be reached. Check clinic name."):alert("Cortico: Unknown Login Error: "+t)})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return window.location.origin}function O(){return window.location.pathname.split("/")[1]}function P(){var t=window.localStorage.clinicname;if("localhost"===t)return"http://localhost";var e=window.localStorage.customUrlSuffix||"cortico.ca";return"."===e.charAt(0)&&(e=e.substring(1)),t?"https://".concat(t,".").concat(e):null}function D(t,e){if(!t)return null;var n;if(n=t.trim().startsWith("<")?I(t):document.createElement(t),!e)return n;if(e.attrs)for(var r in e.attrs)n.setAttribute(r,e.attrs[r]);if(e.text&&(n.textContent=e.text),e.events)for(var o in e.events){console.log("*",o);var i=o.split(" "),a=i.shift(),c=i.join(" "),s=function(t,e,r){n.addEventListener(t,(function(t){var n=e?t.target.closest(e):t.target;n&&r({target:n,originalEvent:t})}))};s(a,c,e.events[o])}for(var l=arguments.length,u=new Array(l>2?l-2:0),d=2;d<l;d++)u[d-2]=arguments[d];return u.map((function(t){n.appendChild(t)})),n}function M(t){return new Promise((function(e,n){chrome.storage.local.get(t,(function(n){e(n[t])}))}))}function I(t){var e=document.createElement("div");return e.innerHTML=t,e.children.length?e.firstElementChild:void 0}function N(t){var e=new URLSearchParams(t);return e.get("demographic_no")||e.get("demographicNo")}function R(t,e){var n=e||!1,r=window.localStorage.getItem("checkCache"),o=s()().format("YYYY-MM-DD"),i=JSON.parse(r)||{};i[t]={date:o,verified:n},window.localStorage.setItem("checkCache",JSON.stringify(i))}function j(t,e){var n=t?"string"==typeof t?t:t.outerHTML:"";return e=e||{},D("<div style='width: 100%; padding: 0px 10px; box-sizing: border-box'>\n    ".concat(n,"\n  </div>"),e)}function B(t){return!!P()||(t.preventDefault(),alert("Please set the cortico URL to use this feature."),!1)}function F(){chrome.storage.local.set({jwt_expired:!0}),alert("Your credentials have expired. Please login again"),A(chrome),document.querySelector(".login-form").classList.add("show")}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],n=document.querySelectorAll("td.appt");return n.forEach((function(n){var r=q(H(n).attributes.onclick.textContent);if(t){var o=N(r);t===o&&e.push(n)}else e.push(n)})),e}function H(t){var e=t.querySelector("a.apptLink");return e||(e||t.querySelectorAll("a").forEach((function(t){var n=t&&t.attributes&&t.attributes.onclick&&t.attributes.onclick.nodeValue;n&&n.includes("popupPage")&&n.includes("appointmentcontrol.jsp")&&(e||(e=t))})),e)}function q(t){return t.match(/'([^']+)'/)[1].substring(2)}function Y(t){var e=[];return t.forEach((function(t){var n={},r=H(t),o=q(r.attributes.onclick.textContent),i=N(o);if(!r)return null;r.textContent.includes("+")&&R(i,!0);var a=function(t){return console.log(t),new URLSearchParams(t.split("?")[1]).get("appointment_no")}(o);n.demographic_no=i,n.appointment_no=a,n.info=r.attributes.title.nodeValue,e.push(n)})),e.filter((function(t,e,n){return n.findIndex((function(e){return e.demographic_no===t.demographic_no}))===e}))}var J=n(802),z={};z.styleTagTransform=w(),z.setAttributes=g(),z.insert=f().bind(null,"head"),z.domAPI=p(),z.insertStyleElement=b(),u()(J.Z,z),J.Z&&J.Z.locals&&J.Z.locals;var V=n(754),G={};function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t,e,n){return e&&W(t.prototype,e),n&&W(t,n),t}G.styleTagTransform=w(),G.setAttributes=g(),G.insert=f().bind(null,"head"),G.domAPI=p(),G.insertStyleElement=b(),u()(V.Z,G),V.Z&&V.Z.locals&&V.Z.locals;var Q=n(98),K=n(707)(Q),X=function(){function t(e){$(this,t),this.apptTD=null,this.url=null,this.page=null,this.container=null,this.apptTD=e,this.url=this.getMasterFileUrl(e)}var e;return Z(t,[{key:"getMasterFileUrl",value:function(t){if(!t)return null;var e=t.querySelector(".masterBtn");if(!e)return null;var n=e.attributes.onclick.textContent;if(!n)return null;var r=(n=n.split(","))[2];return r?r=r.substring(3).replace(/'/g,""):null}},{key:"fetchPage",value:(e=o(a().mark((function t(){var e,n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.url){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e=T()+"/"+O()+this.url,t.next=6,K(e,{retryDelay:3e3,retryOn:function(t,e,n){if(null!==e||n.status>=400)return 1!==t}});case 6:if(200===(n=t.sent).status){t.next=9;break}throw n;case 9:return t.next=11,n.text();case 11:return r=t.sent,(o=document.createElement("div")).innerHTML=r,this.page=o,t.abrupt("return",this.page);case 18:return t.prev=18,t.t0=t.catch(2),console.error("Fetch error",t.t0),t.abrupt("return",!1);case 22:case"end":return t.stop()}}),t,this,[[2,18]])}))),function(){return e.apply(this,arguments)})},{key:"getEmail",value:function(){if(!this.page)throw new Error("Masterfile Page does not exist");var t=this.page.querySelector('input[name="email"]');return t?t.value:null}},{key:"getPhoneNumbers",value:function(){if(!this.page)throw new Error("Masterfile Page does not exist");var t=this.page.querySelector('input[name="phone"]'),e=this.page.querySelector('input[name="phone2"]'),n=this.page.querySelector('input[name="demo_cell"]');return[{type:"home",phone:t&&t.value},{type:"work",phone:e&&e.value},{type:"cell",phone:n&&n.value}]}}]),t}(),tt=function(){function t(e){$(this,t),this.element=null,this.element=e}return Z(t,[{key:"getEncounterBtnUrl",value:function(){if(!this.element)return null;var t=this.element.querySelector(".encounterBtn");if(!t)return null;var e=t.attributes.onclick.textContent;if(!e)return null;var n=(e=e.split(","))[2];return n?n.substring(3).replace(/'/g,""):null}},{key:"getCurrentProvider",value:function(){var t=this.getEncounterBtnUrl();if(!t)return null;var e=new URLSearchParams(t),n=e.get("curProviderNo");return n&&"null"!==n||(n=e.get("apptProvider_no")),n}},{key:"getAppointmentNo",value:function(){var t=this.getEncounterBtnUrl();return t?new URLSearchParams(t).get("appointmentNo"):null}}]),t}(),et=n(142),nt={};function rt(){var t=D("div",{attrs:{class:"inner-loader"}}),e=D("div",{attrs:{class:"loader"}},t);return D("div",{attrs:{class:"loader-container"}},e)}function ot(t){return it.apply(this,arguments)}function it(){return(it=o(a().mark((function t(e){var n,r,o,i,c,s,l,u,d;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return n=new X(e),r=e.querySelector(".contactInfo"),o=D("div",{attrs:{style:"display: flex; width: 100%; justify-content: center; padding: 5px 0;"}},rt()),r.appendChild(o),t.prev=6,t.next=9,n.fetchPage();case 9:if(!1!==t.sent){t.next=12;break}throw"Could not fetch page";case 12:i=n.getEmail(),c=n.getPhoneNumbers(),s=c.find((function(t){return"home"===t.type})),l=c.find((function(t){return"work"===t.type})),u=c.find((function(t){return"cell"===t.type})),d="",i&&(d+='<div>☛ <a href="mailto:'.concat(i,'">').concat(i,"</a></div>")),s&&s.phone&&(d+='<div>☛ (Home) <a href="tel:'.concat(s.phone,'">').concat(s.phone,"</a></div>")),l&&l.phone&&(d+='<div>☛ (Work) <a href="tel:'.concat(l.phone,'">').concat(l.phone,"</a></div>")),u&&u.phone&&(d+='<div>☛ (Cell) <a href="tel:'.concat(u.phone,'">').concat(u.phone,"</a></div>")),r.innerHTML=d,t.next=29;break;case 25:t.prev=25,t.t0=t.catch(6),console.error(t.t0),r.innerHTML='<div style="white-space: initial;">Could not load contact information for this patient.</div>';case 29:case"end":return t.stop()}}),t,null,[[6,25]])})))).apply(this,arguments)}nt.styleTagTransform=w(),nt.setAttributes=g(),nt.insert=f().bind(null,"head"),nt.domAPI=p(),nt.insertStyleElement=b(),u()(et.Z,nt),et.Z&&et.Z.locals&&et.Z.locals;var at=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.hostname;if($(this,t),this.hostname=null,this.hostname=e,this.isJuno()){var n=document.getElementById("firstMenu");n&&(n.parentNode.parentNode.parentNode.zIndex=1)}}return Z(t,[{key:"isJuno",value:function(){var t=-1!==this.hostname.indexOf(".junoemr.com"),e=document.querySelectorAll("a#helpLink").length>0&&-1!==document.querySelectorAll("a#helpLink")[0].outerHTML.indexOf("help.junoemr.com");return t||e}},{key:"isOscarGoHost",value:function(){return-1!==this.hostname.indexOf(".oscargo.com")}},{key:"isKaiOscarHost",value:function(){return-1!==this.hostname.indexOf(".kai-oscar.com")}},{key:"containsKaiBar",value:function(){return 0!==document.querySelectorAll("div.KaiBar").length}},{key:"containsOscarGoOceanScript",value:function(){return 0!==document.querySelectorAll('script[src="/oscar/js/custom/ocean/global.js"]').length}},{key:"updateDoctorHeadings",value:function(){var t=this,e=document.querySelectorAll("tbody>tr:first-child>td.infirmaryView");window.scrollY>50?e.forEach((function(e){e.style.position="sticky",e.style.zIndex=1,e.style.marginLeft="unset",t.isJuno()&&(e.style.top="18px")})):e.forEach((function(t){t.style.position="static"}))}}]),t}(),ct=(n(232),n(820)),st={};st.styleTagTransform=w(),st.setAttributes=g(),st.insert=f().bind(null,"head"),st.domAPI=p(),st.insertStyleElement=b(),u()(ct.Z,st),ct.Z&&ct.Z.locals&&ct.Z.locals;var lt=n(55),ut={};ut.styleTagTransform=w(),ut.setAttributes=g(),ut.insert=f().bind(null,"head"),ut.domAPI=p(),ut.insertStyleElement=b(),u()(lt.Z,ut),lt.Z&&lt.Z.locals&&lt.Z.locals;var dt=function(){function t(){var e=this;$(this,t),this.modalContainer=null,this.modal=null;var n=document.querySelector(".cortico-modal-container"),r=document.querySelector(".cortico-modal");if(n&&r)return this.modalContainer=n,void(this.modal=r);this.modal=D("div",{attrs:{class:"cortico-modal"}}),this.modalContainer=D("div",{attrs:{class:"cortico-modal-container tailwind"}},this.modal),document.body.prepend(this.modalContainer),this.modalContainer.addEventListener("click",(function(t){t.target.isEqualNode(e.modalContainer)&&e.hide()})),window.pubsub&&window.pubsub.subscribe("modal.close",(function(){e.hide()}))}return Z(t,[{key:"setContent",value:function(t){t&&("string"==typeof t&&(this.modal.innerHTML=t),t instanceof Element&&this.modal.appendChild(t))}},{key:"hide",value:function(){this.modalContainer&&this.modalContainer.classList.remove("show")}},{key:"show",value:function(){this.modalContainer&&this.modalContainer.classList.add("show")}}]),t}(),pt=n(517),ht={};ht.styleTagTransform=w(),ht.setAttributes=g(),ht.insert=f().bind(null,"head"),ht.domAPI=p(),ht.insertStyleElement=b(),u()(pt.Z,ht),pt.Z&&pt.Z.locals&&pt.Z.locals;var ft=n(400);n(400).h,n(400).h;var mt=n(400).h;const gt=function(){var t=document.querySelector(".cortico-modal"),e=function(){window.pubsub&&window.pubsub.publish("modal.close")};return(0,ft.render)(mt((function(){return mt("div",{className:"tw-bg-cortico-blue tw-p-10 tw-mx-auto tw-rounded-xl tw-max-w-3xl tw-text-white"},mt("p",{className:"tw-text-2xl"},"By popular demand, Cortico has developed this free and Open Source plug-in for Oscar. Due to the nature of a browser plug-in, we're unable to guarantee it will work with every EMR update, and you use it at your own risk",mt("div",{className:"tw-my-2"},"(See Licence at"," ",mt("a",{href:"https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE"},"https://github.com/cortico-health/oscar-enhancement-suite/blob/main/LICENSE"),").")," ","It is a browser plug-in, so will be active for ALL EMRs you use, not just the ones for which you have a Cortico subscription. The plug-in is optional, and for convenience only. It's not required for Cortico itself to function."),mt("div",{className:"tw-flex tw-justify-end tw-mt-10"},mt("button",{onClick:e,className:"tw-bg-white tw-px-4 tw-py-2 tw-rounded-xl tw-text-cortico-blue tw-font-bold tw-text-2xl"},"I understand :)")))}),null),t)};var yt={},bt=function(){var t,e,n,r={};return e={},n=-1,(t=r).publish=function(t,n){if(!e[t])return!1;for(var r=e[t],o=r?r.length:0;o--;)r[o].func(t,n);return this},t.subscribe=function(t,r){e[t]||(e[t]=[]);var o=(++n).toString();return e[t].push({token:o,func:r}),o},t.unsubscribe=function(t){for(var n in e)if(e[n])for(var r=0,o=e[n].length;r<o;r++)if(e[n][r].token===t)return e[n].splice(r,1),t;return this},r}(),vt=new at(window.location.hostname),wt=["phone","clinic","virtual","","quiet"];function xt(){var t=document.getElementById("cortico-video-appt-btn"),e=document.querySelector('[name="resources"]');t.style.display="virtual"===e.value?"inline-block":"none"}function _t(t){var e='<select name="resources">',n=t?t.value:localStorage.getItem("medium-option");return wt.forEach((function(t){e+="<option "+(t==n?"selected ":"")+'value="'+t+'">'+(t||"n/a")+"</option>"})),e+="</select>"}function kt(t){for(var e=t.getElementsByTagName("script"),n=e.length;n--;)e[n].parentNode.removeChild(e[n])}function St(){return(St=o(a().mark((function t(){var e,n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(localStorage.clinicname,e=document.querySelector(".DoNotPrint td")||document.querySelector("#BottomButtons")||document.querySelector("#topbar > form")||document.body,console.log("email parent",e),e||document.querySelector("#save div:last-child"),e){t.next=8;break}return console.warn("Cannot find position for email button."),t.abrupt("return");case 8:return t.next=10,Ae();case 10:n=t.sent,(r=D("\n  <p style='margin-bottom:2em'>\n    <a id='cortico-email-patient' class='cortico-btn'>Email Patient</a>\n  </p>\n  ")).addEventListener("click",function(){var t=o(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(B(e)){t.next=2;break}return t.abrupt("return");case 2:return r.disabled=!0,t.next=5,M("jwt_access_token").then(function(){var t=o(a().mark((function t(e){var o,i,c,s,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=document.cloneNode(!0),i=o.querySelectorAll("img"),c=0;case 3:if(!(c<i.length)){t.next=15;break}return s=i[c],t.prev=5,t.delegateYield(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s.src).then((function(t){return t.blob()}));case 2:return e=t.sent,t.next=5,new Promise((function(t){var n=new FileReader;n.onload=function(){return t(n.result)},n.readAsDataURL(e)}));case 5:n=t.sent,s.src=n;case 7:case"end":return t.stop()}}),t)}))(),"t0",7);case 7:t.next=12;break;case 9:t.prev=9,t.t1=t.catch(5),console.warn("failed to convert image: ",s,t.t1);case 12:c++,t.next=3;break;case 15:return kt(o),t.next=18,Le(n,o.documentElement.outerHTML,e);case 18:(l=t.sent)&&(r.disabled=!1),console.log("RSP: ",l);case 21:case"end":return t.stop()}}),t,null,[[5,9]])})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.appendChild(r);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function At(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function Ct(t){if(!window[t]){var e=document.createElement("style");return e.type="text/css",document.head.appendChild(e),window[t]=e,e}return window[t]}function Et(){return Lt.apply(this,arguments)}function Lt(){return(Lt=o(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.corticoSidebar){t.next=2;break}return t.abrupt("return");case 2:return e=D('\n  <div class=\'cortico-sidebar\'>\n    <a href="https://cortico.ca"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC"  alt="Cortico" style="margin-bottom: 25px;" /></a>\n    <div class=\'cortico-sidebar-close\'>Close</div>\n  </div>\n  ',{events:{"click .cortico-sidebar-close":function(){e.classList.remove("cortico-sidebar-show"),"true"===window.localStorage.firstRun&&(Tt(),window.localStorage.firstRun=!1)}}}),window.corticoSidebar=e,t.t0=e,t.next=7,jt();case 7:return t.t1=t.sent,t.t0.appendChild.call(t.t0,t.t1),e.appendChild(Ft()),e.appendChild(Dt()),e.appendChild(Mt()),e.appendChild(Ut()),e.appendChild(It()),e.appendChild(Rt()),e.appendChild(Ht()),e.appendChild(qt()),e.appendChild(Nt()),Ct("cortico_sidebar").innerText="\n    .cortico-sidebar { position: fixed; top: 0; right: 0; bottom: 0; width: 300px; background-color: white; height: 100%; z-index: 10000; }\n    .cortico-sidebar { transition: transform 0.25s ease-in; transform: translateX(300px); }\n    .cortico-sidebar { display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 1px 5px 5px rgb(0, 0, 0); }\n    .cortico-sidebar-show { transform: translateX(0); }\n    .cortico-sidebar-close { cursor:pointer; position: absolute; top: 10px; right: 10px; z-index: 500; }\n  ",t.abrupt("return",e);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Tt(){var t=document.querySelector(".sidebar-instructions");t&&t.classList.add("sidebar-instructions-hidden")}function Ot(t){var e=document.createElement("div");if(yt.diagnosticResults)yt.diagnosticResults.style.display="block";else{yt.diagnosticResults=e,e.classList.add("cortico-diagnostic-viewer"),e.innerHTML=t;var n=D("<button class='cortico-diagnostic-close' style='cursor: pointer;'>Close</button>");n.addEventListener("click",(function(){e.style.display="none"})),e.appendChild(n)}Ct("cortico_sidebar").innerText="\n    .cortico-diagnostic-viewer { position: fixed; top: 20%; left: 50% ;width: 300px; background-color: white; transform: translate(-50%, 0) }\n    .cortico-diagnostic-viewer { padding: 20px; padding-top: 30px; border: 1px solid }\n    .cortico-diagnostic-viewer { overflow-y: scroll; max-height: 500px }\n    .cortico-diagnostic-close { position: absolute; top: 10px; right: 10px; z-index: 500; }\n  ",document.body.prepend(e)}function Pt(){return(Pt=o(a().mark((function t(e){var n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector("#firstMenu #navList")||document.querySelector("#firstMenu #navlist"),(r=document.createElement("li")).textContent="Cortico",r.style.color="rgb(75, 84, 246)",r.style.cursor="pointer",t.next=7,Et();case 7:o=t.sent,r.addEventListener("click",(function(){o.classList.toggle("cortico-sidebar-show"),"true"===window.localStorage.firstRun&&(Tt(),window.localStorage.firstRun=!1)})),r.addEventListener("click",(function(){if(!window.localStorage.disclaimer){var t=new dt;t.setContent(gt()),t.show(),window.localStorage.disclaimer=!0}})),r.addEventListener("click",(function(){void 0===window.localStorage.firstRun&&(window.localStorage.firstRun=!0)}),{once:!0}),document.body.prepend(o),n.appendChild(r);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Dt(){var t=document.createElement("div");t.style.width="100%",t.style.padding="0px 10px",t.style.boxSizing="border-box";var e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center";var n=document.createElement("input");n.setAttribute("id","recall-status"),n.setAttribute("type","text"),n.setAttribute("placeholder","Recall Status"),n.style.fontSize="16px",n.style.padding="5px 5px",n.style.margin="0px 10px",n.style.width="35%",e.appendChild(n),localStorage.getItem("recall-status")&&(n.value=localStorage.getItem("recall-status"));var r=document.createElement("label");r.setAttribute("for","recall-status"),r.textContent="Status to check for recall button",r.style.display="block",r.style.marginTop="30px",r.style.marginBottom="10px",r.style.textAlign="center";var o=D("<button class='cortico-btn inline'>Save</button>");return t.appendChild(r),t.appendChild(e),t.appendChild(o),o.addEventListener("click",(function(){n.value&&(localStorage.setItem("recall-status",n.value),alert("Your recall status has changed"))})),t}function Mt(){return D("<div style='100%; padding: 0px 10px; box-sizing: border-box'>\n    <label for='medium-option' \n    style='display: block; margin-top: 30px; margin-bottom: 10px; text-align: center;'>\n      Default appointment type for reminder\n    </label>\n\n    <div id='selectContainer' style='display: flex; align-items: center; justify-content: center'>\n      ".concat(_t(),"\n    </div>\n    \n    <button style='width: 100%; display: inline-block; margin: 10px auto' class='cortico-btn'>Save</button>\n  </div>"),{events:{"click .cortico-btn":function(t){var e=document.querySelector('select[name="resources"]'),n=e.options[e.selectedIndex].value;localStorage.setItem("medium-option",n),alert("Your default medium has changed")}}})}function It(){var t=document.createElement("div");return t.style.textAlign="center",bt.subscribe("check-eligibility",(function(e,n){var r="("+n.current+"/"+n.total+")";if(!0===n.complete)t.innerHTML="Check Complete!";else{var o="Currently Processing"+r+":",i=n.info.split("\n")[1];t.innerHTML="<p>"+o+"<br/>"+i+"</p>"}})),t}function Nt(){var t=document.createElement("div");return t.style.textAlign="center",bt.subscribe("check-batch-pharmacies",(function(e,n){var r="("+n.current+"/"+n.total+")";if(!0===n.complete)t.innerHTML="Setup Complete!";else{var o="Currently Processing"+r+":";t.innerHTML="<p>"+o+"<br/></p>"}})),t}function Rt(){var t=document.createElement("div");return t.style.textAlign="center",bt.subscribe("check-eligibility-failed",(function(e,n){t.innerHTML='<p style="margin-top: 10px;">Failed to Verify:</p>';var r=function(t){var e=JSON.parse(t),n="";"string"==typeof e&&(e=JSON.parse(e)),e&&e.map((function(t){n+="<li>Demographic No: ".concat(t.demographic_no,"</li>")}));var r=document.createElement("ul");return r.innerHTML=n,r}(n);t.appendChild(r)})),t}function jt(){return Bt.apply(this,arguments)}function Bt(){return(Bt=o(a().mark((function t(){var e,n,r,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=D("<div></div>"),P()){t.next=3;break}return t.abrupt("return",e);case 3:return n=D("<button class='cortico-btn'>Sign in at Cortico</button>"),r="",i="",c={"click .cortico-btn":function(t){B(t.originalEvent)&&"cortico-btn"==t.target.className&&document.querySelector(".login-form").classList.add("show")}},t.next=10,M("jwt_username").then((function(t){r="Logged in as ".concat(t)}));case 10:return t.next=12,M("jwt_expired").then((function(t){var e;!1===t&&(n=D("<button class='cortico-btn'>Log out</button>"),i="<p>".concat(r,"</p>"),c={"click .cortico-btn":(e=o(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"cortico-btn"==e.target.className&&(chrome.storage.local.remove(["jwt_access_token","jwt_expired"]),alert("Logged out from cortico, reloading..."),window.location.reload());case 1:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})})}));case 12:return e=D("<div class='login-form-button'>\n    ".concat(n.outerHTML,"\n    ").concat(i,"\n    </div>"),{events:c}),t.abrupt("return",e);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ft(){var t=j(),e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center";var n=document.createElement("span");n.textContent="https://";var r=document.createElement("input");r.classList.add("cortico-input"),r.classList.add("disabled"),r.textContent=".cortico.ca",r.setAttribute("type","text"),r.setAttribute("value",".cortico.ca"),r.setAttribute("placeholder",".cortico.ca"),r.setAttribute("readonly","true"),r.addEventListener("click",(function(t){r.classList.remove("disabled"),r.removeAttribute("readonly")})),localStorage.getItem("customUrlSuffix")&&(r.value=localStorage.getItem("customUrlSuffix"));var o=document.createElement("input");o.setAttribute("id","cortico-url"),o.setAttribute("type","text"),o.setAttribute("placeholder","Clinic Name"),o.classList.add("cortico-input"),e.appendChild(n),e.appendChild(o),e.appendChild(r),localStorage.getItem("clinicname")&&(o.value=localStorage.getItem("clinicname"));var i=document.createElement("label");i.setAttribute("for","cortico-url"),i.textContent="Your cortico clinic name",i.style.display="block",i.style.marginTop="30px",i.style.marginBottom="10px",i.style.textAlign="center";var a=D("<button class='cortico-btn inline'>Save</button>");if("false"!==window.localStorage.firstRun){var c=D("div",{attrs:{class:"sidebar-instructions"},text:"Welcome to the Cortico Oscar plugin! Please set your cortico clinic name"});t.appendChild(c)}return t.appendChild(i),t.appendChild(e),t.appendChild(a),a.addEventListener("click",(function(){r.value&&localStorage.setItem("customUrlSuffix",r.value),o.value&&(localStorage.setItem("clinicname",o.value),alert("Your clinic name has changed, the page will now reload"),window.location.reload())})),t}function Ut(){var t;return j(D("\n    <button class='cortico-btn inline'>Check Eligibility</button>"),{events:{"click .cortico-btn.inline":(t=o(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Check Eligibility Start"),t.next=3,Qt();case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})}})}function Ht(){return j(D("\n  <button class='cortico-btn inline'>\n    Set preferred pharmacies\n  </button>"),{events:{"click .cortico-btn.inline":function(t){B(t.originalEvent)&&(console.log("Batch Pharmacy Setup running...",t),function(){xe.apply(this,arguments)}())}}})}function qt(){var t;return D("<button class='cortico-btn warning bottom'>Reset Cache</button>",{events:{"click .cortico-btn.warning.bottom":(t=o(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Are you sure you want to clear your cache?")){t.next=8;break}return localStorage.clear(),t.next=4,chrome.storage.local.clear();case 4:alert("Successfully reset cache, the page will now reload."),window.location.reload(),t.next=9;break;case 8:console.log("Clear cache cancelled");case 9:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})}})}function Yt(t){t.target.matches("td.appt")?(window.dragSelectedTarget=t.target,t.dataTransfer.setDragImage(t.target,0,0)):t.preventDefault()}function Jt(){return!!window.dragSelectedTarget}function zt(t,e){return t.isSame(e,"day")}function Vt(t){var e=$t(),n=JSON.parse(e)||[];n&&n.push&&n.push(t),localStorage.setItem("failureCache",JSON.stringify(n))}function Gt(){return localStorage.removeItem("failureCache")}function $t(){return localStorage.getItem("failureCache")}function Wt(t){var e=localStorage.getItem("checkCache"),n=s()().format("YYYY-MM-DD");if(!e)return t;var r=JSON.parse(e);return t.filter((function(t){var e=t.demographic_no;if(!r.hasOwnProperty(e))return!0;var o=r[e].date;return!!Zt(s()(o),n,5)}))}function Zt(t,e,n){var r=t.diff(e,"day");return Math.abs(r)>n}function Qt(){return Kt.apply(this,arguments)}function Kt(){return(Kt=o(a().mark((function t(){var e,n,r,o,i,c,s,l,u,d,p,h,f,m,g,y,b,v;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==window.checkAllEligibilityRunning){t.next=2;break}return t.abrupt("return",alert("Check Already Running"));case 2:Gt(),e=document.querySelectorAll("td.appt"),n=Y(e),console.log(n),n=Wt(n),r=n.length,0===n.length&&alert("No Appointments to Check"),o=ie(e[0]),i=!1,window.checkAllEligibilityRunning=!0,t.prev=12,c=0;case 14:if(!(c<r)){t.next=64;break}if((s=Object.assign({},n[c])).total=r,s.current=c+1,bt.publish("check-eligibility",s),l=n[c].demographic_no,u=null,l&&0!=l){t.next=23;break}return t.abrupt("continue",61);case 23:return o||(o=ie(e[c])),t.next=26,Ae(l);case 26:return d=t.sent,p=d["Health Ins"].replace(/\s+/g," ").trim(),h=d.Province.replace(/\s+/g," ").trim(),t.prev=29,t.next=32,ne(l,T(),O(),o,p,h);case 32:u=t.sent,t.next=38;break;case 35:t.prev=35,t.t0=t.catch(29),console.error(t.t0);case 38:if(f=null,m=null,g=!1,!u||200!==u.status){t.next=49;break}return t.next=44,u.text();case 44:y=t.sent,m=y.toLowerCase(),vt.isOscarGoHost()&&(b=JSON.parse(m))&&b.ret&&(g=!0),t.next=51;break;case 49:f="Failed to fetch",m="Failed to fetch";case 51:if(!m.includes("error in teleplan connection")){t.next=55;break}return alert("Automatic Eligiblity Check Aborted. \n"+f),i=!0,t.abrupt("break",64);case 55:return v=!1,m.includes("this is not an insured benefit")?(v="uninsured",console.log("Patient not insured")):!m.includes("failure-phn")&&m.includes("success")||m.includes("health card passed validation")||m.includes("patient eligible")||g?(se(l),v=!0,console.log("Success!")):(n[c].reason=f,Vt(n[c]),bt.publish("check-eligibility-failed",$t())),R(l,v),console.log("Cached."),t.next=61,new Promise((function(t,e){setTimeout((function(){t()}),1500)}));case 61:c++,t.next=14;break;case 64:t.next=70;break;case 66:t.prev=66,t.t1=t.catch(12),console.log(t.t1),alert(t.t1);case 70:return t.prev=70,window.checkAllEligibilityRunning=!1,bt.publish("check-eligibility",{complete:!0,total:r,error:i}),t.finish(70);case 74:case"end":return t.stop()}}),t,null,[[12,66,70,74],[29,35]])})))).apply(this,arguments)}function Xt(t){var n="oscarRx/managePharmacy.do?method=search&search&term="+t.toLowerCase().replace(" ","+"),r=T()+"/"+O()+"/"+n;return fetch(r,{method:"GET",headers:e({Accept:"text/javascript, text/html, application/xml, text/xml, */*","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},"Content-Type","application/json")})}function te(t){var n="oscarRx/managePharmacy.do?method=getPharmacyFromDemographic&demographicNo="+t,r=T()+"/"+O()+"/"+n;return fetch(r,{method:"GET",headers:e({Accept:"text/javascript, text/html, application/xml, text/xml, */*","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},"Content-Type","application/json")})}function ee(t,e){var n=T()+"/"+O()+"/oscarRx/managePharmacy.do?method=setPreferred";t.name=t.name.replace(" ","+");var r=new FormData;r.append("pharmId",t.id),r.append("pharmacyId",t.id),r.append("demographicNo",e),r.append("pharmacyName",t.name),r.append("pharmacyAddress",t.address),r.append("pharmacyCity",t.city),r.append("pharmacyProvince",t.province),r.append("pharmacyPostalCode",t.postalCode),r.append("pharmacyPhone1",t.phone1),r.append("pharmacyPhone2",t.phone2),r.append("pharmacyFax",t.fax),r.append("pharmacyEmail",t.email),r.append("pharmacyServiceLocationId",t.serviceLocationIdentifier),r.append("pharmacyNotes",t.notes),r.append("preferredOrder","1");var o=new URLSearchParams(r);return fetch(n,{method:"POST",body:o,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Content-Type":"application/x-www-form-urlencoded"}})}function ne(e,n,r,o,i,a){var c,s,l="".concat(n,"/").concat(r,"/billing/CA/BC/ManageTeleplan.do?")+"demographic=".concat(e,"&method=checkElig");if(l+="&rand="+Math.round(1e6*Math.random()),vt.isOscarGoHost()&&"ON"===a){var u=(c=i.split(" "),s=2,function(t){if(Array.isArray(t))return t}(c)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(c,s)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(c,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],p=u[1];l="".concat(n,"/").concat(r,"/hcv/validate.do?")+"method=validateHin&hin=".concat(d,"&ver=").concat(p,"&sc=")}return vt.isKaiOscarHost()&&"ON"===a&&(l="".concat(n,"/CardSwipe/?hc=").concat(i)),(o||0===o)&&(l+="&provider="+o),fetch(l,{method:"POST",headers:{Accept:"text/javascript, text/html, application/xml, text/xml, */*","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}function re(t,e,n){return fetch(t+"/"+e+n)}function oe(t,e,n){return n.set("displaymode","Update Appt"),function(t,e,n){return fetch(t+"/"+e+"/appointment/appointmentcontrol.jsp",{method:"POST",body:n,headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8","Content-Type":"application/x-www-form-urlencoded"}})}(t,e,new URLSearchParams(n))}function ie(t){if(!t)return null;var e=t.querySelector(".encounterBtn");if(!e)return null;var n=e.attributes.onclick.textContent;if(!n)return null;var r=n.split(",")[2];if(!r)return null;var o=r.split("?")[1];return new URLSearchParams(o).get("providerNo")}function ae(t){var e=t.closest("table").closest("tbody").querySelector(".ds-btn");if(e)return e.dataset.provider_no;var n=t.closest("table").closest("tbody").querySelector('input[name="searchview"]');return n?n.attributes.onclick.nodeValue.match(/'([^']+)'/)[1]:null}function ce(t,e,n){t.querySelectorAll("a").forEach((function(t){var r=t.attributes.onclick||t.attributes.href,o=r.nodeValue,i=e.start_time,a=(e.provider_no,n.start_time);n.provider_no,o=(o=o.replace("start_time="+i,"start_time="+a)).replace("startTime="+i,"startTime="+a),r.nodeValue=o}))}function se(t){U(t).map((function(t){var e,n;e=" + &nbsp;",(n=H(t))&&(n.innerHTML=e+n.innerHTML)}))}function le(){var t=localStorage.getItem("checkCache");if(t){var e=JSON.parse(t),n=s()().format("YYYY-MM-DD");for(var r in e)if(!0===e[r].verified){var o=e[r].date;if(Zt(s()(o),n,5))continue;se(r)}}}function ue(t){var e=function(t){for(var e={},n=0;n<t.length;n++){var r=t[n].split(":");r[0]&&r[1]&&(e[r[0].trim()]=r[1].trim())}return e}(t.split("\n")),n=t.split("notes: "),r=n[n.length-1].match(/\[(.*?)\]/g),o=r&&r.length>0?r[0]:null;if(!o){console.log("Checking RFV field");var i=e.reason.match(/\[(.*?)\]/g);o=i&&i.length>0?i[1]:null}return o&&(o=o.replace(/[\[\]']+/g,"")),o}function de(t){localStorage.clinicname;var e="".concat(P(),"/api/pharmacies/?code=").concat(t);return fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}})}function pe(t){return t?"1".concat(t.match(/\d+/g).join("")):""}function he(t,e){return fe.apply(this,arguments)}function fe(){return(fe=o(a().mark((function t(e,n){var r,o,i,c,s,l,u,d,p,h,f,m,g,y,b,v,w,x,_;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("currentPharmacyCode"),e&&(r=e),t.next=4,de(r);case 4:return o=t.sent,t.next=7,o.text();case 7:return i=t.sent,c=JSON.parse(i),s=c[0].fax_number||null,l=(l=c[0].name||null)?l.split(" ")[0]:null,s&&(s=pe(s)),u=n,n||(u=we()),t.next=17,te(u);case 17:return d=t.sent,t.t0=JSON,t.next=21,d.text();case 21:if(t.t1=t.sent,p=t.t0.parse.call(t.t0,t.t1),console.log("Current Pharmacy:",p),p&&(h=p[0],localStorage.setItem("preferredPharmacy",h)),f=h&&h.name.toLowerCase().includes(l.toLowerCase())&&(h.fax===s||s.includes(h.fax)),console.log("currently using pharmacy ".concat(l.toLowerCase(),", ").concat(f)),!l||f){t.next=54;break}return t.next=30,Xt(l);case 30:return m=t.sent,t.next=33,m.text();case 33:if(g=t.sent,y=JSON.parse(g),b=y.length>0,v=window.location.href.indexOf("oscarRx/choosePatient.do")>-1,!b){t.next=50;break}if(w=null,y.length>1&&(w=y.find((function(t){var e=t.name.toLowerCase(),n=e.replace(/[^\w\s]/gi,"");return(e.includes(l.toLowerCase())||n.includes(l.toLowerCase()))&&t.fax.length>8&&(pe(t.fax)===s||s.includes(t.fax))}))),!w){t.next=48;break}return t.next=43,ee(w,u);case 43:return x=t.sent,t.next=46,x.text();case 46:t.sent,v?alert("Updating preferred pharmacy, press Ok to reload"):console.log("Updating preferred pharmacy");case 48:t.next=54;break;case 50:_="Customer pharmacy ".concat(l," does not exist in your Oscar pharmacy database!"),ye(u,_),me(u,_),v?alert(_):console.warn(_);case 54:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(t,e){document.querySelector(".cortico-sidebar").appendChild(I("<div>demo#"+t+" : "+e))}function ge(t){console.log("storing demographic in cache",t);var e=localStorage.getItem("pharmaciesCache"),n=JSON.parse(e),r=null,o=s()().format("YYYY-MM-DD");n&&n.date===o&&n.demographics&&(r=n.demographics),Array.isArray(r)||(r=[]),r.push(t),n={date:o,demographics:r},localStorage.setItem("pharmaciesCache",JSON.stringify(n))}function ye(t,e){var n=localStorage.getItem("pharmaciesCacheFailure"),r=JSON.parse(n),o=s()().format("YYYY-MM-DD"),i=new Array;r&&r.date===o&&(localStorage.pharmaciesCacheFailure=null,r=null),r&&r.failures&&(i=r.failures);var a={demographicNo:t,message:e};i.push(a),r={date:o,failures:i},localStorage.setItem("pharmaciesCacheFailure",JSON.stringify(r))}function be(t,e,n){return ve.apply(this,arguments)}function ve(){return(ve=o(a().mark((function t(e,n,r){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.clinicname,o="".concat(P(),"/api/encrypted/diagnostic-results/?appointment_id=").concat(e,"&notes=").concat(n),t.abrupt("return",fetch(o,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r}}).then((function(t){if(!(t+"").includes("Unauthorized")&&401!=t.status)return t;F()})).catch((function(t){(t+"").includes("Unauthorized")?F():alert("Failed to fetch data. There might be a problem with Cortico or the patient responses do not exist")})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function we(){return new URLSearchParams(window.location.search).get("demographicNo")}function xe(){return(xe=o(a().mark((function t(){var e,n,r,o,i,c,l,u,d,p,h,f,m;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("setting up batch pharmacies"),window.setupPreferredPharmaciesRunning=!0,Gt(),e=U(),console.log(e),n=!1,r=0;case 7:if(!(r<e.length)){t.next=52;break}if((o={}).total=e.length,o.current=r,bt.publish("check-batch-pharmacies",o),!e[r].querySelector("a.apptStatus[title='Cancelled ']")){t.next=15;break}return t.abrupt("continue",49);case 15:if((i=e[r].querySelector("a.apptLink"))&&i.attributes){t.next=18;break}return t.abrupt("continue",49);case 18:if(c=null,t.prev=19,l=q(i.attributes.onclick.textContent),c=N(l),u=localStorage.getItem("pharmaciesCache"),d=JSON.parse(u),p=new Array,console.log("Checking if demographic is cached..."),d&&d.demographics&&(h=d.demographics,p=Array.isArray(h)?h:JSON.parse(h)),!(p&&Array.isArray(p)&&p.includes(c)&&d.date==s()().format("YYYY-MM-DD"))){t.next=30;break}return console.log("Demographic ".concat(c," is cached, skipping")),t.abrupt("continue",49);case 30:return t.next=32,new Promise((function(t,e){setTimeout((function(){t()}),2e3)}));case 32:if(ge(c),console.log("Checking if appt has pharmacy codes..."),f=i.attributes.title.textContent,m=ue(f)){t.next=39;break}return console.log("Pharmacy code not found from appt"),t.abrupt("continue",49);case 39:return t.next=41,he(m,c);case 41:t.next=47;break;case 43:t.prev=43,t.t0=t.catch(19),ye(c,t.t0.message),me(c,t.t0.message);case 47:return t.prev=47,t.finish(47);case 49:r++,t.next=7;break;case 52:window.setupPreferredPharmaciesRunning=!1,bt.publish("check-batch-pharmacies",{complete:!0,total:length,error:n});case 54:case"end":return t.stop()}}),t,null,[[19,43,47,49]])})))).apply(this,arguments)}function _e(){return(_e=o(a().mark((function t(){var e,n,r,i,c,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=function(){return(s=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(B(e.originalEvent)){t.next=2;break}return t.abrupt("return");case 2:return r=At("appointment_no"),t.next=5,M("jwt_access_token").then(function(){var t=o(a().mark((function t(e){var o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be(r,n,e);case 2:if(!(o=t.sent)){t.next=11;break}return t.t0=String,t.next=7,o.text();case 7:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=11,Ot(i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)},c=function(t){return s.apply(this,arguments)},i=function(){n=e.textContent,r.style.display=n.includes("-- Cortico data below, do not change!")?"inline-block":"none"},e=document.querySelector("textarea[name='notes']"),n=e.textContent,document.querySelector("#cortico-video-appt-btn").parentNode.parentNode.appendChild(I("<a class='cortico-btn' id='diagnostic-viewer-btn'>Patient Responses</a>")),r=document.getElementById("diagnostic-viewer-btn"),i(),r.addEventListener("click",c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ke(){return(ke=o(a().mark((function t(){var e,n,r,i,c,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=function(){return(l=o(a().mark((function t(e){var n,r,o,i,c,l,u,d,p,h;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,Ae();case 3:if(n=t.sent,r=n.email,o=new FormData(document.querySelector("form[name=EDITAPPT]")),i=o.get("start_time"),c=o.get("appointment_date"),l=o.get("keyword"),r){t.next=12;break}return alert("Patient has no email"),t.abrupt("return");case 12:if(i&&c){t.next=15;break}return alert("Please provide date/time"),t.abrupt("return");case 15:u=c+"T"+i,d=s()(u).format("h:mmA on MMMM D"),p=l||"Patient",h=localStorage.clinicname||"Your Medical Clinic",window.location.href="mailto:".concat(r,"?subject=Your doctor wants to speak with you&")+"body=Dear ".concat(p,",%0d%0aYour doctor needs to follow up with you regarding some documents or results.%0d%0a")+"We have tentatively booked you an appointment at ".concat(d,".%0d%0a%0d%0aPlease confirm with the following link:")+"".concat(P(),"/get-patient-appointment-lookup-url/%0d%0a%0d%0a")+"Sincerely,%0d%0a".concat(h.toUpperCase()," STAFF");case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)},c=function(t){return l.apply(this,arguments)},i=function(){n=e.options[e.selectedIndex].text;var t=localStorage["recall-status"]?localStorage["recall-status"]:"todo";r.style.display=n.toLowerCase()===t.toLowerCase()?"inline-block":"none"},e=document.querySelector("select[name='status']"),n=e.options[e.selectedIndex].text,document.querySelector("#cortico-video-appt-btn").parentNode.parentNode.appendChild(I("<button class='cortico-btn' type='button' id='recall-btn'>Recall email</button>")),r=document.getElementById("recall-btn"),i(),e.addEventListener("change",i),r.addEventListener("click",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Se(){return(Se=o(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelector("select[name='resources']"),n=localStorage.getItem("medium-option"),e&&n&&(e.value=n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ae(t){return Ce.apply(this,arguments)}function Ce(){return(Ce=o(a().mark((function t(e){var n,r,o,i,c,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(e);case 2:return n=t.sent,t.next=5,n.text();case 5:return r=t.sent,(o=document.createElement("html")).innerHTML=r,i={},o.querySelectorAll("span.label").forEach((function(t){i[t.innerText.replace(/[^\w\s]+/g,"").trim()]=t.nextElementSibling?t.nextElementSibling.innerText.trim():null})),c=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,(s=r.match(c))&&s.length&&(i.email=s[0]),t.abrupt("return",i);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ee(t){var e=T(),n=O(),r=t||N(window.location.search)||N(window.opener.location.search);if(!r)return console.trace(),console.error("Failed to load demographics."),"";var o="".concat(e,"/").concat(n,"/demographic/demographiccontrol.jsp?demographic_no=").concat(r,"&displaymode=edit&dboperation=search_detail");return fetch(o)}function Le(t,e,n){return Te.apply(this,arguments)}function Te(){return(Te=o(a().mark((function t(e,n,r){var o,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=P()+"/api/plug-in/email-form/",i=e.email||null){t.next=5;break}return alert("The patient has no email"),t.abrupt("return");case 5:return i="clark@countable.ca",c={clinic_host:P().replace(/http.?:\/\//,""),to:i,pdf_html:n},t.abrupt("return",fetch(o,{method:"POST",body:JSON.stringify(c),mode:"cors",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(r)}}).then(Oe).then((function(t){return t.json()})).then((function(t){t.success?document.getElementById("cortico-email-patient").parentNode.appendChild(D("<p>".concat(i,' was sent a <a style=\'text-decoration:underline\' target="_blank" href="').concat(t.preview,'">document</a>.</p>'))):alert("Sending email failed: ".concat(t.message))})).catch((function(t){console.error("Cortico: Error sending email: ",t),(t+"").includes("Unauthorized")?(alert("Your credentials have expired. Please login again"),chrome.storage.local.set({jwt_expired:!0}),A(chrome),document.querySelector(".login-form").classList.add("show")):alert("Something went wrong with Cortico.")})));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Oe(t){if(!t.ok)throw 401===t.status?Error("Unauthorized"):Error(t.statusText);return t}document.getElementById("cortico_anchor")?console.warn("Cortico plug-in installed more than once. A"):function(){var t=document.createElement("div");t.id="cortico_anchor",document.body.appendChild(t);var e,n,r,i,c,l=""+window.location,u=Array.from(document.getElementsByTagName("script")).filter((function(t){return t.src.indexOf("/Oscar.js")>0||t.src.indexOf("/oscar/js/")>0||t.src.indexOf("/appointment.js")>0||t.src.indexOf(!1)}));if(u||(document.querySelectorAll("div.DoNotPrint>table"),function(t){throw new TypeError('"oscar_elements" is read-only')}()),0!==u.length){if(console.log("cortico plug-in initializing, version:",3.8),window.pubsub=bt,l.indexOf("/appointment/addappointment.jsp")>-1||l.indexOf("/appointment/appointmentcontrol.jsp")>-1){!function(){var t=document.querySelector('input[type="text"][name="resources"]'),e=t?t.parentNode:null,n=t?t.value:null;if(console.log("If test",wt.indexOf(),n),t&&wt.indexOf(n)>-1){e.innerHTML=_t(t);var r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id","resourceCheck");var o=document.createElement("label");o.setAttribute("for","resourceCheck"),o.textContent="Text field",e.appendChild(r),e.appendChild(o);var i=document.createElement("input");i.setAttribute("type","TEXT"),i.setAttribute("name","resources"),i.setAttribute("tabindex","5"),i.setAttribute("width","25"),r.addEventListener("input",(function(t){e.innerHTML="",!0===t.target.checked?e.appendChild(i):e.innerHTML=selectHtml,e.appendChild(r),e.appendChild(o)})),t=document.querySelector('[name="resources"]')}var a=document.querySelector("#printReceiptButton"),c=a?a.parentNode:null;c&&(c.parentNode.appendChild(D("<button class='cortico-btn' type='button' id='cortico-video-appt-btn'>\n          Video Call &phone;\n        </button>")),xt())}(),(window.location.href+"").includes("appointment_no")&&(function(){ke.apply(this,arguments)}(),function(){_e.apply(this,arguments)}()),l.indexOf("/appointment/addappointment.jsp")>-1&&function(){Se.apply(this,arguments)}();var d=document.querySelector('[name="resources"]');document.getElementById("cortico-video-appt-btn"),window.addEventListener("click",(function(t){if("cortico-video-appt-btn"===t.target.id){if(!B(t.originalEvent))return;!function(t){if(t.preventDefault(),!localStorage.clinicname){var e=prompt("what is your Cortico website URL?");e.indexOf(".cortico.ca")>-1&&(e=(e=e.substr(0,e.indexOf(".cortico.ca"))).replace(/https?:\/\//,"")),localStorage.clinicname=e}var n=At("appointment_no");if(!n)return alert("Please save your appointment first, before starting a video call.");window.open(P()+"/appointment/"+n)}(t)}})),d.addEventListener("change",xt)}else l.indexOf("/provider/providercontrol.jsp")>-1?(function(){if(vt.isOscarGoHost()||vt.isKaiOscarHost()||vt.containsKaiBar()||vt.containsOscarGoOceanScript())console.log("Oscar Go or KAI Oscar detected; disabling sticky headers for doctor names");else{var t=(e=vt.updateDoctorHeadings.bind(vt),function(){var t=this,o=arguments,i=function(){r=null,e.apply(t,o)},a=n;clearTimeout(r),r=setTimeout(i,50),a&&e.apply(t,o)});window.addEventListener("scroll",t)}var e,n,r;window.setTimeout(window.stop,1e4);var o=new Date;window.addEventListener("click",(function(t){o=new Date})),window.addEventListener("keydown",(function(t){o=new Date}));var i=setInterval((function(){(new Date).valueOf()-o.valueOf()>18e4&&(clearInterval(i),!0!==window.checkAllEligibilityRunning&&!0!==window.setupPreferredPharmaciesRunning&&window.location.reload())}),1e3)}(),vt.isJuno()||vt.isKaiOscarHost()||function(){function t(t){if(Jt()){t.preventDefault(),t.dataTransfer.dropEffect="link";var e=t.target,n=e.classList.contains("appt"),r=e.classList.contains("noGrid");(n||r)&&(e.style.backgroundColor="yellow",window.dragTarget=e)}}function e(t){Jt()&&dragTarget&&n(dragTarget)}function n(t){var e=t.classList.contains("appt"),n=t.classList.contains("noGrid");e?t.style.backgroundColor="#FDFEC7":n&&(t.style.backgroundColor="#486ebd")}function r(t){return i.apply(this,arguments)}function i(){return(i=o(a().mark((function t(e){var r,o,i,c,l,u,d,p,h,f,m,g,y,b,v,w,x,_,k;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Jt()){t.next=2;break}return t.abrupt("return");case 2:if(n(e.target),r=e.target.parentElement.firstElementChild.firstElementChild.textContent.trim(),o=H(dragSelectedTarget)){t.next=8;break}return alert("No Valid Appointment Link Found"),t.abrupt("return",!1);case 8:return i=o.attributes.onclick.textContent,c=q(i),l=T(),u=O(),t.next=14,re(l,u,c);case 14:return d=t.sent,t.next=17,d.text();case 17:if(p=t.sent,(h=document.createElement("div")).style.display="none",h.innerHTML=p,f=new FormData(h.querySelector("FORM")),m=f.get("start_time"),g=f.get("appointment_date"),y=f.get("duration")-1,b=s()(g+"T"+r).add(y,"minute").format("HH:mm"),v=s()(g+"T"+r),w=s()(g+"T"+r).add(y,"minute"),zt(v,w)){t.next=31;break}return alert("Cannot overlap to the next day"),t.abrupt("return");case 31:if(x=f.get("provider_no"),_=ae(e.target),k=x===_,f.set("start_time",r),f.set("end_time",b),!k){t.next=49;break}return t.next=40,oe(l,u,f);case 40:return d=t.sent,t.next=43,d.text();case 43:p=t.sent,e.target.parentElement.insertBefore(dragSelectedTarget,e.target),ce(dragSelectedTarget,{start_time:m,provider_no:x},{start_time:r,provider_no:_}),t.next=50;break;case 49:alert("Moving appointments to other providers is currently disabled.");case 50:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"loading"!==document.readyState?document.querySelectorAll("td.appt").forEach((function(t){t.setAttribute("draggable",!0),t.addEventListener("dragstart",Yt)})):window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("td.appt").forEach((function(t){t.setAttribute("draggable",!0),t.addEventListener("dragstart",Yt)}))})),document.querySelectorAll("td.noGrid").forEach((function(n){n.addEventListener("dragover",t),n.addEventListener("dragleave",e),n.addEventListener("drop",r)})),document.querySelectorAll("td.appt").forEach((function(n){n.addEventListener("dragover",t),n.addEventListener("dragleave",e),n.addEventListener("drop",r)}))}(),h=document.querySelector("#firstMenu #navList")||document.querySelector("#firstMenu #navlist"),f=D('\n    <li>\n      <a href="https://cortico.health"></a>\n    </li>\n  '),m=S({attrs:{height:"15",style:"position:relative; top: 2px;"}}),f.firstElementChild.appendChild(m),h.appendChild(f),function(t){Pt.apply(this,arguments)}(),n=U(),r=JSON.parse(localStorage.checkCache||"{}"),i=JSON.parse(localStorage.pharmaciesCache||'{"demographics":[]}'),c=Y(n),console.log(c),n.map((function(t){var e,n,s,l,u;t.appendChild((e=t,n=S({attrs:{height:"15"}}),s=function(t){if(!P())return'\n      <div style="white-space: initial;">\n        Cortico clinic has not been set. Please set the Cortico Clinic URL from the sidebar.\n      </div>\n    ';var e=new tt(t),n=e.getCurrentProvider(),r=e.getAppointmentNo();return'\n  <ul>\n    <li>\n      <a href="'.concat(P()?"".concat(P(),"/virtual-portal"):null,'" target="_blank">\n        ☛ Portal Page\n      </a>\n    </li><li>\n      <a href="').concat(function(t,e){return P()?"".concat(P(),"/provider/schedule/").concat(t,"/?appointment_id=").concat(e):null}(n,r),'" target="_blank">☛ Go To Appointment (Cortico)\n      </a>\n      </li>\n  </ul>\n  ')}(e),l=I('\n    <div class="ellip-dot-container">\n      <div class="ellip-dot"></div>\n      <div class="ellip-dot"></div>\n      <div class="ellip-dot"></div>\n    </div>\n  '),(u=D("\n  <div class='appointment-menu-wrapper'>\n    <div class='appointment-menu-container' style='background-color:#5b6ce2'>\n      <div class='appointment-menu'>\n        <div class='appointment-menu-close'>x</div>\n        <div class='appointment-menu-header'>\n          ".concat(n.outerHTML,"\n          <h5 class='color-primary appointment-menu-heading'>Cortico</h5>\n        </div>\n        <h5 class='color-primary appointment-menu-subheading'>Cortico Links</h5>\n        ").concat(s,"\n        <hr style='margin: 10px 0; border-color: rgba(255,255,255,0.3)'></hr>\n        <h5 class='appointment-menu-subheading'>Contact Information</h5>\n        <div class='contactInfo'></div>\n      </div>\n      ").concat(l.outerHTML,"\n    </div>\n  </div>\n  "),{events:{"click .appointment-menu-container":function(t){if("appointment-menu-close"!=t.target.className){var e=document.querySelector(".appointment-menu.show");e&&e.classList.remove("show"),u.querySelector(".appointment-menu").classList.toggle("show")}},"click .appointment-menu-close":function(t){document.querySelector(".appointment-menu.show").classList.remove("show")}}})).addEventListener("click",function(){var t=o(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ot(e);case 2:(r=u.querySelector(".appointment-menu")).getBoundingClientRect().left<0&&(r.style="left: 0; right: unset;");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{once:!0}),u)),function(t,e,n,r){var o=new tt(t).getAppointmentNo(),i=e.find((function(t){return t.appointment_no===o}))||{},a=n[i.demographic_no],c=r.demographics.includes(i.demographic_no),s="<small>&#10006;</small>",l="#555555",u=t.querySelector("a.apptStatus"),d=u?u.querySelector("img").title:"";if(null!=a){var p=a.verified;l=p||"uninsured"===p?"#00cc51":"#cc0063",s=p?"<small>&#10004;</small>":s,s="uninsured"===p?"<small>X</small>":s,"private"===d.toLowerCase()&&(s="<small>$</small>",l="#555555"),t.querySelector("a.masterbtn").append(D("\n    <div class='appointment-checkbox-wrapper'>\n      <div class='appointment-checkbox' style='background-color:".concat(l,"'>\n        ").concat(s,"\n      </div>\n    </div>\n    ")))}if(c){l="#00cc51",s="<small>&#10004;</small>";var h=t.querySelector("a[title='Prescriptions']");h.innerHTML=" Rx",h.append(D("\n      <div class='appointment-checkbox-wrapper'>\n        <div class='appointment-checkbox' style='background-color:".concat(l,"'>\n          ").concat(s,"\n        </div>\n      </div>\n      ")))}}(t,c,r,i)})),document.documentElement.addEventListener("click",(function(t){var e=t.target.closest(".appointment-menu-container"),n=t.target.closest(".ellip-dot-wrapper");if(!e&&!n){var r=document.querySelector(".appointment-menu.show");r&&r.classList.remove("show")}})),A(chrome),vt.isJuno()||vt.containsKaiBar()||le(),window.location.href.includes("mmfcc")&&le(),(p=document.querySelector("#providerSchedule"))&&p.addEventListener("click",(function(t){if(t.target.matches('a[title="Prescriptions"]')){for(var e=t.target;"apptLink"!=e.className;)e=e.previousElementSibling;var n=ue(e.attributes.title.textContent);localStorage.setItem("currentPharmacyCode",n)}}),!1)):l.indexOf("/eform/efmformadd_data.jsp")>-1||l.indexOf("/eform/efmshowform_data.jsp")>-1||l.indexOf("/casemgmt/forward.jsp")>-1?function(){St.apply(this,arguments)}():l.indexOf("/oscarRx/ViewScript2.jsp")>-1&&localStorage.getItem("currentPharmacyCode").toLowerCase().indexOf("dlvr")>-1&&(document.getElementById("additionalNotes").value="FOR DELIVERY",document.getElementById("preview").addEventListener("load",(function(){addNotes()})));var p,h,f,m;e=".cortico-btn {\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none;\n  margin: 0.5rem;\n  background:#5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius:.5rem;\n  color:#fff;\n  cursor:pointer;\n  display:inline-block;\n  font-family:Montserrat,sans-serif;\n  font-size:.8rem;\n  font-weight:600;\n  height:30px;\n  line-height:1.2rem;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  outline:0;\n  padding:0 1rem;\n  text-align:center;\n  text-decoration:none;\n  transition:background .2s,border .2s,box-shadow .2s,color .2s;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  vertical-align:middle;\n  white-space:nowrap;\n  }\n  .cortico-btn:focus {\n  box-shadow:0 0 0 .1rem rgba(92,112,255,.2)\n  }\n  .cortico-btn:focus,\n  .cortico-btn:hover {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-btn.active,\n  .cortico-btn:active {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-input {\n  font-size: 16px;\n  padding: 5px 5px;\n  margin: 0px 10px;\n  width: 35%;\n  background-color: transparent;\n  border: 1px solid rgb(75, 84, 246);\n  }\n  .cortico-input.disabled {\n  background-color: #DDD;\n  color: #999;\n  }\n  .cortico-btn.inline {\n  width: 100%;\n  display: inline-block;\n  margin: 10px auto;\n  }\n  .bottom {\n  position: absolute;\n  bottom: 1px;\n  left: 10px;\n  }\n  .warning {\n  background-color: #cc3300;\n  }\n  ",vt.isKaiOscarHost()||vt.containsKaiBar()||(e+="\n  .infirmaryView:first-child {\n  /*position:fixed;*/\n  margin-left: 57px;\n  padding: 1px 15px;\n\n  }"),function(t){var e,n;(e=document.getElementsByTagName("head")[0])&&((n=document.createElement("style")).type="text/css",n.innerHTML=t,e.appendChild(n))}(e)}else console.log("Cortico could not find any oscar script")}()})()})();
>>>>>>> Stashed changes
