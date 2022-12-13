"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountsModule = void 0;
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var accounts_model_1 = require("./accounts.model");
var accounts_service_1 = require("./accounts.service");
var accounts_controller_1 = require("./accounts.controller");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        (0, common_1.Module)({
            imports: [sequelize_1.SequelizeModule.forFeature([accounts_model_1.accounts])],
            providers: [accounts_service_1.AccountsService],
            controllers: [accounts_controller_1.AccountsController],
            exports: [accounts_service_1.AccountsService]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;
