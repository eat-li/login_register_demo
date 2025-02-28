import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5173', // 根据你的开发环境调整
    timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response.data; // 直接返回响应数据
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;