import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors, storage } from '../util';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';
import { IMenu } from '#/config';
import { toMap } from '@/utils/collection';

interface State {
  // 客户端菜单列表
  clientMenus: IMenu[];
  // 服务端菜单列表
  serverMenus: IMenu[];
  // 扁平化菜单列表
  flatMenus: IMenu[];
  // 扁平化菜单列表缓存
  flatMenusCache: Map<number | string, IMenu>;
  // 当前激活的菜单项下标,-1表示首页
  current: number;
  // 首页菜单
  homeMenu: IMenu | null;
  // 已打开的菜单
  openMenus: IMenu[];
  // 已打开的菜单缓存,用于优化查找
  openMenusCache: Map<number | string, IMenu>;
}

interface Action {
  setState: (setter: (prevState: State) => State) => void;
  getServerMenus: () => void;
}

export type PermissionState = State & Action;

const initialState: State = {
  clientMenus: [],
  serverMenus: [],
  flatMenus: [],
  flatMenusCache: new Map<string, IMenu>(),
  current: -1,
  homeMenu: null,
  openMenus: [],
  openMenusCache: new Map<string, IMenu>(),
};

const storeCreator: StateCreator<PermissionState> = (set, get) => ({
  ...initialState,
  setState(setter) {
    set({ ...get(), ...setter({ ...get() }) });
  },
  async getServerMenus() {
    const flatMenus = toList(menus);
    if (flatMenus.length === 0) {
      return;
    }
    const flatMenusCache = toMap(
      flatMenus,
      (item) => item.id.toString(),
      (item) => item,
    );
    const homeMenu = flatMenus.find((item) => item.home) ?? flatMenus[0];
    const openMenusCache = get().openMenusCache.set(homeMenu.id.toString(), homeMenu);
    set({
      ...get(),
      serverMenus: menus,
      flatMenus,
      flatMenusCache,
      openMenusCache,
      homeMenu,
    });
  },
});

const permissionStore = createStore<PermissionState>()(
  persist(storeCreator, { name: 'permission', storage }),
);
export const usePermissionStore = createBoundedUseStore(permissionStore);
export const usePermissionStoreSelector = createSelectors(permissionStore);
