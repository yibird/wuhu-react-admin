import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors, storage } from '../util';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';
import { tabStore } from './tab';
import { toMap } from '@/utils/collection';
import { IMenu } from '#/config';
import { IRoute } from '@/router';

interface State {
  // 客户端菜单列表
  clientMenus: IMenu[];
  // 服务端菜单列表
  serverMenus: IMenu[];
  // 扁平化菜单项
  flatMenus: IMenu[];
  // 菜单map,用于提升查找性能,key为菜单id,value为菜单项
  menuMap: Map<number, IMenu>;
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
  menuMap: new Map<number, IMenu>(),
};

const storeCreator: StateCreator<PermissionState> = (set, get) => ({
  ...initialState,
  setState(setter) {
    set({ ...get(), ...setter({ ...get() }) });
  },
  async getServerMenus() {
    if (!menus) {
      return;
    }
    // 扁平化menus
    const flatMenus = toList(menus);
    // 构建菜单缓存,用于提升查找性能
    const menuMap = toMap(
      flatMenus,
      (item) => item.id,
      (item) => item,
    );
    set({
      ...get(),
      serverMenus: menus,
      flatMenus,
      menuMap,
    });
    const menu = flatMenus.find((item) => item.home) || flatMenus[0];
    tabStore.getState().setHomeMenu(menu);
  },
});

const permissionStore = createStore<PermissionState>()(
  persist(storeCreator, { name: 'permission', storage }),
);
export const usePermissionStore = createBoundedUseStore(permissionStore);
export const usePermissionStoreSelector = createSelectors(permissionStore);
