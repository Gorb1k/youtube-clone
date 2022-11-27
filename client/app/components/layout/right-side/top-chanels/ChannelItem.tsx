import { FC } from 'react'
import Image from 'next/image'
import { IUser } from '../../../../types/user.interface'
import { nFormatter } from '../../../../utils/numberFormatter'
import Link from 'next/link'
import cn from 'classnames'

const ChannelItem: FC<{ item: IUser }> = ({ item }) => {
  return (
    <div className="channel">
      <div className="info_left">
        <Link href={`/c/${item._id}`}>
          <a>
            <Image
              src={item.avatarPath}
              alt={item.name}
              width={55}
              height={55}
            />
          </a>
        </Link>
        <div className="info">
          <div className={cn('name', { verified: item.isVerified })}>
            {item.name}
          </div>
          <div className="subs">
            {nFormatter(item.subscribersCount)} Subscribers
          </div>
        </div>
      </div>
      <Link href={`/c/${item._id}`}>
        <a className="mnu">
          <Image
            src="img/common/open-menu.svg"
            alt="Menu"
            width={'100%'}
            height={'100%'}
          />
        </a>
      </Link>
    </div>
  )
}

export default ChannelItem
