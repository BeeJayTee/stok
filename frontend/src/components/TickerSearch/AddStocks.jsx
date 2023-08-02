/* eslint-disable react/no-children-prop */
import { Box, InputGroup, Input, InputLeftAddon, Flex } from "@chakra-ui/react";
import { useStockCountStore } from "../../state/state";

// eslint-disable-next-line react/prop-types
const AddStocks = ({ stock, setStock }) => {
  const stockCount = useStockCountStore((state) => state.stockCount);

  let placeholder;

  if (stockCount) {
    placeholder = "enter another stock symbol";
  } else {
    placeholder = "add a stock to get started";
  }

  return (
    <Box>
      <InputGroup size={["md", "md", "md", "lg"]}>
        <InputLeftAddon children="$" />
        <Input
          placeholder={placeholder}
          value={stock}
          onChange={(e) => setStock(e.target.value.toUpperCase())}
        />
      </InputGroup>
    </Box>
  );
};

export default AddStocks;
