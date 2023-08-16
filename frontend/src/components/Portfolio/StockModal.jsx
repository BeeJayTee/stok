/* eslint-disable react/prop-types */
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUpdateStockData } from "../../hooks/useUpdateStockData";
import { useGetTotal } from "../../hooks/useGetTotal";

const StockModal = ({
  isOpen,
  onClose,
  desiredPercent,
  setDesiredPercent,
  stockSymbol,
  numberOfShares,
  setNumberOfShares,
  setTotal,
}) => {
  const [localNumberOfShares, setLocalNumberOfShares] = useState(null);
  const [localDesiredPercent, setLocalDesiredPercent] = useState(null);

  const { updateShares, updatePercent } = useUpdateStockData();
  const { getTotal } = useGetTotal();

  useEffect(() => {
    setLocalNumberOfShares(numberOfShares);
    setLocalDesiredPercent(desiredPercent);
  }, [numberOfShares, desiredPercent]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClick = (e) => {
    e.target.select();
  };

  const handleSubmit = () => {
    updatePercent(stockSymbol, localDesiredPercent);
    setDesiredPercent(localDesiredPercent);
    updateShares(stockSymbol, localNumberOfShares);
    setNumberOfShares(localNumberOfShares);
    setTotal(getTotal());

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{stockSymbol}</ModalHeader>
          <ModalCloseButton />
          <ModalBody onKeyDown={handleKeyDown}>
            <Box>
              <Text fontSize={"xs"}>Number of Shares</Text>
              <Input
                placeholder="number of shares"
                value={localNumberOfShares}
                onChange={(e) => setLocalNumberOfShares(e.target.value)}
                px={4}
                onClick={(e) => handleClick(e)}
              />
            </Box>
            <Box mt={4}>
              <Text fontSize={"xs"}>desired %</Text>
              <Input
                placeholder="number of shares"
                value={localDesiredPercent}
                onChange={(e) => setLocalDesiredPercent(e.target.value)}
                px={4}
                onClick={(e) => handleClick(e)}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StockModal;
