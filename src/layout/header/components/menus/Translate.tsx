import React from 'react';
import { Icon } from '@/components';
import { Dropdown } from 'antd';
import { localeItems } from '@/common/locale';
import { useAppStore } from '@/store';
import eq from 'lodash-es/eq';

function Translate() {
  const { locale, setLocale } = useAppStore((state) => state, eq);

  const handleClick = ({ key }: { key: string }) => setLocale(key);

  return (
    <Dropdown
      menu={{
        items: localeItems,
        selectedKeys: [locale],
        onClick: handleClick,
      }}
    >
      <li className="px-10 hover:bg-[#f6f6f6] cursor-pointer">
        <Icon name="translate" size={18} />
      </li>
    </Dropdown>
  );
}

export default Translate;
