import create from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import {
  createAppSlice,
  createUserSlice,
  createPermissionSlice,
  createTabSlice,
} from "./slices";
import type { RootState } from "./slices";

// import { createJSONStorage, PersistOptions } from "zustand/middleware";
// import { devtools, persist } from "zustand/middleware";
// import { createSelectors } from "./selectors";
// const persistOptions: PersistOptions<RootState> = {
//   storage: createJSONStorage(() => sessionStorage),
//   name: "rootStore",
// };

export const useStore = create<RootState>()((...args) => ({
  app: createAppSlice(...args),
  user: createUserSlice(...args),
  permission: createPermissionSlice(...args),
  tab: createTabSlice(...args),
}));

export const useStoreSelector = createSelectorHooks(useStore);

// export const useAppStoreSelector = createSelectorHooks(useStore);

// export const useStore = create<RootState>()((...args) => ({
//   ...createAppSlice(...args),
//   ...createPermissionSlice(...args),
//   ...createTabSlice(...args),
// }));
