import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors } from '../utils';

import type { IMenuItem } from '@/common/menus';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';

export interface PermissionState {
  // 客户端菜单列表
  clientMenus: IMenuItem[];
  // 服务端菜单列表
  serverMenus: IMenuItem[];
  // 扁平化菜单项
  flatMenus: IMenuItem[];
  // setServerMenus
  setServerMenus: () => void;
}

const storeCreator: StateCreator<PermissionState> = (set) => ({
  clientMenus: [],
  serverMenus: menus,
  flatMenus: toList(menus),
  setServerMenus() {},
});

const permissionStore = createStore<PermissionState>()(
  persist(storeCreator, { name: 'permission' }),
);
export const usePermissionStore = createBoundedUseStore(permissionStore);
export const usePermissionStoreSelector = createSelectors(permissionStore);
