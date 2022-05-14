import {Types} from "mongoose";
import {IsString} from "class-validator";
import {IsObjectId} from "class-validator-mongo-object-id";


export class CommentDto {

    @IsString()
    readonly message:string

    @IsObjectId()
    readonly videoId: Types.ObjectId
}