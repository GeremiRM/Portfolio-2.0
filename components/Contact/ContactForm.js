import { Stack, Button, Box, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import { InputField } from "./InputField";
import { TextArea } from "./Textarea";
import { send } from "emailjs-com";

export const ContactForm = ({}) => {
  const toast = useToast();

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
      initialValues={{ from_name: "", from_email: "", message: "" }}
      onSubmit={async (values, actions) => {
        actions.setErrors(validate(values));

        // If any field is empty, do nothing
        if (!from_name.value || !from_email.value || !message.value) return "";

        // Else, send the email
        send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          {
            from_name: from_name.value,
            to_name: "Geremi Ramos",
            from_email: from_email.value,
            message: message.value,
          },
          process.env.NEXT_PUBLIC_USER_ID
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);

            // Success Message
            toast({
              title: "Success!",
              description: "Email sent successfully",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log("FAILED...", err);

            // Error Message
            toast({
              title: "Error!",
              description:
                "An error occurred while sendind the email, try again",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
          });
        actions.setSubmitting(false);
      }}
      validateOnChange={true}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing="4rem">
            <InputField name="from_name" label="Name" />

            <InputField name="from_email" label="Email" type="email" />

            <TextArea />

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
