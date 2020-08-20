import { BASE_URL } from '../contants/index'
import http from '../lib/http';
import nodeFetch from '../lib/nodeFetch';
import { IBaseRes } from './interface';

export function serverCategory() {
  return nodeFetch.get<IBaseRes>(`${BASE_URL}api/category`)
}
