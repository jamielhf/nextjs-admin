import { computed, observable, action, autorun } from "mobx";
import api from '../api/index';

class User {
  @observable isLogin: number = 1; // 是否登录
  @observable userInfo: object = {};
  // @computed get unfinishedTodoCount() {
  //     return this.todos.filter(todo => !todo.finished).length;
  // }
  @action
  async Login(username: string, password: string) {
    const res = await api.user.login(username, password);
  }
}

export default User