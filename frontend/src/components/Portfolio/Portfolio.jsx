import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";

const Portfolio = () => {
  const stocks = useStockStore((state) => state.stocks);
  const total = useStockStore((state) => state.total);

  return (
    <Box>
      <Flex justify="center" columnGap={8}>
        <Flex align="center" gap={2}>
          <Text>total: </Text>
          <Heading>{total}</Heading>
        </Flex>
        <Flex align="center" gap={2}>
          <Text>cash: </Text>
          <Heading>{total}</Heading>
        </Flex>
      </Flex>
      <Flex direction={"column"} rowGap={2}>
        {stocks.map((stock, index) => (
          <PortfolioItem key={index} stock={stock} />
        ))}
      </Flex>
    </Box>
  );
};

export default Portfolio;
