import {
  FormControl,
  Input,
  InputGroup,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useField } from "formik";

export const InputField = ({ size: _, label, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        color="#e7537b"
        htmlFor={field.name}
        fontFamily="Rajdhani"
        fontSize="1.1rem"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        {label}
      </FormLabel>

      <InputGroup>
        <Input
          {...field}
          {...props}
          id={field.name}
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
