"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ResourceConflictError = exports.AuthorizationError = exports.AuthenticationError = exports.NotFoundError = exports.InvalidInputError = exports.ApplicationError = void 0;
var tslib_1 = require("tslib");
var status_code_1 = require("../constants/status-code");
// ========================
// Base Error
// ========================
var ApplicationError = /** @class */ (function (_super) {
    tslib_1.__extends(ApplicationError, _super);
    function ApplicationError(_a) {
        var message = _a.message, status = _a.status, errors = _a.errors;
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.errors = errors;
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
        return _this;
    }
    return ApplicationError;
}(Error));
exports.ApplicationError = ApplicationError;
// ========================
// Client Error
// ========================
var InvalidInputError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidInputError, _super);
    function InvalidInputError(_a) {
        var _b = _a.message, message = _b === void 0 ? "Invalid input provided." : _b, errors = _a.errors;
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.BAD_REQUEST, errors: errors }) || this;
    }
    return InvalidInputError;
}(ApplicationError));
exports.InvalidInputError = InvalidInputError;
var NotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(NotFoundError, _super);
    function NotFoundError(message) {
        if (message === void 0) { message = "The requested resource was not found."; }
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.NOT_FOUND }) || this;
    }
    return NotFoundError;
}(ApplicationError));
exports.NotFoundError = NotFoundError;
var AuthenticationError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationError, _super);
    function AuthenticationError(message) {
        if (message === void 0) { message = "Authentication failed. Please check your credentials."; }
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.UNAUTHORIZED }) || this;
    }
    return AuthenticationError;
}(ApplicationError));
exports.AuthenticationError = AuthenticationError;
var AuthorizationError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthorizationError, _super);
    function AuthorizationError(message) {
        if (message === void 0) { message = "You do not have permission to access this resource."; }
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.FORBIDDEN }) || this;
    }
    return AuthorizationError;
}(ApplicationError));
exports.AuthorizationError = AuthorizationError;
var ResourceConflictError = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceConflictError, _super);
    function ResourceConflictError(message) {
        if (message === void 0) { message = "Resource conflict occurred. The resource might already exist."; }
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.CONFLICT }) || this;
    }
    return ResourceConflictError;
}(ApplicationError));
exports.ResourceConflictError = ResourceConflictError;
// ========================
// Server Error
// ========================
var InternalServerError = /** @class */ (function (_super) {
    tslib_1.__extends(InternalServerError, _super);
    function InternalServerError(_a) {
        var _b = _a.message, message = _b === void 0 ? "An internal server error occurred." : _b, errors = _a.errors;
        return _super.call(this, { message: message, status: status_code_1.HTTP_STATUS_CODE.SERVER_ERROR, errors: errors }) || this;
    }
    return InternalServerError;
}(ApplicationError));
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=errors.js.map