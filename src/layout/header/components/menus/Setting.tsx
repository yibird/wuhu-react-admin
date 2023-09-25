import React, { useState } from 'react';
import { Icon } from '@/components';
import AppSetting from '@/layout/setting/appSetting';

function Setting() {
  const [appSettingOpen, setAppSettingOpen] = useState(false);

  return (
    <>
      <li
        className="px-10 hover:bg-[#f6f6f6] cursor-pointer"
        onClick={() => setAppSettingOpen(true)}
      >
        <Icon name="settings-line" size={18} />
      </li>
      <AppSetting open={appSettingOpen} onClose={() => setAppSettingOpen(false)} />
    </>
  );
}

export default Setting;
