import {IComment, ICommentCreate} from "../../types/comment.interface";
import axiosWithAuth, {axiosClassic} from "../../api/interceptors";

export const commentService = {
    async getByVideoId(videoId:string) {
        return axiosClassic.get<IComment[]>(`/comment/by-video/${videoId}`)
    },
    async create(body: ICommentCreate) {
        return axiosWithAuth.post<IComment>(`/comment`, body)
    }
}