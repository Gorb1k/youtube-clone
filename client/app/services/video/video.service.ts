import axiosWithAuth, {axiosClassic} from "../../api/interceptors";
import {IVideo, IVideoUpdate} from "../../types/video.interface";

export const VideoService = {
    async getByUserId(userId:string) {
        return axiosClassic.get<IVideo[]>(`/video/by-user/${userId}`)
    },
    async GetByCurrentUser() {
        return axiosWithAuth.get<IVideo[]>(`/video/by-user-private`)
    },
    async getByVideoId(videoId:string) {
        return axiosClassic.get<IVideo>(`/video/${videoId}`)
    },
    async getByVideoIdPrivate(videoId:string) {
        return axiosWithAuth.get<IVideo>(`/video/private/${videoId}`)
    },
    async getAll(searchTerm?:string) {
        return axiosClassic.get<IVideo[]>(`/video`, {params: searchTerm ? {searchTerm} : {}})
    },
    async getMostPopular() {
        return axiosClassic.get<IVideo[]>('/video/most-popular')
    },
    async create() {
        return axiosWithAuth.post<string>('/video')
    },
    async update(id:string, body:IVideoUpdate) {
        return axiosWithAuth.put<IVideo>(`/video/${id}`, body)
    },
    async updateViews(id:string) {
        return axiosClassic.put<IVideo>(`/video/update-views/${id}`)
    },
    async updateLikes(id:string, type: 'inc'|'dec') {
        return axiosWithAuth.put<IVideo>(`/video/update-likes/${id}`)
    },
    async delete(id:string) {
        return axiosWithAuth.delete<string>(`/video/${id}`)
    }
}