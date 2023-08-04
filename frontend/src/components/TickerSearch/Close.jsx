/* eslint-disable react/prop-types */
import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Close = ({ setStock, setStockList }) => {
  const handleClick = () => {
    setStock("");
    setStockList([]);
  };

  return (
    <IconButton
      variant={"ghost"}
      size={"xs"}
      onClick={handleClick}
      aria-label="cancel search"
      icon={<CloseIcon />}
    ></IconButton>
  );
};

export default Close;
