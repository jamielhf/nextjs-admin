import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Modal } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import RightNav from '../RightNav';
import './index.less';
const { Header, Content, Footer, Sider } = Layout;

export default ({ store, curKey, children, title = 'title' }: any) => {
  // console.log(1);
  return (
    <div>
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
            title="提示"
            visible={true}
          >
            <p>是否删除</p>
          </Modal>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>


    </div>
  )
}