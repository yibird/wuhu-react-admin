export { createAppSlice } from "./app";
export { createTabSlice } from "./tab";
export { createUserSlice } from "./user";
export { createPermissionSlice } from "./permission";

import type { AppSlice, AppState, AppAction } from "./app";
import type {
  PermissionSlice,
  PermissionState,
  PermissionAction,
} from "./permission";
import type { UserSlice, UserState, UserAction } from "./user";
import type { TabSlice, TabState, TabAction } from "./tab";

export type RootState = AppSlice & PermissionSlice & TabSlice;
export type {
  AppSlice,
  AppState,
  AppAction,
  PermissionSlice,
  PermissionState,
  PermissionAction,
  UserSlice,
  UserState,
  UserAction,
  TabSlice,
  TabState,
  TabAction,
};
