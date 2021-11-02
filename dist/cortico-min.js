/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./modules/Api/Api.js":
/*!****************************!*\
  !*** ./modules/Api/Api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");

function sendMessage(data, token, opts) {
  var url = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_0__.getCorticoUrl)() + "/api/plug-in/email-form/";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer ".concat(token)
    }
  });
}

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
image.setAttribute("src", _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

/***/ "./modules/Icons/HeroIcons.js":
/*!************************************!*\
  !*** ./modules/Icons/HeroIcons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoIcon": () => (/* binding */ InfoIcon),
/* harmony export */   "SendIcon": () => (/* binding */ SendIcon),
/* harmony export */   "MessageIcon": () => (/* binding */ MessageIcon),
/* harmony export */   "MailIcon": () => (/* binding */ MailIcon),
/* harmony export */   "TextIcon": () => (/* binding */ TextIcon),
/* harmony export */   "PlusIcon": () => (/* binding */ PlusIcon),
/* harmony export */   "LeftArrowIcon": () => (/* binding */ LeftArrowIcon),
/* harmony export */   "TrashIcon": () => (/* binding */ TrashIcon),
/* harmony export */   "PaperClipIcon": () => (/* binding */ PaperClipIcon),
/* harmony export */   "CheckIcon": () => (/* binding */ CheckIcon),
/* harmony export */   "CloseIcon": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"],
    _excluded7 = ["className"],
    _excluded8 = ["className"],
    _excluded9 = ["className"],
    _excluded10 = ["className"],
    _excluded11 = ["className"];
function InfoIcon(_ref) {
  var className = _ref.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
function SendIcon(_ref2) {
  var className = _ref2.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _excluded2);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }));
}
function MessageIcon(_ref3) {
  var className = _ref3.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, _excluded3);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "tw-text-white tw-h-10 tw-w-10 tw-mx-auto",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
  }));
}
function MailIcon(_ref4) {
  var className = _ref4.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, _excluded4);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }));
}
function TextIcon(_ref5) {
  var className = _ref5.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, _excluded5);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  }));
}
function PlusIcon(_ref6) {
  var className = _ref6.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, _excluded6);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }));
}
function LeftArrowIcon(_ref7) {
  var className = _ref7.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, _excluded7);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
  }));
}
function TrashIcon(_ref8) {
  var className = _ref8.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, _excluded8);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}
function PaperClipIcon(_ref9) {
  var className = _ref9.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref9, _excluded9);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
  }));
}
function CheckIcon(_ref10) {
  var className = _ref10.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref10, _excluded10);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
function CloseIcon(_ref11) {
  var className = _ref11.className,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref11, _excluded11);

  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
}

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

/***/ "./modules/Login/Login.js":
/*!********************************!*\
  !*** ./modules/Login/Login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* harmony import */ var _LoginWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginWindow */ "./modules/Login/LoginWindow.js");
/* harmony import */ var _SuccessWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SuccessWindow */ "./modules/Login/SuccessWindow.js");
/* harmony import */ var _cortico_Login_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cortico/Login/Login */ "./modules/cortico/Login/Login.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];










function Login() {
  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      success = _useState4[0],
      setSuccess = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
      var username, password, response, json, browser;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              console.log("Login Called", data);
              _context.next = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 4:
              username = data.username, password = data.password;
              _context.prev = 5;
              _context.next = 8;
              return (0,_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_8__.signInRequest)(username, password);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              json = _context.sent;
              console.log("json", json);
              browser = browser ? browser : window.chrome;

              if (browser) {
                if (window.is_dev) {
                  window.localStorage.setItem("jwt_access_token", json.access);
                  window.localStorage.setItem("jwt_expired", false);
                  window.localStorage.setItem("jwt_username", username);
                } else {
                  browser.storage.local.set({
                    jwt_access_token: json.access
                  });
                  browser.storage.local.set({
                    jwt_expired: false
                  });
                  browser.storage.local.set({
                    jwt_username: username
                  });
                }
              }

              setLoading(false);
              setSuccess(true);
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](5);
              setLoading(false);
              setError(true);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 19]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return h("div", {
    className: "tw-bg-white tw-rounded-lg tw-p-4 tw-min-w-[300px] tw-font-sans"
  }, success !== true ? h(_LoginWindow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: handleSubmit,
    error: error,
    loading: loading
  }) : h(_SuccessWindow__WEBPACK_IMPORTED_MODULE_7__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./modules/Login/LoginOscar.js":
/*!*************************************!*\
  !*** ./modules/Login/LoginOscar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./modules/Login/Login.js");
/* harmony import */ var _Modal_PreactModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal/PreactModal */ "./modules/Modal/PreactModal.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


//Use when integrating outside of preact





function LoginOscar(container) {
  var _container = container || document.body;

  function Content(_ref) {
    var props = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

    var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
        _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        showModal = _useState2[0],
        setShowModal = _useState2[1];

    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
      pubsub.subscribe("signin", function () {
        setShowModal(true);
      });
    }, []);
    return h("div", {
      className: "tailwind tw-font-sans tw-fixed tw-z-10005 DoNotPrint"
    }, h(_Modal_PreactModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      show: showModal,
      close: function close() {
        setShowModal(false);
      }
    }, h(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_2__.render)(h(Content, null), _container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginOscar);

/***/ }),

/***/ "./modules/Login/LoginWindow.js":
/*!**************************************!*\
  !*** ./modules/Login/LoginWindow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


var _excluded = ["onSubmit", "error", "loading"];




function LoginWindow(_ref) {
  var onSubmit = _ref.onSubmit,
      error = _ref.error,
      loading = _ref.loading,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      warnName = _useState2[0],
      setWarnName = _useState2[1];

  var username = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var password = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      username: username && username.current.value,
      password: password && password.current.value
    };
    onSubmit(data);
  };

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var clinicname = window.localStorage.getItem("clinicname");

    if (!clinicname) {
      setWarnName(true);
    }
  }, []);
  return h("div", null, h("div", {
    className: "tw-flex tw-justify-center tw-items-center"
  }, h("img", {
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: "tw-w-10 tw-h-10"
  })), h("div", null, h("h2", {
    class: "tw-mt-6 tw-text-center tw-text-3xl tw-font-extrabold text-gray-900 tw-px-2"
  }, "Sign in to your account")), warnName === true ? h("div", {
    className: "tw-bg-yellow-500 tw-text-white tw-my-4 tw-p-2 tw-rounded-lg tw-text-xs"
  }, "Your clinic is not set. You won't be able to sign in until this is set.") : "", error === true ? h("div", {
    className: "tw-bg-red-400 tw-text-white tw-my-4 tw-p-2 tw-rounded-lg tw-text-xs"
  }, "Something went wrong. Please try again.") : "", h("form", {
    className: "tw-space-y-4 tw-mt-8",
    onSubmit: handleSubmit
  }, h("div", null, h("label", {
    for: "email",
    className: "tw-block tw-text-sm tw-font-medium tw-text-gray-700"
  }, "Username"), h("div", {
    className: "tw-mt-1"
  }, h("input", {
    ref: username,
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Username",
    required: true,
    autocomplete: true,
    class: "tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
  }))), h("div", null, h("label", {
    for: "password",
    className: "tw-block tw-text-sm tw-font-medium tw-text-gray-700"
  }, "Password"), h("div", {
    className: "tw-mt-1"
  }, h("input", {
    ref: password,
    id: "password",
    name: "password",
    type: "password",
    autocomplete: true,
    required: true,
    placeholder: "Enter your password",
    class: "tw-appearance-none tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-shadow-sm tw-placeholder-gray-400 tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-sm:text-sm"
  }))), h("div", null, h("button", {
    type: "submit",
    class: "tw-w-full tw-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-rounded-md tw-shadow-sm tw-text-sm tw-font-medium tw-text-white tw-bg-cortico-blue tw-hover:bg-indigo-700 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
  }, loading === true ? h("span", {
    className: "tw-flex tw-justify-center"
  }, h("svg", {
    class: "tw-animate-spin tw-h-5 tw-w-5 tw-text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, h("circle", {
    className: "tw-opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), h("path", {
    className: "tw-opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }))) : h("span", null, "Sign in")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginWindow);

/***/ }),

/***/ "./modules/Login/SuccessWindow.js":
/*!****************************************!*\
  !*** ./modules/Login/SuccessWindow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Icons_HeroIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/HeroIcons.js */ "./modules/Icons/HeroIcons.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];




function SuccessWindow() {
  var refresh = function refresh() {
    window.location.reload();
  };

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setTimeout(refresh, 5000);
  }, []);
  return h("div", {
    className: "tw-py-4"
  }, h("div", {
    className: "tw-flex tw-justify-center tw-flex-col tw-items-center"
  }, h(_Icons_HeroIcons_js__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {
    className: "tw-w-10 tw-h-10 tw-text-green-600"
  }), h("div", null, h("h2", {
    class: "tw-mt-4 tw-text-center tw-text-3xl tw-font-extrabold text-gray-900 tw-px-2"
  }, "Sucessfully logged in!")), h("div", null, h("p", {
    className: "tw-text-sm tw-text-gray-700 tw-text-center tw-mt-2"
  }, "Your browser will automatically refresh in 5 seconds..."), h("div", {
    className: "tw-flex tw-flex-col tw-items-center tw-justify-center"
  }, h("p", {
    className: "tw-text-sm tw-text-gray-700 tw-text-center tw-mt-2"
  }, "Not refreshing? Click the button below"), h("button", {
    onClick: refresh,
    className: "tw-bg-cortico-blue tw-mt-2 tw-py-2 tw-px-4 tw-text-white tw-rounded-md tw-text-sm"
  }, "Refresh")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessWindow);

/***/ }),

/***/ "./modules/Messenger/ChatInput.js":
/*!****************************************!*\
  !*** ./modules/Messenger/ChatInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["value"];



var Chat = (0,preact_compat__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var value = _ref.value,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (value) {
      ref.current.value = value;
    }
  }, [value]);
  return h("div", {
    className: ""
  }, h("textarea", {
    ref: ref,
    class: " tw-form-textarea form-textarea tw-block tw-w-full tw-border-0 tw-focus:border-indigo-300  tw-focus:ring  tw-focus:ring-indigo-200  tw-focus:ring-opacity-50  tw-resize-none tw-text-sm tw-text-gray-600 tw-p-4 tw-font-sans ",
    rows: "8",
    placeholder: "Enter message here"
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

/***/ }),

/***/ "./modules/Messenger/Documents.js":
/*!****************************************!*\
  !*** ./modules/Messenger/Documents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/HeroIcons */ "./modules/Icons/HeroIcons.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];



function Documents(_ref) {
  var name = _ref.name,
      onDelete = _ref.onDelete;
  return h("div", null, h("div", {
    className: "tw-flex tw-justify-between tw-items-center"
  }, h("div", {
    className: "tw-flex"
  }, h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_1__.PaperClipIcon, {
    className: "tw-text-gray-800 tw-w-6 tw-h-6"
  }), h("div", null, h("p", {
    className: "tw-ml-2 tw-text-sm tw-text-gray-600"
  }, name))), h("button", {
    onClick: onDelete,
    className: "tw-bg-red-600 tw-rounded-md tw-p-2"
  }, h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_1__.TrashIcon, {
    className: "tw-text-white tw-w-4 tw-h-4"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documents);

/***/ }),

/***/ "./modules/Messenger/Header.js":
/*!*************************************!*\
  !*** ./modules/Messenger/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["close"];



function Header(_ref) {
  var close = _ref.close,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return h("div", {
    className: "tw-flex tw-rounded-t-md tw-items-top tw-border tw-bg-cortico-blue tw-p-12 tw-shadow-xl"
  }, h("div", {
    className: "tw-flex-1",
    onClick: close
  }, h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "tw-h-6 tw-w-6 tw-text-white tw-cursor-pointer tw-shadow-xl",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }))), h("div", {
    className: "tw-flex-5"
  }, h("div", {
    className: "tw-text-white tw-font-light"
  }, "Messenger"), h("p", {
    className: "tw-text-sm tw-text-white tw-mt-2 tw-text-opacity-80 tw-leading-5"
  }, "Reach out to the patient with ease using this service."), h("div", {
    className: "tw-mt-3 tw-bg-white tw-inline-block tw-py-1 tw-px-2 tw-rounded-md tw-shadow-2xl"
  }, h("img", {
    className: "tw-w-3 tw-h-3 tw-inline-block",
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Cortico"
  }), h("p", {
    className: "tw-ml-1 tw-inline-block tw-text-xs tw-text-cortico-blue tw-font-medium"
  }, "Powered By Cortico"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./modules/Messenger/Loader.js":
/*!*************************************!*\
  !*** ./modules/Messenger/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


function Loader() {
  return h("svg", {
    className: "tw-animate-spin tw--ml-1 tw-mr-3 tw-h-5 tw-w-5 tw-text-white tw-inline-block",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, h("circle", {
    className: "tw-opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), h("path", {
    className: "tw-opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./modules/Messenger/Messenger.js":
/*!****************************************!*\
  !*** ./modules/Messenger/Messenger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _Notifications_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Notifications/Notification */ "./modules/Notifications/Notification.js");
/* harmony import */ var _MessengerWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessengerWidget */ "./modules/Messenger/MessengerWidget.js");
/* harmony import */ var _MessengerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MessengerWindow */ "./modules/Messenger/MessengerWindow.js");
/* harmony import */ var _Api_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Api/Api */ "./modules/Api/Api.js");
/* harmony import */ var _core_Encounter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/Encounter */ "./modules/core/Encounter.js");
/* harmony import */ var _Modal_PreactModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modal/PreactModal */ "./modules/Modal/PreactModal.js");
/* harmony import */ var _SavedReplies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SavedReplies */ "./modules/Messenger/SavedReplies.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Login/Login */ "./modules/Login/Login.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];



var _excluded = ["patient", "encounter"];













function MessageException(message) {
  this.message = message;
  this.name = "MessageException";
  this.title = "Error";
}

var handleErrors = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(response) {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return response.json();

          case 2:
            result = _context.sent;

            if (response.ok) {
              _context.next = 9;
              break;
            }

            if (!(response.status === 401)) {
              _context.next = 8;
              break;
            }

            throw new MessageException(result && result.detail);

          case 8:
            throw new MessageException(response && response.statusText);

          case 9:
            return _context.abrupt("return", result);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleErrors(_x) {
    return _ref.apply(this, arguments);
  };
}();

function Messenger(patient, opts, container) {
  var _container = container || document.body;

  function Content(_ref2) {
    var patient = _ref2.patient,
        encounter = _ref2.encounter,
        props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);

    var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];

    var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        open = _useState4[0],
        setOpen = _useState4[1];

    var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        showNotification = _useState6[0],
        setShowNotification = _useState6[1];

    var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        loggedIn = _useState8[0],
        setLoggedIn = _useState8[1];

    var _useState9 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)({
      title: null,
      content: null
    }),
        _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
        messageInfo = _useState10[0],
        setMessageInfo = _useState10[1];

    var _useState11 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
        showModal = _useState12[0],
        setShowModal = _useState12[1];

    var _useState13 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
        _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
        subject = _useState14[0],
        setSubject = _useState14[1];

    var _useState15 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
        _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
        body = _useState16[0],
        setBody = _useState16[1];

    var _useState17 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
        _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState17, 2),
        showLogin = _useState18[0],
        setShowLogin = _useState18[1];

    var handleOpen = function handleOpen() {
      setOpen(true);
    };

    var handleClose = function handleClose() {
      setOpen(false);
    };

    var promptLogin = function promptLogin() {
      setShowLogin(true);
    };

    var handleSubmit = /*#__PURE__*/function () {
      var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(data, opts) {
        var subject, body, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subject = data.subject, body = data.body;
                setLoading(true);
                _context2.next = 4;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 1000);
                });

              case 4:
                _context2.next = 6;
                return (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_6__.loadExtensionStorageValue)("jwt_access_token");

              case 6:
                token = _context2.sent;

                if (token) {
                  (0,_Api_Api__WEBPACK_IMPORTED_MODULE_10__.sendMessage)(data, token).then(handleErrors).then(function (response) {
                    setMessageInfo({
                      title: "Success",
                      content: response.message || "Message successfully sent to ".concat(patient === null || patient === void 0 ? void 0 : patient.email)
                    });

                    if (opts.encounter === true) {
                      var text = "\n\n[".concat(new Date().toLocaleString(), " .: Email sent to patient] \n").concat(subject, ": ").concat(body);
                      addEncounterText(text);
                    }
                  }).catch(function (error) {
                    setMessageInfo({
                      title: error.title,
                      content: error && error.message
                    });
                  }).finally(function () {
                    setShowNotification(true);
                    setLoading(false);
                    handleClose();
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleSubmit(_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
      (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_6__.isLoggedIn)();

              case 3:
                result = _context3.sent;
                console.log("is logged in result?", result);
                setLoggedIn(result);
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                setLoggedIn(false);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    }, []);

    var loadReply = function loadReply(data) {
      console.log("Load reply data", data);
      setSubject(data.subject);
      setBody(data.body);
      setShowModal(false);
    };

    var addEncounterText = function addEncounterText(text) {
      if (document.readyState === "complete") {
        _core_Encounter__WEBPACK_IMPORTED_MODULE_11__["default"].addToCaseNote(text);
      } else {
        window.addEventListener("load", function () {
          _core_Encounter__WEBPACK_IMPORTED_MODULE_11__["default"].addToCaseNote(text);
        }, {
          once: true
        });
      }
    };

    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
      if (localStorage.getItem("name")) {
        setSubject("".concat(localStorage.getItem("name"), " has sent you a message"));
      }
    }, []);
    return h("div", {
      className: "tailwind tw-font-sans tw-fixed tw-z-10005 DoNotPrint"
    }, h(_Modal_PreactModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: showModal,
      close: function close() {
        setShowModal(false);
      }
    }, h(_SavedReplies__WEBPACK_IMPORTED_MODULE_13__["default"], {
      loadReply: loadReply
    })), h(_Modal_PreactModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: showLogin,
      close: function close() {
        setShowLogin(false);
      }
    }, h(_Login_Login__WEBPACK_IMPORTED_MODULE_14__["default"], null)), h("div", {
      className: "tw-fixed tw-bottom-5 tw-right-5 tw-bg-white tw-z-10000 tw-max-w-[400px] tw-shadow-xl tw-w-full tw-rounded-md tw-transform tw-transition-transform tw-duration-200 tw-ease-in-out ".concat(open ? "tw-translate-x-0" : "tw-translate-x-[430px]")
    }, h(_MessengerWindow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      patient: patient,
      defaultSubject: subject,
      defaultBody: body,
      loading: loading,
      onSubmit: handleSubmit,
      close: handleClose,
      open: handleOpen,
      showSavedReplies: function showSavedReplies() {
        setShowModal(true);
      },
      encounter: encounter
    })), h("div", {
      className: "tw-fixed tw-bottom-5 tw-right-5 tw-z-5000 tw-shadow-xl"
    }, h(_MessengerWidget__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: handleOpen,
      login: promptLogin,
      loggedIn: loggedIn
    })), h(_Notifications_Notification__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: showNotification,
      close: function close() {
        setShowNotification(false);
      },
      delay: 3000,
      content: messageInfo.content,
      title: messageInfo.title
    }));
  }

  return (0,preact__WEBPACK_IMPORTED_MODULE_4__.render)(h(Content, {
    patient: patient,
    encounter: opts.encounter,
    document: opts.document
  }), _container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messenger);

/***/ }),

/***/ "./modules/Messenger/MessengerWidget.js":
/*!**********************************************!*\
  !*** ./modules/Messenger/MessengerWidget.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* harmony import */ var _Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/HeroIcons */ "./modules/Icons/HeroIcons.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["open", "login", "loggedIn"];




function MessengerWidget(_ref) {
  var open = _ref.open,
      login = _ref.login,
      loggedIn = _ref.loggedIn,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  var handleClick = function handleClick() {
    loggedIn === true ? open() : login();
  };

  return h("div", {
    className: "tw-bg-cortico-blue tw-rounded-lg tw-p-3 tw-w-24 tw-cursor-pointer tw-relative",
    onClick: handleClick
  }, h("div", {
    className: "tw-absolute tw--top-1 tw--left-1 text-white tw-bg-gray-100 tw-rounded-full tw-p-1 tw-shadow-md tw-animate-bounce tw-border-cortico-blue"
  }, loggedIn === false ? h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_3__.InfoIcon, {
    className: "tw-h-4 tw-w-4 tw-text-cortico-blue"
  }) : ""), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_3__.MessageIcon, {
    className: "tw-text-white tw-h-10 tw-w-10 tw-mx-auto"
  }), loggedIn === true ? h("p", {
    className: "tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2"
  }, "Email Patient") : h("p", {
    className: "tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2"
  }, "Login To Send Email"), h("hr", {
    className: "tw-opacity-20 tw-my-2"
  }), h("div", {
    className: "tw-flex tw-bg-white tw-p-1 tw-rounded-md tw-mt-2"
  }, h("img", {
    className: "tw-w-4 tw-h-4",
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Cortico"
  }), h("div", {
    className: "tw-text-cortico-blue tw-text-xs tw-font-semibold tw-ml-1"
  }, "Cortico")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerWidget);

/***/ }),

/***/ "./modules/Messenger/MessengerWindow.js":
/*!**********************************************!*\
  !*** ./modules/Messenger/MessengerWindow.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatInput */ "./modules/Messenger/ChatInput.js");
/* harmony import */ var _SubjectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectInput */ "./modules/Messenger/SubjectInput.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./modules/Messenger/Header.js");
/* harmony import */ var _ToInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToInput */ "./modules/Messenger/ToInput.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loader */ "./modules/Messenger/Loader.js");
/* harmony import */ var _Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Icons/HeroIcons */ "./modules/Icons/HeroIcons.js");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Utils/Utils */ "./modules/Utils/Utils.js");
/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Documents */ "./modules/Messenger/Documents.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


var _excluded = ["onSubmit", "open", "close", "patient", "loading", "showSavedReplies", "defaultSubject", "defaultBody", "encounter"];











var EncounterOption = (0,preact_compat__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function (props, ref) {
  return h("label", {
    class: "tw-inline-flex tw-items-center"
  }, h("input", {
    ref: ref,
    type: "checkbox",
    class: " tw-h-5 tw-w-5 tw-form-checkbox form-checkbox tw-rounded tw-text-indigo-600 tw-shadow-sm tw-focus:border-cortico-blue tw-focus:ring tw-focus:ring-offset-0 tw-focus:ring-indigo-200 tw-focus:ring-opacity-50 "
  }), h("span", {
    class: "tw-ml-2 tw-text-sm tw-text-gray-600"
  }, "Copy Message To Encounter"));
});

function MessengerWindow(_ref) {
  var onSubmit = _ref.onSubmit,
      open = _ref.open,
      close = _ref.close,
      patient = _ref.patient,
      loading = _ref.loading,
      showSavedReplies = _ref.showSavedReplies,
      defaultSubject = _ref.defaultSubject,
      defaultBody = _ref.defaultBody,
      encounterOption = _ref.encounter,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)("aaron@countable.ca"),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)("email"),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      scheme = _useState4[0],
      setScheme = _useState4[1];

  var subject = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var message = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var encounter = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      document = _useState6[0],
      setDocument = _useState6[1];

  var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: null,
    data: null
  }),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      documentData = _useState8[0],
      setDocumentData = _useState8[1];

  var _useState9 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      eForm = _useState10[0],
      setEForm = _useState10[1];

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (patient !== null && patient !== void 0 && patient.email) {
      setEmail(patient.email);
    }
  }, [patient === null || patient === void 0 ? void 0 : patient.email]);

  var handleReply = function handleReply(e) {
    e.preventDefault();
    showSavedReplies && showSavedReplies();
  };

  var submitData = function submitData(e) {
    e.preventDefault();
    var data = {
      clinic_host: (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_11__.getCorticoUrl)().replace(/http.?:\/\//, ""),
      to: email,
      subject: subject.current.value,
      body: message.current.value
    };

    if (document === true && eForm === false) {
      data.attachment = documentData.data;
    }

    if (document === true && eForm === true) {
      console.log("Document Data", documentData);
      data.pdf_html = documentData.html;
    }

    var opts = {
      encounter: encounter && encounter.current && encounter.current.checked,
      scheme: scheme
    };
    onSubmit(data, opts);
  };

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    pubsub.subscribe("document", function (evtName, data) {
      setDocument(true);
      setDocumentData(data);
    });
    pubsub.subscribe("eform", function (evtName, data) {
      setDocument(true);
      setEForm(true);
      setDocumentData(data);
    });
  }, []);
  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (document === true && eForm === false) {
      open && open();
    }
  }, [document]);

  var removeDocument = function removeDocument() {
    setDocument(false);
    setDocumentData({
      name: null,
      data: null
    });
  };

  return h("form", {
    onSubmit: submitData,
    className: "tw-m-0"
  }, h(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    close: close
  }), h("div", null, h("div", null, h("div", {
    className: "tw-px-4 tw-py-2"
  }, h(_ToInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    patient: patient
  })), h("hr", {
    className: "tw-opacity-10"
  }), h("div", {
    className: "tw-w-full"
  }, h(_SubjectInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: subject,
    value: defaultSubject
  })), h("hr", {
    className: "tw-opacity-10"
  }), h("div", {
    className: "tw-relative"
  }, h(_ChatInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: message,
    value: defaultBody
  }), h("button", {
    onClick: handleReply,
    className: "tw-bg-cortico-blue tw-rounded-full tw-p-2 tw-flex tw-items-center tw-justify-center tw-absolute tw-bottom-2 tw-right-2 tw-flex-col tw-drop-shadow-md"
  }, h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon, {
    className: "tw-h-5 tw-w-5 tw-text-white"
  }))), h("hr", {
    className: "tw-opacity-40"
  }), encounterOption === true ? h("div", {
    className: "tw-p-4"
  }, h(EncounterOption, {
    ref: encounter
  })) : "", document === true ? h("div", {
    className: "tw-p-4"
  }, h(_Documents__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onDelete: removeDocument,
    name: documentData.name
  })) : ""), h("div", {
    className: "tw-flex tw-justify-end tw-px-4 tw-py-3 tw-bg-gray-100"
  }, h("button", {
    disabled: true,
    className: "tw-bg-green-600 tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2 tw-disabled:opacity-50 tw-opacity-50",
    onClick: function onClick() {
      setScheme("text");
    }
  }, h("span", {
    className: "tw-flex tw-items-center"
  }, h("span", null, "Send Text"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_10__.TextIcon, {
    className: "tw-h-4 tw-w-4 tw-ml-2"
  }))), h("button", {
    disabled: loading,
    className: "tw-bg-cortico-blue tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center",
    onClick: function onClick() {
      setScheme("email");
    }
  }, loading === true ? h("span", {
    class: "tw-flex"
  }, h(_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], null), h("span", {
    className: "tw-ml-1"
  }, "Sending...")) : h("span", {
    className: "tw-flex tw-items-center"
  }, h("span", null, "Send Email"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_10__.MailIcon, {
    className: "tw-h-4 tw-w-4 tw-ml-2"
  }))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerWindow);

/***/ }),

/***/ "./modules/Messenger/SavedReplies.js":
/*!*******************************************!*\
  !*** ./modules/Messenger/SavedReplies.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* harmony import */ var _Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/HeroIcons */ "./modules/Icons/HeroIcons.js");
/* harmony import */ var _SubjectInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubjectInput */ "./modules/Messenger/SubjectInput.js");
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChatInput */ "./modules/Messenger/ChatInput.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];



var _excluded = ["add", "cancel"],
    _excluded2 = ["uuid", "subject", "body", "onClick", "onDelete", "onCancel"],
    _excluded3 = ["loadReply"];








function AddReply(_ref) {
  var add = _ref.add,
      cancel = _ref.cancel,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  var subject = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var chat = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  var handleAddReply = function handleAddReply(e) {
    var _subject = subject.current.value;
    var _chat = chat.current.value;
    add({
      subject: _subject,
      body: _chat
    });
  };

  return h("div", null, h("div", {
    className: "tw-p-4"
  }, h(_SubjectInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: subject
  }), h("hr", {
    className: "tw-bg-opacity-25"
  }), h(_ChatInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: chat
  })), h("div", {
    className: "tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg"
  }, h("div", {
    className: "tw-flex tw-justify-end"
  }, h("button", {
    onClick: cancel,
    className: "tw-px-4 tw-py-2 tw-rounded-lg tw-bg-gray-500 tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2"
  }, h("span", {
    className: "tw-mr-2"
  }, "Cancel"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.LeftArrowIcon, {
    className: "tw-h-4 tw-w-4 tw-text-white"
  })), h("button", {
    onClick: handleAddReply,
    className: "tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-sm tw-flex tw-items-center"
  }, h("span", {
    className: "tw-mr-2"
  }, "Save Response"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, {
    className: "tw-h-4 tw-w-4 tw-text-white"
  })))));
}

function Reply(_ref2) {
  var uuid = _ref2.uuid,
      subject = _ref2.subject,
      body = _ref2.body,
      _onClick = _ref2.onClick,
      onDelete = _ref2.onDelete,
      onCancel = _ref2.onCancel,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2);

  var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isDelete = _useState2[0],
      setIsDelete = _useState2[1];

  var handleDelete = function handleDelete() {
    setIsDelete(false);
    onDelete(uuid);
  };

  return h("div", {
    className: "tw-drop-shadow-lg"
  }, h("div", {
    onClick: function onClick() {
      _onClick({
        subject: subject,
        body: body
      });
    },
    className: " tw-bg-white tw-py-4 tw-cursor-pointer tw-rounded-t-lg tw-hover:bg-gray-200 tw-max-h-28 tw-font-sans tw-hover:bg-black tw-relative"
  }, h("div", {
    className: "tw-px-4 tw-mb-2 tw-text-opacity-100 tw-text-black tw-tracking-wider tw-text-sm"
  }, subject), h("div", {
    className: "tw-px-4 tw-text-xs tw-text-opacity-70 tw-text-black tw-line-clamp-3"
  }, body)), h("div", {
    className: "tw-bg-gray-200 tw-flex tw-items-center tw-justify-end tw-p-2 tw-rounded-b-lg"
  }, isDelete === false ? h("button", {
    onClick: function onClick() {
      setIsDelete(true);
    },
    className: "tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
  }, h("span", {
    className: "tw-mr-2 tw-text-xs tw-text-white"
  }, "Delete"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon, {
    className: "tw-text-white tw-h-4 tw-w-4"
  })) : h("div", {
    className: "tw-flex tw-justify-end"
  }, h("button", {
    onClick: function onClick() {
      setIsDelete(false);
    },
    className: "tw-bg-gray-400 tw-mr-2 tw-flex tw-items-center tw-rounded-md tw-p-2"
  }, h("span", {
    className: "tw-mr-2 tw-text-xs tw-text-white"
  }, "Cancel"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.LeftArrowIcon, {
    className: "tw-text-white tw-h-4 tw-w-4"
  })), h("button", {
    onClick: handleDelete,
    className: "tw-bg-red-500 tw-flex tw-items-center tw-rounded-md tw-p-2"
  }, h("span", {
    className: "tw-mr-2 tw-text-xs tw-text-white"
  }, "Yes I want to delete"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon, {
    className: "tw-text-white tw-h-4 tw-w-4"
  })))));
}

function SavedReplies(_ref3) {
  var loadReply = _ref3.loadReply,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, _excluded3);

  var _useState3 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      addReply = _useState4[0],
      setAddReply = _useState4[1];

  var _useState5 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      replies = _useState6[0],
      setReplies = _useState6[1];

  var _useState7 = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      insertCounter = _useState8[0],
      setInsertCounter = _useState8[1];

  var handleAdd = function handleAdd(data) {
    var reply = data;
    reply.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var savedReplies = localStorage.getItem("savedReplies");

    if (savedReplies) {
      var temp = JSON.parse(JSON.parse(savedReplies));
      temp.push(reply);
      localStorage.setItem("savedReplies", JSON.stringify(temp));
    } else {
      var _temp = [reply];
      localStorage.setItem("savedReplies", JSON.stringify(_temp));
    }

    setAddReply(false);
    setInsertCounter(insertCounter + 1);
  };

  var handleCancel = function handleCancel() {
    setAddReply(false);
  };

  var deleteReply = function deleteReply(uuid) {
    console.log("Delete Request UUID", uuid);
    var savedReplies = localStorage.getItem("savedReplies");

    if (savedReplies) {
      var temp = JSON.parse(JSON.parse(savedReplies));
      var reply = temp.find(function (r) {
        return r.uuid === uuid;
      });
      console.log("Found reply", reply);

      if (reply) {
        temp = temp.filter(function (r) {
          return r.uuid !== uuid;
        });
        localStorage.setItem("savedReplies", JSON.stringify(temp));
        setInsertCounter(insertCounter + 1);
      }
    }
  };

  var loadReplies = function loadReplies() {
    var savedReplies = localStorage.getItem("savedReplies");

    if (savedReplies) {
      var temp = JSON.parse(JSON.parse(savedReplies));
      setReplies(temp);
    } else {
      setReplies([]);
    }
  };

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (insertCounter === 0) {
      var savedReplies = localStorage.getItem("savedReplies");

      if (!savedReplies) {
        handleAdd({
          uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])(),
          subject: "TELEHEALTH - LAB REQ TO DO",
          body: "Hello,\n          Attached is a copy of your lab requisition form\n          Please print and take to the lab \n          OR e-mail it with your name in the subject line to\n          mailmyreqBC@lifelabs.com\n          Please confirm via email once received/completed.\n          Generally, patients are able to book a follow up online 2-3 days after getting their blood work done for a review unless indicated sooner via e-mail. \n          Thank you\n          Medical clinic/doctor name"
        });
      }
    }

    loadReplies();
  }, [insertCounter]);
  return h("div", {
    className: "tw-bg-white tw-rounded-lg tw-font-sans tw-w-full tw-shadow-lg tw-max-w-[400px]"
  }, h("div", {
    className: "tw-bg-cortico-blue tw-flex tw-rounded-t-lg tw-p-4 tw-items-center"
  }, h("div", {
    className: "tw-bg-white tw-rounded-full tw-p-2"
  }, h("img", {
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Cortico",
    className: "tw-w-5 tw-h-5"
  })), h("div", {
    className: "tw-ml-4"
  }, h("h2", {
    className: "tw-text-2xl tw-text-white tw-text-opacity-90 tw-tracking-wider"
  }, "Canned Responses"), h("p", {
    className: "tw-text-xs tw-text-white tw-text-opacity-80"
  }, "Save or load new responses to your message"))), h("div", {
    className: "tw-bg-gray-100 tw-overflow-y-auto  ".concat(addReply ? "tw-p-0" : "tw-p-4 tw-h-[300px]", " $")
  }, addReply === false ? h("div", null, h("div", {
    className: "tw-my-3"
  }, replies.length > 0 ? replies.map(function (reply, index) {
    return h("div", {
      className: "tw-my-3",
      key: index
    }, h(Reply, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      onClick: function onClick(data) {
        loadReply(data);
      },
      uuid: reply.uuid,
      onDelete: deleteReply
    }, reply)));
  }) : h("div", {
    className: "tw-font-sans tw-p-4 tw-text-2xl tw-text-center tw-tracking-widest tw-text-gray-700 tw-text-opacity-60"
  }, "No Canned Responses! Click New Response to get started"))) : h(AddReply, {
    add: handleAdd,
    cancel: handleCancel
  })), addReply === false ? h("div", {
    className: "tw-p-4 tw-bg-gray-200 tw-flex tw-justify-end tw-rounded-b-lg"
  }, h("div", null, h("div", null, h("button", {
    onClick: function onClick() {
      setAddReply(true);
    },
    className: "tw-px-4 tw-py-2 tw-rounded-lg tw-bg-cortico-blue tw-text-white tw-text-sm tw-flex tw-items-center"
  }, h("span", {
    className: "tw-mr-2"
  }, "New Response"), h(_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, {
    className: "tw-h-4 tw-w-4 tw-text-white"
  }))))) : "");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavedReplies);

/***/ }),

/***/ "./modules/Messenger/SubjectInput.js":
/*!*******************************************!*\
  !*** ./modules/Messenger/SubjectInput.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["value"];



var Subject = (0,preact_compat__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var value = _ref.value,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (value) {
      ref.current.value = value;
    }
  }, [value]);
  return h("div", {
    className: ""
  }, h("div", null, h("input", {
    ref: ref,
    type: "text",
    class: " tw-mt-0 tw-block tw-w-full tw-px-4 tw-py-2 tw-border-0 tw-border-btw-tracking-wider tw-focus:border-indigo-300  tw-focus:ring  tw-focus:ring-indigo-200  tw-focus:ring-opacity-50  tw-text-sm tw-text-gray-700 tw-font-sans ",
    placeholder: "Subject"
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subject);

/***/ }),

/***/ "./modules/Messenger/ToInput.js":
/*!**************************************!*\
  !*** ./modules/Messenger/ToInput.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["patient"];


function To(_ref) {
  var patient = _ref.patient,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return h("div", {
    className: "tw-flex tw-items-center"
  }, h("div", null, h("p", {
    className: "tw-text-xs"
  }, "To")), h("div", {
    className: "tw-pl-2"
  }, h("p", {
    className: "tw-text-xs tw-text-opacity-80 text-gray-700 tw-tracking-wider tw-rounded-xl tw-p-2 tw-break-words"
  }, [patient["First Name"], patient["Last Name"]].join(" "), "(", patient.email, ")")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (To);

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

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
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

/***/ "./modules/Modal/PreactModal.js":
/*!**************************************!*\
  !*** ./modules/Modal/PreactModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];

var _excluded = ["show", "close", "children"];



function PreactModal(_ref) {
  var show = _ref.show,
      close = _ref.close,
      children = _ref.children,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  var container = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  var handleClick = function handleClick(e) {
    var containerElem = container.current;

    if (containerElem && containerElem.isSameNode(e.target)) {
      close && close();
    }
  };

  return h(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, show === true ? h("div", {
    onClick: handleClick,
    ref: container,
    className: "tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-80 tw-flex tw-justify-center tw-items-center tw-z-10002 tw-p-2"
  }, h("div", null, children)) : "");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreactModal);

/***/ }),

/***/ "./modules/Notifications/Notification.js":
/*!***********************************************!*\
  !*** ./modules/Notifications/Notification.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/icons/96x96.png */ "./resources/icons/96x96.png");
/* harmony import */ var _modules_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/Icons/HeroIcons */ "./modules/Icons/HeroIcons.js");
/* provided dependency */ var h = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js")["h"];


var _excluded = ["open", "close", "title", "content", "position", "delay", "error"];






function Notification(_ref) {
  var open = _ref.open,
      close = _ref.close,
      title = _ref.title,
      content = _ref.content,
      position = _ref.position,
      delay = _ref.delay,
      error = _ref.error,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  (0,preact_hooks__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(open === true)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return new Promise(function (resolve) {
                return setTimeout(resolve, delay);
              });

            case 3:
              close && close();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [open]);
  return h("div", {
    className: "tw-fixed tw-bottom-0 tw-z-10001 tw-left-[50%] tw-translate-x-[-50%] tw-transition-transform tw-duration-300 tw-ease-in-out tw-flex tw-justify-center tw-w-full tw-p-2\n      ".concat(open ? "tw-translate-y-0" : "tw-translate-y-[100%]", "\n      ")
  }, h("div", {
    className: "tw-rounded-md tw-shadow-lg tw-mb-10 tw-inline-block tw-font-sans tw-min-w-[300px] tw-max-w-[400px] tw-border ".concat(error ? "tw-bg-white" : "tw-bg-white")
  }, h("div", {
    className: "tw-flex tw-p-4 tw-items-start"
  }, h("div", {
    className: "tw-bg-white tw-rounded-md tw-flex-shrink-0 tw-mt-[3px]"
  }, h("img", {
    className: "tw-h-4 tw-w-4",
    src: _resources_icons_96x96_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Cortico"
  })), h("div", {
    className: "tw-ml-3 tw-w-0 tw-flex-1"
  }, h("p", {
    className: "tw-text-gray-900 tw-font-medium tw-text-sm"
  }, title), h("p", {
    className: "tw-max-w-xl tw-text-sm tw-text-gray-500 tw-mt-1"
  }, content)), h("div", {
    className: "tw-cursor-pointer",
    onClick: close
  }, h("span", {
    className: "tw-sr-only"
  }, "Close"), h(_modules_Icons_HeroIcons__WEBPACK_IMPORTED_MODULE_6__.CloseIcon, {
    className: "tw-w-5 tw-h-5 tw-text-gray-500"
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

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
/* harmony export */   "showLoginForm": () => (/* binding */ showLoginForm),
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cortico_Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cortico/Login/Login */ "./modules/cortico/Login/Login.js");




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
  var clinicName = window.localStorage["clinicname"];

  if (clinicName === "localhost") {
    return "http://localhost"; // No HTTPS
  }

  var suffix = window.localStorage["customUrlSuffix"] || "cortico.ca";

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
      var chunks = event.split(" ");
      var trigger = chunks.shift();
      var selector = chunks.join(" "); // closure

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
    if (window.is_dev) {
      resolve(window.localStorage.getItem(key));
    } else {
      chrome.storage.local.get(key, function (result) {
        resolve(result[key]);
      });
    }
  });
}
function htmlToElement(html) {
  var placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  return placeholder.children.length ? placeholder.firstElementChild : undefined;
}
function getDemographicNo(apptUrl) {
  if (apptUrl) {
    var searchParams = new URLSearchParams(apptUrl);
    return searchParams.get("demographic_no") || searchParams.get("demographicNo") || searchParams.get("functionid");
  } else {
    // try several options
    var demographicNo = getDemographicNo(window.location.search);

    if (!demographicNo && window.opener) {
      demographicNo = getDemographicNo(window.opener.location.search);
    }

    return demographicNo;
  }
}
function getAppointmentNo(apptUrl) {
  console.log(apptUrl);
  var searchParams = new URLSearchParams(apptUrl.split("?")[1]);
  return searchParams.get("appointment_no");
}
function addToCache(demographic_no, _verified) {
  var verified = _verified || false;

  var _cache = window.localStorage.getItem("checkCache");

  var _today = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD");

  var cache = JSON.parse(_cache) || {};
  cache[demographic_no] = {
    date: _today,
    verified: verified
  };
  window.localStorage.setItem("checkCache", JSON.stringify(cache));
}
function createSidebarContainer(child, events) {
  var html = child ? typeof child === "string" ? child : child.outerHTML : "";
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
  if (window.is_dev) {
    window.localStoraage.setItem("jwt_expired", true);
  } else {
    chrome.storage.local.set({
      jwt_expired: true
    });
  }

  alert("Your credentials have expired. Please login again");
  (0,_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_3__.addLoginForm)(chrome);
  var loginForm = document.querySelector(".login-form");
  loginForm.classList.add("show");
}
function isLoggedIn() {
  return _isLoggedIn.apply(this, arguments);
}

function _isLoggedIn() {
  _isLoggedIn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!window.is_dev) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", window.localStorage.getItem("jwt_username") ? true : false);

          case 4:
            _context.next = 6;
            return loadExtensionStorageValue("jwt_username");

          case 6:
            if (!_context.sent) {
              _context.next = 10;
              break;
            }

            _context.t0 = true;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = false;

          case 11:
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _isLoggedIn.apply(this, arguments);
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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Appointment);

    this.element = null;
    this.element = apptTd;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Appointment, [{
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

/***/ "./modules/core/Encounter.js":
/*!***********************************!*\
  !*** ./modules/core/Encounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Encounter = /*#__PURE__*/function () {
  function Encounter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Encounter);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Encounter, null, [{
    key: "getCaseNote",
    value: function getCaseNote() {
      var element = document.getElementById("caseNote_note0");
      return element ? element : null;
    }
  }, {
    key: "addToCaseNote",
    value: function addToCaseNote(text) {
      var caseNote = Encounter.getCaseNote();
      if (!caseNote) return;
      caseNote.value += text;
    }
  }]);

  return Encounter;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Encounter);

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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Masterfile);

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


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Masterfile, [{
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
      var _fetchPage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
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

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Oscar);

    this.hostname = null;
    this.hostname = hostname;

    if (this.isJuno()) {
      // Juno already has a sticky primary navbar. Lift it to preven collisions with Cortico UI.
      var top_menu = document.getElementById('firstMenu');
      if (top_menu) top_menu.parentNode.parentNode.parentNode.zIndex = 1;
    }
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Oscar, [{
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
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
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
  _renderPatientInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(apptTd) {
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
  var cachedDemographics = pharmaciesCache.demographics;
  var demographics = Array.isArray(cachedDemographics) ? cachedDemographics : JSON.parse(cachedDemographics);
  demographics = demographics.filter(function (x) {
    return x.hasPharmacy;
  }).map(function (x) {
    return x.demographicNo;
  });
  var isPharmacyCached = demographics.includes(apptInfoItem.demographic_no);
  var menuIcon = '<small>&#10006;</small>';
  var cacheColor = '#555555';
  var anchor = apptTd.querySelector("a.apptStatus");
  var apptStatus = anchor ? anchor.querySelector("img").title : "";

  if (cacheValue != undefined) {
    var verification = cacheValue.verified;
    cacheColor = verification || verification === "uninsured" ? '#00cc51' : '#cc0063';
    menuIcon = verification ? '<small>&#10004;</small>' : menuIcon;
    menuIcon = verification === "uninsured" ? '<small>X</small>' : menuIcon;

    if (apptStatus.toLowerCase() === 'private') {
      menuIcon = '<small>$</small>';
      cacheColor = '#555555';
    }

    var masterRecord = apptTd.querySelector("a.masterbtn") || apptTd.querySelector("a.masterBtn");
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
  _corticoSignIn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, password, browser) {
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

            return _context.abrupt("return", alert("Login failed. Check username and password."));

          case 5:
            if (!response) {
              _context.next = 19;
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
              _context.next = 18;
              break;
            }

            if (window.is_dev) {
              window.localStorage.setItem("jwt_access_token", json.access);
              window.localStorage.setItem("jwt_expired", false);
              window.localStorage.setItem("jwt_username", username);
            } else {
              browser.storage.local.set({
                jwt_access_token: json.access
              });
              browser.storage.local.set({
                jwt_expired: false
              });
              browser.storage.local.set({
                jwt_username: username
              });
            }

            openMenu = document.querySelector(".login-form.show");
            openMenu.classList.remove("show");
            if (!alert("Successfully signed in, the page will now reload")) window.location.reload();
            return _context.abrupt("return");

          case 18:
            return _context.abrupt("return");

          case 19:
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
  _signInRequest = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(username, password) {
    var data, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = {
              username: username,
              password: password
            };
            url = (0,_Utils_Utils__WEBPACK_IMPORTED_MODULE_4__.getCorticoUrl)() + "/api/token/";
            return _context2.abrupt("return", fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            }).catch(function (err) {
              console.error(err);

              if (("" + err).includes("Failed to fetch")) {
                alert("Cortico instance cannot be reached. Check clinic name.");
              } else {
                alert("Cortico: Unknown Login Error: " + err);
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
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\nUse a better box model (opinionated).\n*/\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n.tailwind html {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\n.tailwind html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\nRemove the margin in all browsers.\n*/\n\n.tailwind body {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\n.tailwind body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n.tailwind hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n.tailwind abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n.tailwind b,\n.tailwind strong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n.tailwind code,\n.tailwind kbd,\n.tailwind samp,\n.tailwind pre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n.tailwind small {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n.tailwind sub,\n.tailwind sup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n.tailwind sub {\n\tbottom: -0.25em;\n}\n\n/*\nGrouping content\n================\n*/\n\n.tailwind sup {\n\ttop: -0.5em;\n}\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n.tailwind table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\n.tailwind button,\n.tailwind select { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\n.tailwind button,\n.tailwind [type='button'],\n.tailwind [type='reset'],\n.tailwind [type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n.tailwind ::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n.tailwind :-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n.tailwind :-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n.tailwind legend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n.tailwind progress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n.tailwind ::-webkit-inner-spin-button,\n.tailwind ::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n.tailwind [type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n.tailwind ::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n.tailwind ::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n.tailwind summary {\n\tdisplay: list-item;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n.tailwind blockquote,\n.tailwind dl,\n.tailwind dd,\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6,\n.tailwind hr,\n.tailwind figure,\n.tailwind p,\n.tailwind pre {\n  margin: 0;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n.tailwind button {\n  background-color: transparent;\n  background-image: none;\n}\n\n/*\nInteractive\n===========\n*/\n\n.tailwind fieldset {\n  margin: 0;\n  padding: 0;\n}\n\n/*\nForms\n=====\n*/\n\n.tailwind ol,\n.tailwind ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n.tailwind html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\n.tailwind body {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n.tailwind *,\n.tailwind ::before,\n.tailwind ::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n.tailwind hr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\n.tailwind img {\n  border-style: solid;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n.tailwind textarea {\n  resize: vertical;\n}\n\n/*\nTabular data\n============\n*/\n\n.tailwind input::-moz-placeholder, .tailwind textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input:-ms-input-placeholder, .tailwind textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n.tailwind input::placeholder,\n.tailwind textarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\n/*\nSections\n========\n*/\n\n.tailwind button,\n.tailwind [role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\n.tailwind :-moz-focusring {\n\toutline: auto;\n}\n\n/*\nDocument\n========\n*/\n\n.tailwind table {\n  border-collapse: collapse;\n}\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n.tailwind h1,\n.tailwind h2,\n.tailwind h3,\n.tailwind h4,\n.tailwind h5,\n.tailwind h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n.tailwind a {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\n.tailwind button,\n.tailwind input,\n.tailwind optgroup,\n.tailwind select,\n.tailwind textarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n.tailwind pre,\n.tailwind code,\n.tailwind kbd,\n.tailwind samp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\n.tailwind img,\n.tailwind svg,\n.tailwind video,\n.tailwind canvas,\n.tailwind audio,\n.tailwind iframe,\n.tailwind embed,\n.tailwind object {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n.tailwind img,\n.tailwind video {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n.tailwind [hidden] {\n  display: none;\n}\n\n/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com\n*/\n\n.tailwind *, .tailwind ::before, .tailwind ::after {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.tailwind *, .tailwind ::before, .tailwind ::after {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.tailwind *, .tailwind ::before, .tailwind ::after {\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n\n.tailwind *, .tailwind ::before, .tailwind ::after {\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.tailwind .form-input,.tailwind .form-textarea,.tailwind .form-select,.tailwind .form-multiselect {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\tborder-radius: 0px;\n\tpadding-top: 0.5rem;\n\tpadding-right: 0.75rem;\n\tpadding-bottom: 0.5rem;\n\tpadding-left: 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t--tw-shadow: 0 0 #0000;\n}\n\n.tailwind .form-input:focus, .tailwind .form-textarea:focus, .tailwind .form-select:focus, .tailwind .form-multiselect:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n\tborder-color: #2563eb;\n}\n\n.tailwind .form-input::-moz-placeholder, .tailwind .form-textarea::-moz-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\n.tailwind .form-input:-ms-input-placeholder, .tailwind .form-textarea:-ms-input-placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\n.tailwind .form-input::placeholder,.tailwind .form-textarea::placeholder {\n\tcolor: #6b7280;\n\topacity: 1;\n}\n\n.tailwind .form-checkbox,.tailwind .form-radio {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding: 0;\n\t-webkit-print-color-adjust: exact;\n\t        color-adjust: exact;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tbackground-origin: border-box;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\tflex-shrink: 0;\n\theight: 1rem;\n\twidth: 1rem;\n\tcolor: #2563eb;\n\tbackground-color: #fff;\n\tborder-color: #6b7280;\n\tborder-width: 1px;\n\t--tw-shadow: 0 0 #0000;\n}\n\n.tailwind .form-checkbox {\n\tborder-radius: 0px;\n}\n\n.tailwind .form-checkbox:focus,.tailwind .form-radio:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n\t--tw-ring-offset-width: 2px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: #2563eb;\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}\n\n.tailwind .form-checkbox:checked,.tailwind .form-radio:checked {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n.tailwind .form-checkbox:checked {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n\n.tailwind .form-checkbox:checked:hover,.tailwind .form-checkbox:checked:focus,.tailwind .form-radio:checked:hover,.tailwind .form-radio:checked:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n\n.tailwind .form-checkbox:indeterminate {\n\tbackground-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n\tbackground-size: 100% 100%;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n.tailwind .form-checkbox:indeterminate:hover,.tailwind .form-checkbox:indeterminate:focus {\n\tborder-color: transparent;\n\tbackground-color: currentColor;\n}\n.tw-sr-only {\n\tposition: absolute !important;\n\twidth: 1px !important;\n\theight: 1px !important;\n\tpadding: 0 !important;\n\tmargin: -1px !important;\n\toverflow: hidden !important;\n\tclip: rect(0, 0, 0, 0) !important;\n\twhite-space: nowrap !important;\n\tborder-width: 0 !important;\n}\n.tw-fixed {\n\tposition: fixed !important;\n}\n.tw-absolute {\n\tposition: absolute !important;\n}\n.tw-relative {\n\tposition: relative !important;\n}\n.tw-inset-0 {\n\ttop: 0px !important;\n\tright: 0px !important;\n\tbottom: 0px !important;\n\tleft: 0px !important;\n}\n.tw-bottom-5 {\n\tbottom: 1.25rem !important;\n}\n.tw-right-5 {\n\tright: 1.25rem !important;\n}\n.tw--top-1 {\n\ttop: -0.25rem !important;\n}\n.tw--left-1 {\n\tleft: -0.25rem !important;\n}\n.tw-bottom-2 {\n\tbottom: 0.5rem !important;\n}\n.tw-right-2 {\n\tright: 0.5rem !important;\n}\n.tw-bottom-0 {\n\tbottom: 0px !important;\n}\n.tw-left-\\[50\\%\\] {\n\tleft: 50% !important;\n}\n.tw-z-10005 {\n\tz-index: 10005 !important;\n}\n.tw-z-10000 {\n\tz-index: 10000 !important;\n}\n.tw-z-5000 {\n\tz-index: 5000 !important;\n}\n.tw-z-10002 {\n\tz-index: 10002 !important;\n}\n.tw-z-10001 {\n\tz-index: 10001 !important;\n}\n.tw-m-0 {\n\tmargin: 0px !important;\n}\n.tw-mx-auto {\n\tmargin-left: auto !important;\n\tmargin-right: auto !important;\n}\n.tw-my-4 {\n\tmargin-top: 1rem !important;\n\tmargin-bottom: 1rem !important;\n}\n.tw-my-2 {\n\tmargin-top: 0.5rem !important;\n\tmargin-bottom: 0.5rem !important;\n}\n.tw-my-3 {\n\tmargin-top: 0.75rem !important;\n\tmargin-bottom: 0.75rem !important;\n}\n.tw-mt-6 {\n\tmargin-top: 1.5rem !important;\n}\n.tw-mt-8 {\n\tmargin-top: 2rem !important;\n}\n.tw-mt-1 {\n\tmargin-top: 0.25rem !important;\n}\n.tw-mt-4 {\n\tmargin-top: 1rem !important;\n}\n.tw-mt-2 {\n\tmargin-top: 0.5rem !important;\n}\n.tw-ml-2 {\n\tmargin-left: 0.5rem !important;\n}\n.tw-mt-3 {\n\tmargin-top: 0.75rem !important;\n}\n.tw-ml-1 {\n\tmargin-left: 0.25rem !important;\n}\n.tw--ml-1 {\n\tmargin-left: -0.25rem !important;\n}\n.tw-mr-3 {\n\tmargin-right: 0.75rem !important;\n}\n.tw-mr-2 {\n\tmargin-right: 0.5rem !important;\n}\n.tw-mb-2 {\n\tmargin-bottom: 0.5rem !important;\n}\n.tw-ml-4 {\n\tmargin-left: 1rem !important;\n}\n.tw-mt-0 {\n\tmargin-top: 0px !important;\n}\n.tw-mb-10 {\n\tmargin-bottom: 2.5rem !important;\n}\n.tw-mt-10 {\n\tmargin-top: 2.5rem !important;\n}\n.tw-ml-3 {\n\tmargin-left: 0.75rem !important;\n}\n.tw-mt-\\[4px\\] {\n\tmargin-top: 4px !important;\n}\n.tw-mt-\\[3px\\] {\n\tmargin-top: 3px !important;\n}\n.tw-block {\n\tdisplay: block !important;\n}\n.tw-inline-block {\n\tdisplay: inline-block !important;\n}\n.tw-flex {\n\tdisplay: flex !important;\n}\n.tw-inline-flex {\n\tdisplay: inline-flex !important;\n}\n.tw-h-10 {\n\theight: 2.5rem !important;\n}\n.tw-h-5 {\n\theight: 1.25rem !important;\n}\n.tw-h-6 {\n\theight: 1.5rem !important;\n}\n.tw-h-4 {\n\theight: 1rem !important;\n}\n.tw-h-3 {\n\theight: 0.75rem !important;\n}\n.tw-h-\\[300px\\] {\n\theight: 300px !important;\n}\n.tw-h-\\[800px\\] {\n\theight: 800px !important;\n}\n.tw-h-full {\n\theight: 100% !important;\n}\n.tw-max-h-28 {\n\tmax-height: 7rem !important;\n}\n.tw-w-10 {\n\twidth: 2.5rem !important;\n}\n.tw-w-full {\n\twidth: 100% !important;\n}\n.tw-w-5 {\n\twidth: 1.25rem !important;\n}\n.tw-w-6 {\n\twidth: 1.5rem !important;\n}\n.tw-w-4 {\n\twidth: 1rem !important;\n}\n.tw-w-3 {\n\twidth: 0.75rem !important;\n}\n.tw-w-24 {\n\twidth: 6rem !important;\n}\n.tw-w-\\[400px\\] {\n\twidth: 400px !important;\n}\n.tw-w-\\[70px\\] {\n\twidth: 70px !important;\n}\n.tw-w-2\\/3 {\n\twidth: 66.666667% !important;\n}\n.tw-w-\\[300px\\] {\n\twidth: 300px !important;\n}\n.tw-w-0 {\n\twidth: 0px !important;\n}\n.tw-min-w-\\[300px\\] {\n\tmin-width: 300px !important;\n}\n.tw-max-w-\\[400px\\] {\n\tmax-width: 400px !important;\n}\n.tw-max-w-xl {\n\tmax-width: 36rem !important;\n}\n.tw-max-w-3xl {\n\tmax-width: 48rem !important;\n}\n.tw-flex-1 {\n\tflex: 1 1 0% !important;\n}\n.tw-flex-5 {\n\tflex: 5 1 0 !important;\n}\n.tw-flex-shrink-0 {\n\tflex-shrink: 0 !important;\n}\n.tw-translate-x-0 {\n\t--tw-translate-x: 0px !important;\n\ttransform: var(--tw-transform) !important;\n}\n.tw-translate-x-\\[430px\\] {\n\t--tw-translate-x: 430px !important;\n\ttransform: var(--tw-transform) !important;\n}\n.tw-translate-x-\\[-50\\%\\] {\n\t--tw-translate-x: -50% !important;\n\ttransform: var(--tw-transform) !important;\n}\n.tw-translate-y-0 {\n\t--tw-translate-y: 0px !important;\n\ttransform: var(--tw-transform) !important;\n}\n.tw-translate-y-\\[100\\%\\] {\n\t--tw-translate-y: 100% !important;\n\ttransform: var(--tw-transform) !important;\n}\n.tw-transform {\n\ttransform: var(--tw-transform) !important;\n}\n@-webkit-keyframes tw-spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n@keyframes tw-spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.tw-animate-spin {\n\t-webkit-animation: tw-spin 1s linear infinite !important;\n\t        animation: tw-spin 1s linear infinite !important;\n}\n@-webkit-keyframes tw-bounce {\n\n\t0%, 100% {\n\t\ttransform: translateY(-25%);\n\t\t-webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n\t\t        animation-timing-function: cubic-bezier(0.8,0,1,1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\t-webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n\t\t        animation-timing-function: cubic-bezier(0,0,0.2,1);\n\t}\n}\n@keyframes tw-bounce {\n\n\t0%, 100% {\n\t\ttransform: translateY(-25%);\n\t\t-webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n\t\t        animation-timing-function: cubic-bezier(0.8,0,1,1);\n\t}\n\n\t50% {\n\t\ttransform: none;\n\t\t-webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n\t\t        animation-timing-function: cubic-bezier(0,0,0.2,1);\n\t}\n}\n.tw-animate-bounce {\n\t-webkit-animation: tw-bounce 1s infinite !important;\n\t        animation: tw-bounce 1s infinite !important;\n}\n.tw-cursor-pointer {\n\tcursor: pointer !important;\n}\n.tw-resize-none {\n\tresize: none !important;\n}\n.tw-appearance-none {\n\t-webkit-appearance: none !important;\n\t   -moz-appearance: none !important;\n\t        appearance: none !important;\n}\n.tw-flex-col {\n\tflex-direction: column !important;\n}\n.tw-items-start {\n\talign-items: flex-start !important;\n}\n.tw-items-center {\n\talign-items: center !important;\n}\n.tw-justify-end {\n\tjustify-content: flex-end !important;\n}\n.tw-justify-center {\n\tjustify-content: center !important;\n}\n.tw-justify-between {\n\tjustify-content: space-between !important;\n}\n.tw-space-y-4 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-y-reverse: 0 !important;\n\tmargin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))) !important;\n\tmargin-bottom: calc(1rem * var(--tw-space-y-reverse)) !important;\n}\n.tw-overflow-y-auto {\n\toverflow-y: auto !important;\n}\n.tw-break-words {\n\toverflow-wrap: break-word !important;\n}\n.tw-rounded-lg {\n\tborder-radius: 0.5rem !important;\n}\n.tw-rounded-md {\n\tborder-radius: 0.375rem !important;\n}\n.tw-rounded-full {\n\tborder-radius: 9999px !important;\n}\n.tw-rounded {\n\tborder-radius: 0.25rem !important;\n}\n.tw-rounded-xl {\n\tborder-radius: 0.75rem !important;\n}\n.tw-rounded-t-md {\n\tborder-top-left-radius: 0.375rem !important;\n\tborder-top-right-radius: 0.375rem !important;\n}\n.tw-rounded-b-lg {\n\tborder-bottom-right-radius: 0.5rem !important;\n\tborder-bottom-left-radius: 0.5rem !important;\n}\n.tw-rounded-t-lg {\n\tborder-top-left-radius: 0.5rem !important;\n\tborder-top-right-radius: 0.5rem !important;\n}\n.tw-rounded-l-md {\n\tborder-top-left-radius: 0.375rem !important;\n\tborder-bottom-left-radius: 0.375rem !important;\n}\n.tw-border {\n\tborder-width: 1px !important;\n}\n.tw-border-0 {\n\tborder-width: 0px !important;\n}\n.tw-border-gray-300 {\n\t--tw-border-opacity: 1 !important;\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity)) !important;\n}\n.tw-border-transparent {\n\tborder-color: transparent !important;\n}\n.tw-border-cortico-blue {\n\tborder-color: rgba(75, 84, 246, 1) !important;\n}\n.tw-bg-white {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-yellow-500 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(245, 158, 11, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-red-400 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(248, 113, 113, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-cortico-blue {\n\tbackground-color: rgba(75, 84, 246, 1) !important;\n}\n.tw-bg-red-600 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-100 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-green-600 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(5, 150, 105, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-200 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-500 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(107, 114, 128, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-red-500 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(239, 68, 68, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-400 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(156, 163, 175, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-black {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-gray-700 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(55, 65, 81, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-blue-700 {\n\t--tw-bg-opacity: 1 !important;\n\tbackground-color: rgba(29, 78, 216, var(--tw-bg-opacity)) !important;\n}\n.tw-bg-opacity-25 {\n\t--tw-bg-opacity: 0.25 !important;\n}\n.tw-bg-opacity-80 {\n\t--tw-bg-opacity: 0.8 !important;\n}\n.tw-p-4 {\n\tpadding: 1rem !important;\n}\n.tw-p-2 {\n\tpadding: 0.5rem !important;\n}\n.tw-p-12 {\n\tpadding: 3rem !important;\n}\n.tw-p-3 {\n\tpadding: 0.75rem !important;\n}\n.tw-p-1 {\n\tpadding: 0.25rem !important;\n}\n.tw-p-0 {\n\tpadding: 0px !important;\n}\n.tw-p-10 {\n\tpadding: 2.5rem !important;\n}\n.tw-px-2 {\n\tpadding-left: 0.5rem !important;\n\tpadding-right: 0.5rem !important;\n}\n.tw-px-3 {\n\tpadding-left: 0.75rem !important;\n\tpadding-right: 0.75rem !important;\n}\n.tw-py-2 {\n\tpadding-top: 0.5rem !important;\n\tpadding-bottom: 0.5rem !important;\n}\n.tw-px-4 {\n\tpadding-left: 1rem !important;\n\tpadding-right: 1rem !important;\n}\n.tw-py-4 {\n\tpadding-top: 1rem !important;\n\tpadding-bottom: 1rem !important;\n}\n.tw-py-1 {\n\tpadding-top: 0.25rem !important;\n\tpadding-bottom: 0.25rem !important;\n}\n.tw-py-3 {\n\tpadding-top: 0.75rem !important;\n\tpadding-bottom: 0.75rem !important;\n}\n.tw-pl-2 {\n\tpadding-left: 0.5rem !important;\n}\n.tw-pt-1 {\n\tpadding-top: 0.25rem !important;\n}\n.tw-text-center {\n\ttext-align: center !important;\n}\n.tw-font-sans {\n\tfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !important;\n}\n.tw-text-3xl {\n\tfont-size: 1.875rem !important;\n\tline-height: 2.25rem !important;\n}\n.tw-text-xs {\n\tfont-size: 0.75rem !important;\n\tline-height: 1rem !important;\n}\n.tw-text-sm {\n\tfont-size: 0.875rem !important;\n\tline-height: 1.25rem !important;\n}\n.tw-text-2xl {\n\tfont-size: 1.5rem !important;\n\tline-height: 2rem !important;\n}\n.tw-text-xl {\n\tfont-size: 1.25rem !important;\n\tline-height: 1.75rem !important;\n}\n.tw-text-lg {\n\tfont-size: 1.125rem !important;\n\tline-height: 1.75rem !important;\n}\n.tw-text-base {\n\tfont-size: 1rem !important;\n\tline-height: 1.5rem !important;\n}\n.tw-font-extrabold {\n\tfont-weight: 800 !important;\n}\n.tw-font-medium {\n\tfont-weight: 500 !important;\n}\n.tw-font-light {\n\tfont-weight: 300 !important;\n}\n.tw-font-semibold {\n\tfont-weight: 600 !important;\n}\n.tw-font-bold {\n\tfont-weight: 700 !important;\n}\n.tw-leading-5 {\n\tline-height: 1.25rem !important;\n}\n.tw-tracking-wider {\n\tletter-spacing: 0.05em !important;\n}\n.tw-tracking-widest {\n\tletter-spacing: 0.1em !important;\n}\n.tw-text-white {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n.tw-text-gray-700 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity)) !important;\n}\n.tw-text-green-600 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(5, 150, 105, var(--tw-text-opacity)) !important;\n}\n.tw-text-gray-600 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity)) !important;\n}\n.tw-text-gray-800 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity)) !important;\n}\n.tw-text-cortico-blue {\n\tcolor: rgba(75, 84, 246, 1) !important;\n}\n.tw-text-indigo-600 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity)) !important;\n}\n.tw-text-black {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity)) !important;\n}\n.tw-text-gray-900 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity)) !important;\n}\n.tw-text-gray-500 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity)) !important;\n}\n.tw-text-red-500 {\n\t--tw-text-opacity: 1 !important;\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity)) !important;\n}\n.tw-text-opacity-80 {\n\t--tw-text-opacity: 0.8 !important;\n}\n.tw-text-opacity-100 {\n\t--tw-text-opacity: 1 !important;\n}\n.tw-text-opacity-70 {\n\t--tw-text-opacity: 0.7 !important;\n}\n.tw-text-opacity-90 {\n\t--tw-text-opacity: 0.9 !important;\n}\n.tw-text-opacity-60 {\n\t--tw-text-opacity: 0.6 !important;\n}\n.tw-placeholder-gray-400::-moz-placeholder {\n\t--tw-placeholder-opacity: 1 !important;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity)) !important;\n}\n.tw-placeholder-gray-400:-ms-input-placeholder {\n\t--tw-placeholder-opacity: 1 !important;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity)) !important;\n}\n.tw-placeholder-gray-400::placeholder {\n\t--tw-placeholder-opacity: 1 !important;\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity)) !important;\n}\n.tw-opacity-25 {\n\topacity: 0.25 !important;\n}\n.tw-opacity-75 {\n\topacity: 0.75 !important;\n}\n.tw-opacity-20 {\n\topacity: 0.2 !important;\n}\n.tw-opacity-10 {\n\topacity: 0.1 !important;\n}\n.tw-opacity-40 {\n\topacity: 0.4 !important;\n}\n.tw-opacity-50 {\n\topacity: 0.5 !important;\n}\n.tw-shadow-sm {\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.tw-shadow-xl {\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.tw-shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.tw-shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.tw-shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.tw-drop-shadow-md {\n\t--tw-drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06)) !important;\n\tfilter: var(--tw-filter) !important;\n}\n.tw-drop-shadow-lg {\n\t--tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1)) !important;\n\tfilter: var(--tw-filter) !important;\n}\n.tw-transition-transform {\n\ttransition-property: transform !important;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n\ttransition-duration: 150ms !important;\n}\n.tw-duration-200 {\n\ttransition-duration: 200ms !important;\n}\n.tw-duration-300 {\n\ttransition-duration: 300ms !important;\n}\n.tw-ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n.tw-line-clamp-3 {\n\toverflow: hidden !important;\n\tdisplay: -webkit-box !important;\n\t-webkit-box-orient: vertical !important;\n\t-webkit-line-clamp: 3 !important;\n}\n\n.sidebar-instructions {\n\ttext-align: center;\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n\tfont-weight: 700;\n}\n\n.sidebar-instructions-hidden {\n\tdisplay: none;\n}\n\n.alert-enter {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.alert-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 300ms, transform 300ms;\n}\n.alert-exit {\n  opacity: 1;\n}\n.alert-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n}\n", "",{"version":3,"sources":["webpack://./index.css","webpack://./%3Cinput%20css%20XNvqWi%3E","webpack://./%3Cinput%20css%20xFmDUg%3E","<no source>"],"names":[],"mappings":"AACE;;CAAc;;AAAd;;;CCaD,sBAAsB;ADbP;;AAAd;;CAAc;;AAAd;CCqBD,gBAAgB;CAChB,cAAW;IAAX,WAAW;ADtBI;;AAAd;;;CAAc;;AAAd;CC+BD,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;ADhCvB;;AAAd;;CAAc;;AAAd;CC6CD,SAAS;AD7CM;;AAAd;;CAAc;;AAAd;CCqDD;;;;;;;;;kBASiB;AD9DF;;AAAd;;;CAAc;;AAAd;CC4ED,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AD7EP;;AAAd;;CAAc;;AAAd;CC0FD,yCAAiC;SAAjC,iCAAiC;AD1FlB;;AAAd;;CAAc;;AAAd;;CCmGD,mBAAmB;ADnGJ;;AAAd;;;CAAc;;AAAd;;;;CC+GD;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;ADtHP;;AAAd;;CAAc;;AAAd;CC8HD,cAAc;AD9HC;;AAAd;;CAAc;;AAAd;;CCuID,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AD1IT;;AAAd;;;CAAc;;AAAd;CC8ID,eAAe;AD9IA;;AAAd;;;CAAc;;AAAd;CCkJD,WAAW;ADlJI;;AAAd;;;CAAc;;AAAd;CCgKD,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;ADjKd;;AAAd;;;CAAc;;AAAd;;;;;CCmLD,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;ADtLF;;AAAd;;;CAAc;;AAAd;mBC+LO,MAAM;CACd,oBAAoB;ADhML;;AAAd;;CAAc;;AAAd;;;;CC2MD,0BAA0B;AD3MX;;AAAd;;CAAc;;AAAd;CCmND,kBAAkB;CAClB,UAAU;ADpNK;;AAAd;;CAAc;;AAAd;CC4ND,8BAA8B;AD5Nf;;AAAd;;;CAAc;;AAAd;CCqOD,gBAAgB;ADrOD;;AAAd;;CAAc;;AAAd;CC6OD,UAAU;AD7OK;;AAAd;;CAAc;;AAAd;CCqPD,wBAAwB;ADrPT;;AAAd;;CAAc;;AAAd;;CC8PD,YAAY;AD9PG;;AAAd;;;CAAc;;AAAd;CCuQD,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;ADxQb;;AAAd;;CAAc;;AAAd;CCgRD,wBAAwB;ADhRT;;AAAd;;;CAAc;;AAAd;CCyRD,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AD1RN;;AAAd;;CAAc;;AAAd;CCuSD,kBAAkB;ADvSH;;AAAd;;EAAc;;AAAd;;;;;;;;;;;;;EEsBA,SAAS;AFtBK;;AAAd;;;;EAAc;;AAAd;EE0BA,6BAA6B;EAC7B,sBAAsB;AF3BR;;AAAd;;;CAAc;;AAAd;EE+BA,SAAS;EACT,UAAU;AFhCI;;AAAd;;;CAAc;;AAAd;;EEqCA,gBAAgB;EAChB,SAAS;EACT,UAAU;AFvCI;;AAAd;;;;;EAAc;;AAAd;EEsDA,4NAAsP,EAAE,MAAM;EAC9P,gBAAgB,EAAE,MAAM;AFvDV;;AAAd;;;EAAc;;AAAd;EEiEA,oBAAoB;EACpB,oBAAoB;AFlEN;;AAAd;;;;;;;;;;;;;;;;;;;;;;;;EAAc;;AAAd;;;EEkGA,sBAAsB,EAAE,MAAM;EAC9B,eAAe,EAAE,MAAM;EACvB,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;AFrGpB;;AAAd;;EAAc;;AAAd;EE6GA,qBAAqB;AF7GP;;AAAd;;;;;;;;EAAc;;AAAd;EE2HA,mBAAmB;AF3HL;;AAAd;;EAAc;;AAAd;EE+HA,gBAAgB;AF/HF;;AAAd;;;CAAc;;AAAd;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;;EEoIA,UAAU;EACV,cAAwC;AFrI1B;;AAAd;;;CAAc;;AAAd;;EE0IA,eAAe;AF1ID;;AAAd;;;;;;EAAc;;AAAd;CEsJD,aAAa;AFtJE;;AAAd;;;CAAc;;AAAd;EE0JA,yBAAyB;AF1JX;;AAAd,8FAAc;;AAAd;;;;;;EEmKA,kBAAkB;EAClB,oBAAoB;AFpKN;;AAAd;;;EAAc;;AAAd;EE6KA,cAAc;EACd,wBAAwB;AF9KV;;AAAd;;;;;;EAAc;;AAAd;;;;;EE8LA,UAAU;EACV,oBAAoB;EACpB,cAAc;AFhMA;;AAAd;;;;;EAAc;;AAAd;;;;EE8MA,+GAAyI;AF9M3H;;AAAd;;;;;;;;;;;;;;;EAAc;;AAAd;;;;;;;;EE0OA,cAAc,EAAE,MAAM;EACtB,sBAAsB,EAAE,MAAM;AF3OhB;;AAAd;;;;;EAAc;;AAAd;;EEuPA,eAAe;EACf,YAAY;AFxPE;;AAAd;;EAAc;;AAAd;EEgQA,aAAa;AFhQC;;AAAd;CAAc;;AGDhB;CAAA,oBAAA;CAAA,oBAAA;CAAA,eAAA;CAAA,eAAA;CAAA,eAAA;CAAA,gBAAA;CAAA,gBAAA;CAAA;CAAA;;AAAA;CAAA,uBAAA;CAAA;CAAA;;AAAA;CAAA,mCAAA;CAAA,4BAAA;CAAA;CAAA;;AAAA;CAAA,uCAAA;CAAA,6CAAA;CAAA,2CAAA;CAAA,4CAAA;CAAA,6CAAA;CAAA,yCAAA;CAAA,2CAAA;CAAA,wCAAA;CAAA,8CAAA;CAAA;CAAA;;AHCE;CGDF,yBAAA;IAAA,sBAAA;SAAA,iBAAA;CAAA,uBAAA;CAAA,sBAAA;CAAA,kBAAA;CAAA,mBAAA;CAAA,oBAAA;CAAA,uBAAA;CAAA,uBAAA;CAAA,sBAAA;CAAA,gBAAA;CAAA,oBAAA;CAAA,uBAAA;AHCgB;;AAAd;CGDF,+BAAA;CAAA,oBAAA;CAAA,6CAAA;CAAA,4BAAA;CAAA,6BAAA;CAAA,yBAAA;CAAA,4GAAA;CAAA,0GAAA;CAAA,kFAAA;CAAA;AHCgB;;AAAd;CGDF,eAAA;CAAA;AHCgB;;AAAd;CGDF,eAAA;CAAA;AHCgB;;AAAd;CGDF,eAAA;CAAA;AHCgB;;AAAd;CGDF,yBAAA;IAAA,sBAAA;SAAA,iBAAA;CAAA,WAAA;CAAA,kCAAA;SAAA,oBAAA;CAAA,sBAAA;CAAA,uBAAA;CAAA,8BAAA;CAAA,0BAAA;IAAA,uBAAA;KAAA,sBAAA;SAAA,kBAAA;CAAA,eAAA;CAAA,aAAA;CAAA,YAAA;CAAA,eAAA;CAAA,uBAAA;CAAA,sBAAA;CAAA,kBAAA;CAAA;AHCgB;;AAAd;CGDF;AHCgB;;AAAd;CGDF,+BAAA;CAAA,oBAAA;CAAA,6CAAA;CAAA,4BAAA;CAAA,6BAAA;CAAA,yBAAA;CAAA,4GAAA;CAAA,0GAAA;CAAA;AHCgB;;AAAd;CGDF,0BAAA;CAAA,+BAAA;CAAA,2BAAA;CAAA,4BAAA;CAAA;AHCgB;;AAAd;CGDF;AHCgB;;AAAd;CGDF,0BAAA;CAAA;AHCgB;;AAAd;CGDF,wOAAA;CAAA,0BAAA;CAAA,+BAAA;CAAA,2BAAA;CAAA,4BAAA;CAAA;AHCgB;;AAAd;CGDF,0BAAA;CAAA;AHCgB;AAIhB;CGLA,8BAAA;CAAA,sBAAA;CAAA,uBAAA;CAAA,sBAAA;CAAA,wBAAA;CAAA,4BAAA;CAAA,kCAAA;CAAA,+BAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,oBAAA;CAAA,sBAAA;CAAA,uBAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,6BAAA;CAAA;AHKmB;AAAnB;CGLA,4BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,+BAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,iCAAA;CAAA;AHKmB;AAAnB;CGLA,mCAAA;CAAA;AHKmB;AAAnB;CGLA,kCAAA;CAAA;AHKmB;AAAnB;CGLA,iCAAA;CAAA;AHKmB;AAAnB;CGLA,kCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;;CGLA;EAAA;EAAA;AHKmB;AAAnB;;CGLA;EAAA;EAAA;AHKmB;AAAnB;CGLA,yDAAA;SAAA;AHKmB;AAAnB;;CGLA;EAAA,4BAAA;EAAA,2DAAA;UAAA;EAAA;;CAAA;EAAA,gBAAA;EAAA,2DAAA;UAAA;EAAA;AHKmB;AAAnB;;CGLA;EAAA,4BAAA;EAAA,2DAAA;UAAA;EAAA;;CAAA;EAAA,gBAAA;EAAA,2DAAA;UAAA;EAAA;AHKmB;AAAnB;CGLA,oDAAA;SAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,oCAAA;IAAA,iCAAA;SAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,mCAAA;CAAA,wEAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,4CAAA;CAAA;AHKmB;AAAnB;CGLA,8CAAA;CAAA;AHKmB;AAAnB;CGLA,0CAAA;CAAA;AHKmB;AAAnB;CGLA,4CAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,kCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,iCAAA;CAAA;AHKmB;AAAnB;CGLA,+BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,6BAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,+BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,+BAAA;CAAA;AHKmB;AAAnB;CGLA,6BAAA;CAAA;AHKmB;AAAnB;CGLA,8BAAA;CAAA;AHKmB;AAAnB;CGLA,+BAAA;CAAA;AHKmB;AAAnB;CGLA,2BAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA,gCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,uCAAA;CAAA;AHKmB;AAAnB;CGLA,uCAAA;CAAA;AHKmB;AAAnB;CGLA,uCAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,wDAAA;CAAA;AHKmB;AAAnB;CGLA,kGAAA;CAAA;AHKmB;AAAnB;CGLA,8DAAA;CAAA;AHKmB;AAAnB;CGLA,8FAAA;CAAA;AHKmB;AAAnB;CGLA,gGAAA;CAAA;AHKmB;AAAnB;CGLA,mHAAA;CAAA;AHKmB;AAAnB;CGLA,mHAAA;CAAA;AHKmB;AAAnB;CGLA,0CAAA;CAAA,oEAAA;CAAA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA;AHKmB;AAAnB;CGLA,4BAAA;CAAA,gCAAA;CAAA,wCAAA;CAAA;AHKmB;;AGLnB;CAAA,mBAAA;CAAA,oBAAA;CAAA,qBAAA;CAAA;CAAA;;AAAA;CAAA;CAAA;;AHeA;EACE,UAAU;EACV,qBAAqB;AACvB;AACA;EACE,UAAU;EACV,wBAAwB;EACxB,0CAA0C;AAC5C;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;EACV,qBAAqB;EACrB,0CAA0C;AAC5C","sourcesContent":[".tailwind {\n  @tailwind base;\n}\n\n@tailwind components;\n@tailwind utilities;\n\n.sidebar-instructions {\n  @apply tw-text-3xl tw-text-center tw-font-bold;\n}\n\n.sidebar-instructions-hidden {\n  @apply tw-hidden;\n}\n\n.alert-enter {\n  opacity: 0;\n  transform: scale(0.9);\n}\n.alert-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 300ms, transform 300ms;\n}\n.alert-exit {\n  opacity: 1;\n}\n.alert-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n}\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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

  if (!cssMapping) {
    return content;
  }

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

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

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

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ nn),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ B),
/* harmony export */   "hydrate": () => (/* binding */ H),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ un),
/* harmony export */   "createPortal": () => (/* binding */ W),
/* harmony export */   "createFactory": () => (/* binding */ tn),
/* harmony export */   "cloneElement": () => (/* binding */ rn),
/* harmony export */   "isValidElement": () => (/* binding */ en),
/* harmony export */   "findDOMNode": () => (/* binding */ on),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "flushSync": () => (/* binding */ cn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ ln),
/* harmony export */   "StrictMode": () => (/* binding */ fn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ M),
/* harmony export */   "lazy": () => (/* binding */ F),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function H(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Z=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Y(){}function $(){return this.cancelBubble}function q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return Z&&(n=Z(n)),n.persist=Y,n.isPropagationStopped=$,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J)),n.$$typeof=j,K&&K(n)};var Q=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function en(n){return!!n&&n.$$typeof===j}function rn(n){return en(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function un(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:B,hydrate:H,unmountComponentAtNode:un,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:tn,cloneElement:rn,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:en,findDOMNode:on,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});
//# sourceMappingURL=compat.module.js.map


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
var n,l,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)))})}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,r,o,f=a({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,r||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ A),
/* harmony export */   "useCallback": () => (/* binding */ F),
/* harmony export */   "useContext": () => (/* binding */ T),
/* harmony export */   "useDebugValue": () => (/* binding */ d),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,A(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function A(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function F(n,t){return o=8,A(function(){return n},t)}function T(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
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
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Ellipsis_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_AppointmentMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_Login_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
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
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
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

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
/* harmony import */ var _modules_Messenger_Messenger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/Messenger/Messenger */ "./modules/Messenger/Messenger.js");
/* harmony import */ var _modules_cortico_Disclaimer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/cortico/Disclaimer */ "./modules/cortico/Disclaimer.js");
/* harmony import */ var _modules_Login_LoginOscar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/Login/LoginOscar */ "./modules/Login/LoginOscar.js");





// ==UserScript==
// @name     Cortico
// @version  3.8.1
// @grant    none
// ==/UserScript==















var CORTICO = {}; // container for global state. Use this rather than `window`

 // manually update this variable with the version in manifest.json


var version = 3.8;
var pubsub = (0,_modules_PubSub_PubSub__WEBPACK_IMPORTED_MODULE_5__.pubSubInit)();
var oscar = new _modules_core_Oscar_js__WEBPACK_IMPORTED_MODULE_10__.Oscar(window.location.hostname);
window.is_dev =  true ? true : 0;
var cortico_media = ["phone", "clinic", "virtual", "", "quiet"];

var init_cortico = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    var anchor, route, oscar_elements, resources_field, cortico_button, isMarkham, patient_info, _patient_info, currentPharmacyCode, additionalNotes, previewFrame;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // create an element to indicate the library is loaded in the dom, and to contain fixed menus/elements.
            anchor = document.createElement("div");
            anchor.id = "cortico_anchor";
            document.body.appendChild(anchor);
            route = "" + window.location;
            oscar_elements = Array.from(document.getElementsByTagName("script")).filter(function (s) {
              return s.src.indexOf("/Oscar.js") > 0 || s.src.indexOf("/oscar/js/") > 0 || s.src.indexOf("/appointment.js") > 0 || s.src.indexOf("phr/phr.js" > -1) // Encounter page
              ;
            }); // some pages have no scripts, but they have other elements.

            if (!oscar_elements) {
              document.querySelectorAll("div.DoNotPrint>table"), (0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("oscar_elements");
            } // do not run unless we're on an Oscar page.


            if (!(oscar_elements.length === 0)) {
              _context.next = 9;
              break;
            }

            console.log("Cortico could not find any oscar script");
            return _context.abrupt("return");

          case 9:
            console.log("cortico plug-in initializing, version:", version);
            window.pubsub = pubsub;
            /*
            const modal = new Modal();
            modal.setContent(Dashboard());
            modal.show();
            */

            if (!(route.indexOf("/appointment/addappointment.jsp") > -1 || route.indexOf("/appointment/appointmentcontrol.jsp") > -1)) {
              _context.next = 21;
              break;
            }

            init_appointment_page();

            if ((window.location.href + "").includes("appointment_no")) {
              init_recall_button();
              init_diagnostic_viewer_button();
            } // only show on add appointment


            if (route.indexOf("/appointment/addappointment.jsp") > -1) {
              init_medium_option();
            } // Temporary fix, adding event listener does not work inside init_appointment_page
            // Note: event listeners inside init_recall_button seems to be working fine


            resources_field = document.querySelector('[name="resources"]');
            cortico_button = document.getElementById("cortico-video-appt-btn"); // open a windows to the cortico video page for this appointment.

            window.addEventListener("click", function (e) {
              if (e.target.id === "cortico-video-appt-btn") {
                if (!(0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) return;
                open_video_appointment_page(e);
              }
            }); //You need to delegate
            //cortico_button.addEventListener("click", open_video_appointment_page);

            resources_field.addEventListener("change", update_video_button);
            _context.next = 52;
            break;

          case 21:
            if (!(route.indexOf("/provider/providercontrol.jsp") > -1)) {
              _context.next = 36;
              break;
            }

            init_schedule();
            (0,_modules_Login_LoginOscar__WEBPACK_IMPORTED_MODULE_18__["default"])();
            /**
             * Drag and drop - disabled for stability reasons.
             * TODO: fixme?
             */

            if (!oscar.isJuno() && !oscar.isKaiOscarHost()) {
              dragAndDrop();
            }

            setClinicName();
            addCorticoLogo();
            addMenu();
            (0,_modules_cortico_Appointments_AppointmentMenu__WEBPACK_IMPORTED_MODULE_8__.addAppointmentMenu)();
            (0,_modules_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_9__.addLoginForm)(chrome);

            if (!oscar.isJuno() && !oscar.containsKaiBar()) {
              plusSignFromCache();
            }

            isMarkham = window.location.href.includes("mmfcc");

            if (isMarkham) {
              plusSignFromCache();
            }

            setupPrescriptionButtons();
            _context.next = 52;
            break;

          case 36:
            if (!(route.indexOf("/eform/efmformadd_data.jsp") > -1 || route.indexOf("/eform/efmshowform_data.jsp") > -1 || route.indexOf("/casemgmt/forward.jsp") > -1)) {
              _context.next = 43;
              break;
            }

            _context.next = 39;
            return getPatientInfo();

          case 39:
            patient_info = _context.sent;

            if (route.indexOf("/casemgmt/forward.jsp") > -1) {
              (0,_modules_Messenger_Messenger__WEBPACK_IMPORTED_MODULE_16__["default"])(patient_info, {
                encounter: true
              });
            } else {
              (0,_modules_Messenger_Messenger__WEBPACK_IMPORTED_MODULE_16__["default"])(patient_info, {
                encounter: false
              }, document.getElementById("eform_container"));
              setupEFormPage();
            }

            _context.next = 52;
            break;

          case 43:
            if (!(route.indexOf("dms/documentReport.jsp") > -1)) {
              _context.next = 51;
              break;
            }

            setupDocumentPage();
            _context.next = 47;
            return getPatientInfo();

          case 47:
            _patient_info = _context.sent;
            (0,_modules_Messenger_Messenger__WEBPACK_IMPORTED_MODULE_16__["default"])(_patient_info, {
              encounter: false
            });
            _context.next = 52;
            break;

          case 51:
            if (route.indexOf("/oscarRx/ViewScript2.jsp") > -1) {
              // We need to determine first if the prescription is "delivery"
              currentPharmacyCode = localStorage.getItem("currentPharmacyCode");

              if (currentPharmacyCode.toLowerCase().indexOf("dlvr") > -1) {
                additionalNotes = document.getElementById("additionalNotes");
                additionalNotes.value = "FOR DELIVERY"; // make sure the preview frame is loaded before adding the notes

                previewFrame = document.getElementById("preview");
                previewFrame.addEventListener("load", function () {
                  // addNotes is a function in oscar
                  addNotes();
                }); // setupFaxButton();
              }
            }

          case 52:
            init_styles();

          case 53:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init_cortico() {
    return _ref.apply(this, arguments);
  };
}();

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
  // This no longer seems necessary.
  //if (!(window.location + '').includes('casemgmt/forward.jsp')) { // Don't break autosave in eChart


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

function stripScripts(el) {
  var scripts = el.getElementsByTagName("script");
  var i = scripts.length;

  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
}

function convertImagesToDataURLs(_x) {
  return _convertImagesToDataURLs.apply(this, arguments);
}

function _convertImagesToDataURLs() {
  _convertImagesToDataURLs = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7(el) {
    var bg_images, i, bg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // convert bg images to data URL.
            bg_images = el.querySelectorAll("img");
            i = 0;

          case 2:
            if (!(i < bg_images.length)) {
              _context7.next = 14;
              break;
            }

            bg = bg_images[i];
            _context7.prev = 4;
            return _context7.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
              var blob, dataUrl;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return fetch(bg.src).then(function (r) {
                        return r.blob();
                      });

                    case 2:
                      blob = _context6.sent;
                      _context6.next = 5;
                      return new Promise(function (resolve) {
                        var reader = new FileReader();

                        reader.onload = function () {
                          return resolve(reader.result);
                        };

                        reader.readAsDataURL(blob);
                      });

                    case 5:
                      dataUrl = _context6.sent;
                      bg.src = dataUrl;

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            })(), "t0", 6);

          case 6:
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t1 = _context7["catch"](4);
            // some images may have cross origin restrictions.
            console.warn("failed to convert image: ", bg, _context7.t1);

          case 11:
            i++;
            _context7.next = 2;
            break;

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[4, 8]]);
  }));
  return _convertImagesToDataURLs.apply(this, arguments);
}

function setupDocumentPage() {
  return _setupDocumentPage.apply(this, arguments);
}

function _setupDocumentPage() {
  _setupDocumentPage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10() {
    var pdf_links, patient_info;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            pdf_links = document.querySelectorAll("#privateDocs td:nth-child(2) a");
            _context10.next = 3;
            return getPatientInfo();

          case 3:
            patient_info = _context10.sent;
            pdf_links.forEach(function (pdf_link) {
              console.log("PDF Link", pdf_link);
              if (pdf_link.href.indexOf("?sort") > -1) return;
              var email_btn = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<a class='cortico-btn cortico-btn-small' style='display:inline'> -&gt; PT</a>", {
                events: {
                  click: function () {
                    var _click = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9(e) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e)) {
                                _context9.next = 2;
                                break;
                              }

                              return _context9.abrupt("return");

                            case 2:
                              _context9.next = 4;
                              return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token").then( /*#__PURE__*/function () {
                                var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8(access_token) {
                                  var pdf_link_ext, blob, dataUrl;
                                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
                                    while (1) {
                                      switch (_context8.prev = _context8.next) {
                                        case 0:
                                          pdf_link_ext = pdf_link.outerHTML.replace(/\&amp;/g, "&").match(/\'(Manage[^\']+)\'/)[1];
                                          console.log(pdf_link_ext);
                                          _context8.next = 4;
                                          return fetch(pdf_link_ext).then(function (r) {
                                            return r.blob();
                                          });

                                        case 4:
                                          blob = _context8.sent;
                                          _context8.next = 7;
                                          return new Promise(function (resolve) {
                                            var reader = new FileReader();

                                            reader.onload = function () {
                                              return resolve(reader.result);
                                            };

                                            reader.readAsDataURL(blob);
                                          });

                                        case 7:
                                          dataUrl = _context8.sent;
                                          pubsub.publish("document", {
                                            name: pdf_link.textContent,
                                            data: dataUrl
                                          });
                                          /*
                                          const patientFormResponse = await emailPatient(
                                            patient_info,
                                            access_token,
                                            { attachment: dataUrl }
                                          );
                                          console.log("RSP: ", patientFormResponse);
                                          if (patientFormResponse.success) {
                                            document
                                              .querySelector(".documentLists")
                                              .appendChild(
                                                create(
                                                  `<p>${patient_info.email} was sent a <a style='text-decoration:underline' target="_blank" href="${patientFormResponse.preview}">document</a>.</p>`
                                                )
                                              );
                                          }*/

                                        case 9:
                                        case "end":
                                          return _context8.stop();
                                      }
                                    }
                                  }, _callee8);
                                }));

                                return function (_x17) {
                                  return _ref3.apply(this, arguments);
                                };
                              }());

                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9);
                    }));

                    function click(_x16) {
                      return _click.apply(this, arguments);
                    }

                    return click;
                  }()
                }
              }); // end create.

              pdf_link.parentNode.appendChild(email_btn);
            });

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _setupDocumentPage.apply(this, arguments);
}

function setupEFormPage() {
  return _setupEFormPage.apply(this, arguments);
}

function _setupEFormPage() {
  _setupEFormPage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee12() {
    var is_eform_page, clinicName, email_parent, _email_parent;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            is_eform_page = true;
            clinicName = localStorage["clinicname"];
            email_parent = document.querySelector(".DoNotPrint td") || document.querySelector("#BottomButtons") || document.querySelector("#topbar > form") || document.body;

            if (!email_parent) {
              is_eform_page = false;
              _email_parent = document.querySelector("#save div:last-child");
            }

            if (email_parent) {
              _context12.next = 7;
              break;
            }

            // bail
            console.warn("Cannot find position for email button.");
            return _context12.abrupt("return");

          case 7:
            _context12.next = 9;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token").then( /*#__PURE__*/function () {
              var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11(access_token) {
                var html;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        html = document.cloneNode(true);
                        _context11.next = 3;
                        return convertImagesToDataURLs(html);

                      case 3:
                        stripScripts(html);
                        html = html.documentElement.outerHTML;
                        pubsub.publish("eform", {
                          name: "eForm",
                          html: html
                        });

                      case 6:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));

              return function (_x18) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _setupEFormPage.apply(this, arguments);
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
  var style = ".cortico-btn {\n  -webkit-appearance:none;\n  -moz-appearance:none;\n  appearance:none;\n  margin: 0.5rem;\n  background:#5b6ce2;\n  border: 1px solid #d8ddff;\n  border-radius:.5rem;\n  color:#fff;\n  cursor:pointer;\n  display:inline-block;\n  font-family:Montserrat,sans-serif;\n  font-size:.8rem;\n  font-weight:600;\n  height:30px;\n  line-height:1.2rem;\n  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);\n  outline:0;\n  padding:0 1rem;\n  text-align:center;\n  text-decoration:none;\n  transition:background .2s,border .2s,box-shadow .2s,color .2s;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  vertical-align:middle;\n  white-space:nowrap;\n  }\n  .cortico-btn:focus {\n  box-shadow:0 0 0 .1rem rgba(92,112,255,.2)\n  }\n  .cortico-btn:focus,\n  .cortico-btn:hover {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-btn.active,\n  .cortico-btn:active {\n  background:white;\n  border-color:#5b6ce2;\n  color: #5b6ce2;\n  text-decoration:none\n  }\n  .cortico-btn-small {\n    height: auto;\n    padding: 2px;\n  }\n  .cortico-input {\n  font-size: 16px;\n  padding: 5px 5px;\n  margin: 0px 10px;\n  width: 35%;\n  background-color: transparent;\n  border: 1px solid rgb(75, 84, 246);\n  }\n  .cortico-input.disabled {\n  background-color: #DDD;\n  color: #999;\n  }\n  .cortico-btn.inline {\n  width: 100%;\n  display: inline-block;\n  margin: 10px auto;\n  }\n  .bottom {\n  position: absolute;\n  bottom: 1px;\n  left: 10px;\n  }\n  .warning {\n  background-color: #cc3300;\n  }\n  ";

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
  _createSideBar = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee13() {
    var sidebar, styleSheet, styles;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            if (!window.corticoSidebar) {
              _context13.next = 2;
              break;
            }

            return _context13.abrupt("return");

          case 2:
            sidebar = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n  <div class='cortico-sidebar'>\n    <a href=\"https://cortico.ca\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC\"  alt=\"Cortico\" style=\"margin-bottom: 25px;\" /></a>\n    <div class='cortico-sidebar-close'>Close</div>\n  </div>\n  ", {
              events: {
                "click .cortico-sidebar-close": function clickCorticoSidebarClose() {
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

            _context13.t0 = sidebar;
            _context13.next = 7;
            return getCorticoLogin();

          case 7:
            _context13.t1 = _context13.sent;

            _context13.t0.appendChild.call(_context13.t0, _context13.t1);

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
            return _context13.abrupt("return", sidebar);

          case 22:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
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

function addMenu(_x2) {
  return _addMenu.apply(this, arguments);
}

function _addMenu() {
  _addMenu = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee14(container) {
    var navigation, menu, sidebar;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            navigation = document.querySelector("#firstMenu #navList") || document.querySelector("#firstMenu #navlist");
            menu = document.createElement("li");
            menu.textContent = "Cortico";
            menu.style.color = "rgb(75, 84, 246)";
            menu.style.cursor = "pointer";
            _context14.next = 7;
            return createSideBar();

          case 7:
            sidebar = _context14.sent;
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
                modal.setContent((0,_modules_cortico_Disclaimer__WEBPACK_IMPORTED_MODULE_17__["default"])());
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
            return _context14.stop();
        }
      }
    }, _callee14);
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
  _getCorticoLogin = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee16() {
    var container, jwt_expired, loginButton, loggedInAsText, loggedInAsHtml, btnEvent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<div></div>");

            if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)()) {
              _context16.next = 3;
              break;
            }

            return _context16.abrupt("return", container);

          case 3:
            jwt_expired = null;
            loginButton = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn'>Sign in at Cortico</button>");
            loggedInAsText = "";
            loggedInAsHtml = "";
            btnEvent = {
              "click .cortico-btn": function clickCorticoBtn(e) {
                if (!(0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) return;
                /*
                if (e.target.className == "cortico-btn") {
                  const loginForm = document.querySelector(".login-form");
                  loginForm.classList.add("show");
                }*/

                pubsub.publish("signin");
              }
            };
            _context16.next = 10;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_username").then(function (username) {
              loggedInAsText = "Logged in as ".concat(username);
            });

          case 10:
            _context16.next = 12;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_expired").then(function (expired) {
              jwt_expired = expired;

              if (jwt_expired === false) {
                loginButton = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("<button class='cortico-btn'>Log out</button>");
                loggedInAsHtml = "<p>".concat(loggedInAsText, "</p>");
                btnEvent = {
                  "click .cortico-btn": function () {
                    var _clickCorticoBtn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee15(e) {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee15$(_context15) {
                        while (1) {
                          switch (_context15.prev = _context15.next) {
                            case 0:
                              if (e.target.className == "cortico-btn") {
                                if (window.is_dev) {
                                  localStorage.removeItem("jwt_access_token");
                                  localStorage.removeItem("jwt_expired");
                                } else {
                                  chrome.storage.local.remove(["jwt_access_token", "jwt_expired"]);
                                }

                                if (!alert("Logged out from cortico, reloading...")) window.location.reload();
                              }

                            case 1:
                            case "end":
                              return _context15.stop();
                          }
                        }
                      }, _callee15);
                    }));

                    function clickCorticoBtn(_x19) {
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
            return _context16.abrupt("return", container);

          case 14:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
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
      if (!alert("Your clinic name has changed, the page will now reload")) window.location.reload();
    }
  });
  return container;
}

function getEligButton() {
  var button = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.create)("\n    <button class='cortico-btn inline'>Check Eligibility</button>");
  var container = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.createSidebarContainer)(button, {
    events: {
      "click .cortico-btn.inline": function () {
        var _clickCorticoBtnInline = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(e) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  console.log("Check Eligibility Start");
                  _context2.next = 3;
                  return checkAllEligibility();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function clickCorticoBtnInline(_x3) {
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
        var _clickCorticoBtnWarningBottom = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(e) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!confirm("Are you sure you want to clear your cache?")) {
                    _context3.next = 8;
                    break;
                  }

                  localStorage.clear();

                  if (window.is_dev) {
                    _context3.next = 5;
                    break;
                  }

                  _context3.next = 5;
                  return chrome.storage.local.clear();

                case 5:
                  if (!alert("Successfully reset cache, the page will now reload.")) window.location.reload();
                  _context3.next = 9;
                  break;

                case 8:
                  console.log("Clear cache cancelled");

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function clickCorticoBtnWarningBottom(_x4) {
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

  function drop_handler(_x5) {
    return _drop_handler.apply(this, arguments);
  } // Maybe better to use event delegation in the future


  function _drop_handler() {
    _drop_handler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(ev) {
      var newStartTime, apptLink, apptLinkText, apptUrl, origin, namespace, result, text, temp, formData, originalStartTime, apptDate, duration, newEndTime, _newStartTime, _newEndTime, apptDoctor, targetDoctor, isSameDoctor, doctor, parent;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (isValidDragItem()) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              handleColors(ev.target); // Sibling table cell has the start time

              newStartTime = ev.target.parentElement.firstElementChild.firstElementChild.textContent.trim(); // Get the appointment edit link, we're going to fetch this page in memory later

              apptLink = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.getAppointmentLink)(dragSelectedTarget);

              if (apptLink) {
                _context4.next = 8;
                break;
              }

              alert("No Valid Appointment Link Found");
              return _context4.abrupt("return", false);

            case 8:
              apptLinkText = apptLink.attributes.onclick.textContent; //Get the URL and Take out the "../" in front

              apptUrl = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.extractApptUrl)(apptLinkText); //Get our base url with the provider

              origin = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)();
              namespace = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)();
              _context4.next = 14;
              return appointmentEditRequest(origin, namespace, apptUrl);

            case 14:
              result = _context4.sent;
              _context4.next = 17;
              return result.text();

            case 17:
              text = _context4.sent;
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
                _context4.next = 31;
                break;
              }

              alert("Cannot overlap to the next day");
              return _context4.abrupt("return");

            case 31:
              apptDoctor = formData.get("provider_no");
              targetDoctor = getCurrentProviderNoFromTd(ev.target);
              isSameDoctor = apptDoctor === targetDoctor;
              doctor = targetDoctor;
              formData.set("start_time", newStartTime);
              formData.set("end_time", newEndTime);

              if (!isSameDoctor) {
                _context4.next = 49;
                break;
              }

              _context4.next = 40;
              return updateAppointment(origin, namespace, formData);

            case 40:
              result = _context4.sent;
              _context4.next = 43;
              return result.text();

            case 43:
              text = _context4.sent;
              parent = ev.target.parentElement;
              parent.insertBefore(dragSelectedTarget, ev.target);
              updateAppointmentAnchorLinks(dragSelectedTarget, {
                start_time: originalStartTime,
                provider_no: apptDoctor
              }, {
                start_time: newStartTime,
                provider_no: targetDoctor
              });
              _context4.next = 50;
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
              return _context4.stop();
          }
        }
      }, _callee4);
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
  _checkAllEligibility = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee17() {
    var nodes, appointmentInfo, length, providerNo, error, i, temp, demographic_no, result, patientInfo, healthNumber, province, text, lowerCaseText, requestSuccess, _text, jsonRes, verified;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            if (!(window.checkAllEligibilityRunning === true)) {
              _context17.next = 2;
              break;
            }

            return _context17.abrupt("return", alert("Check Already Running"));

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
            _context17.prev = 12;
            i = 0;

          case 14:
            if (!(i < length)) {
              _context17.next = 64;
              break;
            }

            temp = Object.assign({}, appointmentInfo[i]);
            temp.total = length;
            temp.current = i + 1;
            publish("check-eligibility", temp);
            demographic_no = appointmentInfo[i].demographic_no;
            result = null; // empty appointment node, do not check

            if (!(!demographic_no || demographic_no == 0)) {
              _context17.next = 23;
              break;
            }

            return _context17.abrupt("continue", 61);

          case 23:
            // In cases where the first appointment in the schedule is an empty
            // appointment, get the providerNo from the node itself
            if (!providerNo) providerNo = getProviderNoFromTd(nodes[i]);
            _context17.next = 26;
            return getPatientInfo(demographic_no);

          case 26:
            patientInfo = _context17.sent;
            healthNumber = patientInfo["Health Ins"].replace(/\s+/g, " ").trim();
            province = patientInfo["Province"].replace(/\s+/g, " ").trim();
            _context17.prev = 29;
            _context17.next = 32;
            return checkEligiblity(demographic_no, (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)(), (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)(), providerNo, healthNumber, province);

          case 32:
            result = _context17.sent;
            _context17.next = 38;
            break;

          case 35:
            _context17.prev = 35;
            _context17.t0 = _context17["catch"](29);
            console.error(_context17.t0);

          case 38:
            text = null;
            lowerCaseText = null;
            requestSuccess = false;

            if (!(result && result.status === 200)) {
              _context17.next = 49;
              break;
            }

            _context17.next = 44;
            return result.text();

          case 44:
            _text = _context17.sent;
            lowerCaseText = _text.toLowerCase();

            if (oscar.isOscarGoHost()) {
              jsonRes = JSON.parse(lowerCaseText);

              if (jsonRes && jsonRes.ret) {
                requestSuccess = true;
              }
            }

            _context17.next = 51;
            break;

          case 49:
            text = "Failed to fetch";
            lowerCaseText = "Failed to fetch";

          case 51:
            if (!lowerCaseText.includes("error in teleplan connection")) {
              _context17.next = 55;
              break;
            }

            alert("Automatic Eligiblity Check Aborted. \n" + text);
            error = true;
            return _context17.abrupt("break", 64);

          case 55:
            verified = false;

            if (lowerCaseText.includes("this is not an insured benefit")) {
              verified = "uninsured";
              console.log("Patient not insured");
            } else if (!lowerCaseText.includes("failure-phn") && lowerCaseText.includes("success") || lowerCaseText.includes("health card passed validation") || lowerCaseText.includes("patient eligible") || requestSuccess) {
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
            _context17.next = 61;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, 1500);
            });

          case 61:
            i++;
            _context17.next = 14;
            break;

          case 64:
            _context17.next = 70;
            break;

          case 66:
            _context17.prev = 66;
            _context17.t1 = _context17["catch"](12);
            console.log(_context17.t1);
            alert(_context17.t1);

          case 70:
            _context17.prev = 70;
            window.checkAllEligibilityRunning = false;
            pubsub.publish("check-eligibility", {
              complete: true,
              total: length,
              error: error
            });
            return _context17.finish(70);

          case 74:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[12, 66, 70, 74], [29, 35]]);
  }));
  return _checkAllEligibility.apply(this, arguments);
}

function getPharmacyResults(searchTerm) {
  var uriSafeSearch = searchTerm.toLowerCase().replace(" ", "+");
  var newLocal = "oscarRx/managePharmacy.do?method=search&search&term=" + uriSafeSearch;
  var url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)() + "/" + (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)() + "/" + newLocal;
  return fetch(url, {
    method: "GET",
    headers: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
    headers: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
        _healthNumber$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_healthNumber$split, 2),
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

  if (providerSchedule) {
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
}

function sendPatientPrescriptionNotification() {
  var clinicName = localStorage["clinicname"];
  var url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/notify-prescription/");
  var formData = new FormData();
  formData.append("demographic_no", (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)());
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
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(e) {
      var result, text, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!e.target.matches("#faxBUtton, #faxAndPasteButton")) {
                _context5.next = 8;
                break;
              }

              _context5.next = 3;
              return sendPatientPrescriptionNotification();

            case 3:
              result = _context5.sent;
              _context5.next = 6;
              return result.text();

            case 6:
              text = _context5.sent;
              json = JSON.parse(text);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x6) {
      return _ref2.apply(this, arguments);
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

function setupPreferredPharmacy(_x7, _x8) {
  return _setupPreferredPharmacy.apply(this, arguments);
}

function _setupPreferredPharmacy() {
  _setupPreferredPharmacy = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee18(code, demographic_no) {
    var pharmacyCode, corticoPharmacy, respText, corticoPharmacyText, faxNumber, searchTerm, fullPharmacyName, demographicNo, currPharmacyResults, currPharmacyText, preferredPharmacy, currentlyUsingPharmacy, results, text, json, pharmacyUpdated, isRxPage, pharmacy, setPharmacyResults, setPharmacyText, msg;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            pharmacyCode = localStorage.getItem("currentPharmacyCode");

            if (code) {
              pharmacyCode = code;
            }

            _context18.next = 4;
            return getPharmacyDetails(pharmacyCode);

          case 4:
            corticoPharmacy = _context18.sent;
            _context18.next = 7;
            return corticoPharmacy.text();

          case 7:
            respText = _context18.sent;
            corticoPharmacyText = JSON.parse(respText);
            faxNumber = corticoPharmacyText[0]["fax_number"] || null;
            searchTerm = corticoPharmacyText[0]["name"] || null;
            fullPharmacyName = searchTerm; // only use the first word on the pharmacy name to search for list
            // then remove letter or number

            searchTerm = searchTerm ? searchTerm.split(" ")[0] : null;
            searchTerm = searchTerm.replace(/[^\w\s]/gi, ""); // cleanup fax number to format starting with 1
            // This might be an issue if the oscar pharmacies don't match this format

            if (faxNumber) faxNumber = formatNumber(faxNumber);
            demographicNo = demographic_no;

            if (!demographic_no) {
              demographicNo = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)();
            }

            _context18.next = 19;
            return getCurrentPharmacy(demographicNo);

          case 19:
            currPharmacyResults = _context18.sent;
            _context18.t0 = JSON;
            _context18.next = 23;
            return currPharmacyResults.text();

          case 23:
            _context18.t1 = _context18.sent;
            currPharmacyText = _context18.t0.parse.call(_context18.t0, _context18.t1);
            console.log("Current Pharmacy:", currPharmacyText);

            if (currPharmacyText) {
              preferredPharmacy = currPharmacyText[0];
              localStorage.setItem("preferredPharmacy", preferredPharmacy);
            }

            currentlyUsingPharmacy = preferredPharmacy && preferredPharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) && (preferredPharmacy.fax === faxNumber || faxNumber.includes(preferredPharmacy.fax));
            console.log("currently using pharmacy ".concat(searchTerm.toLowerCase(), ", ").concat(currentlyUsingPharmacy));

            if (!(searchTerm && !currentlyUsingPharmacy)) {
              _context18.next = 56;
              break;
            }

            _context18.next = 32;
            return getPharmacyResults(searchTerm);

          case 32:
            results = _context18.sent;
            _context18.next = 35;
            return results.text();

          case 35:
            text = _context18.sent;
            json = JSON.parse(text);
            pharmacyUpdated = json.length > 0;
            isRxPage = window.location.href.indexOf("oscarRx/choosePatient.do") > -1;

            if (!pharmacyUpdated) {
              _context18.next = 52;
              break;
            }

            pharmacy = null;

            if (json.length > 1) {
              pharmacy = json.find(function (item) {
                var item_name = item.name.toLowerCase();
                var cleaned_item_name = item_name.replace(/[^\w\s]/gi, "");
                return (item_name.includes(searchTerm.toLowerCase()) || cleaned_item_name.includes(searchTerm.toLowerCase())) && item.fax.length > 8 && ( // either if the fax is the same or the formatted fax has the values
                formatNumber(item.fax) === faxNumber || faxNumber.includes(item.fax));
              });
            }

            if (!pharmacy) {
              _context18.next = 50;
              break;
            }

            _context18.next = 45;
            return setPreferredPharmacy(pharmacy, demographicNo);

          case 45:
            setPharmacyResults = _context18.sent;
            _context18.next = 48;
            return setPharmacyResults.text();

          case 48:
            setPharmacyText = _context18.sent;
            if (isRxPage) alert("Updating preferred pharmacy, press Ok to reload");else console.log("Updating preferred pharmacy");

          case 50:
            _context18.next = 56;
            break;

          case 52:
            msg = "Customer pharmacy ".concat(fullPharmacyName, " does not exist in your Oscar pharmacy database!");
            storePharmaciesFailureCache(demographicNo, msg);
            displayPharmaciesFailure(demographicNo, msg);
            if (isRxPage) alert(msg);else console.warn(msg);

          case 56:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));
  return _setupPreferredPharmacy.apply(this, arguments);
}

function displayPharmaciesFailure(demograhicNo, msg) {
  var sidebar_panel = document.querySelector(".cortico-sidebar");
  sidebar_panel.appendChild((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.htmlToElement)("<div>demo#" + demograhicNo + " : " + msg));
}

function storePharmaciesCache(demographicNo, hasPharmacy) {
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

  demographics.push({
    demographicNo: demographicNo,
    hasPharmacy: hasPharmacy
  });
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

function setClinicName() {
  return _setClinicName.apply(this, arguments);
}

function _setClinicName() {
  _setClinicName = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee19() {
    var token, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            if (!localStorage.getItem("name")) {
              _context19.next = 2;
              break;
            }

            return _context19.abrupt("return");

          case 2:
            _context19.next = 4;
            return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token");

          case 4:
            token = _context19.sent;

            if (token) {
              url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/api/public/clinic-settings/");
              fetch(url, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token
                }
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                return localStorage.setItem("name", response.clinic_name);
              }).catch(function (error) {
                return console.error(error);
              });
            }

          case 6:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));
  return _setClinicName.apply(this, arguments);
}

function getDiagnosticFromCortico(_x9, _x10, _x11) {
  return _getDiagnosticFromCortico.apply(this, arguments);
}

function _getDiagnosticFromCortico() {
  _getDiagnosticFromCortico = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee20(appt_no, notes, token) {
    var clinicName, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            clinicName = localStorage["clinicname"];
            url = "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/api/encrypted/diagnostic-results/?appointment_id=").concat(appt_no, "&notes=").concat(notes);
            return _context20.abrupt("return", fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
              }
            }).then(function (res) {
              if ((res + "").includes("Unauthorized") || res.status == 401) {
                (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.showLoginForm)();
                return;
              }

              return res;
            }).catch(function (err) {
              if ((err + "").includes("Unauthorized")) {
                (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.showLoginForm)();
              } else {
                alert("Failed to fetch data. There might be a problem with Cortico or the patient responses do not exist");
              }
            }));

          case 3:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));
  return _getDiagnosticFromCortico.apply(this, arguments);
}

function setupPreferredPharmacies() {
  return _setupPreferredPharmacies.apply(this, arguments);
}

function _setupPreferredPharmacies() {
  _setupPreferredPharmacies = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee21() {
    var appointments, error, i, temp, cancelled, element, demographicNo, apptUrl, _pharmaciesCache, pharmaciesCache, demographics, cachedDemographics, apptTitle, pharmacyCode;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
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
              _context21.next = 54;
              break;
            }

            temp = {};
            temp.total = appointments.length;
            temp.current = i;
            pubsub.publish("check-batch-pharmacies", temp);
            cancelled = appointments[i].querySelector("a.apptStatus[title='Cancelled ']");

            if (!cancelled) {
              _context21.next = 15;
              break;
            }

            return _context21.abrupt("continue", 51);

          case 15:
            element = appointments[i].querySelector("a.apptLink");

            if (!(!element || !element.attributes)) {
              _context21.next = 18;
              break;
            }

            return _context21.abrupt("continue", 51);

          case 18:
            demographicNo = null;
            _context21.prev = 19;
            apptUrl = (0,_modules_cortico_Appointments_Appointments__WEBPACK_IMPORTED_MODULE_7__.extractApptUrl)(element.attributes.onclick.textContent);
            demographicNo = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)(apptUrl);
            _pharmaciesCache = localStorage.getItem("pharmaciesCache");
            pharmaciesCache = JSON.parse(_pharmaciesCache);
            demographics = new Array();
            console.log("Checking if demographic is cached...");

            if (pharmaciesCache && pharmaciesCache["demographics"]) {
              cachedDemographics = pharmaciesCache["demographics"];
              demographics = Array.isArray(cachedDemographics) ? cachedDemographics : JSON.parse(cachedDemographics);
              demographics = demographics.map(function (x) {
                return x.demographicNo;
              });
            }

            if (!(demographics && Array.isArray(demographics) && demographics.includes(demographicNo) && pharmaciesCache.date == dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format("YYYY-MM-DD"))) {
              _context21.next = 30;
              break;
            }

            console.log("Demographic ".concat(demographicNo, " is cached, skipping"));
            return _context21.abrupt("continue", 51);

          case 30:
            _context21.next = 32;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, 2000);
            });

          case 32:
            console.log("Checking if appt has pharmacy codes...");
            apptTitle = element.attributes.title.textContent;
            pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);

            if (pharmacyCode) {
              _context21.next = 39;
              break;
            }

            storePharmaciesCache(demographicNo, false);
            console.log("Pharmacy code not found from appt");
            return _context21.abrupt("continue", 51);

          case 39:
            storePharmaciesCache(demographicNo, true);
            console.log("phar", pharmacyCode);
            _context21.next = 43;
            return setupPreferredPharmacy(pharmacyCode, demographicNo);

          case 43:
            _context21.next = 49;
            break;

          case 45:
            _context21.prev = 45;
            _context21.t0 = _context21["catch"](19);
            storePharmaciesFailureCache(demographicNo, _context21.t0.message);
            displayPharmaciesFailure(demographicNo, _context21.t0.message);

          case 49:
            _context21.prev = 49;
            return _context21.finish(49);

          case 51:
            i++;
            _context21.next = 7;
            break;

          case 54:
            window.setupPreferredPharmaciesRunning = false;
            pubsub.publish("check-batch-pharmacies", {
              complete: true,
              total: length,
              error: error
            });

          case 56:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[19, 45, 49, 51]]);
  }));
  return _setupPreferredPharmacies.apply(this, arguments);
}

function init_diagnostic_viewer_button() {
  return _init_diagnostic_viewer_button.apply(this, arguments);
}

function _init_diagnostic_viewer_button() {
  _init_diagnostic_viewer_button = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee24() {
    var notesField, notesValue, last_button, corticoDiagnosticViewBtn, update_diagnostic_button_visibility, open_diagnostic_viewer, _open_diagnostic_viewer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _open_diagnostic_viewer = function _open_diagnostic_view2() {
              _open_diagnostic_viewer = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee23(e) {
                var appt_no;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if ((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.checkCorticoUrl)(e.originalEvent)) {
                          _context23.next = 2;
                          break;
                        }

                        return _context23.abrupt("return");

                      case 2:
                        appt_no = getQueryStringValue("appointment_no");
                        _context23.next = 5;
                        return (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.loadExtensionStorageValue)("jwt_access_token").then( /*#__PURE__*/function () {
                          var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee22(access_token) {
                            var diagnostic_response, diagnostic_text;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee22$(_context22) {
                              while (1) {
                                switch (_context22.prev = _context22.next) {
                                  case 0:
                                    _context22.next = 2;
                                    return getDiagnosticFromCortico(appt_no, notesValue, access_token);

                                  case 2:
                                    diagnostic_response = _context22.sent;

                                    if (!diagnostic_response) {
                                      _context22.next = 11;
                                      break;
                                    }

                                    _context22.t0 = String;
                                    _context22.next = 7;
                                    return diagnostic_response.text();

                                  case 7:
                                    _context22.t1 = _context22.sent;
                                    diagnostic_text = (0, _context22.t0)(_context22.t1);
                                    _context22.next = 11;
                                    return showDiagnosticResults(diagnostic_text);

                                  case 11:
                                  case "end":
                                    return _context22.stop();
                                }
                              }
                            }, _callee22);
                          }));

                          return function (_x21) {
                            return _ref5.apply(this, arguments);
                          };
                        }());

                      case 5:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              }));
              return _open_diagnostic_viewer.apply(this, arguments);
            };

            open_diagnostic_viewer = function _open_diagnostic_view(_x20) {
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
            return _context24.stop();
        }
      }
    }, _callee24);
  }));
  return _init_diagnostic_viewer_button.apply(this, arguments);
}

function init_recall_button() {
  return _init_recall_button.apply(this, arguments);
}

function _init_recall_button() {
  _init_recall_button = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee26() {
    var statusOption, statusValue, last_button, corticoRecallButton, update_recall_button_visibility, send_patient_recall_email, _send_patient_recall_email;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _send_patient_recall_email = function _send_patient_recall_2() {
              _send_patient_recall_email = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee25(e) {
                var patientInfo, patientEmail, formData, apptTime, apptDate, apptPatient, apptSchedule, cleanedSchedule, cleanedPatient, clinicName;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        e.preventDefault();
                        _context25.next = 3;
                        return getPatientInfo();

                      case 3:
                        patientInfo = _context25.sent;
                        patientEmail = patientInfo.email;
                        formData = new FormData(document.querySelector("form[name=EDITAPPT]"));
                        apptTime = formData.get("start_time");
                        apptDate = formData.get("appointment_date");
                        apptPatient = formData.get("keyword");

                        if (patientEmail) {
                          _context25.next = 12;
                          break;
                        }

                        alert("Patient has no email");
                        return _context25.abrupt("return");

                      case 12:
                        if (!(!apptTime || !apptDate)) {
                          _context25.next = 15;
                          break;
                        }

                        alert("Please provide date/time");
                        return _context25.abrupt("return");

                      case 15:
                        apptSchedule = apptDate + "T" + apptTime;
                        cleanedSchedule = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(apptSchedule).format("h:mmA on MMMM D");
                        cleanedPatient = apptPatient ? apptPatient : "Patient";
                        clinicName = localStorage["clinicname"] || "Your Medical Clinic";
                        window.location.href = "mailto:".concat(patientEmail, "?subject=Your doctor wants to speak with you&") + "body=Dear ".concat(cleanedPatient, ",%0d%0aYour doctor needs to follow up with you regarding some documents or results.%0d%0a") + "We have tentatively booked you an appointment at ".concat(cleanedSchedule, ".%0d%0a%0d%0aPlease confirm with the following link:") + "".concat((0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)(), "/get-patient-appointment-lookup-url/%0d%0a%0d%0a") + "Sincerely,%0d%0a".concat(clinicName.toUpperCase(), " STAFF");

                      case 20:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              }));
              return _send_patient_recall_email.apply(this, arguments);
            };

            send_patient_recall_email = function _send_patient_recall_(_x22) {
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
            return _context26.stop();
        }
      }
    }, _callee26);
  }));
  return _init_recall_button.apply(this, arguments);
}

function init_medium_option() {
  return _init_medium_option.apply(this, arguments);
}

function _init_medium_option() {
  _init_medium_option = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee27() {
    var statusOption, storedMedium;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            statusOption = document.querySelector("select[name='resources']");
            storedMedium = localStorage.getItem("medium-option");

            if (statusOption && storedMedium) {
              statusOption.value = storedMedium;
            }

          case 3:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  }));
  return _init_medium_option.apply(this, arguments);
}

function getPatientInfo(_x12) {
  return _getPatientInfo.apply(this, arguments);
}

function _getPatientInfo() {
  _getPatientInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee28(demographicNo) {
    var result, text, el, info, re, emails;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            console.log("demo #", demographicNo);
            _context28.next = 3;
            return getDemographicPageResponse(demographicNo);

          case 3:
            result = _context28.sent;
            _context28.next = 6;
            return result.text();

          case 6:
            text = _context28.sent;
            el = document.createElement("html");
            el.innerHTML = text;
            info = {};
            el.querySelectorAll("span.label").forEach(function (label) {
              info[label.innerText.replace(/[^\w\s]+/g, "").trim()] = label.nextElementSibling ? label.nextElementSibling.innerText.trim() : null;
            });
            re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
            emails = text.match(re);
            if (emails && emails.length) info.email = emails[0];
            return _context28.abrupt("return", info);

          case 15:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));
  return _getPatientInfo.apply(this, arguments);
}

function getDemographicPageResponse(demographic) {
  var origin = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getOrigin)();
  var namespace = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getNamespace)();
  var demographicNo = demographic || (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getDemographicNo)();

  if (!demographicNo) {
    console.trace();
    console.error("Failed to load demographics.");
    return "";
  }

  var url = "".concat(origin, "/").concat(namespace, "/demographic/demographiccontrol.jsp?demographic_no=").concat(demographicNo, "&displaymode=edit&dboperation=search_detail");
  return fetch(url);
}

function emailPatient(_x13, _x14, _x15) {
  return _emailPatient.apply(this, arguments);
}

function _emailPatient() {
  _emailPatient = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee29(patientInfo, token, payload) {
    var url, patientEmail, data, subject;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            url = (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)() + "/api/plug-in/email-form/";
            patientEmail = patientInfo.email || null;

            if (patientEmail) {
              _context29.next = 5;
              break;
            }

            alert("The patient has no email");
            return _context29.abrupt("return");

          case 5:
            patientEmail = "clark@countable.ca";
            data = {
              clinic_host: (0,_modules_Utils_Utils__WEBPACK_IMPORTED_MODULE_12__.getCorticoUrl)().replace(/http.?:\/\//, ""),
              to: "aaron@countable.ca"
            };

            if (payload.html) {
              data.pdf_html = payload.html;
            } else if (payload.attachment) {
              data.attachment = payload.attachment;
            }

            subject = document.querySelector('[name="subject"]');

            if (subject && subject.value) {
              data.subject = subject.value;
            }

            return _context29.abrupt("return", fetch(url, {
              method: "POST",
              body: JSON.stringify(data),
              mode: "cors",
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer ".concat(token)
              } // TODO: handle other cortico api errors the same way

            }).then(handleErrors).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (!data.success) {
                alert("Sending email failed: ".concat(data.message));
              }

              return data;
            }).catch(function (err) {
              console.error("Cortico: Error sending email: ", err);

              if ((err + "").includes("Unauthorized")) {
                alert("Your credentials have expired. Please login again");

                if (window.is_dev) {
                  localStorage.setItem("jwt_expired", true);
                } else {
                  chrome.storage.local.set({
                    jwt_expired: true
                  });
                }

                (0,_modules_cortico_Login_Login__WEBPACK_IMPORTED_MODULE_9__.addLoginForm)(chrome);
                var loginForm = document.querySelector(".login-form");
                loginForm.classList.add("show");
              } else {
                alert("Something went wrong with Cortico.");
              }
            }));

          case 11:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));
  return _emailPatient.apply(this, arguments);
}

function handleErrors(response) {
  if (!response.ok) {
    if (response.status === 401) {
      throw Error("Unauthorized");
    } else {
      throw Error(response.statusText);
    }
  }

  return response;
}
})();

/******/ })()
;
//# sourceMappingURL=cortico-min.js.map