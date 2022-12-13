"use strict";
exports.__esModule = true;
var sequelize_1 = require("@nestjs/sequelize");
var users_model_1 = require("../users/users.model");
var accounts_model_1 = require("../accounts/accounts.model");
var process = require("process");
var constanst_1 = require("../utils/constanst");
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT;
var db = /** @class */ (function () {
    function db() {
    }
    db.initialize = function () {
        return sequelize_1.SequelizeModule.forRoot({
            dialect: 'mysql',
            host: DB_HOST,
            port: +DB_PORT,
            username: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                timestamps: false
            },
            operatorsAliases: constanst_1.operatorsAliases,
            models: [users_model_1.users, accounts_model_1.accounts]
        });
    };
    return db;
}());
exports["default"] = db;
