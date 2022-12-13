import {IsNotEmpty, IsString, IsUUID} from "class-validator";

export class Uuid {
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    readonly id: string
}