import { Ref} from "@typegoose/typegoose";
import {UserModel} from "../../user/user.model";
import {IsBoolean, IsString} from "class-validator";
import {IsObjectId} from "class-validator-mongo-object-id";
import {Types} from "mongoose";

export class VideoDto {

    @IsString()
    readonly name: string

    readonly isPublished?: boolean

    @IsString()
    readonly videoPath: string

    @IsString()
    readonly description: string

    @IsString()
    readonly thumbnailPath: string

    readonly user?: Types.ObjectId

}