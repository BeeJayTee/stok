export const useCash = () => {
  const updateCash = (cash) => {
    localStorage.setItem("cash", cash);
  };
  const getCash = () => {
    if (!localStorage.getItem("cash")) {
      localStorage.setItem("cash", 0);
    }
    return localStorage.getItem("cash");
  };
  return { updateCash, getCash };
};
