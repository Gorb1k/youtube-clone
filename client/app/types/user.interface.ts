export interface IUser {
    _id:string
    email:string
    name:string
    location:string
    description:string
    avatarPath:string
    subscribersCount:number
    videosCount?:number
    isVerified?:boolean
    channelViews?:number
    channelLikes?:number
    createdAt:string
    updatedAt:string
}
export interface IProfileUpdate extends Pick<IUser, 'email' | 'description' |'location' |'avatarPath' |'name' >{

}