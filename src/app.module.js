"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var serve_static_1 = require("@nestjs/serve-static");
var path_1 = require("path");
var users_module_1 = require("./users/users.module");
var accounts_module_1 = require("./accounts/accounts.module");
var initialize_sql_1 = require("./database/initialize-sql");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                initialize_sql_1["default"].initialize(),
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: (0, path_1.join)(__dirname, '../../', 'web'),
                    exclude: ['/api*']
                }),
                users_module_1.UsersModule,
                accounts_module_1.AccountsModule,
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
