import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBody, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AccountsService} from "./accounts.service";
import {AccountDto} from "../dto/account.dto";
import {Uuid} from "../dto/main.dto";
import {UserDto} from "../dto/user.dto";

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Post('/create')
  @ApiBody({ type: AccountDto })
  @ApiResponse({
    status: 200,
    type: AccountDto,
    description: 'Account created successfully'
  })

  async createAccount(@Body() body: AccountDto): Promise<AccountDto> {
    return this.accountsService.createAccount(body);
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  @ApiResponse({
    status: 200,
    type: AccountDto,
    description: 'Get account by id'
  })
  async getAccount(@Param() param: Uuid): Promise<AccountDto> {
    return this.accountsService.getAccount(param.id);
  }
}
