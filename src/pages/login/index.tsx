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

const bgImage = 'https://z1.ax1x.com/2023/09/27/pPbnTOK.jpg';
const logoImage = 'https://cn.vitejs.dev/logo-with-shadow.png';
function Login() {
  console.log('login....');

  return (
    <div
      className="relative full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/** logo */}
      <div className="px-30 py-20 flex-y-center">
        <img className="size-30 mr-10" src={logoImage} />
        <span className="text-lg">Wuhu Admin</span>
      </div>

      {/** form */}
      <div className="w-350 bg-white absolute-y-center right-200 py-50 px-60 rounded-[20px]">
        <div className="text-lg mb-10">欢迎来到 Wuhu Admin</div>
        <Tabs defaultActiveKey="AccountLogin" items={items} size="large" />
      </div>
    </div>
  );
}

export default Login;
