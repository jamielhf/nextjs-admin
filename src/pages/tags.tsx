
import { Button, Table, Switch, Modal } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { serverTag } from '../api/tags'
import { useState } from 'react';

const Index = ({ store, data = [] }: any) => {
  console.log(store);
  const [delModel, setDelModel] = useState(false);

  const columns = [
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
      render: () => <div><a onClick={showModal}>编辑</a> <a onClick={showModal}>删除</a> </div>,
    },
  ];
  const showModal = () => {
    setDelModel(true)
  };

  const handleOk = () => {
    console.log(1);
  };

  const handleCancel = () => {
    setDelModel(false)
  };
  return (<Layout store={store} curKey="tags">
    <Button type="primary" >新增</Button>
    <Table dataSource={data} columns={columns} />


  </Layout>)
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await serverTag();
  // Pass data to the page via props
  console.log(res.data.data);
  if (res.data.code === 200) {
    return { props: { data: res.data.data } }
  }
  return { props: { data: [] } }
}

export default Index