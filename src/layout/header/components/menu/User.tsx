import React, { useState } from 'react';
import { Dropdown, Avatar, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import ChangePassword from '@/layout/setting/changePassword';

const items: MenuProps['items'] = [
  {
    key: 'changePassword',
    label: '修改密码',
  },
  {
    key: 'lockScreen',
    label: '锁屏',
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: '退出登录',
  },
];

function User() {
  const navigate = useNavigate();

  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const onClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    switch (key) {
      case 'changePassword':
        setChangePasswordOpen(true);
        break;
      case 'lockScreen':
        navigate('/lockScreen');
        break;
      case 'logout':
        navigate('/login');
        break;
    }
  };

  return (
    <>
      <Dropdown menu={{ items, onClick }} placement="topLeft">
        <li className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer">
          <Avatar style={{ backgroundColor: 'red' }}>U</Avatar>
          <span className="ml-10">zchenfeng</span>
        </li>
      </Dropdown>
      <ChangePassword open={changePasswordOpen} onClose={() => setChangePasswordOpen(false)} />
    </>
  );
}

export default User;
