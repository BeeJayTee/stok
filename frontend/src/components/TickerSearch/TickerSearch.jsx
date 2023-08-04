import { Box, Flex } from "@chakra-ui/react";
import AddStocks from "./AddStocks";
import { useState } from "react";
import Submit from "./Submit";
import { useStockSearch } from "../../hooks/useStockSearch";
import StockSelect from "./StockSelect";

const TickerSearch = () => {
  const [stock, setStock] = useState("");
  const [stockList, setStockList] = useState([]);

  const { stockSearch } = useStockSearch();

  const handleSubmit = async () => {
    const stocks = await stockSearch(stock);
    setStockList(stocks);
  };

  const handleChange = () => {
    console.log("handle change");
    setStockList([]);
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
          <AddStocks
            stock={stock}
            setStock={setStock}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Submit handleSubmit={handleSubmit} stock={stock} />
        </Flex>
      </Box>
      <StockSelect stockList={stockList} />
    </Box>
  );
};

export default TickerSearch;
