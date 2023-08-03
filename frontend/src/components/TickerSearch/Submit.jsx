/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";

const Submit = ({ handleSubmit }) => {
  return (
    <Button colorScheme="black" variant={"outline"} onClick={handleSubmit}>
      Submit
    </Button>
  );
};

export default Submit;
