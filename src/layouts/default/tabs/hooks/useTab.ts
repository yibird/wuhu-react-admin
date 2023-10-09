// import { IMenuItem } from '@/common/menus';
// import { useTabStore } from '@/store';
// import { useNavigate } from 'react-router-dom';
// import { useRollPage } from './useRollPage';

// export function useTab<E extends HTMLElement>(ref?: React.RefObject<E>) {
//   const { current, list, setCurrent, addTab, closeTab } = useTabStore();
//   const { autoRollPage, autoRollElement, rollPageLeft, rollPageRight } = useRollPage(ref!, list);
//   const navigate = useNavigate();

//   function toRoute({ path }: IMenuItem) {
//     path && navigate(path);
//   }

//   // 添加tab
//   function handleAddTab(menu: IMenuItem, el?: HTMLElement) {
//     toRoute(menu);
//     addTab(menu);
//     autoRollPage(current + 1);
//   }

//   // 选择tab
//   function handleChangeTab(index: number) {
//     if (current === index) return;
//     toRoute(list[index]);
//     setCurrent(index);
//     autoRollPage(index);
//   }

//   // 根据index关闭tab
//   function handleCloseTab(index: number) {
//     closeTab(index);
//     const activeIndex = index === 0 ? -1 : index >= current ? index - 1 : index;
//     toRoute(list[activeIndex]);
//     autoRollPage(activeIndex);
//   }

//   // 关闭其他tab
//   function closeOtherTab() {}

//   return {
//     ref,
//     tabList: list,
//     current,
//     addTab: handleAddTab,
//     changeTab: handleChangeTab,
//     closeTab: handleCloseTab,
//     closeOtherTab,
//     autoRollPage,
//     autoRollElement,
//     rollPageLeft,
//     rollPageRight,
//   };
// }

import { useTabStore } from '@/store';
import { useNavigate, useLocation } from 'react-router-dom';
import type { IMenuItem } from '@/common/menus';
import { isNumber } from '@/utils/is';

export function useTab() {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, current, addTab, changeTab, closeTab } = useTabStore();

  function toRoute({ path }: IMenuItem) {
    if (!path || location.pathname === path) return;
    path && navigate(path);
  }
  function handleAddTab(menu: IMenuItem) {
    addTab(menu);
    toRoute(menu);
  }
  function handleChangeTab(menu: number | IMenuItem) {
    const currentMenu = isNumber(menu) ? items[menu] : menu;
    changeTab(currentMenu);
    toRoute(currentMenu);
  }
  function handleCloseTab(menu: number | IMenuItem) {
    closeTab(menu);
  }

  return {
    items,
    current,
    addTab: handleAddTab,
    changeTab: handleChangeTab,
    closeTab: handleCloseTab,
  };
}
