import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, ProfileOutlined, SettingOutlined, TagOutlined } from '@ant-design/icons';
import React from 'react';

const { SubMenu } = Menu;

const Index = () => {
  return (
    <>
      <Menu
        theme="dark"
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<ProfileOutlined />} title="文章">
          <Menu.Item key="1">文章管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="分类">
          <Menu.Item key="1">分类管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<TagOutlined />} title="标签">
          <Menu.Item key="1">标签管理</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}


export default Index
