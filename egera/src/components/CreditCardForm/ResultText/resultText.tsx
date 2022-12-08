import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useFormikContext } from "formik";

export const ResultText = ({
  success,
  isLoading,
}: {
  success: boolean;
  isLoading: boolean;
}) => {
  const { errors, touched } = useFormikContext();

  return (
    <Flex minH="20px" mb="20px" fontSize="14px">
      {isLoading ? (
        <Flex align="center" color="gray" gap="14px">
          <Spinner boxSize="14px" />
          <Box>Processing payment...</Box>
        </Flex>
      ) : success ? (
        <Flex align="center" color="#2ecc71" gap="10px">
          <CheckIcon />
          <Box>Thank you! Payment successful.</Box>
        </Flex>
      ) : (
        (touched as any).name &&
        Object.entries(errors)[0] && (
          <Flex align="center" color="#e74c3c" gap="10px">
            <WarningIcon />
            {(Object.entries(errors)[0][1] as string) ?? ""}
          </Flex>
        )
      )}
    </Flex>
  );
};
