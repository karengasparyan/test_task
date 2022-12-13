import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {accounts} from "./accounts.model";
import {AccountsService} from "./accounts.service";
import {AccountsController} from "./accounts.controller";

@Module({
  imports: [SequelizeModule.forFeature([accounts])],
  providers: [AccountsService],
  controllers: [AccountsController],
  exports: [AccountsService],
})
export class AccountsModule {}
