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

/***/ "./src/adapters/node-mailer-adapter.ts":
/*!*********************************************!*\
  !*** ./src/adapters/node-mailer-adapter.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendEmail\": () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst transport = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: \"smtp.gmail.com\",\n    port: 587,\n    secure: false,\n    auth: {\n        user: process.env.EMAIL_USER,\n        pass: process.env.EMAIL_PASSWORD,\n    },\n    tls: {\n        rejectUnauthorized: false,\n    },\n});\nconst sendEmail = async (email) => {\n    const mailOptions = {\n        from: \"Equipe Guardiões da Insalubridade\",\n        to: email,\n        subject: \"🔥🔥🔥 GUARDIÕES DA SAÚDE 🔥🔥🔥\",\n        html: `<h1>GUARDIÕES DA SAÚDE MARCADO COM SUCESSO 🔥🔥🔥</h1>`,\n    };\n    await transport.sendMail(mailOptions);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRhcHRlcnMvbm9kZS1tYWlsZXItYWRhcHRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGd1YXJkaWFucy8uL3NyYy9hZGFwdGVycy9ub2RlLW1haWxlci1hZGFwdGVyLnRzP2ZmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuY29uc3QgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gIHBvcnQ6IDU4NyxcbiAgc2VjdXJlOiBmYWxzZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTU1dPUkQsXG4gIH0sXG4gIHRsczoge1xuICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgIGZyb206IFwiRXF1aXBlIEd1YXJkacO1ZXMgZGEgSW5zYWx1YnJpZGFkZVwiLFxuICAgIHRvOiBlbWFpbCxcbiAgICBzdWJqZWN0OiBcIvCflKXwn5Sl8J+UpSBHVUFSREnDlUVTIERBIFNBw5pERSDwn5Sl8J+UpfCflKVcIixcbiAgICBodG1sOiBgPGgxPkdVQVJEScOVRVMgREEgU0HDmkRFIE1BUkNBRE8gQ09NIFNVQ0VTU08g8J+UpfCflKXwn5SlPC9oMT5gLFxuICB9O1xuXG4gIGF3YWl0IHRyYW5zcG9ydC5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/adapters/node-mailer-adapter.ts\n");

/***/ }),

/***/ "./src/functions/markSurvey.ts":
/*!*************************************!*\
  !*** ./src/functions/markSurvey.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var src_middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/middleware/auth */ \"./src/middleware/auth.ts\");\n/* harmony import */ var src_utils_malandragem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/malandragem */ \"./src/utils/malandragem.ts\");\n\n\nconst handle = async (event) => {\n    const isAuthorized = await (0,src_middleware_auth__WEBPACK_IMPORTED_MODULE_0__.authorize)(event);\n    if (!isAuthorized) {\n        return {\n            statusCode: 401,\n            body: JSON.stringify({ message: \"Unauthorized\" }),\n        };\n    }\n    await (0,src_utils_malandragem__WEBPACK_IMPORTED_MODULE_1__.malandragem)();\n    return {\n        statusCode: 200,\n        body: JSON.stringify({ message: \"Malandragem concluída com sucesso!\" }),\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL21hcmtTdXJ2ZXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhndWFyZGlhbnMvLi9zcmMvZnVuY3Rpb25zL21hcmtTdXJ2ZXkudHM/NGM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRob3JpemUgfSBmcm9tIFwic3JjL21pZGRsZXdhcmUvYXV0aFwiO1xuaW1wb3J0IHsgbWFsYW5kcmFnZW0gfSBmcm9tIFwic3JjL3V0aWxzL21hbGFuZHJhZ2VtXCI7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgaXNBdXRob3JpemVkID0gYXdhaXQgYXV0aG9yaXplKGV2ZW50KTtcblxuICBpZiAoIWlzQXV0aG9yaXplZCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDEsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSksXG4gICAgfTtcbiAgfVxuICBhd2FpdCBtYWxhbmRyYWdlbSgpO1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiTWFsYW5kcmFnZW0gY29uY2x1w61kYSBjb20gc3VjZXNzbyFcIiB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/markSurvey.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"malandragem\": () => (/* binding */ malandragem)\n/* harmony export */ });\n/* harmony import */ var src_adapters_node_mailer_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/adapters/node-mailer-adapter */ \"./src/adapters/node-mailer-adapter.ts\");\n/* harmony import */ var src_services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _dynamodbClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\n\n\nconst AGUAS_LINDAS_COORDS = {\n    latitude: -15.713631,\n    longitude: -47.8984,\n};\nconst LUZIANIA_COORDS = {\n    latitude: -16.232539,\n    longitude: -47.929961,\n};\nconst malandragem = async () => {\n    const users = await _dynamodbClient__WEBPACK_IMPORTED_MODULE_2__.document.scan({ TableName: \"users\" }).promise();\n    users.Items.forEach(async (user) => {\n        const randomLatitude = Math.random() *\n            (LUZIANIA_COORDS.latitude - AGUAS_LINDAS_COORDS.latitude) +\n            AGUAS_LINDAS_COORDS.latitude;\n        const randomLongitude = Math.random() *\n            (LUZIANIA_COORDS.longitude - AGUAS_LINDAS_COORDS.longitude) +\n            AGUAS_LINDAS_COORDS.longitude;\n        const response = await src_services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(`/users/${user.id}/surveys`, {\n            survey: {\n                household_id: null,\n                latitude: randomLatitude,\n                longitude: randomLongitude,\n                symptom: [],\n                created_at: new Date().toISOString(),\n            },\n        }, { headers: { Authorization: `Bearer ${user.JWT}` } });\n        await (0,src_adapters_node_mailer_adapter__WEBPACK_IMPORTED_MODULE_0__.sendEmail)(user.email);\n        if (response.status === 208) {\n            console.log(`${user.id} já respondeu`);\n        }\n        else {\n            if (response.data.user.id === null) {\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbWFsYW5kcmFnZW0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGd1YXJkaWFucy8uL3NyYy91dGlscy9tYWxhbmRyYWdlbS50cz85NTdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJzcmMvYWRhcHRlcnMvbm9kZS1tYWlsZXItYWRhcHRlclwiO1xuaW1wb3J0IGFwaSBmcm9tIFwic3JjL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi9keW5hbW9kYkNsaWVudFwiO1xuXG5jb25zdCBBR1VBU19MSU5EQVNfQ09PUkRTID0ge1xuICBsYXRpdHVkZTogLTE1LjcxMzYzMSxcbiAgbG9uZ2l0dWRlOiAtNDcuODk4NCxcbn07XG5cbmNvbnN0IExVWklBTklBX0NPT1JEUyA9IHtcbiAgbGF0aXR1ZGU6IC0xNi4yMzI1MzksXG4gIGxvbmdpdHVkZTogLTQ3LjkyOTk2MSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYWxhbmRyYWdlbSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBkb2N1bWVudC5zY2FuKHsgVGFibGVOYW1lOiBcInVzZXJzXCIgfSkucHJvbWlzZSgpO1xuICB1c2Vycy5JdGVtcy5mb3JFYWNoKGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tTGF0aXR1ZGUgPVxuICAgICAgTWF0aC5yYW5kb20oKSAqXG4gICAgICAgIChMVVpJQU5JQV9DT09SRFMubGF0aXR1ZGUgLSBBR1VBU19MSU5EQVNfQ09PUkRTLmxhdGl0dWRlKSArXG4gICAgICBBR1VBU19MSU5EQVNfQ09PUkRTLmxhdGl0dWRlO1xuXG4gICAgY29uc3QgcmFuZG9tTG9uZ2l0dWRlID1cbiAgICAgIE1hdGgucmFuZG9tKCkgKlxuICAgICAgICAoTFVaSUFOSUFfQ09PUkRTLmxvbmdpdHVkZSAtIEFHVUFTX0xJTkRBU19DT09SRFMubG9uZ2l0dWRlKSArXG4gICAgICBBR1VBU19MSU5EQVNfQ09PUkRTLmxvbmdpdHVkZTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXG4gICAgICBgL3VzZXJzLyR7dXNlci5pZH0vc3VydmV5c2AsXG4gICAgICB7XG4gICAgICAgIHN1cnZleToge1xuICAgICAgICAgIGhvdXNlaG9sZF9pZDogbnVsbCxcbiAgICAgICAgICBsYXRpdHVkZTogcmFuZG9tTGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByYW5kb21Mb25naXR1ZGUsXG4gICAgICAgICAgc3ltcHRvbTogW10sXG4gICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci5KV1R9YCB9IH1cbiAgICApO1xuXG4gICAgYXdhaXQgc2VuZEVtYWlsKHVzZXIuZW1haWwpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA4KSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt1c2VyLmlkfSBqw6EgcmVzcG9uZGV1YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnVzZXIuaWQgPT09IG51bGwpIHtcbiAgICAgICAgLy8gUmV2YWxpZGFyIG8gSldUXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/malandragem.ts\n");

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

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

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