import { Injectable } from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {CommentModel} from "./comment.model";
import {Types} from "mongoose";
import {VideoDto} from "../video/dto/video.dto";
import {CommentDto} from "./dto/comment.dto";

@Injectable()
export class CommentService {

    constructor(@InjectModel(CommentModel) private readonly commentModel: ModelType<CommentModel>) {
    }

    async getByVideoId(videoId: Types.ObjectId) {

        return this.commentModel
            .find({video: videoId}, '-__v')
            .sort({createdAt: 'desc'})
            .populate('user', 'name location avatarPath isVerified')
            .exec()
    }

    async create(userId: Types.ObjectId, dto:CommentDto) {

        return  await this.commentModel.create({...dto, user:userId, video: dto.videoId})
    }

}
