/* eslint-disable react/no-children-prop */
import { Box, InputGroup, Input, InputLeftAddon } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const AddStocks = ({ stock, setStock }) => {
  return (
    <Box>
      <InputGroup size={["md", "md", "md", "lg"]}>
        <InputLeftAddon children="$" color="black" />
        <Input
          placeholder={"enter a ticker"}
          value={stock}
          onChange={(e) => setStock(e.target.value.toUpperCase())}
          color="black"
          focusBorderColor="black"
        />
      </InputGroup>
    </Box>
  );
};

export default AddStocks;
