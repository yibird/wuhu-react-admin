import { IMenuItem } from "@/common/menus";
import { isNumber } from "@/utils/is";
import { StateCreator } from "zustand";
import _ from "lodash-es";
import type { RootState } from "./index";

export interface TabState {
  tabList: IMenuItem[];
  // 当前选中tab index
  current: number;
}

export interface TabAction {
  getCurrentTab: () => IMenuItem | undefined;
  getTabCurrentAction: (menu: IMenuItem | number) => number;
  addTabAction: (menu: IMenuItem) => void;
  changeTabAction: (menu: IMenuItem | number) => void;
  closeTabAction: (menu: IMenuItem | number) => void;
}

export type TabSlice = TabState & TabAction;

const initialState: TabState = {
  tabList: [],
  current: -1,
};

export const createTabSlice: StateCreator<RootState, [], [], TabSlice> = (
  set,
  get
) => ({
  ...initialState,
  getCurrentTab() {
    const { flatMenus, current } = get();
    return flatMenus[current];
  },
  getTabCurrentAction(menu) {
    if (isNumber(menu)) return menu;
    return get().tabList.findIndex((item) => item.id === menu.id);
  },
  addTabAction(menu) {
    const current = get().getTabCurrentAction(menu);
    if (current !== -1 && current === get().current) return;
    set((state) => {
      if (current === -1) {
        const tabList = state.tabList.concat([menu]);
        return { tabList, current: tabList.length - 1 };
      }
      return { current };
    });
  },
  changeTabAction(menu: IMenuItem | number) {
    const current = get().getTabCurrentAction(menu);
    set(() => ({ current }));
  },
  closeTabAction(menu: IMenuItem | number) {
    const newCurrent = get().getTabCurrentAction(menu);
    set(({ tabList, current }) => {
      _.pullAt(tabList, [newCurrent]);
      return {
        tabList,
        current: newCurrent >= current ? newCurrent - 1 : newCurrent,
      };
    });
  },
});
