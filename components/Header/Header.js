import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex={{ base: "1000", md: "1" }}
      flexDirection={{ base: "row", md: "column" }}
      p={{
        base: "1rem 2rem",
        md: "1.5rem 0 1.5rem 5vw",
      }}
      justify={{ base: "space-between", md: "flex-start" }}
      w={{ base: "100%", md: "10vw" }}
      align={{ base: "center", md: "flex-start" }}
      // bg="#e7537b20"
    >
      <Text
        fontFamily="Montserrat"
        textTransform="uppercase"
        letterSpacing="-2px"
        fontWeight="900"
        fontSize="2.5rem"
        color="#e7537a80"
      >
        R
      </Text>

      <Box display={{ md: "none" }}>
        <NavbarMobile />
      </Box>
      <Stack
        display={{ base: "none", md: "flex" }}
        mt="1rem"
        spacing="2rem"
        ml="0.75rem"
      >
        <NavbarDesktop />
      </Stack>
    </Flex>
  );
};

export default Header;
