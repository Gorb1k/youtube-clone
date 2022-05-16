import {IAuthData, saveToStorage} from "../auth/auth.helper";
import axiosWithAuth, {axiosClassic} from "../../api/interceptors";
import {IProfileUpdate, IUser} from "../../types/user.interface";


export const UserService = {
    async getProfile() {
        return axiosWithAuth.get<IUser>('/user/profile')
    },
    async getMostPopular() {
        return axiosClassic.get<IUser[]>('/user/most-popular')
    },
    async updateProfile(body:IProfileUpdate) {
        return axiosWithAuth.put<IUser[]>('/user/profile', body)
    },
}