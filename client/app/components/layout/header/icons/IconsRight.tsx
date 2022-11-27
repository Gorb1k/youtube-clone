import { FC } from 'react'

import styles from './IconsRight.module.scss'
import AuthForm from '../auth-form/AuthForm'
import { useAuth } from '../../../../hooks/useAuth'
import VideoUpload from '../upload-video/VideoUpload'

const IconsRight: FC = () => {
  const { user } = useAuth()

  return (
    <div className={styles.icons}>
      {!!user ? <VideoUpload /> : <AuthForm />}
    </div>
  )
}

export default IconsRight
