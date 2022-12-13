import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {accounts} from "./accounts.model";
import {users} from "../users/users.model";

@Injectable()
export class AccountsService {
  constructor(@InjectSqlModel(accounts) private Accounts: typeof accounts) {}
  async createAccount (data) {
    return accounts.create(data)
  }

  async getAccount (id) {
    const res = accounts.findByPk(id, {
      include: [{model: users}]
    })
    if (!res) throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
    return res;
  }
}
