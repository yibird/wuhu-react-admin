import React from 'react';
import Search from './Search';
import Notice from './Notice';
import Translate from './Translate';
import FullScreen from './FullScreen';
import Lock from './Lock';
import User from './User';
import Setting from './Setting';

import { useAppStore } from '@/store';
import { eq } from 'lodash-es';

function HeaderMenus() {
  const { showSearch, showNotice, showTranslate, showLockPage, showFullScreen, showSettig } =
    useAppStore((state) => state.headerSetting, eq);

  [showSearch && <Search />];
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
export default HeaderMenus;
