import { useRef } from "react";

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
        bg="transparent"
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
          <DrawerCloseButton fontSize="1.25rem" mt="2rem" mr="1.5rem" />
          <DrawerHeader fontFamily="Rajdhani" textTransform="uppercase">
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
              <Text>About Me</Text>
              <Text>Projects</Text>
              <Text>Contact</Text>
            </Stack>
          </DrawerBody>

          <DrawerFooter
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <HStack>
              <IconButton
                aria-label="Link to Geremi's Github"
                bg="transparent"
                fontSize="1.75rem"
                icon={<FaGithub />}
              />
              <IconButton
                aria-label="Link to Geremi's LinkedIn"
                bg="transparent"
                fontSize="1.75rem"
                icon={<FaLinkedin />}
              />
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
