"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HTTPStatus = exports.ApplicationError = void 0;
var ApplicationError = /** @class */ (function (_super) {
    __extends(ApplicationError, _super);
    function ApplicationError(status, message) {
        if (status === void 0) { status = HTTPStatus.INTERNAL; }
        var _this = _super.call(this, message) || this;
        _this.status = status;
        return _this;
    }
    return ApplicationError;
}(Error));
exports.ApplicationError = ApplicationError;
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["SUCCESS"] = 200] = "SUCCESS";
    HTTPStatus[HTTPStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPStatus[HTTPStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTPStatus[HTTPStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTPStatus[HTTPStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPStatus[HTTPStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HTTPStatus[HTTPStatus["INTERNAL"] = 500] = "INTERNAL";
    HTTPStatus[HTTPStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HTTPStatus[HTTPStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(HTTPStatus = exports.HTTPStatus || (exports.HTTPStatus = {}));
