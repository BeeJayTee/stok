/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { Box, InputGroup, Input, InputLeftAddon } from "@chakra-ui/react";

const AddStocks = ({ stock, setStock, handleChange, handleSubmit }) => {
  const handleLocalChange = (e) => {
    setStock(e.target.value.toUpperCase());
    handleChange();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box>
      <InputGroup size={["md", "md", "md", "lg"]}>
        <InputLeftAddon children="$" color="black" />
        <Input
          placeholder={"enter a ticker"}
          value={stock}
          onChange={(e) => handleLocalChange(e)}
          color="black"
          focusBorderColor="black"
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
    </Box>
  );
};

export default AddStocks;
