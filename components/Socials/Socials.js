import { Stack, IconButton, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <Stack
      position="fixed"
      bottom="0"
      left="2rem"
      align="center"
      justify="center"
    >
      <IconButton
        aria-label="Link to Geremi's Github"
        bg="transparent"
        fontSize="1.75rem"
        icon={<FaGithub />}
        _hover={{
          color: "#e7537b",
        }}
      />
      <IconButton
        aria-label="Link to Geremi's LinkedIn"
        bg="transparent"
        fontSize="1.75rem"
        icon={<FaLinkedin />}
        _hover={{
          color: "#e7537b",
        }}
      />
      <Box h="100px" w="2px" bg="#e7537a80"></Box>
    </Stack>
  );
};

export default Socials;
