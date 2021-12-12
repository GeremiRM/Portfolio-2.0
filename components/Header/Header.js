import { Flex, Box, Text } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex="1000"
      p="1rem 2rem"
      justify="space-between"
      w="100%"
      align="center"
    >
      <Text>R</Text>
      <NavbarMobile />
    </Flex>
  );
};

export default Header;
