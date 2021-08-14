import React from 'react'
import ReactDOM from 'react-dom';
import "../Signin/Signin.css"
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
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
                 <h1 className="txt1">Daxil Olun.</h1>
                <Form.Item
                    
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Email ünvanı səhvdir!',
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
                            message: 'Şifrə səhvdir!',
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
                    <br />
                    <Link to="/reset"><span className="texts">Şifrənizi unutmusunuz?</span></Link>
            <br />
            <Link to="/registr"><span className="texts"> Hesabınız mövcud deyil? Qeydiyyatdan keç</span></Link>
                </Form.Item>
                
            </Form>

        </div>
    )
    // ReactDOM.render(<Signin />, );
}
export default Signin
