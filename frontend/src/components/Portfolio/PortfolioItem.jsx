/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

const PortfolioItem = ({ stock }) => {
  return <Box>{stock.symbol}</Box>;
};

export default PortfolioItem;
