import axios from 'axios'
import Cookies from 'js-cookie'

export const getContentType = (type?: 'file') => {
  switch (type) {
    case 'file':
      return { 'Content-Type': 'multipart/form-data' }
    default:
      return { 'Content-Type': 'application/json' }
  }
}

export const axiosClassic = axios.create({
  baseURL: `${process.env.APP_URL}/api`,
  headers: getContentType(),
})

const instance = axios.create({
  //for deploy - baseURL:IS_PRODUCTION ? API_SERVER_URL : API_URL
  baseURL: `${process.env.APP_URL}/api`,
  headers: getContentType(),
})
instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  //const accessToken = localStorage.getItem('accessToken')

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
// instance.interceptors.response.use(config => {
//
// })

export default instance
