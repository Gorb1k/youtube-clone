import { IVideo } from '../../../types/video.interface'
import { IUser } from '../../../types/user.interface'

export interface IHome {
  newVideos: IVideo[]
  weeklyVideos: IVideo[]
  randomVideo: IVideo
  topVideo: IVideo
  topChannels: IUser[]
}
