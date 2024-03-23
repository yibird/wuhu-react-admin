import { defineMock } from 'vite-plugin-mock-dev-server';
import type { AccountLoginModel } from '@/apis';
import { ok, err } from '../_util';

const users = [
  {
    account: 'admin',
    password: '123456',
    captcha: '1234',
  },
  {
    account: 'root',
    password: '123456',
    captcha: '1234',
  },
];

export default defineMock([
  {
    url: '/api/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: ({ body }) => {
      const { account, password, captcha } = body as AccountLoginModel;
      const user = users.find((item) => {
        return item.account === account && item.password === password && item.captcha === captcha;
      });
      return user ? ok(user, '登录成功') : err('用户名、密码、验证码输入有误');
    },
  },
]);
