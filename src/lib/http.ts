import axios from 'axios';
import { message, } from 'antd';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    config.headers['token'] = token
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  console.log(response);
  // if (response.data.code !== 200) {
  //   message.info(response.data.msg);
  // }
  return response;
}, (error) => {
  return Promise.reject(error);
});


export default axios