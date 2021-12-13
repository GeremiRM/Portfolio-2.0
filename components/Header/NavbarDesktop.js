import { HStack, Text } from "@chakra-ui/react";

const NavbarDesktop = () => {
  return (
    <HStack as="nav" spacing="2rem" letterSpacing="2px">
      <Text>About</Text>
      <Text>Projects</Text>
      <Text>Contact</Text>
    </HStack>
  );
};

export default NavbarDesktop;
