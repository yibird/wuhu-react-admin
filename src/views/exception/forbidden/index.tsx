import React from 'react';
import { Empty, Button } from 'antd';
import okImage from '@/assets/status/403.svg';
import { useMenus } from '@/hooks';

export default function Forbidden({ onBack }: { onBack?: () => void }) {
  const { openHomeMenu } = useMenus();
  const handleClick = () => {
    typeof onBack === 'function' ? onBack() : openHomeMenu();
  };

  return (
    <div className="h-full bg-white">
      <Empty
        className="pt-100"
        image={okImage}
        imageStyle={{
          height: 200,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 20,
        }}
        description="禁止访问"
      >
        <Button onClick={handleClick} type="primary">
          回到首页
        </Button>
      </Empty>
    </div>
  );
}
