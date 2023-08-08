/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@chakra-ui/react";
import { useAddStock } from "../../hooks/useAddStock";

const TickerItem = ({
  ticker,
  type,
  companyName,
  exchange,
  border = null,
  country,
  setStockList,
  setStock,
}) => {
  const { addStock } = useAddStock();

  const borderWidth = !border ? "1px" : "";

  const handleClick = async (ticker, country) => {
    const result = await addStock(ticker, country.toLowerCase());
    if (result.result === "ok") {
      setStockList([]);
      setStock("");
    } else {
      console.log("stock already in portfolio");
    }
  };

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      borderBottom={borderWidth}
      borderColor={"black"}
      py={2}
    >
      <Box cursor={"pointer"} onClick={() => handleClick(ticker, country)}>
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

export default TickerItem;
