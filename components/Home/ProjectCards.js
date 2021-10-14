import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
function ProjectCards(props) {
  return (
    <Box
      w={{ base: "100%", md: "400px" }}
      p={"30px"}
      br="5px"
      bg={useColorModeValue("white", "gray.900")}
      mt={15}
      mr={{ base: "0", md: "20px" }}
      color="blackAlpha.700"
      boxShadow={"2xl"}
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
    </Box>
  );
}

export default ProjectCards;
