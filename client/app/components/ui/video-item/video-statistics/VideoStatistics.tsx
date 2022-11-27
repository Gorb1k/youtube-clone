import React, { FC } from 'react'
import styles from './VideoStatistics.module.scss'
import { nFormatter } from '../../../../utils/numberFormatter'
import dayjs from 'dayjs'
import cn from 'classnames'

interface IVideoStat {
  views: number
  likes?: number
  createdAt: string
  subscribers?: number
}

const VideoStatistics: FC<IVideoStat> = ({
  createdAt,
  views,
  likes,
  subscribers,
}) => {
  return (
    <div className={cn(styles.number_info, 'profileStat')}>
      <div className={styles.views}>VIEWS {nFormatter(views)}</div>
      {!!likes && <div className={styles.likes}>LIKES {nFormatter(likes)}</div>}
      <div className={styles.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
      {!!subscribers && (
        <div className={styles.subscribers}>
          SUBSCRIBERS {nFormatter(subscribers)}
        </div>
      )}
    </div>
  )
}

export default VideoStatistics
