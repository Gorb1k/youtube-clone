import { axiosClassic } from '../../api/interceptors'
import { IAuthData, removeTokenFromStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('/auth/login', {
      email,
      password,
    })
    if (response.data.accessToken) {
      saveToStorage(response.data)
    }
    return response.data
  },
  async registration(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('/auth/registration', {
      email,
      password,
    })
    if (response.data.accessToken) {
      saveToStorage(response.data)
    }
    return response.data
  },
  logout() {
    removeTokenFromStorage()
    localStorage.removeItem('user')
  },
}
