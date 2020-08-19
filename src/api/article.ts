import { BASE_URL } from '../contants/index'
import http from '../lib/http';
import nodeFetch from '../lib/nodeFetch';
import { AxiosResponse } from 'axios';

interface IBaseRes<T = any> {
  code: number;
  data: T;
  msg: string
}


export function serverArticle() {
  return nodeFetch.get<IBaseRes>(`${BASE_URL}api/article`)
}

export function article() {
  return http.get(`${BASE_URL}api/article`)
}