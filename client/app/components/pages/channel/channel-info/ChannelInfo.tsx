import React, { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { IUser } from '../../../../types/user.interface'
import styles from './ChannelInfo.module.scss'
import VideoStatistics from '../../../ui/video-item/video-statistics/VideoStatistics'

const ChannelInfo: FC<{ channel: IUser }> = ({ channel }) => {
  const channelViews = channel.channelViews || 0
  const channelLikes = channel.channelLikes || 0
  return (
    <div className={cn(styles.videoStat, 'videoStat')}>
      <div className={styles.info}>
        <Image
          src={channel.avatarPath || ''}
          alt={channel.name}
          width={100}
          height={100}
          quality={90}
        />
        <div>
          <div className={cn(styles.name, { verified: channel.isVerified })}>
            {channel.name}
          </div>
          <div className={styles.location}>{channel.location}</div>
        </div>
      </div>
      <article className={styles.article}>{channel.description}</article>
      <VideoStatistics
        views={channelViews}
        createdAt={channel.createdAt}
        likes={channelLikes}
      />
    </div>
  )
}

export default ChannelInfo
