import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AppSlice } from "./types";
import { initialState } from "./initialState";
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from "auto-zustand-selectors-hook";

function createAppStore(): StateCreator<AppSlice> {
  return (set, get) => ({
    ...initialState,
    setState(newState) {
      set((state) => ({ ...state, ...newState }));
    },
    getCollaped() {
      return get().menuSetting.collapsed;
    },
    setCollapsed(collapsed) {
      const { setState, menuSetting } = get();
      setState({ menuSetting: { ...menuSetting, collapsed } });
    },
    setThemeColor(themeColor) {
      get().setState({ themeColor });
    },
    setMenuThemeColor(themeColor) {
      const { setState, menuSetting } = get();
      setState({ menuSetting: { ...menuSetting, themeColor } });
    },
    setHeaderThemeColor(themeColor) {
      const { headerSetting, setState } = get();
      setState({ headerSetting: { ...headerSetting, themeColor } });
    },
    setAnimation(newAnimation) {
      const { setState, animation } = get();
      setState({ animation: { ...animation, ...newAnimation } });
    },
  });
}

export const useAppStore = create(
  // persist(createAppStore(), { name: "appStore" })
  createAppStore()
);

export const useAppStoreSelector = createSelectorHooks(
  useAppStore
) as typeof useAppStore & ZustandHookSelectors<AppSlice>;
