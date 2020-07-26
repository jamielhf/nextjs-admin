
import App, { Container } from 'next/app'
import React from 'react'
import './app.less';
import * as store from '../store/index';
import { observer } from "mobx-react";
import { withRouter } from 'next/router'
console.log('store', store)


// const App = ({ Component, pageProps }: any) => {
//   return <Component store={store} {...pageProps} />
// }

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    return <Component store={store} router={router} {...pageProps} />
  }
}


export default MyApp