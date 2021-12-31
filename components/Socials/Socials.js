import { Stack, IconButton, Box, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <Stack
      position="fixed"
      bottom="0"
      w={{ base: "100%", md: "calc(10vw + 3rem)" }}
      align="center"
      justify="center"
    >
      <Link href="https://github.com/GeremiRM/" target="_blank">
        <IconButton
          aria-label="Link to Geremi's Github"
          bg="transparent"
          fontSize="1.75rem"
          icon={<FaGithub />}
          _hover={{
            color: "#e7537b",
          }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/geremi-ramos-a2a0b8226/"
        target="_blank"
      >
        <IconButton
          aria-label="Link to Geremi's LinkedIn"
          bg="transparent"
          fontSize="1.75rem"
          mb="4rem"
          icon={<FaLinkedin />}
          _hover={{
            color: "#e7537b",
          }}
        />
      </Link>
      <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button
          transform="rotate(90deg) translate(-30px)"
          bg="transparent"
          border="2px solid #e7537b"
          transition="0.25s"
          _hover={{
            bg: "#e7537b",
          }}
        >
          Resume
        </Button>
      </a>
      <Box h="100px" w="2px" bg="#e7537a80"></Box>
    </Stack>
  );
};

export default Socials;
