import axios from 'axios';
import { message, } from 'antd';

axios.interceptors.response.use(function (response) {
  console.log(response.data);
  if (response.data.code !== 200) {
    message.info(response.data.msg);
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

axios.create({
  timeout: 10000,
});

export default axios 