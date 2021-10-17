import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import { Slide, SlideFade } from "@chakra-ui/transition";
import { useDisclosure } from "@chakra-ui/hooks";
import ContactModal from "../ContactModal";
import { scroller } from "react-scroll";
const MenuItem = ({ children, isLast }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8, md: isLast ? 0 : 0 }}
      ml={{ base: 0, sm: isLast ? 0 : 6, md: isLast ? 0 : 12 }}
      display="block"
      color="white"
    >
      <Box>{children}</Box>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = ({ scrollProject, scrollArticle }) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const scrollToProjects = () => {
    scroller.scrollTo("project", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setShow(!show);
  };
  const scrollToArticles = () => {
    scroller.scrollTo("article", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setShow(!show);
  };
  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setShow(!show);
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={{ base: 8, md: 32 }}
      py={{ base: 4, md: 12 }}
      bg={"#008080"}
      color={["white", "white", "primary.700", "primary.700"]}
      position="sticky"
      top="0"
      zIndex="5555555555555554"
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggleMenu}
        padding={5}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          bg="#008080"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem onClick={scrollProject}>Projects</MenuItem>
          <MenuItem onClick={scrollArticle}>Article </MenuItem>
          <ContactModal space={10} bg="teal" />
        </Flex>
        <Slide
          display={{ base: "block", md: "none" }}
          in={show}
          unmountOnExit={true}
          direction="left"
          style={{ marginTop: "14vh" }}
          mt="0"
        >
          <Flex
            position="sticky"
            zIndex={5553}
            align="center"
            bg="#008080"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            display={{ base: "flex", md: "none" }}
            mt="-20px"
          >
            <MenuItem>
              <Box p="10px" onClick={scrollToHome}>
                Home
              </Box>
            </MenuItem>
            <MenuItem>
              <Box p="10px" onClick={scrollToProjects}>
                Projects
              </Box>
            </MenuItem>
            <MenuItem>
              <Box p="10px" onClick={scrollToArticles}>
                Article
              </Box>{" "}
            </MenuItem>
            <ContactModal space={0} mb="20px" bg="teal" />
          </Flex>
        </Slide>
      </Box>
    </Flex>
  );
};

export default Header;
