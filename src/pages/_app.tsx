

import './app.less';
import * as store from '../store/index';
import { observer } from "mobx-react";

console.log('store', store)

export default function MyApp({ Component, pageProps }: any) {
  return <Component store={store} {...pageProps} />
}