export const useCash = () => {
  const updateCash = (cash) => {
    localStorage.setItem("cash", cash);
  };
  const getCash = () => {
    return localStorage.getItem("cash");
  };
  return { updateCash, getCash };
};
