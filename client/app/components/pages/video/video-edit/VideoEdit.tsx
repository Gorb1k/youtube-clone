import React, {FC, useEffect} from 'react';
import Layout from "../../../layout/Layout";
import {useMutation, useQuery} from "react-query";
import {VideoService} from "../../../../services/video/video.service";
import {useRouter} from "next/router";
import {IVideoUpdate} from "../../../../types/video.interface";
import StudioItem from "../../studio/StudioItem";
import Loader from "../../../ui/Loader";
import styles from "../../../layout/header/upload-video/upload-video-form/UploadVideoForm.module.scss";
import Input from "../../../ui/input/Input";
import TextArea from "../../../ui/text-area/TextArea";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import FileInput from "../../../ui/file-input/FileInput";
import {IMediaResponse} from "../../../../services/media-service/MediaService";
import ToggleIsPublished
    from "../../../layout/header/upload-video/upload-video-form/toggle-isPublished/ToggleIsPublished";
import RightInfo from "../../../layout/header/upload-video/upload-video-form/right-info/RightInfo";
import Button from "../../../ui/button/Button";



const VideoEdit: FC = () => {

    const router = useRouter()
    const videoId = String(router.query.id)
    const {getValues ,setValue, watch, register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const {isLoading, data} = useQuery(['get video for update', videoId], () => VideoService.getByVideoIdPrivate(videoId), {
        select: ({data}) => data


            // keys.forEach((field) => {
            //     setValue(field, data[field])
            // })
            // setValue('thumbnailPath', data.thumbnailPath)
            // setValue('name', data.name)
            // setValue('videoPath', data.videoPath)
            // setValue('description', data.description)
            // setValue('isPublished', data.isPublished)
        ,
        enabled: !!videoId
    })
    useEffect(() => {
            if (!data) return
            const values = getValues()
            const keys = Object.keys(values) as (keyof typeof values)[]
            keys.forEach((field) => {
                setValue(field, data[field])
            })
    },[data])

    const {mutate} = useMutation(['update video', videoId], (data: IVideoUpdate) => VideoService.update(videoId, data), {

        onSuccess:() => {
            router.push('/studio')
        }
    })


    const onSubmit: SubmitHandler<IVideoUpdate> = (data) => {
        mutate(data)

    }

    return (
        <Layout title={'Edit video -- Youtube v2.0'}>
            <div style={{backgroundColor: '#F0F1F7'}} className={'p-7'}>
                <StudioItem>
                    {
                        isLoading
                            ? <Loader count={5}/>
                            : <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.left}>
                                    <Input
                                        {...register('name', {
                                            required: 'Name is required!'
                                        })}
                                        placeholder={'Name'} error={errors.name}/>
                                    <TextArea
                                        {...register('description', {
                                            required: 'Description is required!'
                                        })}
                                        placeholder={'Description'} error={errors.description}/>

                                    <div className={'flex mt-2'}>
                                        <Controller
                                            rules={{required: 'thumbnailPath is required'}}
                                            control={control}
                                            name={'thumbnailPath'}
                                            render={({field: {onChange}}) =>
                                                <FileInput
                                                    error={errors.thumbnailPath?.message}
                                                    onChange={(value: IMediaResponse) => {
                                                        onChange(value.url)
                                                    }}
                                                    folder={'thumbnail'}
                                                />
                                            }
                                        />
                                    </div>
                                    <div className={'mt-2'}>
                                        <span>Video:</span>
                                        <Controller
                                            rules={{required: 'videoPath is required'}}
                                            control={control}
                                            name={'videoPath'}
                                            render={({field: {onChange}}) =>
                                                <FileInput
                                                    error={errors.videoPath?.message}
                                                    onChange={(value: IMediaResponse) => {
                                                        onChange(value.url)
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                    <Controller
                                        control={control}
                                        name={'isPublished'}
                                        defaultValue={false}
                                        render={({field: {value, onChange}}) =>
                                            <ToggleIsPublished
                                                clickHandler={() => {
                                                    onChange(!value)
                                                }}
                                                isEnabled={!!value}/>}
                                    />
                                    <div className={'mt-10'}>
                                        <Button>Save</Button>
                                    </div>
                                </div>
                                <RightInfo isLoaded videoId={videoId} fileName={''}
                                           thumbnailPath={watch('thumbnailPath')}/>

                            </form>
                    }
                </StudioItem>

            </div>
        </Layout>
    );
};

export default VideoEdit;