/* eslint-disable react/prop-types */
import { Box, Flex, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CashModal from "./CashModal";
import { useCash } from "../../hooks/useCash";

const Cash = ({ setTotal }) => {
  const [cash, setCash] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getCash } = useCash();

  useEffect(() => {
    setCash(getCash());
  }, [getCash]);

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
        setTotal={setTotal}
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
            <Text fontWeight={"bold"}>${cash}</Text>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Cash;
