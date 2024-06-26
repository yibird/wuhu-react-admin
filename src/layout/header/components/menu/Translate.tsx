import React from 'react';
import { Icon } from '@/components';
import { Dropdown } from 'antd';
import { useAppStore } from '@/store';
import { localeItems } from '@/common';
import { shallow } from 'zustand/shallow';
import { LocaleEnum } from '@/enums';

export default function Translate({ className }: BaseProps) {
  const { locale, setLocale } = useAppStore((state) => {
    return {
      locale: state.app.locale,
      setLocale: state.setLocale,
    };
  }, shallow);

  const handleClick = ({ key }: { key: string }) => {
    setLocale(key as LocaleEnum);
  };

  return (
    <Dropdown
      menu={{
        items: localeItems,
        selectedKeys: [locale],
        onClick: handleClick,
      }}
    >
      <li className={className}>
        <Icon name="translate" size={18} />
      </li>
    </Dropdown>
  );
}
