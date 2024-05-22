import React, { useState } from 'react';
import { Icon } from '@/components';
import AppSetting from '@/layout/setting/appSetting';

export default function Setting({ className }: BaseProps) {
  const [appSettingOpen, setAppSettingOpen] = useState(false);

  return (
    <>
      <li className={className} onClick={() => setAppSettingOpen(true)}>
        <Icon name="settings-line" size={18} />
      </li>
      <AppSetting open={appSettingOpen} onClose={() => setAppSettingOpen(false)} />
    </>
  );
}
