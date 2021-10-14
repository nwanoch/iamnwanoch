import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";
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
      boxShadow={"xl"}
      _hover={{
        boxShadow: "2xl",
        transition: "ease 200ms",
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
      <Link href={props.url} isExternal>
        <Button colorScheme="green" size="sm" px="30px" py="5px" mt="15px" rounded="sm">
          Visit
        </Button>
      </Link>
    </Box>
  );
}

export default ProjectCards;
