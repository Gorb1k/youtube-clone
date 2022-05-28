import React, {FC, useState} from 'react';
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {IVideoUpdate} from "../../../../../types/video.interface";
import Input from "../../../../ui/input/Input";
import TextArea from "../../../../ui/text-area/TextArea";
import ToggleIsPublished from "./toggle-isPublished/ToggleIsPublished";
import FooterForm from "./footer-form/FooterForm";
import styles from './UploadVideoForm.module.scss'
import RightInfo from "./right-info/RightInfo";
import FileInput from "../../../../ui/file-input/FileInput";
import {IMediaResponse} from "../../../../../services/media-service/MediaService";


const UploadVideoForm: FC<{videoId:string}> = ({videoId}) => {

    const {setValue ,watch, register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IVideoUpdate> = (data) => {
        console.log(data)
    }

    const videoPath = watch('videoPath')
    const [videoFileName, setVideoFileName] = useState<string>('')
    const [loadingProgress, setLoadingProgress] = useState<number>(0)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const handleUploadVideo = (value:IMediaResponse) => {
        setValue('videoPath', value.url)
        setValue('name', value.name)
        setVideoFileName(value.name)
    }

    const setProgressPercentage = (value:number) => {
        setLoadingProgress(value)
        if(value === 100) setIsLoaded(true)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            {!!videoPath
                ? <>
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
                    </div>
                    <RightInfo isLoaded={isLoaded} videoId={videoId} fileName={videoFileName}/>
                    <FooterForm percent={loadingProgress} isLoaded={isLoaded}/>
                </>
                : <Controller
                    control={control}
                    name={'videoPath'}
                    render={() =>
                        <FileInput title={' Upload video first, please.'}
                                   onChange={handleUploadVideo}
                                   folder={'videos'}
                                   setValue={setProgressPercentage}
                        />
                    }
                />

            }
        </form>
    );
};

export default UploadVideoForm;