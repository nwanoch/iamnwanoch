import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React from "react";
import ProjectCards from "./ProjectCards";
import { useRef } from "react";

function Projects() {
  return (
    <Box width={"100%"} px={{ base: 8, md: 32 }} py={8}>
      <Text
        color="#008080"
        fontSize="2xl"
        fontWeight="medium"
        className="project"
      >
        Projects
      </Text>
      <Text color="gray.600">Collections of my works</Text>
      <Box width="100%" mt="5px" h="1px" bg="green.100"></Box>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        <ProjectCards
          url="https://huewallet.vercel.app"
          title="Huewallet Webapp"
          content="A mobile money web application that allows users to send money from one user to another, including users within the huewallet application and also to other banks within Nigeria"
          stack="Next.Js, React.js, MongoDB, Node.js, Jwt-authentication, Chakra-Ui, Redux etc."
        />{" "}
        <ProjectCards
          url="https://pay-go-admin-web-ap-p.vercel.app/"
          title="Admin Management Dashboard"
          content="A typical mirror image I built for a mobile money application admin. Developed to allow administrator of a virtual mobile application to allow admin to view all registered users on their platform, set current settings of the virtual mobile application. To get access, username: test@gmail.com, password: wekeepmoving"
          stack="Next.Js, React.js, Chakra-Ui, Redux etc."
        />{" "}
        <ProjectCards
          url="http://zentrumit.com"
          title="Zentrum Technologies"
          content="Company website for one of the beneficiaries of the acumen rockeller foundation innovation prize 2020."
          stack=" ejs, nodejs, expressjs, Html, css etc."
        />{" "}
        <ProjectCards
          url="https://seerg.org"
          title="Sustainable Energy Engr. Research Group"
          content="The Sustainable Energy Engineering Research Group (SEERG) is the leading research group in the Department of Mechanical Engineering, University of Nigeria, Nsukka, Nigeria. The research group has grown since its inception in 2015 to incorporate bachelor, master and PhD students exploring the broad energy science and engineering research fields, including primary, applied and multidisciplinary studies."
          stack=" React.js, MongoDB, Node.js, Html, css etc."
        />
        <ProjectCards
          url="http://kelouchendu.web.app/"
          title="Kelo Uchendu"
          content="Personal website of uchendu kelo hero, a climate organiser. An individual with a strong background knowledge on environmental and climate change issues, and a passion to provide solutions to these challenges. Demonstrated strong people skills such as team working, grassroots mobilization and leadership in previous roles. Seeking to pursue a career in assisting the transition to a low carbon economy."
          stack=" React.js, Html, css etc."
        />
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
