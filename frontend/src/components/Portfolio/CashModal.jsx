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
  Editable,
  EditablePreview,
  EditableInput,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCash } from "../../hooks/useCash";

const CashModal = ({ isOpen, onClose, setCash, cash }) => {
  const [localCash, setLocalCash] = useState();
  const { updateCash } = useCash();

  useEffect(() => {
    setLocalCash(cash);
  }, [cash]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    updateCash(localCash);
    setCash(localCash);
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
              <Text fontSize={"xs"}>Number of Shares</Text>
              <Editable
                value={localCash}
                onChange={(e) => setLocalCash(e)}
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

export default CashModal;
