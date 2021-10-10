import { Flex } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/layout";
function HeroContent() {
  return (
    <Flex justify="space-between" px={{ base: 8, md: 32 }}>
      <Box>helooo</Box> <Box>hello</Box>
    </Flex>
  );
}

export default HeroContent;
