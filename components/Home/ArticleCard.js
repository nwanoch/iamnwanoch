import { Button } from "@chakra-ui/button";
import { Box, Link, Text, SimpleGrid } from "@chakra-ui/layout";
import React from "react";

function ArticleCard({ articles }) {
  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} mt="20px" spacing={5}>
      {articles.map((item) => {
        return (
          <Box
            key={item.author}
            bg="#FFF"
            mb="20px"
            p="20px"
            br=" 2px"
            boxShadow="lg"
            cursor="pointer"
            transition=" 0.3s ease"
            _hover={{ boxShadow: "xl" }}
            _active={{
              boxShadow: "none",
              transformOrigin: "center",
              transform: " scale(0.98)",
            }}
          >
            <Text
              display="inline-block"
              p="8px 10px"
              m=" 0 0 10px"
              bg="#24285B"
              color="#FFF "
              fontSize="0.75rem"
              fontWeight="600 "
              letterSpacing="0.075rem"
            >
              {item.categories}
            </Text>
            <Text
              margin="0 0 10px"
              color="#444"
              fontSize="1.25rem"
              fontWeight="600"
              lineHeight="1.75rem"
            >
              {item.title}
            </Text>
            <Text mb="5px">Published: {item.pubDate.slice(0, 10)}</Text>
            <Text color="#666" lineHeight="1.5rem" fontSize="0.875rem">
              {`${
                item.description.replace(/<[^>]+>/g, "").slice(0, 250) + "..."
              }`}
            </Text>
            <Link href={item.link} isExternal>
              <Button
                size="sm"
                px="30px"
                py="5px"
                color="#24285B"
                mt="15px"
                rounded="sm"
              >
                Read more
              </Button>
            </Link>
            <Text mt="25px">Author: {item.author}</Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}

export default ArticleCard;
