/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import TickerItem from "./TickerItem";

const StockSelect = ({ stockList, setStockList, setStock }) => {
  return (
    <Box
      px={4}
      w={"fit-content"}
      border={"1px"}
      borderColor={"blackAlpha.500"}
      position={"absolute"}
      left={0}
      right={0}
      top={[16]}
      m={"auto"}
      bg={"white"}
      zIndex={"10"}
      boxShadow={"md"}
      display={stockList.length > 0 ? "inherit" : "none"}
    >
      {stockList.map((item, i) => (
        <TickerItem
          key={i}
          ticker={item.symbol}
          type={item.instrument_type}
          companyName={item.instrument_name}
          exchange={item.exchange}
          border={i === stockList.length - 1 ? true : null}
          country={item.country}
          setStockList={setStockList}
          setStock={setStock}
        />
      ))}
    </Box>
  );
};

export default StockSelect;
