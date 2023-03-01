import { StateCreator } from "zustand";
import type { RootState } from "@/store/type";
import { initialState } from "./initialState";

import { menus } from "@/common/menus";
import { toList } from "@/utils/tree";

export const createPermissionSlice: StateCreator<
  RootState,
  [],
  [],
  RootState["permission"]
> = (set, get) => {
  return {
    ...initialState,
    setPermission(state) {
      const { permission } = get();
      return set({ ...get(), permission: { ...permission, ...state } });
    },
    async setServerMenus() {
      const { setPermission } = get().permission;
      setTimeout(() => {
        setPermission({ serverMenus: menus, flatMenus: toList(menus) });
      }, 10);
    },
  };
};
