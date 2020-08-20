
import { Button, Table, Switch } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { serverArticle } from '../api/article'

const Index = ({ data = [] }: any) => {
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
  return (<Layout curKey="article">
    <Table dataSource={data} columns={columns} />
  </Layout>)
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await serverArticle();
  // Pass data to the page via props
  if (res.data.code === 200) {
    return { props: { data: res.data.data } }
  }
  return { props: { data: [] } }
}

export default Index