import { Form, Input, Button, Checkbox, Layout, Row, Col } from 'antd';
import { Istore } from '../store/index'
import { observer } from "mobx-react";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = observer(({ store }: { store: Istore }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    store.user.Login(values.username, values.password);
  };
  console.log('Login', store.user);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="g-login">
      <p> {store.user.isLogin}</p>
      <Row>
        <Col span={12} offset={6}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>


            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
        </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
})

export default Login