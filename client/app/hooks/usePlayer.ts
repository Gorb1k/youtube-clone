import { useCallback, useEffect, useRef, useState } from 'react'
import { IVideoElement } from '../components/ui/player/video-player.interface'

export const usePlayer = () => {
  const videoRef = useRef<IVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isShowButton, setIsShowButton] = useState<boolean>(true)
  const [_, setCurrentTime] = useState<number>(0)
  const [videoTime, setVideoTime] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [isTimeOut, SetIsTimeOut] = useState<boolean>(false)

  useEffect(() => {
    const originalDuration = videoRef.current?.duration
    if (originalDuration) setVideoTime(originalDuration)
  }, [videoRef.current?.duration])

  const toggleVideo = useCallback(() => {
    let hideTimeOut

    const hideButton = () => {
      hideTimeOut = setTimeout(() => {
        setIsShowButton(false)
      }, 1500)
      SetIsTimeOut(true)
    }

    if (!isPlaying) {
      setIsShowButton(true)
      videoRef.current?.play()
      setIsPlaying(true)
      if (isTimeOut) clearTimeout(hideTimeOut)
      hideButton()
    } else {
      setIsShowButton(true)
      videoRef.current?.pause()
      setIsPlaying(false)
      if (isTimeOut) clearTimeout(hideTimeOut)
      hideButton()
    }
  }, [isPlaying])
  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 5
  }
  const reverse = () => {
    if (videoRef.current) videoRef.current.currentTime -= 5
  }
  const fullScreen = () => {
    const video = videoRef.current
    if (!video) return

    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen()
    } else if (video.mozRequestFullscreen) {
      video.mozRequestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / videoTime) * 100)
    }

    video.addEventListener('timeupdate', updateProgress)

    return () => {
      video.removeEventListener('timeupdate', updateProgress)
    }
  }, [videoTime])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          forward()
          break
        case 'ArrowLeft':
          reverse()
          break
        case ' ':
          e.preventDefault()
          toggleVideo()
          break
        case 'f':
          fullScreen()
          break
        default:
          return
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleVideo])

  return {
    videoRef,
    toggleVideo,
    status: {
      isPlaying,
      progress,
      isShowButton,
    },
  }
}
