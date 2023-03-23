import React, { useState } from 'react'
import './loginPage.css'
import loginImage from './loginImage.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
function LoginPage({ handleCapture }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loginuser, setLoginUser] = useState(false)

  const [messegeusername, setMessegeUsername] = useState("");
  const [messegepassword, setPassword] = useState("");
  // if(name== "aditya732" && pass=="987456321"){
  //   setLoginUser(true);
  const username = "aditya732";
  const password = "987456321";
  const handleClick = (e) => {
    console.log("abhcxbdj")
    if (name == "aditya732" && pass == "987456321") {
      setLoginUser(true);
      // Navigate('/')
      localStorage.setItem("userLoggedIn", "aditya");
      // console.log(username, name, password, pass)
          handleCapture();

    } else  if(name !== "aditya732" || pass !== "987456321") {
      setMessegeUsername("Please input your valid Username!")
      setPassword("Please input your valid Password!")

    }
// let user = function();
// user();
  }
  return (
    <div className='loginPage'>
      <div className="leftLoginPage">
        <h2>Login</h2>
        <p>Get access to your Orders,<br /> Wishlist and Recommendations</p>
        <img src={loginImage} alt="" />
      </div>
      <div className="rightLoginPage">
        <Form
          // onFinish={handleCapture}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                // message: "Please input your  Username!"
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
               <p style={{colo:"red"}}>{messegeusername}</p>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                // message: "Please input your valid Password!",
              },
            ]}
          >
            <Input
              value={pass} onChange={(e) => setPass(e.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
            <p style={{colo:"red"}}>{messegepassword}</p>
          </Form.Item>
          {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

          <Form.Item>
            <Button onClick={handleClick} type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>

            OR,    <a href="">Register Now!</a>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default LoginPage;