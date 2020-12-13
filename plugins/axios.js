import axios from 'axios'
import{ Message } from 'element-ui'

// // create an axios instance

// axios.defaults.timeout = 60000;

export default function ({ $axios, redirect }) {
    // $axios.defaults.withCredentials = true// 跨域处理 允许携带cookie
    // $axios.defaults.headers.common['ztoken'] = 'xxxx'
    // let ajaxUrl = process.env.NODE_ENV === 'development'
    //     ? 'https://toomhub.23cm.cn' : `${document.location.origin}/web/index.php?r=api`;
    $axios.defaults.baseURL = '/api';    //设置请求域名 
    // request interceptor
    $axios.interceptors.request.use(
        (config) => {
            console.log(config)
            // do something before request is sent
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded', //设置跨域头部
                'ztoken': 'token'
            };

            
            config.url = `${config.url}`;
            // if (access_token) {
            // 	config.url = `${config.url}&access-token=${access_token}`;
            // }
            return config;
        },
        (error) => {
            // do something with request error
            console.log(error); // for debug
            return Promise.reject(error);
        }
    );

    // response interceptor
    $axios.interceptors.response.use(
        /**
       * If you want to get http information such as headers or status
       * Please return  response => response
      */

        /**
       * Determine the request status by custom code
       * Here is just an example
       * You can also judge the status by HTTP Status Code
       */
        (response) => {
            const res = response.data;
            console.log('res', res)

            // if the custom code is not 20000, it is judged as an error.
            if (res.code !== 200) {
                Message({
                    message: res.msg || 'Error',
                    type: 'error',
                    duration: 5 * 1000
                });

                if (res.code == 401) {
                    // 登录过期
                    MessageBox.confirm(
                        'You have been logged out, you can cancel to stay on this page, or log in again',
                        'Confirm logout',
                        {
                            confirmButtonText: 'Re-Login',
                            cancelButtonText: 'Cancel',
                            type: 'warning'
                        }
                    ).then(() => {
                        store.dispatch('user/resetToken').then(() => {
                            location.reload();
                        });
                    });
                }
                return Promise.reject(new Error(res.msg || 'Error'));
            }
            return response;
        },
        (error) => {

            console.log('err' + error); // for debug
            return Promise.reject(error);
        }
    );

}