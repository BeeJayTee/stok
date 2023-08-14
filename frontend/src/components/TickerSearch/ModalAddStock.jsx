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
import { useAddStock } from "../../hooks/useAddStock";
import { useState } from "react";

const ModalAddStock = ({
  isOpen,
  onClose,
  setStock,
  setStockList,
  ticker,
  country,
}) => {
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [desiredPercent, setDesiredPercent] = useState(0);
  const { addStock } = useAddStock();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const result = await addStock(
      ticker,
      country.toLowerCase(),
      numberOfShares,
      desiredPercent
    );
    if (result.result === "ok") {
      setStockList([]);
      setStock("");
    } else {
      console.log("stock already in portfolio");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ticker}</ModalHeader>
          <ModalCloseButton />
          <ModalBody onKeyDown={handleKeyDown}>
            <Box>
              <Text fontSize={"xs"}>Number of Shares</Text>
              <Editable
                defaultValue="add number of shares"
                value={numberOfShares}
                onChange={(e) => setNumberOfShares(e)}
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
                defaultValue="add %"
                value={desiredPercent}
                onChange={(e) => setDesiredPercent(e)}
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

export default ModalAddStock;
