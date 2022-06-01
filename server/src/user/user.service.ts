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
    async getUserWithCount(_id: Types.ObjectId) {

        return this.userModel.aggregate()
            .match({_id}) // для возврата только пользователя c нужным ID
            .lookup({
            from: 'Video', //из кокой коллекции берем (Таблица Video связана c таблицей User через поле user)
            foreignField: 'user', // это название поля в таблице Video (foreignKey)
            localField: '_id', // название поля в таблице User (primaryKey)
            as: 'videos' // это название поля, куда мы выводим полученные данные
        }).addFields({
            videosCount: {
                $size: '$videos' //выводит колличество полученных эементов
            },
                channelViews: {
                    $sum: '$videos.views'
                },
                channelLikes: {
                    $sum: '$videos.like'
                }
        }).project({
            __v:0,
            password:0, //убираем ненужные поля
            videos:0
        }).exec() //выполняем запрос к БД чтобы return вернул обработанный ответ от БД
            .then((data) => data[0]) // забираем из массива нужный элемент
    }
    async updateProfile(_id: Types.ObjectId, dto: UserDto) {
        const user = await this.getById(_id)

        const isSameUser = await this.userModel.findOne({email: dto.email})
        if (isSameUser && _id.toString() !== isSameUser._id.toString()) throw new NotFoundException('Email is already existed')

        if (dto.password) {
            const salt = await genSalt(7)
            user.password = await hash(dto.password, salt)
        }

        user.email = dto.email
        user.name = dto.name
        user.description = dto.description
        user.location = dto.location
        user.avatarPath = dto.avatarPath
        await user.save()

        return user
    }
    async getMostPopular() {
        return this.userModel
            .find({subscribersCount: {$gt: 0}}, '-password -__v')
            .sort({subscribersCount: -1})
            .exec()
    }
    async getAll() {
        return this.userModel.find({}, '-password -__v').exec()
    }

}
