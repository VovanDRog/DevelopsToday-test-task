import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'https://simple-blog-api.crew.red/',
}

const client: AxiosInstance = axios.create(config)

export default client
