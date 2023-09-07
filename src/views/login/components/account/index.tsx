import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import Icon from '@/components/Icon';
import LoginMode from './LoginMode';
import { useNavigate } from 'react-router-dom';

interface AccountLoginModel {
  account: string;
  password: string;
}

const RULES = {
  ACCOUNT: [{ required: true, message: '请输入账号或手机号' }],
  PASSWORD: [{ required: true, message: '请输入密码' }],
};

function AccountLogin() {
  const [form] = Form.useForm();
  const initialValues: AccountLoginModel = {
    account: 'admin',
    password: 'admin',
  };
  const navigate = useNavigate();
  const onFinish = ({ account, password }: AccountLoginModel) => {
    if (account === 'admin' && password === 'admin') {
      message.success('登录成功');
      setTimeout(() => navigate('/'), 1000);
    }
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={initialValues} className="mt-15">
      <Form.Item name="account" rules={RULES.ACCOUNT}>
        <Input
          size="large"
          placeholder="请输入账号或手机号"
          prefix={<Icon name="user-line" size={20} />}
        />
      </Form.Item>
      <Form.Item name="password" rules={RULES.PASSWORD}>
        <Input.Password
          size="large"
          placeholder="请输入密码"
          prefix={<Icon name="lock-line" size={20} />}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" block size="large">
          登录
        </Button>
      </Form.Item>
      <div className="mb-10 text-[14px] text-[#999]">
        <span>登录即表示您已经同意wuhu-admin</span>
        <Typography.Link className="mx-4">服务协议</Typography.Link>
        <span>和</span>
        <Typography.Link className="mx-4">隐私政策</Typography.Link>
      </div>
      <Form.Item style={{ marginBottom: 0 }}>
        <div className="flex-y-center justify-between">
          <div className="flex-y-center">
            <span className="mr-10">其他登录方式</span>
            <LoginMode />
          </div>
          <Typography.Link>忘记密码</Typography.Link>
        </div>
      </Form.Item>
    </Form>
  );
}

export default AccountLogin;
