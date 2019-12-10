import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://localhost:8081/static'
export const get = (url,params) => {
    return new Promise((resolve,reject) => {
        axios.get(url,{params: params})
        .then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
export const post = (url,params) => {
    return new Promise((reslove,reject) => {
        axios.post(url, qs.stringify(params))
        .then(res => {
            reslove(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}