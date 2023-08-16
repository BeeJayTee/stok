export const useGetTotal = () => {
  const getTotal = () => {
    const cash = localStorage.getItem("cash");
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const total = stocks.reduce((a, b) => {
      return a + b.shares * b.price;
    }, 0);
    return total + parseInt(cash);
  };
  const getStockTotal = () => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const total = stocks.reduce((a, b) => {
      return a + b.shares * b.price;
    }, 0);
    return total;
  };
  const getPercentTotal = () => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const total = stocks.reduce((a, b) => {
      return a + parseInt(b.percent);
    }, 0);
    return total;
  };

  return { getTotal, getStockTotal, getPercentTotal };
};
