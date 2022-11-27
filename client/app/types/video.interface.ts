import { IUser } from './user.interface'

export interface IVideo {
  _id: string
  videoPath: string
  name: string
  description: string
  thumbnailPath: string
  views: number
  like: number
  user?: IUser
  isPublished?: boolean
  createdAt: string
  updatedAt: string
}

export type IVideoFields =
  | 'isPublished'
  | 'thumbnailPath'
  | 'description'
  | 'videoPath'
  | 'name'

export type IVideoUpdate = Pick<
  IVideo,
  'isPublished' | 'thumbnailPath' | 'description' | 'videoPath' | 'name'
>
