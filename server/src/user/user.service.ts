import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "./user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {UserDto} from "./dto/user.dto";
import {genSalt, hash} from "bcryptjs";
import {Types} from "mongoose";


@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel) private userModel: ModelType<UserModel>,
    ) {}

    async getById(_id: Types.ObjectId) {
        const user = await this.userModel.findById(_id, '-password -__v') //второй параметр исключает поля, которые нам не нужны
        if (!user) throw new UnauthorizedException('User is not found')
        return user
    }

    async updateProfile(_id: Types.ObjectId, dto: UserDto) {
        const user = await this.getById(_id)

        const isSameUser = await this.userModel.findOne({email: dto.email})
        console.log('My ID: ', _id)
        console.log('ID from BD: ', isSameUser._id)
        if (isSameUser && _id.toString() !== isSameUser._id.toString()) throw new NotFoundException('Email is already existed')

        if (dto.password) {
            const salt = await genSalt(7)
            user.password = await hash(dto.password, salt)
        }

        user.email = dto.email
        user.description = dto.description
        user.location = dto.location
        user.bannerPath = dto.bannerPath
        user.avatarPath = dto.avatarPath
        await user.save()

        return
    }

    async getMostPopular() {
        return this.userModel
            .find({subscribersCount: {$gt: 0}}, '-password -__v')
            .sort({subscribersCount: -1})
            .exec()
    }

}
