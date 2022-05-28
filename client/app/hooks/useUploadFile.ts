import {useMutation} from "react-query";
import {MediaService} from "../services/media-service/MediaService";
import {errorMessageHandler} from "../utils/errorMessageHandler";
import {ChangeEvent} from "react";


export const useUploadFile = (
    onChange: (...event: any) => void,
    folder?: string,
    setValue?: (value: number) => void) => {
    const {mutateAsync} = useMutation('upload file',
        (data: FormData) => MediaService.upload(data, folder, setValue), {
            onSuccess: ({data}) => {
                onChange(data)
            },
            onError: (error: any) => {
                alert(errorMessageHandler(error)) //обработка приходящего месседжа из Error
            }
        })
    //TODO: Обернуть в useCallback
    const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files?.length) return
        const formData = new FormData()
        formData.append('media', files[0])
        await mutateAsync(formData)
    }

    return {
        uploadFile
    }
}