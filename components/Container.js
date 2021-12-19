import { Box } from "@chakra-ui/react";

const container = ({ children, type = "small" }) => {
  return (
    <Box
      maxW={{ base: "90%", md: `${type === "small" ? "70%" : "85%"}` }}
      mx="auto"
    >
      {children}
    </Box>
  );
};

export default container;
