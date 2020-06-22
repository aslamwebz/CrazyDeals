(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/admin/pages/DashboardPage.js":
/*!***************************************************!*\
  !*** ./resources/js/admin/pages/DashboardPage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/HorizontalAvatarList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/MapWithBubbles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/ProductMedia'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/SupportTicket'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/UserProgressTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-infinite-calendar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

















var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

var DashboardPage = /*#__PURE__*/function (_React$Component) {
  _inherits(DashboardPage, _React$Component);

  var _super = _createSuper(DashboardPage);

  function DashboardPage() {
    _classCallCheck(this, DashboardPage);

    return _super.apply(this, arguments);
  }

  _createClass(DashboardPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this is needed, because InfiniteCalendar forces window scroll
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var primaryColor = !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('primary');
      var secondaryColor = !(function webpackMissingModule() { var e = new Error("Cannot find module 'utils/colors'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('secondary');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "DashboardPage",
        title: "Dashboard",
        breadcrumbs: [{
          name: 'Dashboard',
          active: true
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 3,
        md: 6,
        sm: 6,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Total Profit",
        subtitle: "This month",
        number: "9.8k",
        color: "secondary",
        progress: {
          value: 75,
          label: 'Last month'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 3,
        md: 6,
        sm: 6,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Monthly Visitors",
        subtitle: "This month",
        number: "5,400",
        color: "secondary",
        progress: {
          value: 45,
          label: 'Last month'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 3,
        md: 6,
        sm: 6,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "New Users",
        subtitle: "This month",
        number: "3,400",
        color: "secondary",
        progress: {
          value: 90,
          label: 'Last month'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 3,
        md: 6,
        sm: 6,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Bounce Rate",
        subtitle: "This month",
        number: "38%",
        color: "secondary",
        progress: {
          value: 60,
          label: 'Last month'
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "8",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Total Revenue", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "text-muted text-capitalize"
      }, "This year")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).line.data,
        options: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).line.options
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "4",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "Total Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).bar.data,
        options: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).bar.options
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
        flush: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: 25,
        color: primaryColor
      }), " Cost of sales", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        color: "secondary"
      }, "$3000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: 25,
        color: primaryColor
      }), " Management costs ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        color: "secondary"
      }, "$1200")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: 25,
        color: primaryColor
      }), " Financial costs", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        color: "secondary"
      }, "$800")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        size: 25,
        color: primaryColor
      }), " Other operating costs ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        color: "secondary"
      }, "$2400")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardGroup"], {
        style: {
          marginBottom: '1rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        bgColor: "white",
        inverse: false,
        icon: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        title: "50+ Likes",
        subtitle: "People you like"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        bgColor: "white",
        inverse: false,
        icon: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        title: "10+ Reviews",
        subtitle: "New Reviews"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        bgColor: "white",
        inverse: false,
        icon: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        title: "30+ Shares",
        subtitle: "New Shares"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: "6",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "New Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(function (_ref) {
        var id = _ref.id,
            image = _ref.image,
            title = _ref.title,
            description = _ref.description,
            right = _ref.right;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/ProductMedia'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          key: id,
          image: image,
          title: title,
          description: description,
          right: right
        });
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: "6",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, "New Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/UserProgressTable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        headers: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          size: 25
        }), 'name', 'date', 'participation', '%'],
        usersData: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          data: [0, 13000, 5000, 24000, 16000, 25000, 10000]
        }),
        options: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "text-primary",
        style: {
          position: 'absolute'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), " Sales")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          data: [10000, 15000, 5000, 10000, 5000, 10000, 10000]
        }),
        options: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "text-primary",
        style: {
          position: 'absolute'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), " Revenue")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: 4,
        md: 4,
        sm: 12,
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-chartjs-2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          data: [0, 13000, 5000, 24000, 16000, 25000, 10000].reverse()
        }),
        options: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/chartjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "text-primary",
        style: {
          position: 'absolute',
          right: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/md'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), " Profit"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "4",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-infinite-calendar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        selected: today,
        minDate: lastWeek,
        width: "100%",
        theme: {
          accentColor: primaryColor,
          floatingNav: {
            background: secondaryColor,
            chevron: primaryColor,
            color: '#FFF'
          },
          headerColor: primaryColor,
          selectionColor: secondaryColor,
          textColor: {
            active: '#FFF',
            "default": '#333'
          },
          todayColor: secondaryColor,
          weekdayColor: primaryColor
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "8",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        inverse: true,
        className: "bg-gradient-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
        className: "bg-gradient-primary"
      }, "Map with bubbles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/MapWithBubbles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardDeck"], {
        style: {
          marginBottom: '1rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        body: true,
        style: {
          overflowX: 'auto',
          'paddingBottom': '15px',
          'height': 'fit-content',
          'paddingTop': 'inherit'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/HorizontalAvatarList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        avatars: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        avatarProps: {
          size: 50
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        body: true,
        style: {
          overflowX: 'auto',
          'paddingBottom': '15px',
          'height': 'fit-content',
          'paddingTop': 'inherit'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/HorizontalAvatarList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        avatars: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        avatarProps: {
          size: 50
        },
        reversed: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "4",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        color: "gradient-secondary",
        header: "Announcement",
        avatarSize: 60,
        name: "Jamy",
        date: "1 hour ago",
        text: "Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna",
        buttonProps: {
          children: 'show'
        },
        style: {
          height: 500
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "4",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Support Tickets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "View All")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(function (supportTicket) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/SupportTicket'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
          key: supportTicket.id
        }, supportTicket));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        lg: "4",
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        todos: !(function webpackMissingModule() { var e = new Error("Cannot find module 'demos/dashboardPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      }))));
    }
  }]);

  return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ })

}]);