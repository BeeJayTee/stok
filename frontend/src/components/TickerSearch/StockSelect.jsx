/* eslint-disable react/prop-types */
import { Box, Text, Flex } from "@chakra-ui/react";

const TickerItem = ({ ticker, type, companyName, exchange, border = null }) => {
  const borderWidth = !border ? "1px" : "";

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      borderBottom={borderWidth}
      borderColor={"black"}
      py={2}
    >
      <Box cursor={"pointer"}>
        <Flex gap={2} mb={0} align={"center"}>
          <Text fontWeight={"bold"}>{ticker}</Text>
          <Text fontSize={"sm"}>{type}</Text>
        </Flex>
        <Text fontSize={"xs"} maxW={"90%"} lineHeight={"100%"}>
          {companyName}
        </Text>
      </Box>
      <Box>
        <Text fontSize={"xs"}>{exchange}</Text>
      </Box>
    </Flex>
  );
};

const StockSelect = ({ stockList }) => {
  return (
    <Box
      px={4}
      w={"fit-content"}
      border={"1px"}
      borderColor={"blackAlpha.500"}
      position={"absolute"}
      left={0}
      right={0}
      top={16}
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
        />
      ))}
    </Box>
  );
};

export default StockSelect;
