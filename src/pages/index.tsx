import { Button, Switch } from "antd";
import Layout from '../components/Layout';
import Router from 'next/router'
const Index = ({ data }: any) => {
  console.log(data);
  return (<Layout>
    {data.code}
  </Layout>)
}
Index.getInitialProps = async ({ req }: any) => {
  console.log(req.signedCookies);
  const res = await fetch('http://lhf.huya.com:3003/api/article', {
    headers: {
      "Authorization": 'Bearer ' + req.signedCookies.token
    }
  })
  const json = await res.json();
  console.log(json);
  return { data: json }
}

export default Index