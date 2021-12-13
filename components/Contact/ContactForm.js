import { Stack, Button, Box, Textarea, FormLabel } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";

export const ContactForm = ({}) => {
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
                  color="gray.400"
                  htmlFor="message"
                  textTransform="uppercase"
                >
                  Message
                </FormLabel>
              </Box>
              <Textarea
                name="message"
                fontSize="0.9rem"
                border="none"
                borderRadius="12px"
                height="10rem"
                resize="none"
                bg="rgba(75,75,75,0.4)"
                _placeholder={{
                  color: "#ddd",
                }}
                _focus={{
                  borderBottomColor: "white",
                  outline: "none",
                }}
                _invalid={{
                  borderBottomColor: "red",
                }}
              />
            </Box>

            <Box
              alignSelf="flex-start"
              pt={{ base: "4rem", sm: "2rem", md: "0" }}
            >
              <Button
                isLoading={isSubmitting}
                type="submit"
                bg="transparent"
                border="2px solid #e7537b"
                transition="0.25s"
                w="200px"
                py="1.5rem"
                textTransform="uppercase"
                fontSize="1.5rem"
                fontFamily=""
                letterSpacing="5px"
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
