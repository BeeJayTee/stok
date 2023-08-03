/* eslint-disable react/prop-types */
import { Box, Text, Flex } from "@chakra-ui/react";

const TickerItem = ({ ticker, type, companyName, exchange, border = null }) => {
  const borderWidth = !border ? "1px" : "";

  return (
    <Flex
      gap={12}
      align={"center"}
      borderBottom={borderWidth}
      borderColor={"black"}
      py={4}
    >
      <Box cursor={"pointer"}>
        <Flex gap={2} mb={0} align={"center"}>
          <Text fontWeight={"bold"}>{ticker}</Text>
          <Text fontSize={"sm"}>{type}</Text>
        </Flex>
        <Text fontSize={"sm"}>{companyName}</Text>
      </Box>
      <Box>
        <Text fontSize={"xs"}>{exchange}</Text>
      </Box>
    </Flex>
  );
};

const StockSelect = () => {
  return (
    <Box
      px={4}
      py={4}
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
    >
      <TickerItem
        ticker={"aapl"}
        type={"equity"}
        companyName={"Apple Inc."}
        exchange={"NASDAQ"}
      />
      <TickerItem
        ticker={"aapl"}
        type={"equity"}
        companyName={"Apple Inc."}
        exchange={"NASDAQ"}
      />
    </Box>
  );
};

export default StockSelect;
