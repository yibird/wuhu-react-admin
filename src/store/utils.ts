import { useStoreWithEqualityFn } from 'zustand/traditional';
import { StoreApi, useStore } from 'zustand';
import { StateCreator, createStore } from 'zustand/vanilla';

export type ExtractState<S> = S extends { getState: () => infer X } ? X : never;
export const createBoundedUseStore = ((store) => (selector, equals) =>
  useStoreWithEqualityFn(store, selector as never, equals)) as <S extends StoreApi<unknown>>(
  store: S,
) => {
  (): ExtractState<S>;
  <T>(selector: (state: ExtractState<S>) => T, equals?: (a: T, b: T) => boolean): T;
};

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;
export const createSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};
