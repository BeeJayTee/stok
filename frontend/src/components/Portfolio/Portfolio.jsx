import { Flex, Box, Heading, Text, Tooltip } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";
import { useGetTotal } from "../../hooks/useGetTotal";
import { useEffect, useState } from "react";
import Cash from "./Cash";

const Portfolio = () => {
  const [total, setTotal] = useState(null);
  const [percentFull, setPercentFull] = useState(true);
  const [percentMessage, setPercentMessage] = useState("");
  const stocks = useStockStore((state) => state.stocks);

  const { getTotal, getPercentTotal } = useGetTotal();

  useEffect(() => {
    setTotal(getTotal().toFixed(2));
    const totalPercent = getPercentTotal();
    if (totalPercent < 100) {
      setPercentFull(false);
      setPercentMessage("Your percent allocation is below 100!");
    } else if (totalPercent > 100) {
      setPercentFull(false);
      setPercentMessage("Your percent allocation is above 100!");
    } else {
      setPercentFull(true);
      setPercentMessage("");
    }
  }, [getTotal, getPercentTotal]);

  return (
    <Box mt={[4, 4, 4, 4, 0]}>
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
          {!percentFull && (
            <Box>
              <Tooltip
                label={percentMessage}
                aria-label="click to edit"
                background={"red.900"}
              >
                <InfoIcon color={"red.200"} />
              </Tooltip>
            </Box>
          )}
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
