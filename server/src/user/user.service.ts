import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "./user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {UserDto} from "./dto/user.dto";
import {genSalt, hash} from "bcryptjs";
import {getKeys} from "../utils/getKeys";


@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel) private userModel: ModelType<UserModel>,
    ) {
    }

    async getById(_id: string) {
        const user = await this.userModel.findById(_id)
        if (!user) throw new UnauthorizedException('User is not found')
        return user
    }

    async updateProfile(_id: string, dto: UserDto) {
        const user = await this.getById(_id)

        const isSameUser = await this.userModel.findOne({email: dto.email})
        if (isSameUser && _id !== isSameUser._id.toString()) throw new NotFoundException('Email is already existed')

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

        return user
    }

    async getMostPopular() {
        return this.userModel
            .find({subscribersCount: {$gt: 0}})
            .sort({subscribersCount: -1})
            .exec()
    }

}
