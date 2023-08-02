import { Link, Image, Flex } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Flex justify={"center"} py={4}>
      <Link href="/">
        <Image src={logo} w={"100px"} />
      </Link>
    </Flex>
  );
};

export default Header;
