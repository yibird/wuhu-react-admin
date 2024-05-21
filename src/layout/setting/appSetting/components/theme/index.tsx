import React, { useState } from 'react';
import { Divider, Switch } from 'antd';
import { Icon } from '@/components';
import './index.css';
import { useTheme } from '@/hooks';
import { ThemeEnum } from '@/enums';

const createIcon = (name: string) => <Icon name={name} size={20} color="#fff" />;

export default function Theme() {
  const { theme, changeTheme } = useTheme();
  const handleChange = (checked: boolean) => {
    changeTheme(checked ? ThemeEnum.DARK : ThemeEnum.LIGHT);
  };

  return (
    <div>
      <Divider>主题</Divider>
      <div className="text-center">
        <Switch
          checked={theme === ThemeEnum.DARK}
          onChange={handleChange}
          className="switch"
          checkedChildren={createIcon('sun-line')}
          unCheckedChildren={createIcon('moon-line')}
        />
      </div>
    </div>
  );
}
