import { IMenu } from '#/config';
import { usePermissionStore, useSelector } from '@/store';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useMenus() {
  const navigate = useNavigate();
  const { flatMenusCache, current, openMenus, openMenusCache, homeMenu, setState } =
    usePermissionStore(
      useSelector([
        'flatMenusCache',
        'current',
        'openMenus',
        'openMenusCache',
        'homeMenu',
        'setState',
      ]),
    );
  const currentMenu = useMemo(() => {
    return current === -1 ? homeMenu : openMenus[current];
  }, [homeMenu, current])!;

  // 从start到end(不含)范围返回元素
  const getRangeState = (start: number, end: number) => {
    const newOpenMenus = [];
    openMenusCache.clear();
    for (let i = start; i < end; i++) {
      newOpenMenus.push(openMenus[i]);
      openMenusCache.set(openMenus[i].id.toString(), openMenus[i]);
    }
    return { openMenus: newOpenMenus, openMenusCache };
  };

  function isHomeMenu(menu: IMenu) {
    return homeMenu ? homeMenu.id === menu.id : false;
  }

  // 重置openMenusCache
  function resetOpenMenusCache(menu?: IMenu | null) {
    openMenusCache.clear();
    menu && openMenusCache.set(menu.id.toString(), menu);
  }

  function toPath(menu: IMenu | null | string) {
    if (!menu) return;
    const path = typeof menu === 'string' ? menu : menu.path;
    if (!path) return;
    navigate(path);
  }

  // 根据菜单id选择tab
  function openMenuById(menuId: string | number) {
    menuId = menuId.toString();
    const menu = openMenusCache.get(menuId);
    // 判断菜单项是否打开
    if (!menu) {
      const openMenu = flatMenusCache.get(menuId);
      if (!openMenu) return;
      setState((prev) => {
        return {
          ...prev,
          current: prev.current + 1,
          openMenus: prev.openMenus.concat([openMenu]),
          openMenusCache: prev.openMenusCache.set(menuId, openMenu),
        };
      });
      toPath(openMenu);
      return;
    }
    const current = isHomeMenu(menu) ? -1 : openMenus.indexOf(menu);
    setState((prev) => ({ ...prev, current }));
    toPath(isHomeMenu(menu) ? homeMenu : menu);
  }
  // 根据下标打开menu
  function openMenuByIndex(index: number) {
    if (index < 0 || index > openMenus.length - 1) return;
    openMenuById(openMenus[index].id);
  }
  // 打开menu
  function openMenu(menu: IMenu | string | number) {
    const id = typeof menu === 'object' ? menu.id : menu;
    openMenuById(id);
  }

  // 打开首页菜单
  function openHomeMenu() {
    homeMenu && openMenu(homeMenu);
  }

  // 根据下标关闭menu,时间复杂度最大为O(n),普通情况下小于O(n)
  function closeMenuByIndex(index: number) {
    if (index < 0 || index > openMenus.length - 1) return;
    openMenusCache.delete(openMenus[index].id.toString());
    const newCurrent = index < current ? current - 1 : index === current ? index - 1 : current;
    const newOpenMenus = openMenus.slice(0, index);
    setState((prev) => ({
      ...prev,
      current: newCurrent,
      openMenus: newOpenMenus,
      openMenusCache,
    }));
    toPath(newOpenMenus[newCurrent]);
  }

  // 根据菜单id关闭menu
  function closeMenuById(id: string | number) {
    const index = openMenus.findIndex((item) => item.id === id);
    if (index === -1) return;
    closeMenuByIndex(index);
  }
  // 根据menu或菜单id关闭menu
  function closeMenu(menu: IMenu | string | number) {
    const id = typeof menu === 'object' ? menu.id : menu;
    closeMenuById(id);
  }
  // 关闭当前menu
  function closeCurrentMenu() {
    if (current < 0 || current > openMenus.length - 1) return;
    closeMenuByIndex(current);
  }
  // 关闭左侧menu
  function closeLeftMenus() {
    if (current < 2) return;
    setState((prev) => {
      return {
        ...prev,
        current: 0,
        ...getRangeState(current, openMenus.length),
      };
    });
  }
  // 关闭右侧menu
  function closeRightMenus() {
    if (current === openMenus.length - 1) return;
    setState((prev) => {
      return { ...prev, ...getRangeState(1, current + 1) };
    });
  }
  // 关闭其他meun
  function closeOtherMenus() {
    if (openMenus.length <= 1) return;
    // 如果在首页(current === -1)则清空所有数据
    const menu = current === -1 ? homeMenu : openMenus[current];
    resetOpenMenusCache(menu);
    setState((prev) => {
      return {
        ...prev,
        openMenus: current === -1 ? [] : [openMenus[current]],
        openMenusCache,
      };
    });
  }

  // 关闭所有menu
  function closeAllMenus() {
    resetOpenMenusCache(homeMenu);
    setState((prev) => {
      return { ...prev, current: -1, openMenus: [], openMenusCache };
    });
    toPath(homeMenu);
  }

  return {
    current,
    currentMenu,
    openMenus,
    homeMenu,
    openMenu,
    openMenuById,
    openMenuByIndex,
    openHomeMenu,
    isHomeMenu,
    closeMenu,
    closeMenuById,
    closeMenuByIndex,
    closeCurrentMenu,
    closeLeftMenus,
    closeRightMenus,
    closeOtherMenus,
    closeAllMenus,
  };
}
