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
          img="/nascodirect.jpg"
          url="https://nascodirect.net"
          title="Nasco Direct"
          content=" Built an e-commerce web platform for NASCO GROUP one of the largest Fast Moving Consumer Goods (FMCG) companies in the West Africa region. The platform currently has about 500-1000 users interacting with the website daily. https://nascodirect.net"
          stack=" Typescript, Nextjs, TailwindCss, Redux-toolkit."
        />
        <ProjectCards
          img="/polo.svg"
          url="http://hiddenone.vercel.app/"
          title="Polo App"
          content="Developed using reactjs, Chakra-Ui, Redux etc. A landing page for a gaming app."
        />{" "}
        <ProjectCards
          img="/blarkmate.svg"
          url="https://blarkmate.com/"
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
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
