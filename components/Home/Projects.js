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
          img="/blarkmate.svg"
          url="https://blarkmate.vercel.app/"
          title="BlarkMate Shop"
          content="A webshop for the BlarkMate brand. This Web app allows user to determine their shoe size, select color and properly customize their shoe for a comfortable fit."
          stack="Next.Js, React.js, MongoDB, Node.js, Jwt-authentication, Chakra-Ui, Redux etc."
        />{" "}
        <ProjectCards
          img="/coinhereos.svg"
          url="https://coinheros.vercel.app/"
          title="Coinhereos"
          content="Developed the front end of a blockchain web-based application that allows users to carry out escrow services, trade, and invest in cryptocurrencies. Currently being developed using Reactjs, Chakra-UI, React-Redux, Axios (for API calls)"
          stack="Next.Js, React.js, Chakra-Ui, Redux etc."
        />{" "}
        <ProjectCards
          img="/zentrum.svg"
          url="https://zentrumit.herokuapp.com/"
          title="Zentrum Technologies"
          content="Company website for one of the beneficiaries of the acumen rockeller foundation innovation prize 2020."
          stack=" React.js, MongoDB, Node.js, Html, css etc."
        />{" "}
        <ProjectCards
          img="/seerg.svg"
          url="https://seerg.org"
          title="Sustainable Energy Engr. Research Group"
          content="The Sustainable Energy Engineering Research Group (SEERG) is the leading research group in the Department of Mechanical Engineering, University of Nigeria, Nsukka, Nigeria. The research group has grown since its inception in 2015 to incorporate bachelor, master and PhD students exploring the broad energy science and engineering research fields, including primary, applied and multidisciplinary studies."
          stack=" React.js, MongoDB, Node.js, Html, css etc."
        />{" "}
        <ProjectCards
          img="/polo.svg"
          url="http://hiddenone.vercel.app/"
          title="Polo App"
          content="Developed using reactjs, Chakra-Ui, Redux etc. A landing page for a gaming app."
        />{" "}
        {/* <ProjectCards
          url="http://kelouchendu.web.app/"
          title="Kelo Uchendu"
          content="Personal website of uchendu kelo hero, a climate organiser. An individual with a strong background knowledge on environmental and climate change issues, and a passion to provide solutions to these challenges. Demonstrated strong people skills such as team working, grassroots mobilization and leadership in previous roles. Seeking to pursue a career in assisting the transition to a low carbon economy."
          stack=" React.js, Html, css etc."
        /> */}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
