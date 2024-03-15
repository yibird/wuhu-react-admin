import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider, message, Space, Tooltip } from 'antd';
import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';

interface AccountLoginModel {
  account: string;
  password: string;
}

const RULES = {
  ACCOUNT: [{ required: true, message: '请输入账号或手机号' }],
  PASSWORD: [{ required: true, message: '请输入密码' }],
};
const modes = [
  {
    title: '钉钉',
    icon: 'dingding-fill',
    color: '#0074FF',
  },
  {
    title: '微信',
    icon: 'wechat-fill',
    color: '#1BD66C',
  },
  {
    title: '支付宝',
    icon: 'alipay-fill',
    color: '#0960bd',
  },
  {
    title: 'QQ',
    icon: 'qq-fill',
    color: '#1677ff',
  },
  {
    title: 'Github',
    icon: 'github-fill',
    color: '#000',
  },
];

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
      <div>
        <Button htmlType="submit" type="primary" block size="large">
          登录
        </Button>
      </div>
      <div className="flex justify-between my-15">
        <Checkbox>记住我</Checkbox>
        <Typography.Link>忘记密码</Typography.Link>
      </div>
      <div className="mb-10 text-[14px] text-[#999]">
        <span>登录即表示您已经同意wuhu-admin</span>
        <Typography.Link className="mx-4">服务协议</Typography.Link>
        <span>和</span>
        <Typography.Link className="mx-4">隐私政策</Typography.Link>
      </div>
      <div>
        <Divider>
          <div className="text-xs text-[#999]">其他登录方式</div>
        </Divider>
      </div>
      <Space className="flex-x-center">
        {modes.map((item) => {
          return (
            <Tooltip title={item.title} key={item.icon}>
              <span
                className="flex-center size-30 rounded-full border-1 border-solid border-[#e2e2e2]
              transition hover:border-[#1677ff]"
              >
                <Icon color={item.color} name={item.icon} size={22} />
              </span>
            </Tooltip>
          );
        })}
      </Space>
    </Form>
  );
}

export default AccountLogin;
