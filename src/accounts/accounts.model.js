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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.accounts = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var users_model_1 = require("../users/users.model");
var accounts = /** @class */ (function (_super) {
    __extends(accounts, _super);
    function accounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.UUID,
            defaultValue: sequelize_typescript_1.DataType.UUIDV4,
            allowNull: false,
            primaryKey: true
        })
    ], accounts.prototype, "id");
    __decorate([
        (0, sequelize_typescript_1.ForeignKey)(function () { return users_model_1.users; }),
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.UUID,
            allowNull: false,
            field: 'user_id'
        })
    ], accounts.prototype, "user_id");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: true
        })
    ], accounts.prototype, "avatar");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: true
        })
    ], accounts.prototype, "specialization");
    __decorate([
        (0, sequelize_typescript_1.BelongsTo)(function () { return users_model_1.users; })
    ], accounts.prototype, "user");
    accounts = __decorate([
        sequelize_typescript_1.Table
    ], accounts);
    return accounts;
}(sequelize_typescript_1.Model));
exports.accounts = accounts;
