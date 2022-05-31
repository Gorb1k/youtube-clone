import {SubmitHandler, useForm} from "react-hook-form";
import {IVideoUpdate} from "../types/video.interface";
import {useMutation} from "react-query";
import {VideoService} from "../services/video/video.service";
import {Dispatch, SetStateAction, useState} from "react";
import {IMediaResponse} from "../services/media-service/MediaService";


interface IUseUVF {
    videoId:string
    setIsOpen: Dispatch<SetStateAction<any>>
}

export const useUploadVideoForm = ({videoId, setIsOpen}:IUseUVF) => {
    const {reset, setValue, watch, register, formState: {errors}, control, handleSubmit} = useForm<IVideoUpdate>({
        mode: 'onChange'
    })

    const {mutateAsync, isSuccess} = useMutation('VideoUpdate Form', (body: IVideoUpdate) => VideoService.update(videoId, body), {
        onSuccess: () => {
            setTimeout(() => {
                setIsOpen(false)
                reset()
            }, 2000)
        }

    })

    const onSubmit: SubmitHandler<IVideoUpdate> = async (data) => {
        await mutateAsync(data)

    }

    const thumbnailPath = watch('thumbnailPath')
    const [videoFileName, setVideoFileName] = useState<string>('')
    const [loadingProgress, setLoadingProgress] = useState<number>(0)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [isChosen, setIsChosen] = useState<boolean>(false)

    const handleUploadVideo = (value: IMediaResponse) => {
        setValue('videoPath', value.url)
        setValue('name', value.name)
        setVideoFileName(value.name)
    }

    const setProgressPercentage = (value: number) => {
        setLoadingProgress(value)
        if (value === 100) setIsLoaded(true)
    }
    return {
        setProgressPercentage,
        handleUploadVideo,
        loadingProgress,
        videoFileName,
        thumbnailPath,
        handleSubmit,
        setIsChosen,
        isSuccess,
        isLoaded,
        isChosen,
        register,
        errors,
        control,
        onSubmit
    }
}