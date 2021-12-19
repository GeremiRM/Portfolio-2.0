import { Heading } from "@chakra-ui/react";

const Subtitle = ({ children, ...props }) => {
  return (
    <Heading
      fontFamily="Montserrat"
      fontSize="3.5rem"
      mb="2rem"
      letterSpacing="5px"
      textShadow="-4px 3px 2px rgba(75,75,75, 1)"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Subtitle;
