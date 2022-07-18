"use strict";
exports.__esModule = true;
exports.getDotEnv = void 0;
var dotenv = require("dotenv");
var etc_1 = require("./etc");
dotenv.config();
function getDotEnv(key) {
    var value = process.env[key.toUpperCase()];
    if (!value)
        throw new etc_1.ApplicationError(etc_1.HTTPStatus.NOT_FOUND, "[!] Variable ".concat(key, " not found in .env"));
    return value;
}
exports.getDotEnv = getDotEnv;
