"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _reactI18next = require("react-i18next");

var _i18next = _interopRequireDefault(require("i18next"));

var _application = _interopRequireDefault(require("./components/application"));

var _propertyType = _interopRequireWildcard(require("./components/property-type"));

var _store = _interopRequireDefault(require("./store/store"));

var _viewHelpers = _interopRequireDefault(require("../backend/utils/view-helpers/view-helpers"));

var AppComponents = _interopRequireWildcard(require("./components/app"));

var Hooks = _interopRequireWildcard(require("./hooks"));

var _apiClient = _interopRequireDefault(require("./utils/api-client"));

var _withNotice = _interopRequireDefault(require("./hoc/with-notice"));

var _flat = require("../utils/flat");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development'
};
const store = (0, _store.default)(window.REDUX_STATE);
const theme = window.THEME;
const {
  locale
} = window.REDUX_STATE;

_i18next.default.use(_reactI18next.initReactI18next).init({
  resources: {
    [locale.language]: {
      translation: locale.translations
    }
  },
  lng: locale.language,
  interpolation: {
    escapeValue: false
  }
});

const Application = /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_application.default, null)))); // eslint-disable-next-line no-undef


window.regeneratorRuntime = regeneratorRuntime;
var _default = {
  withNotice: _withNotice.default,
  Application,
  ViewHelpers: _viewHelpers.default,
  UserComponents: {},
  ApiClient: _apiClient.default,
  BasePropertyComponent: _propertyType.default,
  CleanPropertyComponent: _propertyType.CleanPropertyComponent,
  env,
  ...AppComponents,
  ...Hooks,
  flat: _flat.flat
};
exports.default = _default;