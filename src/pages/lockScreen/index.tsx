import React, { useState } from 'react';
import { Avatar, Input, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components';

const avatar = 'https://vben.vvbin.cn/assets/header-MoI1THJb.jpg';
export default function LockScreen() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleClick = () => {
    if (password.trim().length === 0) {
      messageApi.error('请输入密码');
      return;
    }
    navigate('/');
  };

  const [show, setShow] = useState(false);

  return (
    <div className="relative full bg-black">
      {contextHolder}
      <div className="absolute left-20 bottom-40 text-white">
        <div className="text-5xl font-light">18:56</div>
        <div className="text-2xl">2023年10月3日,星期五</div>
        <div className="text-base">天气晴</div>
      </div>
      <div
        onClick={() => setShow(true)}
        className="absolute-center text-center text-white cursor-pointer animate-bounce"
      >
        <div>
          <Icon name="lock-line" size={30} />
        </div>
        <div className="mt-10">点我解锁</div>
      </div>
      {show && (
        <div className="fixed full flex-center bg-[#00000000]  backdrop-blur">
          <div className="w-300 flex flex-col items-center p-20 gap-20">
            <Avatar size={80} src={avatar} />
            <div className="text-base text-white">zchengfeng</div>
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入锁屏密码或用户密码"
            />
            <div className="w-full flex justify-between">
              <Typography.Link onClick={() => setShow(false)}>返回</Typography.Link>
              <Typography.Link onClick={() => navigate('/login')}>去登录</Typography.Link>
              <Typography.Link onClick={handleClick}>进入系统</Typography.Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
