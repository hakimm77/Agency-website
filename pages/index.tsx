import React from "react";
import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Image from "next/image";
import { InlineWidget, PopupWidget } from "react-calendly";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 1400px)");

  return (
    <Flex
      w="100%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#d0e4f7"
    >
      <Header />

      <Flex
        flexDir="column"
        bgColor="#15304B"
        w="100%"
        p={isMobile ? 5 : 20}
        justifyContent="center"
        alignItems="center"
        mb={40}
      >
        <Text fontWeight="bold" fontSize={40} color="#fff" mb={5}>
          What we offer
        </Text>

        <Text
          color="#fff"
          w={isMobile ? "100%" : "60%"}
          textAlign="center"
          fontSize={20}
          mb={10}
        >
          We do one thing - We do paid advertising with deep focus on bringing
          more clients to your business, we advertise your services to the
          largest social media in the planet (2.96 Billion Users), If you want
          to unlock the full potential of social media advertising book a FREE
          call now.
        </Text>

        <Button
          bgColor="#fff"
          color="#15304B"
          p="30px"
          maxW={isMobile ? "100%" : "60%"}
          fontSize={23}
          _hover={{ bgColor: "gray" }}
          alignSelf="center"
        >
          Book Free Demo call
        </Button>
      </Flex>

      <Flex
        flexDir={isMobile ? "column" : "row"}
        w={isMobile ? "95%" : "70%"}
        alignItems="center"
        justifyContent="space-around"
        mb={20}
      >
        <Flex flexDir="column" alignItems={"center"} mb={isMobile ? 20 : 0}>
          <Image
            alt="hakim-image"
            src={require("../assets/hakim-image.png")}
            style={{
              borderRadius: "100%",
              width: 300,
              marginBottom: 10,
              border: "5px solid #15304B",
            }}
          />
          <Text color="#dd004e" fontWeight="bold" fontSize={25}>
            Hakim Hamaili
          </Text>
          <Text color="#15304B" fontWeight={600} fontSize={25}>
            FOUNDER
          </Text>
        </Flex>

        <Flex flexDir="column" w={isMobile ? "95%" : "45%"}>
          <Text color="#15304B" fontWeight="bold" fontSize={50} mb={5}>
            Meet The Founder
          </Text>

          <Text color="#15304B" fontSize={20} mb={10}>
            Hak Dynamics founded by Hakim Hamaili, I am very Self-driven and
            passionate individual with a background in IT, Working hard to
            achieve the best results in favor of clients, Scaling your business
            is the top priorety for us.
          </Text>
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        bgColor="#15304B"
        w="100%"
        p={isMobile ? 5 : 20}
        justifyContent="center"
        alignItems="center"
        pb={40}
      >
        <Text fontWeight="bold" fontSize={40} color="#fff" mb={5}>
          Schedule a Free 15-Minute Demo Call With Hakim
        </Text>

        <Text
          color="#fff"
          w={isMobile ? "100%" : "60%"}
          textAlign="center"
          fontSize={20}
          mb={10}
        >
          By the end of this Audit call, you will have a clear understanding of
          the next steps you can take for your business to start generating
          consistent and reliable results online with Paid Advertising. Find a
          time on Hakim's calendar to schedule your call today and we look
          forward to speaking to you soon!
        </Text>

        <Button
          bgColor="#fff"
          color="#15304B"
          p="30px"
          maxW={isMobile ? "100%" : "60%"}
          fontSize={23}
          _hover={{ bgColor: "gray" }}
          alignSelf="center"
        >
          Book Free Demo call
        </Button>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default LandingPage;
