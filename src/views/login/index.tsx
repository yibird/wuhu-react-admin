import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AccountLogin from './components/account';
import MobileNumberLogin from './components/mobile';
import QRcodeLogin from './components/qrcode';

const items: TabsProps['items'] = [
  {
    key: 'AccountLogin',
    label: '账号登录',
    children: <AccountLogin />,
  },
  {
    key: 'MobileNumberLogin',
    label: '手机号登录',
    children: <MobileNumberLogin />,
  },
  {
    key: 'QRcodeLogin',
    label: '扫码登录',
    children: <QRcodeLogin />,
  },
];

function Login() {
  console.log('login....');

  return (
    <div className="w-full h-full relative bg-[#293146]">
      <div className="px-30 py-20 flex-y-center">
        <img className="w-30 h-30 mr-10" src="https://vben.vvbin.cn/assets/logo.63028018.png" />
        <span className="text-white font-bold">Wuhu Admin</span>
      </div>
      <div className="w-380 bg-white absolute-center right-100 p-40 rounded-2xl shadow">
        <div className="text-2xl font-bold mb-10">登录wuhu-admin</div>
        <Tabs defaultActiveKey="AccountLogin" items={items} />
      </div>
    </div>
  );
}

export default Login;
