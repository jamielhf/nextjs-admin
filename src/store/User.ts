import { computed, observable, action, autorun } from "mobx";
import api from '../api/index';

class User {
  @observable isLogin: boolean = false; // 是否登录
  @observable userInfo: object = {};
  // @computed get unfinishedTodoCount() {
  //     return this.todos.filter(todo => !todo.finished).length;
  // }
  @action
  async Login(username: string, password: string) {
    const res: any = await api.user.login(username, password);
    console.log(res);
    if (res.code == 200) {
      localStorage.setItem('token', res.data.token);
      this.userInfo = res.data.userInfo;
      location.href = '/';
    }
  }
}

export default User