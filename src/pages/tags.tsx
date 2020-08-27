
import { Button, Table, Switch, Modal } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { serverTag } from '../api/tags'
import React, { useState } from 'react';
import { Istore } from '../store/index'
import { observer, inject } from 'mobx-react'
import { withDefaultProps } from '../lib/withDefaultProps';

@observer
class App extends React.Component<{ store: Istore, data: any }, {}> {
  readonly state = {
    columns: [
      {
        title: '标签',
        dataIndex: 'title',
        width: 100,
        key: 'title',
      },
      {
        title: '图标',
        dataIndex: 'icon',
        width: 100,
        key: 'icon',
        render: (icon: string) => (
          <img width="50" src={icon} />
        ),
      },
      {
        title: '操作',
        key: 'operation',
        // fixed: 'right',
        width: 100,
        render: () => <div><a >编辑</a> <a >删除</a> </div>,
      },
    ],
  }
  componentDidMount() {
    console.log(this.props)
  }
  public async getServerSideProps() {
    const res = await serverTag();
    console.log(res.data.data);
    if (res.data.code === 200) {
      return { props: { data: res.data.data } }
    }
    return { props: { data: [] } }
  }
  public render() {
    const { data } = this.props;
    const { columns } = this.state;
    return <Layout curKey="tags">
      <Button type="primary" >新增</Button>
      <Table dataSource={data} columns={columns} />
    </Layout>
  }
}

export default App