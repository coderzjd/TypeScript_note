import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class MyRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求拦截器')

        return config
      },
      (err) => {
        console.log('全局请求失败拦截器')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应拦截器')
        return res
      },
      (err) => {
        console.log('全局响应失败拦截器')
        return err
      }
    )
  }
  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<any, T>(config)
  }
  get() {}
  post() {}
}
export default MyRequest
