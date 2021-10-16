import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { ReactNode } from "react";
import Logo from "../navbar/Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("whiteAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box mt="9" bg={"blackAlpha.400"} color={"white"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© {new Date().getFullYear()} Emmanuel Nwanochie.</Text>
        <Stack direction={"row"} spacing={6}>
          <Link
            href={"https://www.linkedin.com/in/emmanuel-nwanochie/"}
            isExternal
          >
            <SocialButton
              as="a"
              target="_blank"
              label={"Emmanuel Nwanochies LinkedIn"}
            >
              <FaLinkedin />
            </SocialButton>
          </Link>
          <Link
            isExternal
            href={
              "https://wa.me/%2B2349154055903?text=Hi%20Emmanuel%2C%20I%20just%20reached%20out%20to%20you%20from%20your%20website.%20I%20am%20_"
            }
          >
            <SocialButton label={"Emmanuel Nwanochies Whatsapp"}>
              <FaWhatsapp />
            </SocialButton>
          </Link>
          <Link isExternal href={"https://github.com/wenotch"}>
            <SocialButton label={"Emmanuel Nwanochie's Github profile"}>
              <FaGithub />
            </SocialButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
