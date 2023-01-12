import { StateCreator } from "zustand";
import { TabSlice, TabState } from "../types";

const initialState: TabState = {
  tabList: [
    { id: 1, title: "tab 1" },
    { id: 2, title: "tab 2" },
    { id: 3, title: "tab 3" },
  ],
  currentTab: { id: 1, title: "tab 1" },
};

export const createTabSlice: StateCreator<TabSlice, [], [], TabSlice> = (
  set,
  get
) => ({
  ...initialState,
});
