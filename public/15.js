(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/admin/pages/WidgetPage.js":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/WidgetPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/widgetPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var WidgetPage = function WidgetPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "WidgetPage",
    title: "Widgets",
    breadcrumbs: [{
      name: 'widgets',
      active: true
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/widgetPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(function (_ref, index) {
    var color = _ref.color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: index,
      lg: 4,
      md: 6,
      sm: 6,
      xs: 12,
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Total Profit",
      subtitle: "This month",
      number: "$17,800",
      color: color,
      progress: {
        value: 75,
        label: 'Last month'
      }
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/widgetPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(function (_ref2, index) {
    var bgColor = _ref2.bgColor,
        icon = _ref2.icon,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        restProps = _objectWithoutProperties(_ref2, ["bgColor", "icon", "title", "subtitle"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: index,
      lg: 4,
      md: 6,
      sm: 6,
      xs: 12,
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
      bgColor: bgColor,
      icon: icon,
      title: title,
      subtitle: subtitle
    }, restProps)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (WidgetPage);

/***/ })

}]);