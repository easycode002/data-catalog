"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceConflictError = exports.NotFoundError = exports.InvalidInputError = exports.InternalServerError = exports.AuthorizationError = exports.AuthenticationError = exports.ApplicationError = void 0;
var _statusCode = require("../constants/status-code");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ========================
// Base Error
// ========================

class ApplicationError extends Error {
  constructor(_ref) {
    let {
      message,
      status,
      errors
    } = _ref;
    super(message);
    _defineProperty(this, "status", void 0);
    _defineProperty(this, "errors", void 0);
    this.status = status;
    this.errors = errors;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

// ========================
// Client Error
// ========================
exports.ApplicationError = ApplicationError;
class InvalidInputError extends ApplicationError {
  constructor(_ref2) {
    let {
      message = "Invalid input provided.",
      errors
    } = _ref2;
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.BAD_REQUEST,
      errors
    });
  }
}
exports.InvalidInputError = InvalidInputError;
class NotFoundError extends ApplicationError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The requested resource was not found.";
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.NOT_FOUND
    });
  }
}
exports.NotFoundError = NotFoundError;
class AuthenticationError extends ApplicationError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Authentication failed. Please check your credentials.";
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.UNAUTHORIZED
    });
  }
}
exports.AuthenticationError = AuthenticationError;
class AuthorizationError extends ApplicationError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "You do not have permission to access this resource.";
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.FORBIDDEN
    });
  }
}
exports.AuthorizationError = AuthorizationError;
class ResourceConflictError extends ApplicationError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Resource conflict occurred. The resource might already exist.";
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.CONFLICT
    });
  }
}

// ========================
// Server Error
// ========================
exports.ResourceConflictError = ResourceConflictError;
class InternalServerError extends ApplicationError {
  constructor(_ref3) {
    let {
      message = "An internal server error occurred.",
      errors
    } = _ref3;
    super({
      message,
      status: _statusCode.HTTP_STATUS_CODE.SERVER_ERROR,
      errors
    });
  }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=errors.js.map