import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {users} from './users.model';
import {InjectSqlModel} from '../database/inject-model-sql';
import {UserDto} from "../dto/user.dto";
import {accounts} from "../accounts/accounts.model";


@Injectable()
export class UsersService {
  constructor(
    @InjectSqlModel(users) private Users: typeof users
  ) {
  }

  async createUser(data) {
    if (data.monthly_salary < 1000)
      throw new HttpException('Month salary must be 1000 and more', HttpStatus.UNPROCESSABLE_ENTITY)
    return users.create(data)
  }

  async getUser(id) {
    const res = await users.findByPk(id, {
      include: [{model: accounts}]
    });
    if (!res) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    return res;
  }

  async getUserList() {
    return users.findAll({
      include: [{model: accounts}]
    })
  }
}
