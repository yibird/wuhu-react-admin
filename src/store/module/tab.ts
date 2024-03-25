import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors, storage } from '../util';
import type { IMenu } from '#/config';
import { log } from 'console';

interface State {
  // 当前选中tab index
  current: number;
  // 选项卡列表
  tabList: IMenu[];
  // 已打开项map,key为菜单id,value为index
  tabMap: Map<number, number>;
}

interface Action {
  setCurrent: (current: number) => void;
  setState: (setter: (prevState: State) => State) => void;
}

export type TabState = State & Action;

const initialState: State = {
  current: 0,
  tabList: [],
  tabMap: new Map<number, number>(),
};

const storeCreator: StateCreator<TabState> = (set, get) => ({
  ...initialState,
  setCurrent(current) {
    set({ ...get(), current });
  },
  setState(setter) {
    set({ ...get(), ...setter({ ...get() }) });
  },
});
export const tabStore = createStore<TabState>()(persist(storeCreator, { name: 'tab', storage }));
export const useTabStore = createBoundedUseStore(tabStore);
export const useTabStoreSelectors = createSelectors(tabStore);
