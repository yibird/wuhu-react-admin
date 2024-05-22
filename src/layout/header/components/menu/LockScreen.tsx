import React from 'react';
import { Tooltip } from 'antd';
import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';

export default function LockScreen({ className }: BaseProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/lockScreen');
  };

  return (
    <Tooltip title="锁屏" placement="bottom">
      <li onClick={handleClick} className={className}>
        <Icon name="lock-line" size={18} />
      </li>
    </Tooltip>
  );
}
