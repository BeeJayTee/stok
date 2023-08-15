import { Box, Flex, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import CashModal from "./CashModal";

const Cash = () => {
  const [cash, setCash] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <Box>
      <CashModal
        isOpen={isOpen}
        onClose={onClose}
        cash={cash}
        setCash={setCash}
      />
      <Flex px={4} columnGap={2} align={"center"}>
        <Tooltip label="click to edit" aria-label="click to edit">
          <Flex
            bg={"gray.800"}
            w={"300px"}
            justify={"space-between"}
            cursor={"pointer"}
            onClick={handleClick}
            py={2}
            px={3}
            borderRadius={"md"}
            color={"white"}
          >
            <Text>Cash</Text>
            <Text fontWeight={"bold"}>$500.32</Text>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Cash;
