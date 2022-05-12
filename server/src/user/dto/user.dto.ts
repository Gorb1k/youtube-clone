
import {IsEmail, IsString} from "class-validator";

export class UserDto {

    @IsEmail()
    readonly email: string


    readonly password?: string

    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsString()
    readonly location: string

    @IsString()
    readonly bannerPath: string

    @IsString()
    readonly avatarPath: string
}