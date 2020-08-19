import axios, { AxiosResponse } from 'axios';
import { message, } from 'antd';


const instance = axios.create({
  timeout: 10000,
  withCredentials: true
});

interface IBaseRes {
  code: number;
  data: any;
  msg: string
}

instance.interceptors.response.use((response: AxiosResponse<IBaseRes>): AxiosResponse<IBaseRes> => {
  return response;
}, (error) => {
  return Promise.reject(error);
});


export default instance