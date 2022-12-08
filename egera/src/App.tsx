import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import { CreditCardForm } from "./components/CreditCardForm/creditCardForm";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS={true}>
    <Flex align="center" justify="center" bg="#ecf0f1" h="100vh" >
      <CreditCardForm />
    </Flex>
  </ChakraProvider>
);
