import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactModal from "../ContactModal";

function HeroContent() {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 0, once: false });
  }, []);
  return (
    <Flex
      pb={{ base: 10, md: 0 }}
      justify="space-between"
      px={{ base: 8, md: 32 }}
      align="center"
      direction={{ base: "column", md: "row" }}
    >
      <Box
        data-aos="fade-up"
        data-aos-duration="200"
        w={{ base: "100%", md: "65%" }}
        backgroundImage={{ base: "url('nwanochie.png')", md: " " }}
        backgroundPosition="center"
        backgroundColor="rgba(0, 128, 128); "
        backgroundBlendMode="soft-light"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <Text color="white" fontSize={{ base: "sm", md: "lg" }}>
          Hi! Emmanuel Nwanochie
        </Text>

        <Text
          color="white"
          mb={2}
          fontSize={{ base: "37px", md: "50px" }}
          fontWeight="bold"
          lineHeight="110%"
        >
          Immersed In&nbsp;
          <Text as="kbd" display={{ base: "block", md: "none" }}></Text>
          <Text as="span" color="orange">
            Designing
          </Text>
          &nbsp;&&nbsp; <br />
          <Text as="span" color="orange">
            Developing
          </Text>
          &nbsp;Web Applications
        </Text>
        <Text color="white" fontSize={{ base: "sm", md: "lg" }}>
          A Frontend developer with about {new Date().getFullYear() - 2019}
          yrs + experience in designing and developing applications. Uses
          Nextjs, React, Redux, Chakra-Ui tailwindcss, Node and Typescript to
          build applications.
        </Text>

        <Stack spacing={7} direction="row" align="center" mt="5">
          <ContactModal bg="#24285B" />{" "}
          <Button
            _focus={{
              boxShadow: "none",
            }}
            colorScheme={"orange"}
            _hover={{
              bg: "#fff",
              color: "#24285B",
            }}
            bg="orange"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1QYAMhC5sPP6xRwlFxeGF-dyQ3owX_Gd4/view?usp=sharing"
              );
            }}
            size="md"
            borderRadius="sm"
            w="130px"
          >
            Download CV
          </Button>
        </Stack>
      </Box>{" "}
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "100%", md: "35%" }}
        py={{ base: 5 }}
        textAlign="center"
      >
        <Image
          data-aos="fade-up"
          data-aos-duration="500"
          fit="cover"
          ml={{ md: "auto" }}
          w={{ base: "90%", md: "100%" }}
          h={{ base: 64, md: "full" }}
          loading="lazy"
          src={"nwanochie.png"}
          alt="Photo of Nwanochie Emmanuel"
        />
      </Box>
    </Flex>
  );
}

export default HeroContent;
