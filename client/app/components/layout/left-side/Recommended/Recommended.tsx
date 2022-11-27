import { FC } from 'react'
import { IVideo } from '../../../../types/video.interface'
import VideoItem from '../../../ui/video-item/VideoItem'

interface IRec {
  newVideos: IVideo[]
  removeHandler?: (videoId: string) => void
  title?: string
  isUpdateLink?: boolean
}

const Recommended: FC<IRec> = ({
  isUpdateLink,
  newVideos,
  removeHandler,
  title,
}) => {
  return (
    <div id="recommended">
      <div className="top_block">
        <div className="left_title title_gray">
          <h2>{!!title ? title : 'Brand new video'}</h2>
        </div>
        <div className="sort">By View Trending</div>
      </div>

      <div className="catalog">
        {newVideos.map((video) => (
          <VideoItem
            isUpdateLink={isUpdateLink}
            key={video._id}
            item={video}
            isAvatar
            removeHandler={removeHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default Recommended
