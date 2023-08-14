/* eslint-disable react/prop-types */
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import ModalAddStock from "./ModalAddStock";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const borderWidth = !border ? "1px" : "";

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box>
      <ModalAddStock
        isOpen={isOpen}
        onClose={onClose}
        setStock={setStock}
        setStockList={setStockList}
        ticker={ticker}
        country={country}
      />
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
    </Box>
  );
};

export default TickerItem;
