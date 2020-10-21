
import { Button, Table, Switch, Tag } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { serverCategory } from '../api/category'
import { Istore } from '../store/index';
const Index = ({ store, data = [] }: { store: Istore, data: any }) => {
  const columns = [
    {
      title: '分类',
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
      title: '标签',
      width: 200,
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: any) => (
        <span>
          {tags.map((tag: any) => {
            return (
              <Tag key={tag.id}>
                {tag.title}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: () => <a>操作</a>,
    },
  ];
  return (<Layout store={store} curKey="category">
    <Table dataSource={data} columns={columns} />
  </Layout>)
}
export async function getServerSideProps() {
  const res = await serverCategory();
  if (res.data.code === 200) {
    return { props: { data: res.data.data } }
  }
  return { props: { data: [] } }
}

export default Index