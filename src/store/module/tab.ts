import { StateCreator, createStore } from 'zustand/vanilla';
import type { IMenuItem } from '@/common/menus';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors } from '../utils';
import { isNumber } from '@/utils/is';

export interface TabState {
  // 选项卡列表
  items: IMenuItem[];
  // 当前选中tab index
  current: number;
  // 初始化
  initializeHomeMenu: (menus: IMenuItem[]) => void;
  setItems: (items: IMenuItem[]) => void;
  getTabIndex: (menu: IMenuItem | number) => number;
  addTab: (menu: IMenuItem) => void;
  changeTab: (index: IMenuItem | number) => void;
  closeTab: (index: IMenuItem | number) => void;
}

const storeCreator: StateCreator<TabState> = (set, get) => ({
  items: [],
  current: 0,
  initializeHomeMenu(menus) {
    const { items, setItems } = get();
    const isExistHomeMenu = items.some((item) => item.home);
    if (isExistHomeMenu) return;
    const homeMenu = menus.filter((item) => item.home).at(0);
    if (!homeMenu) return;
    setItems([homeMenu]);
  },
  setItems(items) {
    set({ items: [...get().items, ...items] });
  },
  getTabIndex(menu) {
    if (isNumber(menu)) return menu;
    const { items } = get();
    const index = items.findIndex((item) => item.id === menu.id);
    return index;
  },
  addTab(menu) {
    const { current, getTabIndex, changeTab } = get();
    const index = getTabIndex(menu);
    if (index === -1) {
      set({
        current: current + 1,
        items: [...get().items, menu],
      });
      return;
    }
    changeTab(index);
  },
  changeTab(menu) {
    const { getTabIndex } = get();
    const current = isNumber(menu) ? menu : getTabIndex(menu);
    set({ current });
  },
  closeTab(menu) {
    const { items, current, getTabIndex } = get();
    const index = getTabIndex(menu);
    const newItems = items.filter((_, i) => i !== index);
    set({
      items: newItems,
      current: index <= current ? index - 1 : current,
    });
  },
});
const tabStore = createStore<TabState>()(persist(storeCreator, { name: 'tab' }));
export const useTabStore = createBoundedUseStore(tabStore);
export const useTabStoreSelectors = createSelectors(tabStore);
