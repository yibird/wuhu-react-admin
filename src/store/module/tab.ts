import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors, storage } from '../util';
import type { IMenu } from '#/config';
import { toMap } from '@/utils/collection';

interface State {
  // 当前选中tab index
  current: number;
  // 打开的选项卡列表
  tabList: IMenu[];
  // 已打开项map,key为菜单id,value为index
  tabMap: Map<number, number>;
  // 首页菜单
  homeMenu: IMenu | null;
}

interface Action {
  setState: (setter: (prevState: State) => State) => void;
  setCurrent: (current: number) => void;
  setHomeMenu: (menu?: IMenu) => void;
}

export type TabState = State & Action;

const initialState: State = {
  current: 0,
  tabList: [],
  tabMap: new Map<number, number>(),
  homeMenu: null,
};
const storeCreator: StateCreator<TabState> = (set, get) => ({
  ...initialState,
  setState(setter) {
    set({ ...get(), ...setter({ ...get() }) });
  },
  setCurrent(current) {
    set({ ...get(), current });
  },
  setHomeMenu(homeMenu) {
    if (!homeMenu) return;
    const tabMap = new Map<number, number>([[homeMenu.id, 0]]);
    set({ ...get(), homeMenu, tabMap, tabList: [homeMenu] });
  },
});
export const tabStore = createStore<TabState>()(persist(storeCreator, { name: 'tab', storage }));
export const useTabStore = createBoundedUseStore(tabStore);
export const useTabStoreSelectors = createSelectors(tabStore);
