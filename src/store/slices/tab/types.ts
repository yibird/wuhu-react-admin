import type { IMenuItem } from "@/common/menus";

export interface TabState {
  list: IMenuItem[];
  // 当前选中tab index
  current: number;
}

export interface TabAction {
  setTab: (state: Partial<TabState>) => void;
  getCurrentAction: (menu: IMenuItem | number) => number;
  setCurrentAction: (menu: IMenuItem | number) => void;
  getCurrentTabAction: () => IMenuItem | undefined;
  addTabAction: (menu: IMenuItem) => void;
  closeTabAction: (menu: IMenuItem | number) => void;
}

export type TabSlice = TabState & TabAction;
