import { StateCreator } from "zustand";
import type { RootState } from "../../type";
import { initialState } from "./initialState";

export const createAppSlice: StateCreator<
  RootState,
  [],
  [],
  RootState["app"]
> = (set, get) => {
  return {
    ...initialState,
    setApp(appState) {
      const { app } = get();
      set({ ...get(), app: { ...app, ...appState } });
    },
    getCollaped: () => get().app.menuSetting.collapsed,
    setCollapsed(collapsed) {
      const { menuSetting, setApp } = get().app;
      setApp({ menuSetting: { ...menuSetting, collapsed } });
    },
    setThemeColor(themeColor) {
      const { setApp } = get().app;
      setApp({ themeColor });
    },
    setMenuThemeColor(themeColor: string) {
      const { menuSetting, setApp } = get().app;
      setApp({ menuSetting: { ...menuSetting, themeColor } });
    },
    setHeaderThemeColor(themeColor: string) {
      const { headerSetting, setApp } = get().app;
      setApp({ headerSetting: { ...headerSetting, themeColor } });
    },
  };
};
