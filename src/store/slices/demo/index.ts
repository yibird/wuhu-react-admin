import { create } from 'zustand';
import { StateCreator, createStore } from 'zustand/vanilla'
import { createBoundedUseStore } from '../../utils'
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'

export interface DemoState {
    bears: number
    increase: (by: number) => void
}
const storeCreator: StateCreator<DemoState> = (set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
})

export const demoStore = createStore<DemoState>()(devtools(storeCreator));

export const useDemoStore = createBoundedUseStore(demoStore);
