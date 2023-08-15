import {
  Flex,
  Box,
  Heading,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import { useStockStore } from "../../state/store";
import { useGetTotal } from "../../hooks/useGetTotal";
import { useEffect, useState } from "react";
import Cash from "./Cash";

const Portfolio = () => {
  const [cash, setCash] = useState(0);
  const stocks = useStockStore((state) => state.stocks);
  const { total } = useGetTotal();

  useEffect(() => {
    const localCash = localStorage.getItem("cash");
    if (!localCash) {
      localStorage.setItem("cash", 0);
      setCash(0);
    } else {
      setCash(localStorage.getItem("cash"));
    }
  }, []);

  const handleChange = (e) => {
    setCash(e);
    localStorage.setItem("cash", e);
  };

  const handleSubmit = (e) => {
    if (e.length <= 0) {
      setCash(0);
      localStorage.setItem("cash", 0);
    }
  };

  return (
    <Box>
      <Flex justify="center" columnGap={8}>
        <Flex align="center" gap={0} direction={"column"}>
          <Text>total: </Text>
          <Flex align={"center"}>
            <Text fontSize={"xl"}>$</Text>
            <Heading fontSize={"3xl"}>{total}</Heading>
          </Flex>
        </Flex>
        <Flex align="center" gap={0} direction={"column"}>
          <Text>cash: </Text>
          <Editable
            value={cash}
            onChange={handleChange}
            onSubmit={handleSubmit}
            fontSize={"3xl"}
            fontWeight={"bold"}
            color={"green.500"}
            w={32}
          >
            <EditablePreview cursor={"pointer"} />
            <EditableInput />
          </Editable>
        </Flex>
      </Flex>
      <Flex direction={"column"}>
        <Cash />
        <Box>
          {stocks.map((stock, index) => (
            <PortfolioItem key={index} stock={stock} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio;
