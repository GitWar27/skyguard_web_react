import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Map } from '../../components';

const { TextArea } = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info:any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ContactUs = () => {
  return (
    <div id="contact" className="block contactBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Please choose your message type</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item name="message_type">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="service">Service Applicant</Radio.Button>
              <Radio.Button value="job">Job Applicant</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload Resume</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Map />
    </div>  
  )
}

export default ContactUs