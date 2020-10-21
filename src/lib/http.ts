import axios from 'axios';
import { message, } from 'antd';
const instance = axios.create({
  timeout: 10000,
  withCredentials: true
});


instance.interceptors.request.use(
  config => {
    let token;
    if (window && window.localStorage) {
      token = localStorage && localStorage.getItem('token');
    }
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    message.error('timeout');
    return Promise.resolve(error);
  }
);

instance.interceptors.response.use((response) => {
  if (response.data.code === 401) {
    try {
      window.location.href = '/login';
    } catch (e) {
      console.log(e)
    }
  }
  return response.data;
}, (error) => {
  message.error('timeout');
  return Promise.resolve(error);
});


export default instance