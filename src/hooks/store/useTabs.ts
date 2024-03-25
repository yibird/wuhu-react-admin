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
  const getFirstItem = tabList[0];

  const getRangeState = (start: number, end: number) => {
    const newTabList = [getFirstItem];
    tabMap.clear();
    tabMap.set(getFirstItem.id, 0);
    for (let i = start; i < end; i++) {
      newTabList.push(tabList[i]);
      tabMap.set(tabList[i].id, i - current + 1);
    }
    return { tabList: newTabList, tabMap };
  };

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
  function changeTabById(menuId: string | number) {
    const id = Number(menuId);
    if (!Number.isInteger(id)) return;
    const index = tabMap.get(id);
    console.log('index:', index);
    if (index === current) return;
    const menu = menuMap.get(id);
    if (typeof index === 'undefined' && menu) {
      tabMap.set(id, len);
      setState((prev) => {
        return { ...prev, current: len, tabList: tabList.concat([menu]), tabMap };
      });
      toPath(menu);
      return;
    }
    setState((prev) => ({ ...prev, current: index! }));
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
  // 根据下标关闭tab,时间复杂度最大为O(n),普通情况下小于O(n)
  function closeTabByIndex(index: number, skipCheck: boolean = false) {
    if (skipCheck && (index < 0 || index > len - 1)) return;
    const newCurrent = index < current ? current - 1 : index === current ? index - 1 : current;
    const newTabList = tabList.slice(0, index);
    for (let i = index; i < len; i++) {
      const id = tabList[i].id;
      if (i === index) {
        tabMap.delete(id);
        continue;
      }
      newTabList.push(tabList[i]);
      tabMap.set(id, i - 1);
    }
    setState((prev) => ({
      ...prev,
      current: newCurrent,
      tabList: newTabList,
      tabMap: getTabMap(newTabList),
    }));
    toPath(tabList[newCurrent]);
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
    if (current === 0) return;
    closeTabByIndex(current);
  }
  // 关闭左侧
  function closeLeftTab() {
    if (current < 2) return;
    setState((prev) => {
      return { ...prev, current: current === 0 ? 0 : 1, ...getRangeState(current, len) };
    });
  }
  // 关闭右侧
  function closeRightTab() {
    if (current === len - 1) return;
    setState((prev) => {
      return { ...prev, ...getRangeState(1, current + 1) };
    });
  }
  // 关闭其他
  function closeOtherTab() {
    if (length < 2 || current === 1) return;
    const newTabList = [tabList[0]].concat(current === 0 ? [] : tabList[current]);
    console.log('closeOtherTab', getTabMap(newTabList).keys());
    setState((prev) => {
      return {
        ...prev,
        current: current === 0 ? 0 : 1,
        tabList: newTabList,
        tabMap: getTabMap(newTabList),
      };
    });
  }
  // 关闭所有
  function closeAllTab() {
    if (len === 1) return;
    tabMap.clear();
    tabMap.set(tabList[0].id, 0);
    setState((prev) => {
      return { ...prev, current: 0, tabList: [tabList[0]], tabMap };
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
