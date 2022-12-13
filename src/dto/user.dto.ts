import {ApiProperty} from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsObject, IsInt, Min, Max, IsEmail, IsNumber, IsArray, IsOptional, isEmail, ValidateNested, IsUUID
} from 'class-validator';
import {IsNumeric} from "sequelize-typescript";

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly monthly_salary: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly monthly_expenses: number;
}