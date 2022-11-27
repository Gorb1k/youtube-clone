import React, { FC } from 'react'
import Button from '../../../../../ui/button/Button'
import styles from './FooterForm.module.scss'
import { MdCheckCircle, MdUpload } from 'react-icons/md'
import cn from 'classnames'

interface FooterForm {
  percent: number
  isLoaded: boolean
}

const FooterForm: FC<FooterForm> = ({ percent, isLoaded }) => {
  return (
    <div className={styles.footer}>
      <div
        className={cn(styles.status, {
          [styles['icons-uploaded']]: isLoaded,
        })}
      >
        <MdUpload className={styles['upload-icon']} />
        <MdCheckCircle className={styles['check-icon']} />
        <span>
          {isLoaded ? 'Video is uploaded' : `Uploading ${percent}%...`}
        </span>
      </div>
      <div>
        <Button>Upload</Button>
      </div>
    </div>
  )
}

export default FooterForm
