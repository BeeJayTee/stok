export const useStockSearch = () => {
  const stockSearch = async (symbol) => {
    const url = `https://twelve-data1.p.rapidapi.com/symbol_search?symbol=${symbol}&outputsize=30&format=json`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_TWELVE_API_KEY,
        "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const dataArr = result.data;
      const finalArr = dataArr.filter((item) => {
        return (
          item.country.toLowerCase() === "united states" ||
          item.country.toLowerCase() === "canada"
        );
      });
      const stockList = finalArr.slice(0, 5);
      return stockList;
    } catch (error) {
      console.error(error);
    }
  };

  return { stockSearch };
};
