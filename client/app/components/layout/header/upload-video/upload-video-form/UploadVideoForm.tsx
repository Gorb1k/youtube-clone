import React, { Dispatch, FC, SetStateAction } from 'react'
import { Controller } from 'react-hook-form'
import Input from '../../../../ui/input/Input'
import TextArea from '../../../../ui/text-area/TextArea'
import ToggleIsPublished from './toggle-isPublished/ToggleIsPublished'
import FooterForm from './footer-form/FooterForm'
import styles from './UploadVideoForm.module.scss'
import RightInfo from './right-info/RightInfo'
import FileInput from '../../../../ui/file-input/FileInput'
import { IMediaResponse } from '../../../../../services/media-service/MediaService'
import LoadedAlert from './load-alert/LoadedAlert'
import { useUploadVideoForm } from '../../../../../hooks/useUploadVideoForm'

interface IUploadForm {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  videoId: string
}

const UploadVideoForm: FC<IUploadForm> = ({ videoId, setIsOpen }) => {
  const {
    isChosen,
    setIsChosen,
    handleSubmit,
    handleUploadVideo,
    videoFileName,
    loadingProgress,
    isLoaded,
    thumbnailPath,
    setProgressPercentage,
    isSuccess,
    register,
    errors,
    control,
    onSubmit,
  } = useUploadVideoForm({ videoId, setIsOpen })

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {isSuccess && <LoadedAlert />}
      {isChosen ? (
        <>
          <div className={styles.left}>
            <Input
              {...register('name', {
                required: 'Name is required!',
              })}
              placeholder={'Name'}
              error={errors.name}
            />
            <TextArea
              {...register('description', {
                required: 'Description is required!',
              })}
              placeholder={'Description'}
              error={errors.description}
            />

            <div className={'flex mt-2'}>
              <Controller
                rules={{ required: 'thumbnailPath is required' }}
                control={control}
                name={'thumbnailPath'}
                render={({ field: { onChange } }) => (
                  <FileInput
                    error={errors.thumbnailPath?.message}
                    onChange={(value: IMediaResponse) => {
                      onChange(value.url)
                    }}
                    folder={'thumbnail'}
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name={'isPublished'}
              defaultValue={false}
              render={({ field: { value, onChange } }) => (
                <ToggleIsPublished
                  clickHandler={() => {
                    onChange(!value)
                  }}
                  isEnabled={!!value}
                />
              )}
            />
          </div>
          <RightInfo
            isLoaded={isLoaded}
            videoId={videoId}
            fileName={videoFileName}
            thumbnailPath={thumbnailPath}
          />
          <FooterForm percent={loadingProgress} isLoaded={isLoaded} />
        </>
      ) : (
        <div
          className={
            'flex absolute left-0 top-0 w-full h-full justify-center items-center translate-x-0.5 translate-y-0.5'
          }
        >
          <Controller
            control={control}
            name={'videoPath'}
            render={() => (
              <FileInput
                title={' Upload video first, please.'}
                onChange={handleUploadVideo}
                folder={'video'}
                setValue={setProgressPercentage}
                setIsChosen={setIsChosen}
              />
            )}
          />
        </div>
      )}
    </form>
  )
}

export default UploadVideoForm
