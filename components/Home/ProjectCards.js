import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";
function ProjectCards(props) {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="300"
      minW={{ base: "100%", md: "300px" }}
      p={"30px"}
      position="relative"
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
      <Box
        minH={"170px"}
        maxH="250px"
        // bg="#D9D9D9"
        w={"full"}
        bgImage={`${props.img}`}
        bgSize="cover"
        bgPosition="top center"
        overflow={"hidden"}
      >
        {/* <Image src={props.img} mb="20px" /> */}
      </Box>
      <Text color="gray.600" fontWeight={700} mt="20px">
        {props.title}
      </Text>
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
      <Text mb={"30px"} mt="15px" color="green" fontWeight="">
        Tools: {props.stack}
      </Text>
      <Box
        position={{ base: "", md: "absolute" }}
        left="0"
        w="full"
        bottom={"0px"}
      >
        <Link href={props.url} isExternal={props.url !== "#" ? true : false}>
          <Button
            colorScheme={props.url === "#" ? "orange" : "green"}
            size="sm"
            px="30px"
            py="5px"
            mt="15px"
            rounded="sm"
            isDisabled={props.url === "#" ? true : false}
          >
            {props.url === "#" ? "Confidential" : "View Project"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ProjectCards;
