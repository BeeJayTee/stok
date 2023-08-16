import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";
import { useGetTotal } from "../../hooks/useGetTotal";
import { useEffect, useState } from "react";
import Cash from "./Cash";

const Portfolio = () => {
  const [total, setTotal] = useState(null);
  const stocks = useStockStore((state) => state.stocks);

  const { getTotal } = useGetTotal();

  useEffect(() => {
    setTotal(getTotal().toFixed(2));
  }, [getTotal]);

  return (
    <Box>
      <Flex
        mb={4}
        direction={"column"}
        justify={"center"}
        align={"center"}
        pr={12}
      >
        <Text fontSize={"xs"} color={"gray.500"}>
          Total Value
        </Text>
        <Flex align={"center"}>
          <Text fontSize={"xl"}>$</Text>
          <Heading fontSize={"3xl"}>{total}</Heading>
        </Flex>
      </Flex>
      <Flex direction={"column"}>
        <Cash setTotal={setTotal} />
        <Box>
          {stocks.map((stock, index) => (
            <PortfolioItem key={index} stock={stock} setTotal={setTotal} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio;
