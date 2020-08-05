import { Button, Switch } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
import { article } from '../api/article'


const Index = ({ data }: any) => {
  return (<Layout>
    {JSON.stringify(data)}
  </Layout>)
}
Index.getInitialProps = async ({ req }: any) => {
  const res = await article()
  return { data: res }
}

export default Index