import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider, message, Space, Tooltip } from 'antd';
import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { doLoginApi } from '@/apis';

import type { AccountLoginModel } from '@/apis';

const RULES = {
  ACCOUNT: [{ required: true, message: '请输入账号或手机号' }],
  PASSWORD: [{ required: true, message: '请输入密码' }],
  CAPTCHA: [{ required: true, message: '请输入验证码' }],
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

const initialValues = {
  account: 'admin',
  password: '123456',
  captcha: '1234',
};

export default function AccountLogin() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { data, error, isPending, mutate } = useMutation<Res, object, AccountLoginModel>({
    mutationFn: doLoginApi,
  });

  if (data) {
    message.open({
      type: data.code === 200 ? 'success' : 'error',
      content: data.msg,
    });
    if (data.code === 200) {
      setTimeout(() => navigate('/'), 1000);
    }
  }

  return (
    <Form onFinish={mutate} form={form} initialValues={initialValues} className="mt-15">
      <Form.Item name="account" rules={RULES.ACCOUNT}>
        <Input placeholder="请输入账号或手机号" prefix={<Icon name="user-line" size={20} />} />
      </Form.Item>
      <Form.Item name="password" rules={RULES.PASSWORD}>
        <Input.Password placeholder="请输入密码" prefix={<Icon name="lock-line" size={20} />} />
      </Form.Item>

      <Form.Item name="captcha" rules={RULES.CAPTCHA}>
        <div className="flex justify-between">
          <div className="flex flex-1 mr-10">
            <Input
              value={initialValues.captcha}
              placeholder="请输入验证码"
              prefix={<Icon name="shield-keyhole-line" size={20} />}
            />
          </div>
          <div className="flex flex-col items-center w-80">
            <img src="" />
          </div>
        </div>
      </Form.Item>

      <div>
        <Button loading={isPending} block size="large" htmlType="submit" type="primary">
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
