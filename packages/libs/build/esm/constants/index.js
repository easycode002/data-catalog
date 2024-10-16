"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _appErrorMessage = require("./app-error-message");
Object.keys(_appErrorMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _appErrorMessage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _appErrorMessage[key];
    }
  });
});
var _statusCode = require("./status-code");
Object.keys(_statusCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _statusCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _statusCode[key];
    }
  });
});
//# sourceMappingURL=index.js.map