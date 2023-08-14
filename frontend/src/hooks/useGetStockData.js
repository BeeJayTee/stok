export const useGetStockData = () => {
  const getStockData = (symbol) => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const stock = stocks.find((stock) => {
      return stock.symbol === symbol;
    });
    return stock;
  };
  return { getStockData };
};
