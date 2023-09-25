import type { AppSlice } from "./slices/app/types";
import type { PermissionSlice } from "./slices/permission/types";
import type { TabSlice } from "./slices/tab/types";
import type { UserSlice } from "./slices/user/types";

import type { TestSlice } from './slices/test'

export type RootSlice = TestSlice;

export interface RootState {
  app: AppSlice;
  permission: PermissionSlice;
  tab: TabSlice;
  user: UserSlice;
}
