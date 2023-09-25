import { StateCreator, createStore } from 'zustand/vanilla'
import type { IMenuItem } from "@/common/menus";
import { persist } from 'zustand/middleware';
import { createBoundedUseStore } from '../utils';

export interface TabState {
    // 选项卡列表
    list: IMenuItem[];
    // 当前选中tab index
    current: number;
}

const storeCreator: StateCreator<TabState> = (set) => ({
    list: [],
    current: -1
})
const tabStore = createStore<TabState>()(persist(storeCreator, { name: 'tab' }));
export const useTabStore = createBoundedUseStore(tabStore);
