import { Flex, Box, Text } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex="1000"
      p={{ base: "1rem 2rem", md: "1.5rem 3rem", lg: "1.5rem 5rem" }}
      justify="space-between"
      w="100%"
      align="center"
      // bg="#e7537b20"
    >
      <Text>R</Text>
      <Box display={{ md: "none" }}>
        <NavbarMobile />
      </Box>
      {/* <Box display={{ base: "none", md: "block" }}>
        <NavbarDesktop />
      </Box> */}
    </Flex>
  );
};

export default Header;
