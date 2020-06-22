(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/admin/pages/ChartPage.js":
/*!***********************************************!*\
  !*** ./resources/js/admin/pages/ChartPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

var genLineData = function genLineData() {
  var moreData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var moreData2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    labels: MONTHS,
    datasets: [_objectSpread({
      label: 'Dataset 1',
      backgroundColor: !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('primary'),
      borderColor: !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('primary'),
      borderWidth: 1,
      data: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
    }, moreData), _objectSpread({
      label: 'Dataset 2',
      backgroundColor: !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary'),
      borderColor: !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary'),
      borderWidth: 1,
      data: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]
    }, moreData2)]
  };
};

var genPieData = function genPieData() {
  return {
    datasets: [{
      data: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/demos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()],
      backgroundColor: [!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('primary'), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary'), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('success'), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('info'), !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('danger')],
      label: 'Dataset 1'
    }],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5']
  };
};

var ChartPage = function ChartPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    title: "Charts",
    breadcrumbs: [{
      name: 'Charts',
      active: true
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Bar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genLineData()
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genLineData({
      fill: false
    }, {
      fill: false
    })
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Stacked Line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genLineData(),
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Combo Bar / Line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genLineData({
      type: 'line',
      fill: false
    })
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Pie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genPieData()
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Doughnut"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genPieData()
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Polar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genPieData()
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 6,
    lg: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Radar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: genLineData()
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChartPage);

/***/ })

}]);