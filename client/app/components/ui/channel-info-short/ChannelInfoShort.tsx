import React, { FC } from 'react'
import styles from './ChannelInfoShort.module.scss'
import Image from 'next/image'
import cn from 'classnames'
import { IUser } from '../../../types/user.interface'

const ChannelInfoShort: FC<{ channel: IUser }> = ({ channel }) => {
  return (
    <div className={styles.info}>
      <Image
        src={channel.avatarPath || ''}
        alt={channel.name}
        width={50}
        height={50}
        quality={90}
      />
      <div>
        <div className={cn(styles.name, { verified: channel.isVerified })}>
          {channel.name}
        </div>
        <div className={styles.location}>{channel.location}</div>
      </div>
    </div>
  )
}

export default ChannelInfoShort
