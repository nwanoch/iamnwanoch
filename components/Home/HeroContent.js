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
          Hi!  Emmanuel Nwanochie
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
          <Text as="span" color="#FFD201">
            Designing
          </Text>
          &nbsp;&&nbsp; <br />
          <Text as="span" color="#FFD201">
            Developing
          </Text>
          &nbsp;Web and Mobile Applications
        </Text>
        <Text color="white" fontSize={{ base: "sm", md: "lg" }}>
          A Frontend developer with about {new Date().getFullYear() - 2019}
          yrs + experience in designing and developing applications. Uses Nextjs, tailwindcss, Node and Typescript for web
          development and Flutter for mobile app development.
        </Text>

        <Stack spacing={4} direction="row" align="center" mt="5">
          {/* <Button
            bg="#24285B"
            color="#fff"
            _hover={{
              bg: "#fff",
              color: "#24285B",
            }}
            size="md"
            borderRadius="sm"
          >
            Contact me
          </Button> */}
          <ContactModal bg="#24285B" />
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
