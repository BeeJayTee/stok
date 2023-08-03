import { useState } from "react";

export const useAddStock = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const addStock = async (symbol, country) => {
    setIsLoading(true);
    const arr = localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks"))
      : [];
    arr.push({ symbol: symbol, country: country });
    localStorage.setItem("stocks", JSON.stringify(arr));

    setIsLoading(null);
  };

  return { addStock, isLoading, error };
};
