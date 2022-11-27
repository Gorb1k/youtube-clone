import instance, { getContentType } from '../../api/interceptors'

export interface IMediaResponse {
  name: string
  url: string
}

export const MediaService = {
  async upload(
    media: FormData,
    folder?: string,
    setValue?: (value: number) => void
  ) {
    return instance.post<IMediaResponse>('/file', media, {
      params: { folder },
      headers: getContentType('file'),
      onUploadProgress: (progressEvent: ProgressEvent) => {
        if (setValue) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100
          setValue(Math.floor(progress))
        }
      },
    })
  },
}
