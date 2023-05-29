import { StateCreator, create } from "zustand";
import { initialState } from "./initialState";
import { menus } from "@/common/menus";
import { toList } from "@/utils/tree";
import { PermissionSlice } from "./types";
import { persist } from "zustand/middleware";
import {
  ZustandHookSelectors,
  createSelectorHooks,
} from "auto-zustand-selectors-hook";

function createPermissionStore(): StateCreator<PermissionSlice> {
  return (set, get) => ({
    ...initialState,
    setState(newState) {
      set((state) => ({ ...state, ...newState }));
    },
    async setServerMenus() {
      set({ serverMenus: menus, flatMenus: toList(menus) });
    },
  });
}

export const usePermissionStore = create(
  persist(createPermissionStore(), { name: "permission" })
);

export const usePermissionStoreSelector = createSelectorHooks(
  usePermissionStore
) as typeof usePermissionStore & ZustandHookSelectors<PermissionSlice>;
