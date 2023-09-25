import React, { useState } from "react";
import Icon from "@/components/Icon";
import AppSetting from "@/layouts/setting/appSetting";

function Setting() {
  const [appSettingOpen, setAppSettingOpen] = useState(false);

  return (
    <div>
      <li
        className="px-10 hover:bg-[#f6f6f6] cursor-pointer"
        onClick={() => setAppSettingOpen(true)}
      >
        <Icon name="settings-line" size={18} />
      </li>
      <AppSetting
        open={appSettingOpen}
        onClose={() => setAppSettingOpen(false)}
      />
    </div>
  );
}

export default Setting;
