import React, { FC } from 'react'
import styles from './VideoPlayer.module.scss'
import { usePlayer } from '../../../hooks/usePlayer'
import { MdPause, MdPlayArrow } from 'react-icons/md'

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
  const { videoRef, status, toggleVideo } = usePlayer()
  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={styles.player}
        src={`${videoPath}#t=8`}
        preload="metadata"
      />
      <div className={styles.button} onClick={toggleVideo}>
        <button>
          {status.isPlaying
            ? status.isShowButton && <MdPause className={'animate-fade'} />
            : status.isShowButton && <MdPlayArrow className={'animate-fade'} />}
        </button>
      </div>
      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBar}
          style={{
            width: `${status.progress}%`,
          }}
        />
      </div>
    </div>
  )
}

export default VideoPlayer
