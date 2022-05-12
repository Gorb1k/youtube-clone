import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop, Ref} from "@typegoose/typegoose";
import {CommentModel} from "../comment/comment.model";
import {UserModel} from "../user/user.model";


export interface VideoModel extends Base {}

export class VideoModel extends TimeStamps{
    @prop()
    name: string

    @prop({default:false})
    isPublished: boolean

    @prop({default: 0})
    views?: number

    @prop({default: 0})
    like?: number

    @prop()
    videoPath: string

    @prop()
    description: string

    @prop()
    thumbnailPath: string

    @prop({ref: () => UserModel})
    user: Ref<UserModel>

    //Выборка не в базе данные а через ID
    // @prop({ref: () => CommentModel})
    // comments?: Ref<CommentModel>[]
}
