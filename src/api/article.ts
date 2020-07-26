import { BASE_URL } from '../contants/index'
import http from '../lib/http';


export function article() {
  return http.get(`${BASE_URL}api/article`)
}