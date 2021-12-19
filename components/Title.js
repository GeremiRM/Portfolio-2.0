import { Heading } from "@chakra-ui/react";

const Title = ({ children, as, ...props }) => {
  return (
    <Heading
      {...props}
      fontFamily="Montserrat"
      letterSpacing="5px"
      textShadow="-4px 3px 2px rgba(75,75,75, 1)"
      as="h1"
      fontSize={{
        base: "3.5rem",
        md: "5rem",
        lg: "7rem",
        xl: "9rem",
      }}
    >
      {children}
    </Heading>
  );
};

export default Title;
