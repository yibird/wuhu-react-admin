import React from 'react';
import { Tooltip } from 'antd';
import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';

export default function Lock() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/lockScreen');
  };

  return (
    <Tooltip title="锁屏" placement="bottom">
      <li onClick={handleClick} className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer">
        <Icon name="lock-line" size={18} />
      </li>
    </Tooltip>
  );
}
