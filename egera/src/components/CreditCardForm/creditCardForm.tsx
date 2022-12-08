import {
  CheckIcon,
  CloseIcon,
  SpinnerIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  CheckboxIcon,
  Flex,
  Grid,
  Image,
  ListIcon,
  Spinner,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { CustomField } from "./CustomField/customField";
import { VALIDATION_SCHEMA } from "./helpers/validationSchema";
import { ResultText } from "./ResultText/resultText";
import { SubmitButton } from "./SubmitButton/submitButton";

export const CreditCardForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        name: "",
        cvv: "",
        expirationDate: "",
        cardNumber: "",
      }}
      validationSchema={VALIDATION_SCHEMA}
      validate={() => {
        setSuccess(false);
      }}
      onSubmit={async (values) => {
        if (isLoading) return;

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);

          console.log("Result", values);
        }, 2000);
      }}
    >
      {(props) => {
        return (
          <Form>
            <Flex
              flexDir="column"
              bg="white"
              borderRadius="20px"
              padding="60px 60px 20px 60px"
              gap="25px"
              w="460px"
            >
              <Flex
                fontSize="30px"
                mb="30px"
                color="rgba(0,0,0,0.7)"
                fontWeight="800"
                align="center"
                justify="space-between"
              >
                Credit card
                <Flex gap="10px">
                  <Image h="20px" alt="partners" src="/assets/mastercard.jpg" />
                  <Image h="20px" alt="partners" src="/assets/partners.png" />
                </Flex>
              </Flex>
              <CustomField
                placeholder={"John Doe"}
                name={"name"}
                label={"Card owner name"}
              />
              <CustomField
                placeholder={"1234 1234 1234 1234"}
                name={"cardNumber"}
                value={(props as any).values.cardNumber
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                label={"Card Number"}
                max={19}
              />
              <Grid templateColumns="1fr 1fr" gap="20px">
                <CustomField
                  placeholder={"xx/xx"}
                  name={"expirationDate"}
                  label={"Expiration date"}
                  value={(props as any).values.expirationDate

                    .replace(/^(\d{2})(\d+)/g, "$1/")
                    .trim()}
                  max={5}
                />
                <CustomField
                  placeholder={"000"}
                  name={"cvv"}
                  label={"CVV"}
                  max={4}
                />
              </Grid>
              <SubmitButton isLoading={isLoading} />
              <ResultText success={success} isLoading={isLoading} />
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
