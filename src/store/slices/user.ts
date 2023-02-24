import { StateCreator } from "zustand";
export interface UserState {
  userInfo: Nullable<object>;
  token?: string;
  roleList: any[];
  lastUpdateTime: number;
}
export interface UserAction {}
export type UserSlice = UserState & UserAction;

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
