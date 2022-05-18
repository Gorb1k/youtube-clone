import {BadRequestException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {Types} from "mongoose";
import {VideoModel} from "./video.model";
import {VideoDto} from "./dto/video.dto";

@Injectable()
export class VideoService {
    constructor(
        @InjectModel(VideoModel) private videoModel: ModelType<VideoModel>,
    ) {
    }

    async getByVideoId(_id: Types.ObjectId, isPublished:boolean= true){
        //Check authUserId === video.userId Обязательно!
        const video = await this.videoModel.findOne(isPublished ? {_id, isPublished:true} : {_id}, '-__v') //второй параметр исключает поля, которые нам не нужны
        if (!video) throw new NotFoundException('Video is not found')
        return video
    }

    async getAll(searchTerm?: string) {
        let options = {}
        options = {
            isPublished: true
        }
        if (searchTerm) {
            options = {
                ...options,
                $or: [
                    {name: new RegExp(searchTerm, 'i')}  //Регулярное выражение для поиска, i значит, что поиск невосприимчив к регистру
                ]
            }
        }

        return this.videoModel
            .find(options, '-__v')
            .sort({createdAt: 'desc'})
            .populate('user', 'name') //нужно для получения не просто ID юзера, но и полей, которые нам нужны
            .exec()
    }

    async getByUserId(userId: Types.ObjectId, isPrivate: boolean = false) {

        const forPrivate = {user: userId}
        const options = isPrivate ? forPrivate : {...forPrivate, isPublic: true}

        return this.videoModel
            .find(options, '-__v')
            .sort({createdAt: 'desc'})
            .exec()
    }

    async getMostPopularByViews() {
        return this.videoModel
            .find({views: {$gt: 0}}, '-__v')
            .sort({views: -1})
            .exec()
    }

    async create(user: Types.ObjectId) {
        const defaultValue: VideoDto = {
            user,
            name: '',
            videoPath: '',
            description: '',
            thumbnailPath: ''
        }
        const video = await this.videoModel.create(defaultValue)
        return video._id
    }

    async update(_id: string, dto: VideoDto) {
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, dto, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }

    async delete(_id: string) {
        const deletedVideo = await this.videoModel.findByIdAndDelete(_id).exec()
        if (!deletedVideo) throw new NotFoundException('Video is not found')

        return deletedVideo._id
    }

    async updateViewsCount(_id: Types.ObjectId) {
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, {$inc: {views: 1}}, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }

    async updateLikes(_id: Types.ObjectId, type?: 'inc' | 'dec') {
        if (type !== 'inc' && type !== 'dec') throw new BadRequestException('Invalid type (provide inc or dec type)')
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, {$inc: {like: type === 'inc' ? 1 : -1}}, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }
}
