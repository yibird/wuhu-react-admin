import { StateCreator } from "zustand";
import { PermissionState, PermissionSlice } from "../types";
import { menus } from "@/common/menus";
const initialState: PermissionState = {
  clientMenus: [],
  serverMenus: [],
};

export const createPermissionSlice: StateCreator<
  PermissionSlice,
  [],
  [],
  PermissionSlice
> = (set, get) => ({
  ...initialState,
  async setServerMenus() {
    setTimeout(() => {
      set(() => ({ serverMenus: menus }));
    }, 100);
  },
});
