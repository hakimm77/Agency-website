import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 1400px)");

  return (
    <Flex
      w={isMobile ? "100%" : "65%"}
      flexDir="column"
      pt="20px"
      pb="20px"
      mb={40}
    >
      <Flex cursor="pointer" alignItems="center" mb={40} ml={isMobile ? 20 : 0}>
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

      <Flex
        flexDir={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Flex flexDir="column" w={isMobile ? "95%" : "45%"}>
          <Text fontSize={45} color="#15304B" fontWeight="bold" mb={5}>
            Facebook Advertising for car dealerships
          </Text>
          <Button
            bgColor="#dd004e"
            color="#fff"
            p="30px"
            maxW={isMobile ? "100%" : "60%"}
            fontSize={23}
            _hover={{ bgColor: "gray" }}
          >
            Scale Your Business
          </Button>
        </Flex>

        {!isMobile && (
          <Image
            alt="facebook-image"
            src={require("../assets/fb-image.png")}
            style={{ width: 600, marginTop: -60 }}
          />
        )}
      </Flex>
    </Flex>
  );
};
