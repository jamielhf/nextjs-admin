import User from './user'
import { autorun } from 'mobx';

const user = new User();
autorun(() => {
  console.log('user', user);
})

export interface Istore {
  user: User
}

export {
  user,
}