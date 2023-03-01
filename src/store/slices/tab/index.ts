import { StateCreator } from "zustand";
import type { RootState } from "@/store/type";
import { initialState } from "./initialState";
import { isNumber } from "@/utils/is";
import _ from "lodash-es";

export const createTabSlice: StateCreator<
  RootState,
  [],
  [],
  RootState["tab"]
> = (set, get) => {
  return {
    ...initialState,
    setTab(state) {
      const { tab } = get();
      set({ ...get(), tab: { ...tab, ...state } });
    },
    /**
     * 根据index或menu id获取current
     * @param menu 菜单index或菜单对象
     * @returns current
     */
    getCurrentAction(menu) {
      if (isNumber(menu)) return menu;
      return get().tab.list.findIndex((item) => item.id === menu.id);
    },
    /**
     * 设置current
     * @param menu 菜单index或菜单对象
     */
    setCurrentAction(menu) {
      const { setTab, getCurrentAction } = get().tab;
      setTab({ current: getCurrentAction(menu) });
    },
    /**
     * 获取当前选中tab
     * @returns 当前选中的tab对象
     */
    getCurrentTabAction() {
      const { permission, tab } = get();
      return permission.flatMenus[tab.current];
    },
    addTabAction(menu) {
      const { getCurrentAction, current, list, setTab } = get().tab;
      const activeCurrent = getCurrentAction(menu);
      // 菜单已存在并打开菜单与当前菜单一致则直接返回
      if (activeCurrent !== -1 && activeCurrent === current) return;
      if (activeCurrent === -1) {
        setTab({ list: list.concat([menu]), current: list.length });
      } else {
        setTab({ current: activeCurrent });
      }
    },
    /**
     * 关闭tab
     * @param menu 菜单index或菜单对象
     */
    closeTabAction(menu) {
      const { getCurrentAction, current, list, setTab } = get().tab;
      const activeCurrent = getCurrentAction(menu);
      setTab({
        list: _.dropRight(list),
        current: activeCurrent >= current ? activeCurrent - 1 : activeCurrent,
      });
    },
  };
};
