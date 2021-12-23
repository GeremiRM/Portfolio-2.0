import { Heading } from "@chakra-ui/react";

export const Subtitle = ({ children, ...props }) => {
  return (
    <Heading
      fontFamily="Montserrat"
      fontSize={{
        base: "clamp(2.25rem, 10vw, 3rem)",
        md: "4rem",
        lg: "5rem",
      }}
      letterSpacing="5px"
      textAlign={{ base: "center", md: "inherit" }}
      textShadow="-4px 3px 2px rgba(75,75,75, 1)"
      {...props}
    >
      {children}
    </Heading>
  );
};
