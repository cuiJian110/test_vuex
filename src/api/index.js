import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8081/static'
// axios.defaults.headers.common['Authorization'] = 'myAUTH_TOKEN';
// axios.defaults.headers.common['lalala'] = '6666';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// export const getData = () => {
//     return axios.get('/data.json')
// }
const instance = axios.create({
    baseURL: 'http://localhost:8081/static',
    // timeout: 6000,
    // headers: {
    //     'X-Custom-Header': 'foobar',
    //     'Authorization': '000000AUTH_TOKEN',
    //     'cuiDaye': 'cuiDaye'
    // }
})
// Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// instance.interceptors.response.use(function (response) {
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });
// // instance.interceptors.response.use(
// response => {
//     console.log(2222,response)
//     return response;
// },
// error => {
//     if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
//     console.log("错误回调", error);
//     alert("网络超时");
//     return Promise.reject(error);          // reject这个错误信息
//     }
//     return Promise.reject(error);
// });
// instance.defaults.headers.common['Authorization'] = '000000AUTH_TOKEN';
// instance.defaults.headers.common['cuiDaye'] = 'cuiDaye';
// 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(111,config)
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });
// export const getData = () => {
//     return instance.get('data.json')
// }
