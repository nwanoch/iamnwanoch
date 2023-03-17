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
          img="/circo-main.png"
          url="https://circo.africa"
          title="Circo Africa"
          content="A content-sharing platform, that lets users share video content, Livestream, view video content, and manage their wallet."
          stack=" Typescript, Nodejs, Nextjs, MongoDb, Chakra-UI and Redux-toolkit."
        />
        <ProjectCards
          img="/tialala.png"
          url="https://tialala-web.vercel.app/"
          title="Tialala App"
          content="A celebrity/user connection web app. Leveraged Next.js, TypeScript, Node.js, Chakra UI, Redux, and MongoDB to build this applications"
          stack="Typescript, Nodejs, Nextjs, MongoDb, Chakra-UI and Redux-toolkit."
        />
        <ProjectCards
          img="/cims-system.png"
          url="#"
          title="Case Information Management System"
          content="A web application that helps the UNICEF Nigeria to case of any abuse cases. It features anonymous reporting, case management, and data analysis. I focused on the frontend of the application and Developed it using Nextjs, Chakra-Ui, Tailwindcss and Redux."
          stack=" Typescript, Nextjs, Chakra-UI and Redux-toolkit."
        />
        <ProjectCards
          img="/nascodirect.jpg"
          url="https://nascodirect.net"
          title="Nasco Direct"
          content=" Built an e-commerce web platform for NASCO GROUP one of the largest Fast Moving Consumer Goods (FMCG) companies in the West Africa region. The platform currently has about 500-1000 users interacting with the website daily. https://nascodirect.net"
          stack=" Typescript, Nextjs, TailwindCss, Redux-toolkit."
        />
        <ProjectCards
          img="/hr-system.png"
          url="#"
          title="Employee Management System"
          content="Developed to help NASCO GROUP of Companies manage their employees and their tasks. I Nextjs, Redux, Chakra UI, and other technologies to build this application. It features Task Management, Leave Management, Payroll, Company communication, user dashboard, supervisor dashboard etc. The platform currently has over 1000 users."
          stack=" Typescript, Nextjs, Chakra-UI and Redux-toolkit."
        />
        {/* <ProjectCards
          img="/blarkmate.svg"
          url="https://blarkmate.com/"
          title="BlarkMate Shop"
          content="A webshop for the BlarkMate brand. This Web app allows user to determine their shoe size, select color and properly customize their shoe for a comfortable fit."
          stack="Next.Js, React.js, MongoDB, Node.js, Jwt-authentication, Chakra-Ui, Redux etc."
        />{" "} */}
        <ProjectCards
          img="/coinhereos.svg"
          url="https://coinheroes.co.uk/"
          title="Coinhereos"
          content="Developed the front end of a blockchain web-based application that allows users to carry out escrow services, trade, and invest in cryptocurrencies. Currently being developed using Reactjs, Chakra-UI, React-Redux, Axios (for API calls)"
          stack="Next.Js, React.js, Chakra-Ui, Redux etc."
        />{" "}
        {/* <ProjectCards
          img="/polo.svg"
          url="http://hiddenone.vercel.app/"
          title="Polo App"
          content="Developed using reactjs, Chakra-Ui, Redux etc. A landing page for a gaming app."
        />{" "} */}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
