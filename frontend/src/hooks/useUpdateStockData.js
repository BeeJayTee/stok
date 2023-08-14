export const useUpdateStockData = () => {
  const updateShares = (symbol, shares) => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    stocks.forEach((stock) => {
      if (stock.symbol === symbol) {
        stock.shares = shares;
      }
    });
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };
  const updatePrice = (symbol, price) => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    stocks.forEach((stock) => {
      if (stock.symbol === symbol) {
        stock.price = price;
      }
    });
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };

  const updatePercent = (symbol, percent) => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    stocks.forEach((stock) => {
      if (stock.symbol === symbol) {
        stock.percent = percent;
      }
    });
    localStorage.setItem("stocks", JSON.stringify(stocks));
  };

  return { updateShares, updatePrice, updatePercent };
};
