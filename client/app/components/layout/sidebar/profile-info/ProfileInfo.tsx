import Image from 'next/image'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { UserService } from '../../../../services/user/user.service'
import Loader from '../../../ui/Loader'
import { nFormatter } from '../../../../utils/numberFormatter'
import styles from './ProfileInfo.module.scss'
import cn from 'classnames'

const ProfileInfo: FC = () => {
  const { data, isLoading } = useQuery(
    'get profile',
    () => UserService.getProfile(),
    { select: ({ data }) => data }
  )
  return isLoading ? (
    <Loader
      count={5} //колво строк
    />
  ) : (
    <>
      <div className={styles.profile_info}>
        <Image
          src={data?.avatarPath || ''}
          alt=""
          width={120}
          height={120}
          quality={90}
        />
        <div className={cn(styles.name, { verified: data?.isVerified })}>
          {data?.name}
        </div>
        <div className={styles.location}>{data?.location}</div>
      </div>
      <div className={styles.information}>
        <div className={styles.item}>
          <div className={styles.top}>{data?.videosCount}</div>
          <div className={styles.bottom}>videos</div>
        </div>
        <div className={styles.item}>
          <div className={styles.top}>
            {nFormatter(data?.subscribersCount || 0)}
          </div>
          <div className={styles.bottom}>subscribers</div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo
