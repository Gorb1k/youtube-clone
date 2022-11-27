import { FC } from 'react'
import WeeklyFeatured from './WeaklyFeatured/WeeklyFeatured'
import Line from '../../ui/Line'
import Recommended from './Recommended/Recommended'
import { IVideo } from '../../../types/video.interface'

interface ILeftSide {
  weeklyVideos: IVideo[]
  randomVideo: IVideo
  newVideos: IVideo[]
}

const LeftSide: FC<ILeftSide> = ({ randomVideo, weeklyVideos, newVideos }) => {
  return (
    <div className="left_side">
      <WeeklyFeatured weeklyVideos={weeklyVideos} randomVideo={randomVideo} />

      <Line />

      <Recommended newVideos={newVideos} />
    </div>
  )
}

export default LeftSide
