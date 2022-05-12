import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
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

    async getById(_id: Types.ObjectId) {
        const video = await this.videoModel.findOne({_id, isPublished: true}, '-__v') //второй параметр исключает поля, которые нам не нужны
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
                    {name: new RegExp(searchTerm, 'i')}
                ]
            }
        }
        return this.videoModel
            .find(options, '-__v')
            .sort({createdAt: 'desc'})
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

    async getMostPopularByView() {
        return this.videoModel
            .find({views: {$gt: 0}}, '-__v')
            .sort({views: -1})
            .exec()
    }

    async create(userId: Types.ObjectId) {
        const defaultValue: VideoDto = {
            userId,
            name: '',
            videoPath: '',
            description: '',
            thumbnailPath: ''
        }
        const video = await this.videoModel.create(defaultValue)
        return video._id
    }

    async update(_id: Types.ObjectId, dto: VideoDto) {
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, dto, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }

    async delete(_id: Types.ObjectId) {
        const deletedVideo = await this.videoModel.findByIdAndDelete(_id).exec()
        if (!deletedVideo) throw new NotFoundException('Video is not found')

        return deletedVideo._id
    }

    async updateViewsCount(_id: Types.ObjectId) {
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, {$inc: {views: 1}}, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }

    async updateLike(_id: Types.ObjectId, type: 'inc' | 'dec') {
        const updatedVideo = await this.videoModel.findByIdAndUpdate(_id, {$inc: {like: type === 'inc' ? 1 : -1}}, {new: true}).exec()
        if (!updatedVideo) throw new NotFoundException('Video is not found')

        return updatedVideo
    }
}
