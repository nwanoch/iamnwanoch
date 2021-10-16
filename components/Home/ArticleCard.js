import { Box, Text } from "@chakra-ui/layout";
import React from "react";

function ArticleCard({ articles }) {
  return (
    <Box>
      {articles.map((item) => {
        return (
          <Box
            key={item.author}
            bg="#FFF"
            mt="10px"
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
            <Text className="article__category"></Text>
            <Text className="article__title">{}</Text>
            <Text className="article__excerpt">{}</Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default ArticleCard;
