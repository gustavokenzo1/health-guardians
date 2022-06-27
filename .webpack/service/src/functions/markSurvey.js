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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var src_middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/middleware/auth */ \"./src/middleware/auth.ts\");\n/* harmony import */ var src_utils_malandragem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/malandragem */ \"./src/utils/malandragem.ts\");\n\n\nconst handle = async (event) => {\n    const isAuthorized = await (0,src_middleware_auth__WEBPACK_IMPORTED_MODULE_0__.authorize)(event);\n    if (!isAuthorized) {\n        return {\n            statusCode: 401,\n            body: JSON.stringify({ message: \"Unauthorized\" }),\n        };\n    }\n    await (0,src_utils_malandragem__WEBPACK_IMPORTED_MODULE_1__.malandragem)();\n    return {\n        statusCode: 200,\n        body: JSON.stringify({ message: \"Malandragem concluída com sucesso!\" }),\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL21hcmtTdXJ2ZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvZnVuY3Rpb25zL21hcmtTdXJ2ZXkudHM/NGM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tIFwic3JjL21pZGRsZXdhcmUvYXV0aFwiO1xuaW1wb3J0IHsgbWFsYW5kcmFnZW0gfSBmcm9tIFwic3JjL3V0aWxzL21hbGFuZHJhZ2VtXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgaXNBdXRob3JpemVkID0gYXdhaXQgYXV0aG9yaXplKGV2ZW50KVxuXG4gIGlmICghaXNBdXRob3JpemVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1c0NvZGU6IDQwMSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9KSxcbiAgICB9O1xuICB9XG4gIGF3YWl0IG1hbGFuZHJhZ2VtKCk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJNYWxhbmRyYWdlbSBjb25jbHXDrWRhIGNvbSBzdWNlc3NvIVwiIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/markSurvey.ts\n");

/***/ }),

/***/ "./src/middleware/auth.ts":
/*!********************************!*\
  !*** ./src/middleware/auth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authorize\": () => (/* binding */ authorize)\n/* harmony export */ });\nconst authorize = async (event) => {\n    try {\n        const apiKey = await event.queryStringParameters[\"API_KEY\"];\n        if (apiKey !== process.env.API_KEY) {\n            return false;\n        }\n        return true;\n    }\n    catch (error) {\n        return false;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZS9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvbWlkZGxld2FyZS9hdXRoLnRzPzlkYjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGF1dGhvcml6ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFwaUtleSA9IGF3YWl0IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVyc1tcIkFQSV9LRVlcIl07XG4gICAgaWYgKGFwaUtleSAhPT0gcHJvY2Vzcy5lbnYuQVBJX0tFWSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middleware/auth.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\",\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE === \"true\";\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient({\n        region: \"sa-east-1\",\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcbiAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG59O1xuXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FID09PSBcInRydWVcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpXG4gID8gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbnMpXG4gIDogbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KHtcbiAgICByZWdpb246IFwic2EtZWFzdC0xXCIsXG4gIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "./src/utils/malandragem.ts":
/*!**********************************!*\
  !*** ./src/utils/malandragem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"malandragem\": () => (/* binding */ malandragem)\n/* harmony export */ });\n/* harmony import */ var src_services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _dynamodbClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\n\nconst AGUAS_LINDAS_COORDS = {\n    latitude: -15.713631,\n    longitude: -47.8984,\n};\nconst LUZIANIA_COORDS = {\n    latitude: -16.232539,\n    longitude: -47.929961,\n};\nconst malandragem = async () => {\n    const users = await _dynamodbClient__WEBPACK_IMPORTED_MODULE_1__.document.scan({ TableName: \"users\" }).promise();\n    users.Items.forEach(async (user) => {\n        const randomLatitude = Math.random() *\n            (LUZIANIA_COORDS.latitude - AGUAS_LINDAS_COORDS.latitude) +\n            AGUAS_LINDAS_COORDS.latitude;\n        const randomLongitude = Math.random() *\n            (LUZIANIA_COORDS.longitude - AGUAS_LINDAS_COORDS.longitude) +\n            AGUAS_LINDAS_COORDS.longitude;\n        const response = await src_services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/users/${user.id}/surveys`, {\n            survey: {\n                household_id: null,\n                latitude: randomLatitude,\n                longitude: randomLongitude,\n                symptom: [],\n                created_at: new Date().toISOString(),\n            },\n        }, { headers: { Authorization: `Bearer ${user.JWT}` } });\n        if (response.status === 208) {\n            console.log(`${user.id} já respondeu`);\n        }\n        else {\n            if (response.data.user.id === null) {\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbWFsYW5kcmFnZW0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvdXRpbHMvbWFsYW5kcmFnZW0udHM/OTU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpIGZyb20gXCJzcmMvc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuL2R5bmFtb2RiQ2xpZW50XCI7XG5cbmNvbnN0IEFHVUFTX0xJTkRBU19DT09SRFMgPSB7XG4gIGxhdGl0dWRlOiAtMTUuNzEzNjMxLFxuICBsb25naXR1ZGU6IC00Ny44OTg0LFxufTtcblxuY29uc3QgTFVaSUFOSUFfQ09PUkRTID0ge1xuICBsYXRpdHVkZTogLTE2LjIzMjUzOSxcbiAgbG9uZ2l0dWRlOiAtNDcuOTI5OTYxLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hbGFuZHJhZ2VtID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IGRvY3VtZW50LnNjYW4oeyBUYWJsZU5hbWU6IFwidXNlcnNcIiB9KS5wcm9taXNlKCk7XG4gIHVzZXJzLkl0ZW1zLmZvckVhY2goYXN5bmMgKHVzZXIpID0+IHtcbiAgICBjb25zdCByYW5kb21MYXRpdHVkZSA9XG4gICAgICBNYXRoLnJhbmRvbSgpICpcbiAgICAgICAgKExVWklBTklBX0NPT1JEUy5sYXRpdHVkZSAtIEFHVUFTX0xJTkRBU19DT09SRFMubGF0aXR1ZGUpICtcbiAgICAgIEFHVUFTX0xJTkRBU19DT09SRFMubGF0aXR1ZGU7XG5cbiAgICBjb25zdCByYW5kb21Mb25naXR1ZGUgPVxuICAgICAgTWF0aC5yYW5kb20oKSAqXG4gICAgICAgIChMVVpJQU5JQV9DT09SRFMubG9uZ2l0dWRlIC0gQUdVQVNfTElOREFTX0NPT1JEUy5sb25naXR1ZGUpICtcbiAgICAgIEFHVUFTX0xJTkRBU19DT09SRFMubG9uZ2l0dWRlO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcbiAgICAgIGAvdXNlcnMvJHt1c2VyLmlkfS9zdXJ2ZXlzYCxcbiAgICAgIHtcbiAgICAgICAgc3VydmV5OiB7XG4gICAgICAgICAgaG91c2Vob2xkX2lkOiBudWxsLFxuICAgICAgICAgIGxhdGl0dWRlOiByYW5kb21MYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJhbmRvbUxvbmdpdHVkZSxcbiAgICAgICAgICBzeW1wdG9tOiBbXSxcbiAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLkpXVH1gIH0gfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3VzZXIuaWR9IGrDoSByZXNwb25kZXVgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudXNlci5pZCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBSZXZhbGlkYXIgbyBKV1RcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/malandragem.ts\n");

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