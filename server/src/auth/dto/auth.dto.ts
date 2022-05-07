import {IsEmail, IsEmpty, IsString, Length, MaxLength, MinLength} from "class-validator";

export class AuthDto {
    @IsEmail({}, {message: 'Invalid Email format'})
    readonly email:string

    @Length(4, 16, {message: 'min length is 6 characters and max is 16.'})
    @IsString()
    readonly password:string

}