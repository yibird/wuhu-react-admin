import { useEffect } from 'react';
import { useTabStore } from '@/store';
import { useNavigate, useLocation } from 'react-router-dom';
import type { IMenuItem } from '@/common/menus';
import { isNumber } from '@/utils/is';

export function useTab() {
  const navigate = useNavigate();
  const location = useLocation();
  const items = useTabStore((state) => state.items);
  const current = useTabStore((state) => state.current);
  const { addTab, changeTab, closeTab } = useTabStore();

  function toRoute(item: IMenuItem) {
    if (!item) return;
    const { path } = item;
    if (!path || location.pathname === path) return;
    path && navigate(path);
  }
  function handleAddTab(menu: IMenuItem) {
    addTab(menu);
  }
  function handleChangeTab(menu: number | IMenuItem) {
    const currentMenu = isNumber(menu) ? items[menu] : menu;
    changeTab(currentMenu);
  }
  function handleCloseTab(menu: number | IMenuItem) {
    const currentMenu = isNumber(menu) ? items[menu] : menu;
    closeTab(currentMenu);
  }

  useEffect(() => {
    toRoute(items[current]);
  }, [current]);

  return {
    items,
    current,
    addTab: handleAddTab,
    changeTab: handleChangeTab,
    closeTab: handleCloseTab,
  };
}
