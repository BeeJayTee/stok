/* eslint-disable react/prop-types */
import { useQuery } from "react-query";
import {
  Flex,
  Text,
  Box,
  VStack,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useStockStore } from "../../state/store";
import { useGetStockData } from "../../hooks/useGetStockData";
import { useEffect, useState } from "react";
import StockModal from "./StockModal";
import StockAction from "./StockAction";
import { useUpdateStockData } from "../../hooks/useUpdateStockData";
import { useGetTotal } from "../../hooks/useGetTotal";

const PortfolioItem = ({ stock, setTotal }) => {
  const ticker =
    stock.country === "canada" ? stock.symbol + ".TO" : stock.symbol;

  const fetchData = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${
        import.meta.VITE_ALPHA_API_KEY
      }`
    );
    const json = await response.json();
    console.log(json);
    let price = parseFloat(json["Global Quote"]["05. price"]).toFixed(2);
    return price;
  };

  const { data } = useQuery({
    queryKey: [stock.symbol],
    // queryFn: fetchData,
    queryFn: () => 24.45,
    staleTime: 10000,
    cacheTime: 15000,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getStockData } = useGetStockData();

  const [desiredPercent, setDesiredPercent] = useState(null);
  const [currentPercent, setCurrentPercent] = useState(null);
  const [numberOfShares, setNumberOfShares] = useState(null);
  const [bookValue, setBookValue] = useState(null);
  const [desiredValue, setDesiredValue] = useState(null);

  const deleteStock = useStockStore((state) => state.deleteStock);
  const { updatePrice } = useUpdateStockData();
  const { getStockTotal } = useGetTotal();

  useEffect(() => {
    setBookValue((numberOfShares * data).toFixed(2));
    updatePrice(stock.symbol, data);
    const stockData = getStockData(stock.symbol);
    setDesiredPercent(stockData.percent);
    setNumberOfShares(stockData.shares);

    // calculate current percent of portfolio
    const percent = bookValue / getStockTotal();
    setCurrentPercent((percent * 100).toFixed(2));

    // calculate desired total value
    const desired = (getStockTotal() * (desiredPercent / 100)).toFixed(2);
    setDesiredValue(desired);
  }, [
    numberOfShares,
    data,
    stock.symbol,
    updatePrice,
    getStockData,
    desiredPercent,
    getStockTotal,
    bookValue,
  ]);

  const handleDelete = () => {
    deleteStock(stock.symbol);
  };

  const handleClick = () => {
    onOpen();
  };

  return (
    <Flex px={4} my={4} columnGap={2} align={"center"}>
      <StockModal
        isOpen={isOpen}
        onClose={onClose}
        desiredPercent={desiredPercent}
        setDesiredPercent={setDesiredPercent}
        stockSymbol={stock.symbol}
        numberOfShares={numberOfShares}
        setNumberOfShares={setNumberOfShares}
        setTotal={setTotal}
      />
      <Tooltip label="click to edit" aria-label="click to edit">
        <Flex
          bg={"gray.100"}
          w={"300px"}
          justify={"space-between"}
          cursor={"pointer"}
          onClick={handleClick}
          py={2}
          px={3}
          borderRadius={"md"}
        >
          <Flex direction={"column"} justify={"center"}>
            <Flex align={"center"} columnGap={2}>
              <Text fontWeight={"bold"}>{stock.symbol}</Text>
              <Box fontSize={"xs"}>
                <Text>${data}</Text>
              </Box>
            </Flex>
            <Text fontWeight={"thin"} fontSize={"sm"}>
              {numberOfShares} shares
            </Text>
            <Text fontWeight={"medium"} fontSize={"sm"}>
              ${bookValue}
            </Text>
          </Flex>
          <Flex direction={"column"}>
            {/* current % */}
            <Flex gap={2}>
              <Text color={"gray.500"} fontSize={"xs"}>
                current %
              </Text>
              <Text fontWeight={"bold"} fontSize={"xs"}>
                {currentPercent}%
              </Text>
            </Flex>
            {/* desired % */}
            <Flex gap={2}>
              <Text color={"gray.500"} fontSize={"xs"}>
                desired %
              </Text>
              <Text fontWeight={"bold"} fontSize={"xs"}>
                {desiredPercent}%
              </Text>
            </Flex>
            {/* desired $ */}
            <Flex gap={2}>
              <Text color={"gray.500"} fontSize={"xs"}>
                desired $
              </Text>
              <Text fontWeight={"bold"} fontSize={"xs"}>
                ${desiredValue}
              </Text>
            </Flex>
            <StockAction bookValue={bookValue} desiredValue={desiredValue} />
          </Flex>
        </Flex>
      </Tooltip>
      <Box
        size={"xs"}
        variant={"unstyled"}
        onClick={handleDelete}
        cursor={"pointer"}
        color={"gray.600"}
        _hover={{ color: "red.600" }}
      >
        <VStack spacing={0}>
          <Text fontSize={"10px"}>Delete</Text>
          <CloseIcon boxSize={2} />
        </VStack>
      </Box>
    </Flex>
  );
};

export default PortfolioItem;
