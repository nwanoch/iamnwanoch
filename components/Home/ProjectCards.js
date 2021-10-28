import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";
function ProjectCards(props) {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="300"
      minW={{ base: "100%", md: "300px" }}
      p={"30px"}
      cursor="pointer"
      rounded="md"
      bg={useColorModeValue("white", "gray.900")}
      mt={15}
      mr={{ base: "0", md: "20px" }}
      color="blackAlpha.700"
      boxShadow={"lg"}
      transition=" 0.3s ease"
      _hover={{
        boxShadow: "xl",
        transition: "ease 200ms",
      }}
      _active={{
        boxShadow: "none",
        transformOrigin: "center",
        transform: " scale(0.98)",
      }}
    >
      <Text color="gray.600">{props.title}</Text>
      <Box
        w="100%"
        height="4px"
        mt="10px"
        bgGradient="linear(to-l, #FFD201, #24285B)"
      ></Box>
      <Text mt="15px" color="gray.600">
        {" "}
        {props.content}
      </Text>
      <Text mt="5px" color="green" fontWeight="">
        Tools: {props.stack}
      </Text>
      <Link href={props.url} isExternal>
        <Button
          colorScheme="green"
          size="sm"
          px="30px"
          py="5px"
          mt="15px"
          rounded="sm"
        >
          Visit
        </Button>
      </Link>
    </Box>
  );
}

export default ProjectCards;
