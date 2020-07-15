import { computed, observable, action, autorun } from "mobx";
class User {
  @observable username: string = ''; // 用户名
  @observable password: string = ''; // 密码
  @observable isLogin: boolean = false; // 是否登录
  @observable userInfo: object = {};
  // @computed get unfinishedTodoCount() {
  //     return this.todos.filter(todo => !todo.finished).length;
  // }
  @action
  Login() {
    setTimeout(() => {
      this.isLogin = true;
    }, 2000)
  }
}
export default User