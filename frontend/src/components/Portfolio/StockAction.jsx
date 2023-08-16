/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";

const StockAction = ({ bookValue, desiredValue }) => {
  if (parseInt(bookValue) > parseInt(desiredValue)) {
    return (
      <Flex justify={"center"} align={"center"} gap={1}>
        <Text fontSize={"xs"} color={"red.500"}>
          sell
        </Text>
        <Text>${(bookValue - desiredValue).toFixed(2)}</Text>
      </Flex>
    );
  } else if (parseInt(bookValue) < parseInt(desiredValue)) {
    return (
      <Flex justify={"center"} align={"center"} gap={1}>
        <Text fontSize={"xs"} color={"green.500"}>
          buy
        </Text>
        <Text>${(desiredValue - bookValue).toFixed(2)}</Text>
      </Flex>
    );
  }
};

export default StockAction;
