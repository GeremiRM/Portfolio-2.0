import Link from "next/link";

import { Box, Text, Stack } from "@chakra-ui/react";

const NavbarDesktop = () => {
  return (
    <Stack as="nav" letterSpacing="2px" spacing="5rem">
      <Link href="#about">
        <Text
          transform="rotate(90deg) translate(3rem, 150%)"
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          About
        </Text>
      </Link>
      <Link href="#projects">
        <Text
          transform="rotate(90deg) translate(3rem, 150%)"
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          Projects
        </Text>
      </Link>
      <Link href="#contact">
        <Text
          transform="rotate(90deg) translate(3rem, 150%)"
          cursor="pointer"
          transition="0.25s all ease"
          _hover={{ color: "#e7537b" }}
        >
          Contact
        </Text>
      </Link>
    </Stack>
  );
};

export default NavbarDesktop;
