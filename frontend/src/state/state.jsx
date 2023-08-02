import { create } from "zustand";

export const useStockCountStore = create((set) => ({
  stockCount: 0,
  increaseStockCount: () =>
    set((state) => ({ stockCount: state.stockCount + 1 })),
  decreaseStockCount: () =>
    set((state) => ({ stockCount: state.stockCount - 1 })),
  removeAllStocks: () => set({ bears: 0 }),
}));
