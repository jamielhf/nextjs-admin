import axios from 'axios';
import { message, } from 'antd';

axios.interceptors.request.use(
  config => {
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

axios.create({
  timeout: 10000,
});

export default axios