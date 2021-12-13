import { Stack, Button, Box, Textarea, FormLabel } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { InputField } from "./InputField";

export const ContactForm = ({}) => {
  const [textAreaInput, setTextAreaInput] = useState("");

  const validate = (values) => {
    const errors = {};

    for (let value in values) {
      if (!values[value])
        value !== "email"
          ? (errors[value] = "Can't be empty")
          : (errors[value] = "Invalid Email");
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      onSubmit={async (values, actions) => {
        actions.setErrors(validate(values));
        actions.setSubmitting(false);
      }}
      validateOnChange={true}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing="4rem">
            <InputField name="name" label="Name" />

            <InputField name="email" label="Email" type="email" />

            <Box>
              <Box mb="0.5rem">
                <FormLabel
                  color="#e7537b"
                  htmlFor="message"
                  textTransform="uppercase"
                  fontFamily="Rajdhani"
                  fontSize="1.1rem"
                  letterSpacing="2px"
                >
                  Message
                </FormLabel>
              </Box>
              <Textarea
                name="message"
                fontSize="0.9rem"
                borderRadius="12px"
                height="10rem"
                resize="none"
                variant="outline"
                py="1rem"
                value={textAreaInput}
                onChange={(e) => setTextAreaInput(e.target.value)}
                bg={`${textAreaInput !== "" ? "white" : "transparent"}`}
                color={`${textAreaInput !== "" ? "black" : "white"}`}
                _placeholder={{
                  color: "#ddd",
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  color: "#333",
                }}
                _invalid={{
                  borderBottomColor: "red",
                }}
              />
            </Box>

            <Box
              alignSelf="flex-start"
              pt={{ base: "4rem", sm: "2rem", md: "0" }}
              w="100%"
            >
              <Button
                isLoading={isSubmitting}
                type="submit"
                bg="transparent"
                border="2px solid #e7537b"
                transition="0.25s"
                py="1.5rem"
                textTransform="uppercase"
                fontSize="1.5rem"
                letterSpacing="5px"
                fontFamily="Rajdhani"
                w="100%"
                _hover={{
                  bg: "#e7537b",
                }}
              >
                Send
              </Button>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
