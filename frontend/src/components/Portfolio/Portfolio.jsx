import { Box } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";

const Portfolio = () => {
  const stocks = useStockStore((state) => state.stocks);
  // const deleteStock = useStockStore((state) => state.deleteStock);

  // deleteStock("SPY");

  // const stocks = JSON.parse(localStorage.getItem("stocks"));

  return (
    <Box>
      {stocks.map((stock, index) => (
        <PortfolioItem key={index} stock={stock} />
      ))}
    </Box>
  );
};

export default Portfolio;
