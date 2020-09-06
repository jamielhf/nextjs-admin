import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Modal } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import RightNav from '../RightNav';
import './index.less';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Istore } from '../../store/index';
import { observer } from 'mobx-react';
const { Header, Content, Footer, Sider } = Layout;

interface Props {
  store: Istore,
  title: string
  curKey: string
  children: any
}

@observer
class App extends React.Component<Partial<Props>, {}> {
  public render() {
    const { store, title = 'admin', curKey, children } = this.props;
    const { model } = store;
    return <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <RightNav curKey={curKey}></RightNav>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Modal
            title={model.modelTitle}
            visible={model.isShowModel}
            onOk={model.onOk}
            confirmLoading={false}
            onCancel={model.onCancel}
          >
            <p>{model.modelContent}</p>
          </Modal>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>


    </div>
  }
}

export default App