"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Contagem: \",\n            props.count\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\dev\\\\nlwCopa\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nconst getServerSideProps = async ()=>{\n    const response = await fetch(\"http://localhost:3333/pools/count\");\n    const data = await response.json();\n    return {\n        props: {\n            count: data.count\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBSWUsU0FBU0EsS0FBS0MsS0FBZ0IsRUFBRTtJQUM3QyxxQkFDRSw4REFBQ0M7O1lBQUc7WUFBV0QsTUFBTUUsS0FBSzs7Ozs7OztBQUU5QixDQUFDO0FBRU0sTUFBTUMscUJBQXFCLFVBQVk7SUFDNUMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxPQUFPO1FBQ0xQLE9BQU87WUFDTEUsT0FBT0ksS0FBS0osS0FBSztRQUNuQjtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBIb21lUHJvcHN7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoMT5Db250YWdlbToge3Byb3BzLmNvdW50fTwvaDE+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9wb29scy9jb3VudCcpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvdW50OiBkYXRhLmNvdW50LFxuICAgIH1cbiAgfTtcbn0iXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiaDEiLCJjb3VudCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();