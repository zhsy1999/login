import React from 'react'
import { Form, Input, Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

export default function Login() {

  const { Footer } = Layout;
  const FormItem = Form.Item;

  return (
    <div className="background">
      <div className="main">
        <div className="top">
          <div className={"header"}>
            {/* <img alt="logo" className={styles.logo} src={logo} /> */}
            <span className={"title"}>CBOS后台管理</span>
          </div>
        </div>
        <Form className="form">
        {/* <Form onFinish={getCode} ref={formRef}> */}
          <FormItem name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
            <Input  style={{height:"50px"}} placeholder="请输入用户名" />
          </FormItem>
          <FormItem name="password" rules={[{ required: true, message: "请输入密码！" }]}>
            <Input  style={{height:"50px"}}  type={"password"} placeholder="请输入密码" />
          </FormItem>
          {/* <FormItem name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
            <Input  style={{height:"50px"}} prefix={<img src={phone} />} placeholder="请输入用户名" />
          </FormItem>
          <FormItem name="password" rules={[{ required: true, message: "请输入密码！" }]}>
            <Input  style={{height:"50px"}} prefix={<img src={password} />} suffix={<img src={text ? hiden : show} onClick={() => { setText(!text) }} style={{ cursor: "pointer" }} />} type={text ? "text" : "password"} placeholder="请输入密码" />
          </FormItem> */}
          <FormItem >
            {/* <Row gutter={16}>
            <Col span={15}> */}
            {/* <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: type==="sms"?'请输入短信验证码!':'请输入邮件验证码!' }]}
            >
              <Input style={{height:"50px"}} prefix={<img src={code} />} placeholder={type==="sms"?'请输入短信验证码':'请输入邮件验证码'} suffix={
                <Button onClick={getCode} type="primary" className={styles.codeBtn} disabled={timing}>
                  {timing ? `已发送(${count}s)` : "获取验证码"}
                </Button>
              } />
            </Form.Item> */}
            {/* </Col>
            <Col span={9}>
              <Button onClick={getCode} type="primary" className={styles.codeBtn} disabled={timing}>
                {timing ? `${count} 秒` : "获取验证码"}
              </Button>
            </Col>
          </Row> */}
          </FormItem>
          <FormItem>
            <div style={{ marginTop: "0" }}>
              <Button type="primary" htmlType="submit" style={{ width: "100%", background: "#0C6FFF", borderColor: "#0C6FFF",height:"50px" }} size="large">
                登录
            </Button>
            </div>
          </FormItem>
          {/* <FormItem>
            <div >
              <span style={{ float: "left" }}>
                <span style={{color:"#6D7685"}}>还没有账号？</span>
              <a onClick={() => { history.push('/user/register') }}>
                  注册使用
              </a>
              </span>
              <a onClick={() => { history.push('/user/forget') }} style={{ float: "right" }}>
                忘记密码？
            </a>

            </div>

          </FormItem> */}
        </Form>
        <span className={"footer"}>
          © 2009-现在 阿里云计算有限公司。版权所有
        </span>
      </div>

    </div>
  )
}
