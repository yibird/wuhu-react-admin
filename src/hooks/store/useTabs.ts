import { IMenu } from '#/config';
import { useTabStore, usePermissionStore, useSelector } from '@/store';
import { toMap } from '@/utils/collection';
import { isDef } from '@/utils/is';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useTabs() {
  const navigate = useNavigate();
  const { current, tabList, tabMap, setState } = useTabStore(
    useSelector(['current', 'tabList', 'tabMap', 'setState']),
  );
  const { menuMap } = usePermissionStore(useSelector(['menuMap']));
  const len = useMemo(() => tabList.length, [tabList]);

  function toPath(item: IMenu) {
    item.path && navigate(item.path);
  }
  function getTabMap(list: IMenu[]) {
    return toMap(
      list,
      (item) => item.id,
      (_, i) => i,
    );
  }
  // 根据菜单id选择tab
  function changeTabById(id: string | number) {
    id = Number(id);
    if (!Number.isInteger(id)) return;
    const index = tabMap.get(id);
    if (index === current) return;
    if (typeof index === 'undefined') {
      const newCurrent = len === 0 ? 0 : current + 1;
      tabMap.set(id, newCurrent);
      setState((prev) => {
        return { ...prev, current: newCurrent, tabList: [...tabList, menuMap.get(id)!], tabMap };
      });
      return;
    }
    setState((prev) => ({ ...prev, current: index }));
    toPath(menuMap.get(id)!);
  }
  // 根据下标选择tab
  function changeTabByIndex(index: number) {
    if (index < 0 || index > len - 1) return;
    changeTabById(tabList[index].id);
  }
  // 根据菜单项选择tab
  function changeTab(menu: IMenu) {
    changeTabById(menu.id);
  }
  // 根据下标关闭tab
  function closeTabByIndex(index: number, skipCheck: boolean = false) {
    if (skipCheck) {
      if (index < 0 || index > len - 1) return;
    }
    const newCurrent = index < current ? current - 1 : index === current ? index - 1 : current;
    const newTabList = tabList.filter((_, i) => i !== index);
    const menu = newTabList[newCurrent];
    tabMap.delete(menu.id);
    setState((prev) => ({ ...prev, current: newCurrent, tabList: newTabList, tabMap }));
    toPath(menu);
  }
  // 根据id关闭tab
  function closeTabById(id: string | number) {
    const index = tabMap.get(Number(id));
    isDef(index) && closeTabByIndex(index, true);
  }
  // 根据menu关闭tab
  function closeTab(menu: IMenu) {
    closeTabById(menu.id);
  }
  // 关闭当前tab
  function closeCurrentTab() {
    closeTabByIndex(current);
  }
  // 关闭左侧
  function closeLeftTab() {
    if (current < 1) return;
    const newTabList = [tabList[0]].concat(tabList.slice(current));
    setState((prev) => {
      return { ...prev, tabList: newTabList, tabMap: getTabMap(newTabList) };
    });
  }
  // 关闭右侧
  function closeRightTab() {
    if (current === len - 1 || current === 0) return;
    const newTabList = tabList.filter((_, index) => current <= index);
    setState((prev) => {
      return { ...prev, tabList: newTabList, tabMap: getTabMap(newTabList) };
    });
  }
  // 关闭其他
  function closeOtherTab() {
    if (len === 1) return;
    const newTabList = tabList.filter((_, index) => [0, current].includes(index));
    setState((prev) => {
      return { ...prev, tabList: newTabList, tabMap: getTabMap(newTabList) };
    });
  }
  // 关闭所有
  function closeAllTab() {
    if (len === 1) return;
    const newTabList = [tabList[0]];
    setState((prev) => {
      return { ...prev, tabList: newTabList, tabMap: getTabMap(newTabList) };
    });
    toPath(tabList[0]);
  }

  return {
    tabList,
    current,
    changeTab,
    changeTabById,
    changeTabByIndex,
    closeTab,
    closeTabById,
    closeTabByIndex,
    closeCurrentTab,
    closeLeftTab,
    closeRightTab,
    closeOtherTab,
    closeAllTab,
    getLen: len,
  };
}
