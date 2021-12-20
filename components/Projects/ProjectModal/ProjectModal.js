import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  Button,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

function importAll(r) {
  let images = [];
  r.keys().map((item) => {
    images = [...images, item.replace("./", "")];
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../public/images/projects/Countries-Api",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export const ProjectModal = ({ id, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="200px">
          <ModalHeader>{id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{id}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
