import { useRef } from "react";
import Link from "next/link";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Stack,
  Link as ChakraLink,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavbarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box as="nav">
      <IconButton
        aria-label="Open Navigation Menu"
        icon={<GiHamburgerMenu />}
        onClick={onOpen}
        fontSize="1.75rem"
        bg="#e7537a36"
      />
      <Drawer
        finalFocusRef={btnRef}
        isFullHeight
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        maxW="100vh"
      >
        <DrawerOverlay />
        <DrawerContent
          backdropFilter="blur(20px)"
          background="transparent"
          p="2rem 1rem"
        >
          <DrawerCloseButton
            fontSize="1.25rem"
            mt="2rem"
            mr="1.5rem"
            color="white"
          />
          <DrawerHeader
            fontFamily="Rajdhani"
            textTransform="uppercase"
            color="white"
          >
            Geremi Ramos
          </DrawerHeader>

          <DrawerBody
            color="rgba(200, 200, 200, 0.95)"
            display="grid"
            placeItems="center"
          >
            <Stack
              align="center"
              fontSize="1.5rem"
              letterSpacing="3px"
              spacing="1.5rem"
            >
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
            </Stack>
          </DrawerBody>

          <DrawerFooter
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <HStack color="white">
              <ChakraLink href="https://github.com/GeremiRM/" target="_blank">
                <IconButton
                  aria-label="Link to Geremi's Github"
                  bg="transparent"
                  fontSize="1.75rem"
                  icon={<FaGithub />}
                />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/geremi-ramos-a2a0b8226/"
                target="_blank"
              >
                <IconButton
                  aria-label="Link to Geremi's LinkedIn"
                  bg="transparent"
                  fontSize="1.75rem"
                  icon={<FaLinkedin />}
                />
              </ChakraLink>
            </HStack>
            <Box>
              <Button>Resume</Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarMobile;
