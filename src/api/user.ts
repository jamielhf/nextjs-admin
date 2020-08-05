import { BASE_URL } from '../contants/index'
import http from '../lib/http';

/**
 *
 * 登录
 * @export
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export function login(username: string, password: string) {
  return http.post(`${BASE_URL}api/auth/login`, {
    username,
    password
  })
}

export function userInfo() {
  return http.get(`${BASE_URL}api/user/info`);
}