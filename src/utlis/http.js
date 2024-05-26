//axios基础的封装
import axios from "axios"
 const httpInstance= axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})
//拦截器
//axios响应式拦截器
httpInstance.interceptors.request.use(config=>{
    return config
})
//axios响应拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    return Promise.reject(e)
})
export default httpInstance