import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "../user/user.model";
import {JwtService} from "@nestjs/jwt";
import {AuthDto} from "./dto/auth.dto";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {compare, genSalt, hash} from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private userModel: ModelType<UserModel>,
        private readonly jwtService: JwtService
    ) {}

    async login(dto: AuthDto) {
        const user = await this.validateUser(dto)
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user._id.toString())
        }
    }

    async registration(dto: AuthDto) {
        const oldUser = await this.userModel.findOne({email: dto.email})
        if (oldUser) throw new BadRequestException('User is already existed')

        const salt = await genSalt(7)
        const newUser = new this.userModel({
            email: dto.email,
            password: await hash(dto.password, salt)
        })
        const user = await newUser.save()
        return {
            user: this.returnUserFields(user),
            accessToken: await this.issueAccessToken(user._id.toString())
        }
    }

    private async validateUser(dto: AuthDto): Promise<UserModel> {

        const user = await this.userModel.findOne({email: dto.email})
        if (!user) throw new UnauthorizedException('user is not found')

        const isValidPassword = await compare(dto.password, user.password)
        if (!isValidPassword) throw new UnauthorizedException('invalid password')
        return user
    }

    private async issueAccessToken(userId: string) {
        const data = {id: userId}
        return await this.jwtService.signAsync(data, {
            expiresIn: '24h'
        })
    }

    private returnUserFields(user: UserModel) {
        return {
            _id: user._id,
            email: user.email
        }
    }
}
