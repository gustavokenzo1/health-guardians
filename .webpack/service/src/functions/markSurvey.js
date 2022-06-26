/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/markSurvey.ts":
/*!*************************************!*\
  !*** ./src/functions/markSurvey.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var src_utils_malandragem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/malandragem */ \"./src/utils/malandragem.ts\");\n\nconst handle = async () => {\n    await (0,src_utils_malandragem__WEBPACK_IMPORTED_MODULE_0__.malandragem)();\n    return {\n        statusCode: 200,\n        body: JSON.stringify({ message: \"Malandragem concluída com sucesso!\" }),\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL21hcmtTdXJ2ZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoZ3VhcmRpYW5zLy4vc3JjL2Z1bmN0aW9ucy9tYXJrU3VydmV5LnRzPzRjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFsYW5kcmFnZW0gfSBmcm9tIFwic3JjL3V0aWxzL21hbGFuZHJhZ2VtXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IG1hbGFuZHJhZ2VtKCk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJNYWxhbmRyYWdlbSBjb25jbHXDrWRhIGNvbSBzdWNlc3NvIVwiIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/markSurvey.ts\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: process.env.API_URL,\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUElfVVJMLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\",\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGd1YXJkaWFucy8uL3NyYy91dGlscy9keW5hbW9kYkNsaWVudC50cz80NTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVnaW9uOiBcImxvY2FsaG9zdFwiLFxuICBlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcbn07XG5cbmNvbnN0IGlzT2ZmbGluZSA9ICgpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XG59O1xuXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKVxuICA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxuICA6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "./src/utils/malandragem.ts":
/*!**********************************!*\
  !*** ./src/utils/malandragem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"malandragem\": () => (/* binding */ malandragem)\n/* harmony export */ });\n/* harmony import */ var src_services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _dynamodbClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\n\nconst AGUAS_LINDAS_COORDS = {\n    latitude: -15.713631,\n    longitude: -47.8984,\n};\nconst LUZIANIA_COORDS = {\n    latitude: -16.232539,\n    longitude: -47.929961,\n};\nconst malandragem = async () => {\n    const users = await _dynamodbClient__WEBPACK_IMPORTED_MODULE_1__.document.scan({ TableName: \"users\" }).promise();\n    users.Items.forEach(async (user) => {\n        const randomLatitude = Math.random() *\n            (LUZIANIA_COORDS.latitude - AGUAS_LINDAS_COORDS.latitude) +\n            AGUAS_LINDAS_COORDS.latitude;\n        const randomLongitude = Math.random() *\n            (LUZIANIA_COORDS.longitude - AGUAS_LINDAS_COORDS.longitude) +\n            AGUAS_LINDAS_COORDS.longitude;\n        const response = await src_services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/users/${user.id}/surveys`, {\n            survey: {\n                household_id: null,\n                latitude: randomLatitude,\n                longitude: randomLongitude,\n                symptom: [],\n                created_at: new Date().toISOString(),\n            },\n        }, { headers: { Authorization: `Bearer ${user.JWT}` } });\n        if (response.status === 208) {\n            console.log(`${user.id} já respondeu`);\n        }\n        else {\n            if (response.data.user.id === null) {\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbWFsYW5kcmFnZW0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvdXRpbHMvbWFsYW5kcmFnZW0udHM/OTU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gXCJzcmMvc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuL2R5bmFtb2RiQ2xpZW50XCI7XG5cbmNvbnN0IEFHVUFTX0xJTkRBU19DT09SRFMgPSB7XG4gIGxhdGl0dWRlOiAtMTUuNzEzNjMxLFxuICBsb25naXR1ZGU6IC00Ny44OTg0LFxufTtcblxuY29uc3QgTFVaSUFOSUFfQ09PUkRTID0ge1xuICBsYXRpdHVkZTogLTE2LjIzMjUzOSxcbiAgbG9uZ2l0dWRlOiAtNDcuOTI5OTYxLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hbGFuZHJhZ2VtID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IGRvY3VtZW50LnNjYW4oeyBUYWJsZU5hbWU6IFwidXNlcnNcIiB9KS5wcm9taXNlKCk7XG4gIHVzZXJzLkl0ZW1zLmZvckVhY2goYXN5bmMgKHVzZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21MYXRpdHVkZSA9XG4gICAgICBNYXRoLnJhbmRvbSgpICpcbiAgICAgICAgKExVWklBTklBX0NPT1JEUy5sYXRpdHVkZSAtIEFHVUFTX0xJTkRBU19DT09SRFMubGF0aXR1ZGUpICtcbiAgICAgIEFHVUFTX0xJTkRBU19DT09SRFMubGF0aXR1ZGU7XG4gICAgY29uc3QgcmFuZG9tTG9uZ2l0dWRlID1cbiAgICAgIE1hdGgucmFuZG9tKCkgKlxuICAgICAgICAoTFVaSUFOSUFfQ09PUkRTLmxvbmdpdHVkZSAtIEFHVUFTX0xJTkRBU19DT09SRFMubG9uZ2l0dWRlKSArXG4gICAgICBBR1VBU19MSU5EQVNfQ09PUkRTLmxvbmdpdHVkZTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXG4gICAgICBgL3VzZXJzLyR7dXNlci5pZH0vc3VydmV5c2AsXG4gICAgICB7XG4gICAgICAgIHN1cnZleToge1xuICAgICAgICAgIGhvdXNlaG9sZF9pZDogbnVsbCxcbiAgICAgICAgICBsYXRpdHVkZTogcmFuZG9tTGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByYW5kb21Mb25naXR1ZGUsXG4gICAgICAgICAgc3ltcHRvbTogW10sXG4gICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci5KV1R9YCB9IH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA4KSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt1c2VyLmlkfSBqw6EgcmVzcG9uZGV1YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnVzZXIuaWQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUmV2YWxpZGFyIG8gSldUXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/malandragem.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/markSurvey.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;