import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

const LandingPage = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      alignItems="center"
      backgroundColor="#d0e4f7"
    >
      <Header />
    </Flex>
  );
};

export default LandingPage;
