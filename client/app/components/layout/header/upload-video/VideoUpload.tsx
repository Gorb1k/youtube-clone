import { FC, useState } from 'react'
import iconStyles from '../icons/IconsRight.module.scss'
import { BsPlusCircleFill } from 'react-icons/bs'
import UploadModal from './UploadModal'
import { useMutation } from 'react-query'
import { VideoService } from '../../../../services/video/video.service'

const VideoUpload: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [videoId, setVideoId] = useState<string>('')
  const { mutate } = useMutation('create video', () => VideoService.create(), {
    onSuccess: ({ data }) => {
      setVideoId(data)
      setIsOpen(true)
    },
  })

  return (
    <>
      <button className={iconStyles.button} onClick={() => mutate()}>
        <BsPlusCircleFill fill="#cd3a42" />
      </button>
      <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
    </>
  )
}

export default VideoUpload
