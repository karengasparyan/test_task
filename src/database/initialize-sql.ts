import { SequelizeModule } from '@nestjs/sequelize';
import { users } from '../users/users.model';
import { accounts } from '../accounts/accounts.model';
import * as process from 'process';
import { Sequelize } from 'sequelize-typescript';
import {operatorsAliases} from "../utils/constanst";
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export default class db {
  static initialize() {
    return SequelizeModule.forRoot({
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
      operatorsAliases,
      models: [users, accounts],
    });
  }
}
