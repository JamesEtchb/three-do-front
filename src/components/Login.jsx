import { Modal, Form, Input, Button } from 'antd'

export default function Login({ setToken, setIsUser }) {
  const handleLogin = ({ email, password}) => {
    //post request to api/users
    // fetch('http://localhost:3030/users', {
    fetch('https://three-do-api-je.web.app/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        setToken(data.token)
        localStorage.setItem('token', data.token)
    })
    .catch(err => alert(err.message))
    //setToken
  }
  return (
    <Modal title="Login" visible closable={false} footer={null}>
      <Form onFinish={handleLogin} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <p>Already a user? <Button onClick={() => setIsUser(false)} type={'link'} >Sign Up</Button></p>
      </Form>
    </Modal>
  )
}
