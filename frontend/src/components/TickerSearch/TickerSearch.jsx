import { Box, Flex } from "@chakra-ui/react";
import AddStocks from "./AddStocks";
import { useState } from "react";
import Submit from "./Submit";
import { useStockSearch } from "../../hooks/useStockSearch";
import StockSelect from "./StockSelect";

const TickerSearch = () => {
  const [stock, setStock] = useState("");

  const { stockSearch } = useStockSearch();

  const handleSubmit = () => {
    stockSearch(stock);
  };

  return (
    <Box position={"relative"}>
      <Box w={"fit-content"} mx={"auto"}>
        <Flex
          direction={["column", "row"]}
          gap={2}
          justify={"center"}
          align={"center"}
        >
          <AddStocks stock={stock} setStock={setStock} />
          <Submit handleSubmit={handleSubmit} />
        </Flex>
      </Box>
      <StockSelect />
    </Box>
  );
};

export default TickerSearch;
