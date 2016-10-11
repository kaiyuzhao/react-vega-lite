(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("vega-lite"), require("react-vega"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "vega-lite", "react-vega"], factory);
	else if(typeof exports === 'object')
		exports["ReactVegaLite"] = factory(require("react"), require("vega-lite"), require("react-vega"));
	else
		root["ReactVegaLite"] = factory(root["React"], root["vl"], root["ReactVega"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createClassFromLiteSpec = undefined;\n\nvar _VegaLite = __webpack_require__(1);\n\nvar _VegaLite2 = _interopRequireDefault(_VegaLite);\n\nvar _createClassFromLiteSpec2 = __webpack_require__(5);\n\nvar _createClassFromLiteSpec3 = _interopRequireDefault(_createClassFromLiteSpec2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _VegaLite2.default;\nvar createClassFromLiteSpec = exports.createClassFromLiteSpec = _createClassFromLiteSpec3.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vegaLite = __webpack_require__(3);\n\nvar _vegaLite2 = _interopRequireDefault(_vegaLite);\n\nvar _reactVega = __webpack_require__(4);\n\nvar _reactVega2 = _interopRequireDefault(_reactVega);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VegaLite = function VegaLite(props) {\n  var parsedProps = _extends({}, props);\n  var combinedSpec = _extends({}, props.spec);\n  if (props.data) {\n    combinedSpec.data = props.data;\n    delete parsedProps.data;\n  }\n  parsedProps.spec = _vegaLite2.default.compile(combinedSpec).spec;\n\n  return _react2.default.createElement(_reactVega2.default, parsedProps);\n};\n\nVegaLite.propTypes = _reactVega2.default.propTypes;\n\nexports.default = VegaLite;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/VegaLite.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/VegaLite.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"vl\",\"commonjs2\":\"vega-lite\",\"commonjs\":\"vega-lite\",\"amd\":\"vega-lite\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22vl%22,%22commonjs2%22:%22vega-lite%22,%22commonjs%22:%22vega-lite%22,%22amd%22:%22vega-lite%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_4__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"ReactVega\",\"commonjs2\":\"react-vega\",\"commonjs\":\"react-vega\",\"amd\":\"react-vega\"}\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22ReactVega%22,%22commonjs2%22:%22react-vega%22,%22commonjs%22:%22react-vega%22,%22amd%22:%22react-vega%22%7D?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = createClassFromLiteSpec;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _VegaLite = __webpack_require__(1);\n\nvar _VegaLite2 = _interopRequireDefault(_VegaLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// USAGE:\n// createClassFromLiteSpec(name, spec);\n// createClassFromLiteSpec(spec);\nfunction createClassFromLiteSpec() {\n  var spec = arguments.length === 1 ? arguments.length <= 0 ? undefined : arguments[0] : arguments.length <= 1 ? undefined : arguments[1];\n\n  var propTypes = _extends({}, _VegaLite2.default.propTypes);\n  delete propTypes.spec;\n\n  function Chart(props) {\n    return _react2.default.createElement(_VegaLite2.default, _extends({ spec: spec }, props));\n  }\n\n  Chart.getSpec = function getSpec() {\n    return spec;\n  };\n\n  Chart.propTypes = propTypes;\n\n  return Chart;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/createClassFromLiteSpec.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/createClassFromLiteSpec.js?");

/***/ }
/******/ ])
});
;