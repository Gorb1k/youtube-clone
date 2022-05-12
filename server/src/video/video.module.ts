import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import {TypegooseModule} from "nestjs-typegoose";
import {VideoModel} from "./video.model";


@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: VideoModel,
      schemaOptions: {
        collection: 'Video'
      }
    }])
  ]
})
export class VideoModule {}
