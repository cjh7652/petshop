import React from 'react';
import { Button,  Form, Input } from 'antd';

const UploadPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className='uploadpage'>
      <Form name="basic" onFinish={onFinish}  >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;