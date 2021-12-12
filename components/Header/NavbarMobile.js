import { useRef } from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box as="nav">
      <IconButton
        aria-label="Open Navigation Menu"
        icon={<GiHamburgerMenu />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        isFullHeight
      >
        <DrawerOverlay />
        <DrawerContent
          background="transparent"
          backdropFilter="blur(20px)"
          py="2rem"
          fontSize="2rem"
        >
          <DrawerCloseButton />
          <DrawerHeader fontFamily="Rajdhani" textTransform="uppercase">
            Geremi Ramos
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarMobile;
