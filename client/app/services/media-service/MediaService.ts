import instance, {getContentType} from "../../api/interceptors";

export interface IMediaResponse {
    name:string
    url:string
}

export const MediaService = {
    async upload(media:FormData, folder?:string) {
        return instance.post<IMediaResponse>('/file', media, {
            params: {folder},
            headers: getContentType('file')
        })
    }
}