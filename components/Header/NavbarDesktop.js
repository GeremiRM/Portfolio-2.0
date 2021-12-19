import Link from "next/link";

import { HStack, Text } from "@chakra-ui/react";

const NavbarDesktop = () => {
  return (
    <HStack as="nav" spacing="2rem" letterSpacing="2px">
      <Link href="#about">
        <Text
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          About Me
        </Text>
      </Link>
      <Link href="#projects">
        <Text
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          Projects
        </Text>
      </Link>
      <Link href="#contact">
        <Text
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          Contact
        </Text>
      </Link>
    </HStack>
  );
};

export default NavbarDesktop;
