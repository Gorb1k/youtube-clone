import React, { FC } from 'react'
import styles from '../UploadVideoForm.module.scss'
import Link from 'next/link'
import Image from 'next/image'

interface IRightVideo {
  thumbnailPath?: string
  videoId: string
  fileName: string
  isLoaded: boolean
}

const RightInfo: FC<IRightVideo> = ({
  isLoaded,
  thumbnailPath,
  videoId,
  fileName,
}) => {
  return (
    <div className={styles.right}>
      {!thumbnailPath ? (
        <div className={styles.thumbnail}>
          {!isLoaded ? 'Video Uploading...' : 'Should upload a thumbnail'}
        </div>
      ) : (
        <Image src={thumbnailPath} width={344} height={200} alt={'thumbnail'} />
      )}
      <div className={styles.details}>
        <div>
          <span>Video link</span>
          <span>
            <Link href={`/v/${videoId}`}>
              <a>https://www.youtube.com/v/{videoId}</a>
            </Link>
          </span>
        </div>
        <div>
          <span>Filename</span>
          <span>{fileName}</span>
        </div>
      </div>
    </div>
  )
}

export default RightInfo
