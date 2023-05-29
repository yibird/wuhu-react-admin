import { StateCreator, create } from "zustand";
import type { UserSlice } from "./types";
import { initialState } from "./initialState";
import { persist } from "zustand/middleware";
import {
  createSelectorHooks,
  ZustandHookSelectors,
} from "auto-zustand-selectors-hook";

function createUserStore(): StateCreator<UserSlice> {
  return (set, get) => ({
    ...initialState,
    setState(newState) {
      set((state) => ({ ...state, ...newState }));
    },
  });
}

export const useUserStore = create(
  persist(createUserStore(), { name: "user" })
);

export const useUserStoreSelector = createSelectorHooks(
  useUserStore
) as typeof useUserStore & ZustandHookSelectors<UserSlice>;
