import axios from 'axios'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { message } from 'antd';



axios.defaults = {
  baseURL: 'https://www.daohangtx.com',
  timeout: 5000
}

axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config;
  }, error => {
    return Promise.error(error);
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      message.error(response)
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  }
)


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function GET(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      message.error(err.data)
      reject(err.data)
    })
  });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function POST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}