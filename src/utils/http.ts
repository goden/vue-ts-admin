import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { Message } from "element-ui";
import router from '@/router';

const service = axios.create({
    timeout: 10000
});

// 攔截器實作
// 請求攔截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (localStorage.tsToken) {
            config.headers.Authorization = localStorage.tsToken;
        }
        return config;
    },
    (err: any) => {
        Promise.reject(err);
    }
);

// 回應攔截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (err: any) => {
        let errMsg = "";
        if (err && err.response.status) {
            switch (err.response.status) {
                case 401:
                    errMsg = "Unauthorized";
                    localStorage.removeItem("tsToken");
                    router.push('/login');
                    break;
                case 403:
                    errMsg = "Forbidden";
                    break;

                case 408:
                    errMsg = "Request Timeout";
                    break;

                case 500:
                    errMsg = "Internal Server Error";
                    break;

                case 501:
                    errMsg = "Not Implemented";
                    break;

                case 502:
                    errMsg = "Bad Gateway";
                    break;

                case 503:
                    errMsg = "Service Unavailable";
                    break;

                case 504:
                    errMsg = "Gateway Timeout";
                    break;

                case 505:
                    errMsg = "HTTP Version Not Supported";
                    break;

                default:
                    errMsg = err.response.data.msg;
                    break;
            }
        } else {
            errMsg = err;
        }

        Message.error(errMsg);
        return Promise.reject(errMsg);
    }
);

export default service;
