import {ApiProperty} from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsObject, IsInt, Min, Max, IsEmail, IsNumber, IsArray, IsOptional, isEmail, ValidateNested, IsUUID
} from 'class-validator';
import {IsNumeric} from "sequelize-typescript";

export class AccountDto {
  readonly id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  readonly user_id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly avatar: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly specialization: string;
}