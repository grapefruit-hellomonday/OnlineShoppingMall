import axios from 'axios'

// 终极方案
export function request(config){
    // 1.创建axios实例
    const instance1 = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    // 2.axios拦截器
    // 请求成功/失败拦截
    instance1.interceptors.request.use(config => {
      // console.log(config);
      // 这里已拦截，不返回在调用时就收不到了
      // 作用：1.config信息不符合服务器要求，对信息转化
      // 2.发送网络请求时显示动画图标
      // 3.某些网络请求会携带信息（如登录携带token）
      return config
    }, err => {
      // console.log(err);
    })
    // 响应成功/失败拦截
    instance1.interceptors.response.use(res => {
      // console.log(res);
      //  一般使用的是res.data
      return res.data
    }, err =>{
      // console.log(err);
    })

    // 3.发送网络请求
    return instance1(config)
}
