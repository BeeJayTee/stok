import { useState } from "react";

export const useAddStock = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const addStock = async (symbol, country) => {
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
      arr.push({ symbol: symbol, country: country });
      localStorage.setItem("stocks", JSON.stringify(arr));

      setIsLoading(null);
      return { result: "ok" };
    }
  };

  return { addStock, isLoading, error };
};
