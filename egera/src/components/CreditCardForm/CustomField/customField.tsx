import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, CheckboxIcon, Flex, FormLabel, Input } from "@chakra-ui/react";
import { ErrorMessage, Field, useFormikContext } from "formik";

enum FIELD_COLORS {
  success = "#2ecc71",
  neutral = "rgba(0,0,0,0.2)",
  error = '"#2ecc71"',
}

export const CustomField = ({
  name,
  placeholder,
  label,
  value,
  max,
  hidden = false,
}: {
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  max?: number;
  hidden?: boolean;
}) => {
  const { errors, touched, validateField, values } = useFormikContext();

  return (
    <Flex flexDir="column">
      <FormLabel
        padding="0"
        fontSize="12px"
        color={`${
          (errors as any)[name] && (touched as any)[name]
            ? "#e74c3c"
            : "rgba(0,0,0,0.4)"
        }`}
        htmlFor="lastName"
        gap="20px"
        display="flex"
        alignItems="center"
      >
        {label}{" "}
      </FormLabel>
      <Flex pos="relative">
        {!(errors as any)[name] && (values as any)[name] && (
          <CheckIcon
            boxSize="18px"
            right="5px"
            bottom="10px"
            color="#2ecc71"
            borderRadius="50%"
            pos="absolute"
          />
        )}

        <Input
          color="black"
          as={Field}
          backgroundColor="none"
          _placeholder={{ color: "rgba(0,0,0,0.2)" }}
          transition="0s"
          value={value ?? (values as any)[name]}
          border="none"
          maxLength={max ?? 40}
          borderBottom={` ${
            (errors as any)[name] && (touched as any)[name]
              ? "1px solid #e74c3c"
              : "1px solid rgba(0,0,0,0.2)"
          }`}
          secureText
          h="35px"
          borderRadius="0px"
          id={name}
          name={name}
          type={hidden ? "password" : "text"}
          letterSpacing={hidden ? "4px" : "auto"}
          fontSize="16px"
          _hover={{
            borderColor:
              (errors as any)[name] && (touched as any)[name]
                ? "rgba(0,0,0,0.2)"
                : "#2ecc71",
          }}
          padding="0px 0px"
          paddingLeft="2px"
          _focus={{
            borderBottom: "1px solid",
            borderColor:
              (errors as any)[name] && (touched as any)[name]
                ? "rgba(0,0,0,0.2)"
                : "#2ecc71",
            outline: "none",
            boxShadow: "none",
          }}
          autoComplete="cc-csc"
          placeholder={placeholder}
        />
      </Flex>
    </Flex>
  );
};
