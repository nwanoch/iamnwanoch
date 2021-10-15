import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Box width={"100%"} px={{ base: 8, md: 32 }} py={8}>
      <Text color="#008080" fontSize="2xl" fontWeight="medium">
        Projects
      </Text>
      <Text color="gray.600">Collections of my works</Text>
      <Box width="100%" mt="5px" h="1px" bg="green.100"></Box>

      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={5}>
        <ProjectCards
          url="https://google.com"
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />{" "}
        <ProjectCards
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />{" "}
        <ProjectCards
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />{" "}
        <ProjectCards
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />{" "}
        <ProjectCards
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
