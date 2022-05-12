import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {CommentModel} from "./comment.model";

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: CommentModel,
      schemaOptions: {
        collection: 'Comment'
      }
    }])
  ]
})
export class CommentModule {}
