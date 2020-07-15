import { MailOutlined, AppstoreOutlined, ProfileOutlined, SettingOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import './index.less';
import { Layout, Menu, } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index = () => {
  return (
    <Sider
      className="g-right-nav"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<MailOutlined />}>
          nav 1
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<AppstoreOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<ProfileOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
  );
}


export default Index
