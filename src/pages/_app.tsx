
import App, { Container } from 'next/app'
import React, { ComponentType, Component } from 'react'
import './app.less';
import store from '../store/index';
import { observer, Provider } from "mobx-react";
import { withRouter } from 'next/router'

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
    return <Provider  ><Component store={store} router={router} {...pageProps} /></Provider>
  }
}


export default MyApp