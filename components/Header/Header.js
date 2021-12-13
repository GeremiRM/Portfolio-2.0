import { Flex, Box, Text } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex="1000"
      p={{ base: "1rem 2rem", md: "3rem", lg: "3rem 5rem" }}
      justify="space-between"
      w="100%"
      align="center"
    >
      <Text>R</Text>
      <Box display={{ md: "none" }}>
        <NavbarMobile />
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <NavbarDesktop />
      </Box>
    </Flex>
  );
};

export default Header;
