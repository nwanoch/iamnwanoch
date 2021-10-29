import { Box } from "@chakra-ui/react";
import React from "react";

function Hero({ children }) {
  return (
    <Box height={{ md: "80vh" }} pt="50px" width={"100%"} bg="#008080">
      {children}
    </Box>
  );
}

export default Hero;
