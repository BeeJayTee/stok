/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";

const Submit = ({ handleSubmit, stock }) => {
  return (
    <Button
      colorScheme="black"
      variant={"outline"}
      onClick={handleSubmit}
      isDisabled={stock.length === 0}
    >
      Submit
    </Button>
  );
};

export default Submit;
