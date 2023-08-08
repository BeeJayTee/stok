import { Box, Flex } from "@chakra-ui/react";
import AddStocks from "./AddStocks";
import { useState } from "react";
import Submit from "./Submit";
import { useStockSearch } from "../../hooks/useStockSearch";
import StockSelect from "./StockSelect";
import Close from "./Close";

const TickerSearch = () => {
  const [stock, setStock] = useState("");
  const [stockList, setStockList] = useState([]);

  const { stockSearch } = useStockSearch();

  const handleSubmit = async () => {
    const stocks = await stockSearch(stock);
    setStockList(stocks);
  };

  const handleChange = () => {
    setStockList([]);
  };

  return (
    <Box position={"relative"}>
      <Box w={"fit-content"}>
        <Flex
          direction={[stockList.length === 0 ? "column" : "row", "row"]}
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
          {stockList.length === 0 ? (
            <Submit handleSubmit={handleSubmit} stock={stock} />
          ) : (
            <Close setStock={setStock} setStockList={setStockList} />
          )}
        </Flex>
      </Box>
      <StockSelect
        stockList={stockList}
        setStockList={setStockList}
        setStock={setStock}
      />
    </Box>
  );
};

export default TickerSearch;
