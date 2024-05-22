import React from 'react';
import Search from './Search';
import Notice from './Notice';
import Translate from './Translate';
import FullScreen from './FullScreen';
import User from './User';
import LockScreen from './LockScreen';
import Setting from './Setting';

import { useAppStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { HeaderActionBarEnum } from '@/enums';

const itemClasses = 'flex-y-center px-10 hover:bg-[#f6f6f6] cursor-pointer dark:hover:bg-slate-800';

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
      {showSearch && <Search className={itemClasses} />}
      {showNotice && <Notice className={itemClasses} />}
      {showTranslate && <Translate className={itemClasses} />}
      {showFullScreen && <FullScreen className={itemClasses} />}
      <User className={itemClasses} />
      {showLockPage && <LockScreen className={itemClasses} />}
      {showSetting && <Setting className={itemClasses} />}
    </ul>
  );
}
