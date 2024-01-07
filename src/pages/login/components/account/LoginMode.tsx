import React from 'react';
import { Space } from 'antd';
import { Icon } from '@/components';

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

function LoginMode() {
  return (
    <Space size={6}>
      {modes.map((item) => {
        return (
          <Icon
            key={item.icon}
            color="#d2d2d2"
            hoverColor={item.color}
            name={item.icon}
            size={28}
          />
        );
      })}
    </Space>
  );
}

export default LoginMode;
