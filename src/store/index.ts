import create from "zustand";
import { createAppSlice, createTabSlice } from "./slices";
import type { RootState } from "./types";

// import { createJSONStorage, PersistOptions } from "zustand/middleware";
// import { devtools, persist } from "zustand/middleware";
// import { createSelectors } from "./selectors";
// const persistOptions: PersistOptions<RootState> = {
//   storage: createJSONStorage(() => sessionStorage),
//   name: "rootStore",
// };

export const useStore = create<RootState>()((...args) => ({
  ...createAppSlice(...args),
}));
