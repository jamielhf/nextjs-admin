import axios from 'axios';
import { message, } from 'antd';
const instance = axios.create({
  timeout: 10000,
  withCredentials: true
});


instance.interceptors.request.use(
  config => {
    let token;
    try {
      token = localStorage && localStorage.getItem('token');
    } catch (e) {
      console.log(e);
    }
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
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
  return Promise.reject(error);
});


export default instance