import { Box, Flex, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "./ProjectCards";

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

      <Flex>
        <ProjectCards
          title="Title One"
          bgc={"#fcd000"}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />
      </Flex>
    </Box>
  );
}

export default Projects;
