import {
  FormControl,
  Textarea,
  Box,
  InputGroup,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { AiFillWarning } from "react-icons/ai";

import { useField } from "formik";

export const TextArea = () => {
  const [field, { error }] = useField({ name: "message", as: "textarea" });

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        htmlFor={field.name}
        fontFamily="Rajdhani"
        fontSize="1.1rem"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        Message
      </FormLabel>

      <InputGroup flexDirection="column">
        <Textarea
          {...field}
          id={field.name}
          borderColor="#e7537b"
          fontSize="0.9rem"
          h={{ base: "125px", lg: "200px", xl: "250px" }}
          p="1.25rem 0.75rem"
          bg={`${field.value !== "" ? "white" : "transparent"}`}
          color={`${field.value !== "" ? "#333" : "white"}`}
          _focus={{
            outline: "none",
            bg: "white",
            color: "#333",
          }}
        />

        {error ? (
          <FormErrorMessage display="flex" align="center" fontSize="0.85rem">
            <Box mr="0.25rem" fontSize="1rem">
              <AiFillWarning />
            </Box>
            {error}
          </FormErrorMessage>
        ) : null}
      </InputGroup>
    </FormControl>
  );
};
