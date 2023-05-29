import type { IMenuItem } from "@/common/menus";

export interface TabState {
  list: IMenuItem[];
  // 当前选中tab index
  current: number;
}

export interface TabAction {
  setState: (state: Partial<TabState>) => void;
  getCurrent: (menu: IMenuItem | number) => number;
  setCurrent: (menu: IMenuItem | number) => void;
  getCurrentTab: () => IMenuItem | undefined;
  addTab: (menu: IMenuItem) => void;
  closeTab: (menu: IMenuItem | number) => void;
}

export type TabSlice = TabState & TabAction;
