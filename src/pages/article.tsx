
import { Button, Table, Switch } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { Istore } from '../store/index';
import { serverArticle } from '../api/article'

const Index = ({ store, data = [] }: { store: Istore, data: any }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '文章内容',
      dataIndex: 'content',
      key: 'content',
    },
  ];
  return (<Layout store={store} curKey="article">
    <Table dataSource={data} columns={columns} />
  </Layout>)
}
export async function getServerSideProps() {
  const res = await serverArticle();
  if (res.data.code === 200) {
    return { props: { data: res.data.data } }
  }
  return { props: { data: [] } }
}

export default Index