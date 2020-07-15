import { computed, observable, action, autorun } from "mobx";
class User {
  @observable isLogin: number = 1; // 是否登录
  @observable userInfo: object = {};
  // @computed get unfinishedTodoCount() {
  //     return this.todos.filter(todo => !todo.finished).length;
  // }
  @action
  async Login() {
    const a = await Promise.resolve(1);
    console.log(a);
    this.isLogin = this.isLogin + 1;
    console.log(this.isLogin);
  }
}

export default User