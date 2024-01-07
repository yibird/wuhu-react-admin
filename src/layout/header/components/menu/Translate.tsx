import React from 'react';
import { Icon } from '@/components';
import { Dropdown } from 'antd';
import { localeItems } from '@/common/locale';
import { useAppStore } from '@/store';

function Translate() {
  const { locale,setLocale } = useAppStore();
  const handleClick = ({ key }: { key: string }) => setLocale(key);

  return (
    <Dropdown
      menu={{
        items: localeItems,
        selectedKeys: [locale],
        onClick: handleClick,
      }}
    >
      <li className="flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer">
        <Icon name="translate" size={18} />
      </li>
    </Dropdown>
  );
}

export default Translate;
