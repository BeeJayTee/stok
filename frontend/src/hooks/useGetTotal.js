export const useGetTotal = () => {
  const getTotal = () => {
    const stocks = JSON.parse(localStorage.getItem("stocks"));
    const total = stocks.reduce((a, b) => {
      return a.price * a.shares + b.price * b.shares;
    }, 0);
    return total;
  };

  const total = getTotal();

  return { total };
};
