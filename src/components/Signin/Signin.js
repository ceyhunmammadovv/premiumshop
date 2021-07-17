import React from 'react'
import ReactDOM from 'react-dom';
import "../Signin/Signin.css"
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

function Signin() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                 <h1 className="txt1">Please sign in.</h1>
                <Form.Item
                    
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input placeholder = "Email"/>
                </Form.Item>

                <Form.Item
                    
                    label="Password"
                    name="password"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="Sign in">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
    // ReactDOM.render(<Signin />, );
}
export default Signin
