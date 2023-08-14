import { create } from "zustand";

export const useStockStore = create((set) => ({
  stocks: JSON.parse(localStorage.getItem("stocks")) || [],
  updateStocks: () =>
    set(() => ({ stocks: JSON.parse(localStorage.getItem("stocks")) })),
  deleteStock: (symbol) => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const index = stocks.findIndex((stock) => stock.symbol === symbol);
    if (index >= 0) {
      stocks.splice(index, 1);
      localStorage.setItem("stocks", JSON.stringify(stocks));
      set(() => ({ stocks: JSON.parse(localStorage.getItem("stocks")) }));
    }
  },
  total: 0,
  updateTotal: (amount) => {
    set((state) => ({ total: (state.total = amount) }));
  },
}));
