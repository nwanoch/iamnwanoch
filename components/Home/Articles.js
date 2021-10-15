import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <Box width={"100%"} px={{ base: 8, md: 32 }} py={8} bg="#008080">
      <Text color="#fff" fontSize="2xl" fontWeight="medium">
        Recent Articles
      </Text>
      <Link href="/articles" _hover={{ textDecoration: "none" }}>
        <Button
          rightIcon={<ArrowForwardIcon />}
          bg="#008080"
          color="white"
          pl="0"
          size="sm"
        >
          View all Articles
        </Button>
      </Link>
      <Box width="100%" mt="5px" h="1px" bg="green.100"></Box>

      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={5}>
        <ArticleCard
          url="https://google.com"
          title="Title One"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"
        />{" "}
      </SimpleGrid>
    </Box>
  );
}

export default Articles;
