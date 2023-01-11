import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Flex
      flexDir="column"
      bgColor="#15304B"
      w="100%"
      justifyContent="center"
      alignItems="center"
      pb={10}
    >
      <Flex cursor="pointer" alignItems="center">
        <Image
          alt="Hak Dynamics"
          src={require("../assets/logo.png")}
          style={{
            width: 50,
            borderRadius: "100%",
            scale: "2",
            marginRight: 10,
          }}
        />
        <Text fontSize={23} fontWeight={600} color="#fff">
          Hak Dynamics
        </Text>
      </Flex>
    </Flex>
  );
};
