import { useStoreWithEqualityFn } from 'zustand/traditional';
import { StoreApi, useStore } from 'zustand';
import { useRef } from 'react';
import { pick } from 'lodash-es';
import { shallow } from 'zustand/shallow';

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

type Many<T> = T | readonly T[];
/**
 * zustand Store Selector(选择器),避免读取Store中的状态时发生不必要的更新。
 * 泛型S类型为Store State,泛型P类型为Store State所有属性的联合类型。
 * @param attrs 需要读取Store State的属性数组
 * @returns 返回读取Store State属性数组的结果值
 */
export function useSelector<S extends object, P extends keyof S>(attrs: Many<P>) {
  const prev = useRef<Pick<S, P>>({} as Pick<S, P>);
  return (state: S) => {
    if (state) {
      const next = pick(state, attrs);
      return shallow(prev.current, next) ? prev.current : next;
    }
    return prev.current;
  };
}
