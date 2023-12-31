import { useState } from "react";
import { useStockStore } from "../state/store";

export const useAddStock = () => {
  const [isLoading, setIsLoading] = useState(null);
  const updateStocks = useStockStore((state) => state.updateStocks);

  const addStock = async (symbol, country, shares, percent) => {
    setIsLoading(true);
    const arr = localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks"))
      : [];
    if (
      arr.find((item) => item.symbol === symbol && item.country === country)
    ) {
      setIsLoading(null);
      return { result: "fail" };
    } else {
      arr.push({
        symbol: symbol,
        country: country,
        shares: shares,
        percent: percent,
        price: 0,
      });
      localStorage.setItem("stocks", JSON.stringify(arr));
      updateStocks();

      setIsLoading(null);

      return { result: "ok" };
    }
  };

  return { addStock, isLoading };
};
