import Cookies from "js-cookie";

export interface IAuthData {
    user: {
        email:string
        _id:string
    } | null
    accessToken: string
}

const saveTokenToStorage = (accessToken:string) => {
    Cookies.set('accessToken', accessToken)
}
export const removeTokenFromStorage = () => {
    Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
    saveTokenToStorage(data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
}