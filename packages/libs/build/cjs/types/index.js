"use strict";

exports.__esModule = true;
var _user = require("./user.interface");
Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user[key]) return;
  exports[key] = _user[key];
});
var _auth = require("./auth.interface");
Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  exports[key] = _auth[key];
});
var _common = require("./common.interface");
Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _common[key]) return;
  exports[key] = _common[key];
});
//# sourceMappingURL=index.js.map