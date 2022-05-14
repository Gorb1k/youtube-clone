import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {VideoService} from './video.service';
import {Types} from "mongoose";
import {VideoDto} from "./dto/video.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {IdValidationPipe} from "../pipes/id.validation.pipe";
import {CurrentUser} from "../user/decorators/user.decorator";

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) {
    }

    @Get('private/:id')
    @Auth()
    async getByVideoIdPrivate(@Param('id', IdValidationPipe) id: Types.ObjectId) {
        return this.videoService.getByVideoId(id, false)
    }

    @Get('by-user/:userId')
    async getVideoByUserId(@Param('userId', IdValidationPipe) userId: Types.ObjectId) {
        return this.videoService.getByUserId(userId)
    }
    @Get('by-user-private')
    @Auth()
    async getVideoByUserIdPrivate(@CurrentUser('_id') _id: Types.ObjectId) {
        return this.videoService.getByUserId(_id, true)
    }

    @Get('most-popular')
    async getMostPopularByViews() {
        return this.videoService.getMostPopularByViews()
    }

    @Get()
    async getAllVideos(@Query('searchTerm') searchTerm?: string) {
        return this.videoService.getAll(searchTerm)
    }

    @Get(':id')
    async getByVideoId(@Param('id', IdValidationPipe) id: Types.ObjectId) {
        return this.videoService.getByVideoId(id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put(':id')
    @Auth()
    async updateVideo(@Param('id', IdValidationPipe) id: string,
                      @Body() dto: VideoDto) {
        return this.videoService.update(id, dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post()
    @Auth()
    async createVideo(@CurrentUser('_id') _id: Types.ObjectId) {
        return this.videoService.create(_id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Delete(':id')
    @Auth()
    async deleteVideo(@Param('id', IdValidationPipe) id: string) {
        return this.videoService.delete(id)
    }


    @HttpCode(200)
    @Put('update-views/:videoId')

    async updateViews(@Param('videoId', IdValidationPipe) videoId: Types.ObjectId) {
        return this.videoService.updateViewsCount(videoId)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('update-likes/:videoId')
    @Auth()
    async updateLikes(@Param('videoId', IdValidationPipe) videoId: Types.ObjectId,
                      @Query('type') type: 'inc' | 'dec') {
        return this.videoService.updateLikes(videoId, type)
    }

}
