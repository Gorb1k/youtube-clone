import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";

export class AuthDto {
    @IsEmail()
    readonly email:string

    @MinLength(6, {message: 'Password is less than 6 characters!'})
    @MaxLength(16, {message: 'Password is more than 16 characters!'})
    @IsString()
    readonly password:string

}