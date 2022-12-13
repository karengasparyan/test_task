import {
  Body,
  Controller,
  Get, Header,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';

import {
  UserDto
} from '../dto/user.dto';
import {Uuid} from "../dto/main.dto";
@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/create')
  @ApiBody({ type: UserDto })
  @ApiResponse({
    status: 200,
    type: UserDto,
    description: 'User successfully created'
  })

  async createUser(@Body() body: UserDto): Promise<UserDto> {
    return this.usersService.createUser(body);
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    type: UserDto,
    description: 'Get users list'
  })

  async getUserList(): Promise<UserDto[]> {
  return this.usersService.getUserList();
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  @ApiResponse({
    status: 200,
    type: UserDto,
    description: 'Get user by id'
  })

  async getUser(@Param() param: Uuid): Promise<UserDto> {
    return this.usersService.getUser(param.id);
  }
}
