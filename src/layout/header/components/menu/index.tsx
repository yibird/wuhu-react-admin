import React from 'react';
import Search from './Search';
import Notice from './Notice';
import Translate from './Translate';
import FullScreen from './FullScreen';
import User from './User';
import Setting from './Setting';

import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';

import { HeaderActionBarEnum } from '@/enums';

export default function HeaderMenus() {
  const { showSearch, showNotice, showTranslate, showLockPage, showFullScreen, showSetting } =
    useAppStore((state) => {
      const actionBar = state.header.actionBar;
      return {
        showSearch: actionBar.includes(HeaderActionBarEnum.SEARCH),
        showNotice: actionBar.includes(HeaderActionBarEnum.NOTICE),
        showTranslate: actionBar.includes(HeaderActionBarEnum.TRANSLATE),
        showLockPage: actionBar.includes(HeaderActionBarEnum.LOCK_PAGE),
        showFullScreen: actionBar.includes(HeaderActionBarEnum.FULL_SCREEN),
        showSetting: actionBar.includes(HeaderActionBarEnum.SETTING),
      };
    }, shallow);

  return (
    <ul className="flex h-full">
      {showSearch && <Search />}
      {showNotice && <Notice />}
      {showTranslate && <Translate />}
      {showFullScreen && <FullScreen />}
      <User />
      {showSetting && <Setting />}
    </ul>
  );
}
