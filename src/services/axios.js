/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-09-05 11:42:44
 * @LastEditors  : tky
 * @LastEditTime : 2020-09-05 11:50:37
 */
import originAxios from 'axios';

export default function request(option){
  return new Promise((resolve, reject) => {
    // 1、创建axios的实例
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:9001/',
      timeout: 10000
    })

    // 配置请求和响应的拦截器
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    })

    instance.interceptors.response.use(response => {
      return response.data
    }, err =>{
      console.log("来到response拦截failure中");
      if(err && err.response){
        switch( err.response.statue){
          case 400:
            err.message = "请求错误"
            break;
          case 401:
            err.message = "未授权的访问"
            break;
          default:
            err.message = "其他错误"
        }
      }
      return err
    })

    // 2.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

  })
}