import User from './User'
import { autorun } from 'mobx';

const user = new User();
autorun(() => {
  console.log('user', user);
})
export {
  user,
}