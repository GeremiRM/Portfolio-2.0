import {
  FormControl,
  Input,
  InputGroup,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

import { AiFillWarning } from "react-icons/ai";

import { useField } from "formik";

export const InputField = ({ size: _, label, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        htmlFor={field.name}
        fontFamily="Rajdhani"
        fontSize="1.1rem"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        {label}
      </FormLabel>

      <InputGroup flexDirection="column">
        <Input
          {...field}
          {...props}
          id={field.name}
          fontSize="0.9rem"
          px="0.75rem"
          py="1.75rem"
          borderColor="#e7537b"
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
