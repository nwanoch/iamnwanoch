import { Button } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Link, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import ArticleCard from "./ArticleCard";
import Footer from "./Footer";

function Articles({ articles }) {
  return (
    <Box width={"100%"} px={{ base: 8, md: 32 }} py={8} bg="#008080">
      <Text color="#fff" fontSize="2xl" fontWeight="medium">
        Recent Articles
      </Text>
      <Link
        href="https://nwanoch.medium.com/"
        isExternal
        _hover={{ textDecoration: "none" }}
      >
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
      <ArticleCard articles={articles} />

      <Footer />
    </Box>
  );
}

export default Articles;
