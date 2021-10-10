import { Box } from "@chakra-ui/react";
import React from "react";

function Hero({ children }) {
  return (
    <Box height={"95vh"} width={"100%"} bg="#005D5D">
      {children}
    </Box>
  );
}

export default Hero;
