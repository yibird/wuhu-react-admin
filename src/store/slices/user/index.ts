import { StateCreator } from "zustand";
import type { RootState } from "@/store/type";
import { initialState } from "./initialState";

export const createUserSlice: StateCreator<
  RootState,
  [],
  [],
  RootState["user"]
> = (set, get) => ({
  ...initialState,
});
