import { IMenuItem } from '#/config';
import { useTabStore, usePermissionStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

export function useTabs() {
  const navigate = useNavigate();
  const { items, current, setTabState, setItems, setCurrent } = useTabStore((state) => state);
  const flatMenus = usePermissionStore((state) => state.flatMenus, shallow);

  function toPath(item: IMenuItem) {
    if (item.path) {
      navigate(item.path);
    }
  }

  function getTabIndex(path: string) {
    return items.findIndex((item) => item.path === path);
  }
  function addTabByPath(path: string) {
    const item = flatMenus.find((item) => item.path === path);
    console.log('item:', flatMenus, path);
    item && addTab(item);
  }
  function addTab(item: IMenuItem) {
    if (!item.path) return;
    const index = getTabIndex(item.path);
    if (index === -1) {
      setTabState([...items, item], items.length);
      item.path && navigate(item.path);
      return;
    }
    changeTabByIndex(index);
  }
  function addTabByRoute() {}
  function changeTabByIndex(index: number) {
    if (index === current) return;
    setCurrent(index);
    toPath(items[index]);
  }
  function changeTabByPath(path: string) {
    const index = getTabIndex(path);
    changeTabByIndex(index);
  }
  function changeTab(item: IMenuItem) {
    if (!item.path) return;
    changeTabByPath(item.path);
  }

  function closeTabByIndex(index: number) {
    if (index < 0 || index > items.length - 1) return;
    const newIndex = index <= current ? (index - 1 === 0 ? 0 : index - 1) : current;
    const newItems = items.filter((_, i) => i !== index);
    setTabState(newItems, newIndex);
    toPath(newItems[newIndex]);
  }
  function closeTabByPath(path: string) {}
  function closeTab() {}
  function closeCurrentTab() {
    closeTabByIndex(current);
  }
  function closeLeftTab() {
    if (current < 1) return;
    const newItems = [items[0], ...items.slice(current)];
    setTabState(newItems, newItems.length - 1);
  }
  function closeRightTab() {
    if (current === items.length - 1 || current === 0) return;
    setItems(items.slice(0, current + 1));
  }
  function closeOtherTab() {
    if (items.length === 1) return;
    const newItems = items.filter((_, index) => index !== current);
    setItems(newItems);
  }
  function closeAllTab() {
    if (items.length === 1) return;
    setTabState([items[0]], 0);
    toPath(items[0]);
  }

  return {
    items,
    current,
    getTabIndex,
    addTabByPath,
    addTab,
    addTabByRoute,
    changeTabByIndex,
    changeTabByPath,
    changeTab,
    closeTabByIndex,
    closeTabByPath,
    closeTab,
    closeCurrentTab,
    closeLeftTab,
    closeRightTab,
    closeOtherTab,
    closeAllTab,
  };
}
