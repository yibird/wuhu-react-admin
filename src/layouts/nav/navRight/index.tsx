import React from "react";
import Icon from "@/components/Icon";
import Search from "./components/Search";
import Notice from "./components/Notice";
import Translate from "./components/Translate";
import FullScreen from "./components/FullScreen";
import Lock from "./components/Lock";
import User from "./components/User";
import Setting from "./components/Setting";
import { useStore } from "@/store";

function HeaderNavRight() {
  const {
    showSearch,
    showNotice,
    showTranslate,
    showLockPage,
    showFullScreen,
    showSettig,
  } = useStore((state) => state.headerSetting);
  return (
    <ul className="flex h-full">
      {showSearch && <Search />}
      {showNotice && <Notice />}
      {showTranslate && <Translate />}
      {showLockPage && <Lock />}
      {showFullScreen && <FullScreen />}
      <User />
      {showSettig && <Setting />}
    </ul>
  );
}
export default HeaderNavRight;
