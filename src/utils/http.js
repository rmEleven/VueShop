import axios from 'axios'

// axios 实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios 响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    Promise.reject(e)
})

export default httpInstance