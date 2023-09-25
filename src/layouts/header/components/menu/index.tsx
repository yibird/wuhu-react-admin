import React from "react";
import { useAppStore } from "@/store";

import Search from "./Search";
import Notice from "./Notice";
import Translate from "./Translate";
import FullScreen from "./FullScreen";
import Lock from "./Lock";
import User from "./User";
import Setting from "./Setting";

function HeaderMenu() {
  const {
    showSearch,
    showNotice,
    showTranslate,
    showLockPage,
    showFullScreen,
    showSetting,
  } = useAppStore().headerSetting;

  return (
    <ul className="flex h-full">
      {showSearch && <Search />}
      {showNotice && <Notice />}
      {showTranslate && <Translate />}
      {showLockPage && <Lock />}
      {showFullScreen && <FullScreen />}
      <User />
      {showSetting && <Setting />}
    </ul>
  );
}
export default HeaderMenu;
