import { Flex } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";
import { useState } from "react";

const Portfolio = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [cash, setCash] = useState(0);

  const stocks = useStockStore((state) => state.stocks);

  return (
    <Flex direction={"column"} rowGap={2}>
      {stocks.map((stock, index) => (
        <PortfolioItem key={index} stock={stock} />
      ))}
    </Flex>
  );
};

export default Portfolio;
