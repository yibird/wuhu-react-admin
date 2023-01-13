import { StateCreator } from "zustand";
import { UserState, UserSlice } from "../types";

const initialState: UserState = {
  userInfo: null,
  roleList: [],
  lastUpdateTime: 0,
};

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set,
  get
) => ({
  ...initialState,
});
