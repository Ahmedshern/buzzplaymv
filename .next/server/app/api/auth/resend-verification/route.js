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
exports.id = "app/api/auth/resend-verification/route";
exports.ids = ["app/api/auth/resend-verification/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "firebase-admin/auth":
/*!**************************************!*\
  !*** external "firebase-admin/auth" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase-admin/auth");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fresend-verification%2Froute&page=%2Fapi%2Fauth%2Fresend-verification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fresend-verification%2Froute.ts&appDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fresend-verification%2Froute&page=%2Fapi%2Fauth%2Fresend-verification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fresend-verification%2Froute.ts&appDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_shan_Desktop_Shan_buzzplaymv_app_api_auth_resend_verification_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/resend-verification/route.ts */ \"(rsc)/./app/api/auth/resend-verification/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_shan_Desktop_Shan_buzzplaymv_app_api_auth_resend_verification_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_home_shan_Desktop_Shan_buzzplaymv_app_api_auth_resend_verification_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/resend-verification/route\",\n        pathname: \"/api/auth/resend-verification\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/resend-verification/route\"\n    },\n    resolvedPagePath: \"/home/shan/Desktop/Shan/buzzplaymv/app/api/auth/resend-verification/route.ts\",\n    nextConfigOutput,\n    userland: _home_shan_Desktop_Shan_buzzplaymv_app_api_auth_resend_verification_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVzZW5kLXZlcmlmaWNhdGlvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnJlc2VuZC12ZXJpZmljYXRpb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGcmVzZW5kLXZlcmlmaWNhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2hhbiUyRkRlc2t0b3AlMkZTaGFuJTJGYnV6enBsYXltdiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNoYW4lMkZEZXNrdG9wJTJGU2hhbiUyRmJ1enpwbGF5bXYmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRixxQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8/MzA0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvc2hhbi9EZXNrdG9wL1NoYW4vYnV6enBsYXltdi9hcHAvYXBpL2F1dGgvcmVzZW5kLXZlcmlmaWNhdGlvbi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yZXNlbmQtdmVyaWZpY2F0aW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZXNlbmQtdmVyaWZpY2F0aW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3Jlc2VuZC12ZXJpZmljYXRpb24vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9zaGFuL0Rlc2t0b3AvU2hhbi9idXp6cGxheW12L2FwcC9hcGkvYXV0aC9yZXNlbmQtdmVyaWZpY2F0aW9uL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fresend-verification%2Froute&page=%2Fapi%2Fauth%2Fresend-verification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fresend-verification%2Froute.ts&appDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/resend-verification/route.ts":
/*!***************************************************!*\
  !*** ./app/api/auth/resend-verification/route.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin/auth */ \"firebase-admin/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__]);\nfirebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function POST(request) {\n    try {\n        const { email } = await request.json();\n        if (!email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Email is required'\n            }, {\n                status: 400\n            });\n        }\n        // Get user by email using Firebase Admin\n        const userRecord = await (0,firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)().getUserByEmail(email);\n        if (!userRecord) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        // Create action code settings\n        const actionCodeSettings = {\n            url: `${\"http://localhost:3000\"}/auth/verify-email?email=${email}`,\n            handleCodeInApp: true\n        };\n        // Reset email verification status\n        await (0,firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)().updateUser(userRecord.uid, {\n            emailVerified: false\n        });\n        // Generate and send verification email\n        const link = await (0,firebase_admin_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)().generateEmailVerificationLink(email, actionCodeSettings);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: \"Verification email sent successfully\"\n        });\n    } catch (error) {\n        console.error('Error sending verification email:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message || 'Failed to send verification email'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcmVzZW5kLXZlcmlmaWNhdGlvbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDRztBQUd2QyxlQUFlRSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBRXBDLElBQUksQ0FBQ0QsT0FBTztZQUNWLE9BQU9KLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQW9CLEdBQzdCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSx5Q0FBeUM7UUFDekMsTUFBTUMsYUFBYSxNQUFNUCw0REFBT0EsR0FBR1EsY0FBYyxDQUFDTDtRQUVsRCxJQUFJLENBQUNJLFlBQVk7WUFDZixPQUFPUixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFpQixHQUMxQjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsOEJBQThCO1FBQzlCLE1BQU1HLHFCQUFxQjtZQUN6QkMsS0FBSyxHQUFHQyx1QkFBK0IsQ0FBQyx5QkFBeUIsRUFBRVIsT0FBTztZQUMxRVcsaUJBQWlCO1FBQ25CO1FBRUEsa0NBQWtDO1FBQ2xDLE1BQU1kLDREQUFPQSxHQUFHZSxVQUFVLENBQUNSLFdBQVdTLEdBQUcsRUFBRTtZQUN6Q0MsZUFBZTtRQUNqQjtRQUVBLHVDQUF1QztRQUN2QyxNQUFNQyxPQUFPLE1BQU1sQiw0REFBT0EsR0FBR21CLDZCQUE2QixDQUN4RGhCLE9BQ0FNO1FBR0YsT0FBT1YscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUN2QmdCLFNBQVM7WUFDVEMsU0FBUztRQUNYO0lBQ0YsRUFBRSxPQUFPaEIsT0FBWTtRQUNuQmlCLFFBQVFqQixLQUFLLENBQUMscUNBQXFDQTtRQUNuRCxPQUFPTixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFQyxPQUFPQSxNQUFNZ0IsT0FBTyxJQUFJO1FBQW9DLEdBQzlEO1lBQUVmLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9hdXRoL3Jlc2VuZC12ZXJpZmljYXRpb24vcm91dGUudHM/ZjAzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcbmltcG9ydCB7IGFkbWluRGIgfSBmcm9tIFwiQC9saWIvZmlyZWJhc2UtYWRtaW5cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdXNlciBieSBlbWFpbCB1c2luZyBGaXJlYmFzZSBBZG1pblxuICAgIGNvbnN0IHVzZXJSZWNvcmQgPSBhd2FpdCBnZXRBdXRoKCkuZ2V0VXNlckJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKCF1c2VyUmVjb3JkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhY3Rpb24gY29kZSBzZXR0aW5nc1xuICAgIGNvbnN0IGFjdGlvbkNvZGVTZXR0aW5ncyA9IHtcbiAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTH0vYXV0aC92ZXJpZnktZW1haWw/ZW1haWw9JHtlbWFpbH1gLFxuICAgICAgaGFuZGxlQ29kZUluQXBwOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIFJlc2V0IGVtYWlsIHZlcmlmaWNhdGlvbiBzdGF0dXNcbiAgICBhd2FpdCBnZXRBdXRoKCkudXBkYXRlVXNlcih1c2VyUmVjb3JkLnVpZCwge1xuICAgICAgZW1haWxWZXJpZmllZDogZmFsc2VcbiAgICB9KTtcblxuICAgIC8vIEdlbmVyYXRlIGFuZCBzZW5kIHZlcmlmaWNhdGlvbiBlbWFpbFxuICAgIGNvbnN0IGxpbmsgPSBhd2FpdCBnZXRBdXRoKCkuZ2VuZXJhdGVFbWFpbFZlcmlmaWNhdGlvbkxpbmsoXG4gICAgICBlbWFpbCwgXG4gICAgICBhY3Rpb25Db2RlU2V0dGluZ3NcbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogXCJWZXJpZmljYXRpb24gZW1haWwgc2VudCBzdWNjZXNzZnVsbHlcIlxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyB2ZXJpZmljYXRpb24gZW1haWw6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBzZW5kIHZlcmlmaWNhdGlvbiBlbWFpbCcgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGgiLCJQT1NUIiwicmVxdWVzdCIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlclJlY29yZCIsImdldFVzZXJCeUVtYWlsIiwiYWN0aW9uQ29kZVNldHRpbmdzIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJoYW5kbGVDb2RlSW5BcHAiLCJ1cGRhdGVVc2VyIiwidWlkIiwiZW1haWxWZXJpZmllZCIsImxpbmsiLCJnZW5lcmF0ZUVtYWlsVmVyaWZpY2F0aW9uTGluayIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/resend-verification/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fresend-verification%2Froute&page=%2Fapi%2Fauth%2Fresend-verification%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fresend-verification%2Froute.ts&appDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fshan%2FDesktop%2FShan%2Fbuzzplaymv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();