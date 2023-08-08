import { useQueries } from "react-query";
import axios from "axios";

export const useFindQuotes = async () => {
  const stocks = JSON.parse(localStorage.getItem("stocks"));
  console.log(stocks);

  const fetchQuote = async (stockSymbol, stockCountry) => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/quote",
      params: {
        symbol: stockSymbol,
        interval: "1day",
        outputsize: "30",
        format: "json",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_TWELVE_API_KEY,
        "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const results = useQueries(
    stocks.map((stock) => {
      return {
        queryKey: [stock.symbol, stock.country],
        queryFn: fetchQuote(stock.symbol, stock.country),
        staleTime: Infinity,
      };
    })
  );

  return { results };
};
