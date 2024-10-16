"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logger;
exports.loggerBeautifulObject = loggerBeautifulObject;
exports.prettyObject = prettyObject;
var pretty_print_object_1 = require("@base2/pretty-print-object");
function logger(message) {
    console.log("message logs: ".concat(message));
}
function loggerBeautifulObject(data) {
    console.log((0, pretty_print_object_1.prettyPrint)(data, { indent: ' ', singleQuotes: false }));
}
function prettyObject(data) {
    return JSON.stringify(data, null, 2);
}
//# sourceMappingURL=logger.js.map