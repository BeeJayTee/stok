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
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useUpdateStockData } from "../../hooks/useUpdateStockData";

const StockModal = ({
  isOpen,
  onClose,
  desiredPercent,
  setDesiredPercent,
  stockSymbol,
  numberOfShares,
  setNumberOfShares,
}) => {
  const [localNumberOfShares, setLocalNumberOfShares] = useState(null);
  const [localDesiredPercent, setLocalDesiredPercent] = useState(null);

  const { updateShares, updatePercent } = useUpdateStockData();

  useEffect(() => {
    setLocalNumberOfShares(numberOfShares);
    setLocalDesiredPercent(desiredPercent);
  }, [numberOfShares, desiredPercent]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    updatePercent(stockSymbol, localDesiredPercent);
    setDesiredPercent(localDesiredPercent);
    updateShares(stockSymbol, localNumberOfShares);
    setNumberOfShares(localNumberOfShares);

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
              <Editable
                value={localNumberOfShares}
                onChange={(e) => setLocalNumberOfShares(e)}
                borderBottom={"1px"}
                borderColor={"black"}
                px={4}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Box>
            <Box mt={4}>
              <Text fontSize={"xs"}>desired %</Text>
              <Editable
                defaultValue={localDesiredPercent}
                onChange={(e) => setLocalDesiredPercent(e)}
                borderBottom={"1px"}
                borderColor={"black"}
                px={4}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
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
