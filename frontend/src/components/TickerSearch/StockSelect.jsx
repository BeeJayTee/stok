/* eslint-disable react/prop-types */
import { Box, List, ListItem } from "@chakra-ui/react";

const StockSelect = ({ data, stock, country }) => {
  const stockList = data.data.data;

  let filteredList;

  if (stock.length > 0 && country.length > 0) {
    filteredList = stockList
      .filter((item) => {
        return (
          item.symbol.startsWith(stock) &&
          item.country.toLowerCase() === country
        );
      })
      .sort()
      .slice(0, 5);
  }

  return (
    <Box ml={12} mt={2}>
      {filteredList && (
        <List>
          {filteredList.map((item, i) => (
            <ListItem
              key={i}
              color={"gray.500"}
              _hover={{
                color: "black",
                cursor: "pointer",
              }}
            >
              {item.symbol}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default StockSelect;
