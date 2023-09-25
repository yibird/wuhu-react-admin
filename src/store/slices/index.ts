export { createAppSlice } from "./app";
export { createTabSlice } from "./tab";
export { createUserSlice } from "./user";
export { createPermissionSlice } from "./permission";
export * from './test'

import type { AppSlice } from "./app/types";
import type { PermissionSlice } from "./permission/types";
import type { TabSlice } from "./tab/types";
import type { UserSlice } from "./user/types";

export interface RootState {
  app: AppSlice;
  permission: PermissionSlice;
  tab: TabSlice;
  user: UserSlice;
}
