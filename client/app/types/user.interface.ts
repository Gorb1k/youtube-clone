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
    createdAt:string
    updatedAt:string
}
export interface IProfileUpdate extends Pick<IUser, 'email' | 'description' |'location' |'avatarPath' |'name' >{

}