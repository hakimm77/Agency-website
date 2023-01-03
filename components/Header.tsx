import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  return (
    <Flex w="65%" flexDir="column" pt="20px" pb="20px">
      <Flex cursor="pointer" alignItems="center" mb={40}>
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
        <Text fontSize={23} fontWeight={600} color="#15304B">
          Hak Dynamics
        </Text>
      </Flex>

      <Flex flexDir="row" justifyContent="space-between">
        <Flex flexDir="column" w="45%">
          <Text fontSize={45} color="#15304B" fontWeight="bold" mb={5}>
            Facebook Advertising for car dealerships
          </Text>
          <Button
            bgColor="#dd004e"
            color="#fff"
            p="30px"
            w="50%"
            fontSize={23}
            _hover={{ bgColor: "gray" }}
          >
            Scale Your Business
          </Button>
        </Flex>

        <Image
          alt="facebook-image"
          src={require("../assets/fb-image.png")}
          style={{ width: 600, marginTop: -60 }}
        />
      </Flex>
    </Flex>
  );
};
