"use strict";

exports.__esModule = true;
var _errors = require("./errors");
Object.keys(_errors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errors[key]) return;
  exports[key] = _errors[key];
});
var _logger = require("./logger");
Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _logger[key]) return;
  exports[key] = _logger[key];
});
//# sourceMappingURL=index.js.map