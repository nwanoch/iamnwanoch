import { Flex } from "@chakra-ui/react";
import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";

function HeroContent() {
  return (
    <Flex
      pb={{ base: 10, md: 0 }}
      justify="space-between"
      px={{ base: 8, md: 32 }}
      align="center"
      direction={{ base: "column", md: "row" }}
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        backgroundImage={{ base: "url('nwanochie.png')", md: " " }}
        backgroundPosition="center"
        backgroundColor="rgba(0, 128, 128); "
        backgroundBlendMode="soft-light"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <Text color="white" fontSize={{ base: "sm", md: "lg" }}>
          Hi! I am Emmanuel Nwanochie
        </Text>

        <Text
          color="white"
          mb={2}
          fontSize={{ base: "37px", md: "50px" }}
          fontWeight="bold"
          lineHeight="110%"
        >
          Immersed In 
          <Text as="span" color="#FFD201">
            Designing
          </Text>
          &
          <Text as="span" color="#FFD201">
            Developing
          </Text>
          Web Application
        </Text>
        <Text color="white" fontSize={{ base: "sm", md: "lg" }}>
          A software developer with about 2yrs + experience in designing,
          developing and testing web applications. Uses Reactjs, Nextjs, Redux,
          TailwindCss, Chakra-Ui, Nodejs amongst other tools to effectively
          translate user and business needs into functional softwares codes.
        </Text>

        <Stack spacing={4} direction="row" align="center" mt="5">
          <Button
            px={6}
            bg="#fff"
            color="#24285B"
            _hover={{
              bg: "#FFD201",
              color: "#fff",
            }}
            size="md"
            borderRadius="sm"
          >
            Projects
          </Button>
          <Button
            bg="#24285B"
            color="#fff"
            _hover={{
              bg: "#FFD201",
              color: "#fff",
            }}
            size="md"
            borderRadius="sm"
          >
            Contact me
          </Button>
        </Stack>
      </Box>{" "}
      <Box
        display={{ base: "none", md: "block" }}
        w={{ base: "100%", md: "40%" }}
        py={{ base: 5 }}
        textAlign="center"
      >
        <Image
          fit="cover"
          ml={{ md: "auto" }}
          w={{ base: "90%", md: "70%" }}
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
