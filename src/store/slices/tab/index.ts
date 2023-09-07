import { StateCreator, create } from 'zustand';
import type { TabSlice } from './types';
import { initialState } from './initialState';
import { isNumber } from '@/utils/is';
import { dropRight } from 'lodash-es';
import { persist } from 'zustand/middleware';
import { createSelectorHooks, ZustandHookSelectors } from 'auto-zustand-selectors-hook';

function createTabStore(): StateCreator<TabSlice> {
  return (set, get) => ({
    ...initialState,
    setState(newState) {
      set((state) => Object.assign(state, newState));
    },
    /**
     * 根据index或menu id获取current
     * @param menu 菜单index或菜单对象
     * @returns current tab当前选中索引
     */
    getCurrent(menu) {
      if (isNumber(menu)) return menu;
      console.log('menu:', menu);
      const index = get().list.findIndex((item) => item.id === menu.id);
      return index;
    },
    setCurrent(menu) {
      const { setState, getCurrent } = get();
      setState({ current: getCurrent(menu) });
    },
    getCurrentTab() {
      return undefined;
    },
    addTab(menu) {
      const { getCurrent, current, list, setState } = get();
      if (list.length === 0) {
        console.log('asdasdasd');
        return;
      }

      const activeCurrent = getCurrent(menu);
      // 菜单已存在并打开菜单与当前菜单一致则直接返回
      if (activeCurrent !== -1 && activeCurrent === current) return;
      if (activeCurrent === -1) {
        setState({ list: list.concat([menu]), current: list.length });
      } else {
        setState({ current: activeCurrent });
      }
    },
    closeTab(menu) {
      const { getCurrent, current, list, setState } = get();
      const activeCurrent = getCurrent(menu);
      setState({
        list: dropRight(list),
        current: activeCurrent >= current ? activeCurrent - 1 : activeCurrent,
      });
    },
  });
}

export const useTabStore = create(persist(createTabStore(), { name: 'tab' }));
export const useTabStoreSelector = createSelectorHooks(useTabStore) as typeof useTabStore &
  ZustandHookSelectors<TabSlice>;
