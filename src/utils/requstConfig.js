import { config } from 'ice'
import localStorage from '@/utils/localStorage'

const requstConfig = {
  baseURL: config.baseURL,
  interceptors: {
    request: {
      onConfig: (config) => {
        // 发送请求前：可以对 RequestConfig 做一些统一处理
        config.headers = { 
          token: localStorage.get('token') || ''
         }
        return config;
      },
      onError: (error) => {
        return Promise.reject(error);
      },
    },
    response: {
      onConfig: (response) => {
        // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
        if (!response.data.status !== 1) {
          alert('请求失败');
        }
        return response;
      },
      onError: (error) => {
        // 请求出错：服务端返回错误状态码
        console.log('err', error);
        return Promise.reject(error);
      },
    }
  }
}

export default requstConfig