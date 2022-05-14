import {Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { CommentService } from './comment.service';
import {Types} from "mongoose";
import {CommentDto} from "./dto/comment.dto";
import {Auth} from "../auth/decorators/auth.decorator";
import {CurrentUser} from "../user/decorators/user.decorator";

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('by-video/:videoId')
  async getByVideoId(@Param('videoId') videoId: Types.ObjectId) {
    return this.commentService.getByVideoId(videoId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('_id') _id: Types.ObjectId, @Body() dto: CommentDto) {
    return this.commentService.create(_id, dto)
  }
}
