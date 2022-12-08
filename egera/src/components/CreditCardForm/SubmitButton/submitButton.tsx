import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useFormikContext } from "formik";

export const SubmitButton = ({ isLoading }: { isLoading: boolean }) => {
  const { errors } = useFormikContext();

  return (
    <Button
      type="submit"
      borderRadius="10px"
      mt="25px"
      bg="#2ecc71"
      color="white"
      _hover={{ bg: "#27ae60" }}
      h="50px"
      disabled={isLoading}
      cursor={"pointer"}
    >
      {isLoading ? (
        <Flex align="center" gap="12px">
          <Spinner boxSize="14px" thickness="3px" /> Processing...{" "}
        </Flex>
      ) : (
        "Pay"
      )}
    </Button>
  );
};
