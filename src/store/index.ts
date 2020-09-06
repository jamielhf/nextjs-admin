import User from './user';
import Model from './model'
import { autorun } from 'mobx';

const user = new User();
const model = new Model();
autorun(() => {
  console.log('user', user);
})

export interface Istore {
  user: User,
  model: Model,
}

const store: Istore = {
  user,
  model,
}

export default store