import {
  FormControl,
  Textarea,
  Input,
  InputGroup,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
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

      <InputGroup>
        <Textarea
          {...field}
          id={field.name}
          isRequired
          fontSize="0.9rem"
          px="0.75rem"
          py="1.75rem"
          bg={`${field.value !== "" ? "white" : "transparent"}`}
          color={`${field.value !== "" ? "#333" : "white"}`}
          _focus={{
            outline: "none",
            bg: "white",
            color: "#333",
          }}
        />

        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </InputGroup>
    </FormControl>
  );
};
