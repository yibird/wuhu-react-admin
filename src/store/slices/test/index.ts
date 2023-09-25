import { create, StateCreator } from 'zustand'
import type { RootSlice } from '../../type'
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { createStore } from 'zustand/vanilla'

export interface TestSlice {
    count?: number;
    addCount: (increment: number) => void;
}

export const createTestSlice: StateCreator<RootSlice, [], [], TestSlice> = (set) => ({
    count: 1,
    addCount() {
    }
})

export const demoStore = createStore<TestSlice>()(createTestSlice);
