import { StateCreator, createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { createBoundedUseStore, createSelectors, createStorage } from '../util';
import { menus } from '@/common/menus';
import { toList } from '@/utils/tree';
import { tabStore } from './tab';
import { toMap } from '@/utils/collection';
import { IMenu } from '#/config';

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
    const flatMenus = toList(menus);
    const menuMap = toMap(
      flatMenus,
      (item) => item.id,
      (item) => item,
    );
    get().setState((prev) => ({ ...prev, serverMenus: menus, flatMenus, menuMap }));

    const menu = flatMenus.find((item) => item.home);
    if (menu) {
      tabStore.setState((state) => {
        const tabList = [menu];
        const tabMap = toMap(
          tabList,
          (item) => item.id,
          (_, index) => index,
        );
        return { ...state, tabList, tabMap };
      });
    }
  },
});

const permissionStore = createStore<PermissionState>()(
  persist(storeCreator, { name: 'permission', storage: createStorage<PermissionState>() }),
);
export const usePermissionStore = createBoundedUseStore(permissionStore);
export const usePermissionStoreSelector = createSelectors(permissionStore);
