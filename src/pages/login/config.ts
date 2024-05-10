export const ACCOUNT_LOGIN_RULES = {
  ACCOUNT: [{ required: true, message: '请输入账号或手机号' }],
  PASSWORD: [{ required: true, message: '请输入密码' }],
  CAPTCHA: [{ required: true, message: '请输入验证码' }],
};

export const modes = [
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
