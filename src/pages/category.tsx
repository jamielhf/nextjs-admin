
import { Button, Table, Switch } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { serverCategory } from '../api/category'

const Index = ({ data = [] }: any) => {
  const columns = [
    {
      title: '分类',
      dataIndex: 'title',
      width: 100,
      key: 'title',
    },
    {
      title: '标签',
      width: 200,
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'Action',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  return (<Layout curKey="article">
    <Table dataSource={data} columns={columns} />
  </Layout>)
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await serverCategory();
  // Pass data to the page via props
  console.log(res.data.data);
  if (res.data.code === 200) {
    return { props: { data: res.data.data } }
  }
  return { props: { data: [] } }
}

export default Index