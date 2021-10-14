import { Box, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React from "react";

function Projects() {
  return (
    <Box width={"100%"} px={{ base: 8, md: 32 }} py={8}>
      <Text color="#008080" fontSize="xl" fontWeight="medium">
        Projects
      </Text>
      <Text>Collection of some projects I have worked on </Text>
      <Box
        width="300px"
        mt="5px"
        h="4px"
        bgGradient="linear(to-l, #FFD201, #24285B)"
      ></Box>
      <Divider />
    </Box>
  );
}

export default Projects;
