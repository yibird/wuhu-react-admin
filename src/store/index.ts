export * from './module/app'
export * from './module/permission';
export * from './module/tab'


import type { RootSlice } from './type';
import { create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import {
  createAppSlice,
  createUserSlice,
  createPermissionSlice,
  createTabSlice,
  createTestSlice
} from "./slices";
import type { RootState } from "./slices";

export const useStore = create<RootState>()((...args) => ({
  app: createAppSlice(...args),
  user: createUserSlice(...args),
  permission: createPermissionSlice(...args),
  tab: createTabSlice(...args),
}));

export const useStoreSelector = createSelectorHooks(useStore);


export const useBoundStore = create<RootSlice>()((...args) => ({
  ...createTestSlice(...args)
}))



