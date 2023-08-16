/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  Input,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCash } from "../../hooks/useCash";
import { useGetTotal } from "../../hooks/useGetTotal";

const CashModal = ({ isOpen, onClose, setCash, cash, setTotal }) => {
  const [localCash, setLocalCash] = useState();
  const { updateCash } = useCash();
  const { getTotal } = useGetTotal();

  useEffect(() => {
    setLocalCash(cash);
  }, [cash]);

  const handleClick = (e) => {
    e.target.select();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    updateCash(localCash);
    setCash(localCash);
    setTotal(getTotal());

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cash</ModalHeader>
          <ModalCloseButton />
          <ModalBody onKeyDown={handleKeyDown}>
            <Box>
              <Text fontSize={"xs"}>Cash</Text>
            </Box>
            <Input
              placeholder="enter a number"
              value={localCash}
              onChange={(e) => setLocalCash(e.target.value)}
              onClick={(e) => handleClick(e)}
            />
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

export default CashModal;
