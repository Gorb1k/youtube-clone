import React, { FC, useEffect } from 'react'
import { IVideoPage } from './video.interface'
import Layout from '../../layout/Layout'
import VideoPlayer from '../../ui/player/VideoPlayer'
import VideoDetail from './video-detail/VideoDetail'
import Comments from './comments/Comments'
import { IUser } from '../../../types/user.interface'
import { useMutation } from 'react-query'
import { VideoService } from '../../../services/video/video.service'

const Video: FC<IVideoPage> = ({ video }) => {
  const { mutate } = useMutation('update view', () =>
    VideoService.updateViews(video._id)
  )

  useEffect(() => {
    debugger
    mutate()
  }, [])

  return (
    <Layout title={video.name}>
      <div>
        <VideoPlayer videoPath={video.videoPath} />
        <div id="wrapper_content">
          <div className={'left_side'}>
            <VideoDetail video={video} channel={video.user || ({} as IUser)} />
          </div>
          <div className={'right_side'}>
            <Comments videoId={video._id} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Video
