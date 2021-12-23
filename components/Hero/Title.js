import { Heading } from "@chakra-ui/react";

export const Title = ({ children, as, ...props }) => {
  return (
    <Heading
      {...props}
      fontFamily="Montserrat"
      letterSpacing="5px"
      textShadow="-4px 3px 2px rgba(75,75,75, 1)"
      as="h1"
      fontSize={{
        base: "clamp(2.75rem, 10vw, 3.5rem)",
        md: "5rem",
        lg: "7rem",
        xl: "9rem",
      }}
    >
      {children}
    </Heading>
  );
};
