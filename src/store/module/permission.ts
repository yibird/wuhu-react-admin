import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors } from '../utils';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';
import { mapMenusToRoutes } from '@/router/help';
import type { IRoute } from '@/router';
import type { IMenuItem } from '@/common/menus';
import { tabStore } from './tab';

import { defaultRoutes } from '@/router/routes';

// const tabStore = useTabStore();

export interface PermissionState {
  // 客户端菜单列表
  clientMenus: IMenuItem[];
  // 服务端菜单列表
  serverMenus: IMenuItem[];
  // 扁平化菜单项
  flatMenus: IMenuItem[];
  // setServerMenus
  setServerMenus: (menus: IMenuItem[]) => void;
  // 路由
  routes: IRoute[];
}

const storeCreator: StateCreator<PermissionState> = (set, get) => ({
  clientMenus: [],
  serverMenus: [],
  flatMenus: [],
  routes: [],
  async setServerMenus(menus) {
    const flatMenus = toList(menus);
    const routes = [...toList(defaultRoutes), ...mapMenusToRoutes(flatMenus)];
    set({
      serverMenus: menus,
      flatMenus,
      routes,
    });

    const homeMenu = flatMenus.find((item) => item.home);
    if (homeMenu) {
      tabStore.setState((state) => {
        const items = state.items.length ? state.items : [homeMenu];
        return { ...state, items };
      });
    }
  },
});

const permissionStore = createStore<PermissionState>()(
  persist(storeCreator, { name: 'permission' }),
);
export const usePermissionStore = createBoundedUseStore(permissionStore);
export const usePermissionStoreSelector = createSelectors(permissionStore);
