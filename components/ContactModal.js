import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Link, Stack, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { VisuallyHidden, chakra, useColorModeValue } from "@chakra-ui/react";

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

export default function ContactModal({ space, mb, bg }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        color="#fff"
        _hover={{
          bg: "#fff",
          color: "#24285B",
        }}
        bg={bg}
        size="md"
        ml={space}
        borderRadius="sm"
        onClick={onOpen}
        mb={mb}
      >
        Contact me
      </Button>

      <Modal isCentered size={"xs"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb="0">Contact Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Text mb="30px">Feel Free to reach though any of these medium</Text> */}
            <Text mb="10px">
              Email:{" "}
              <Text
                as="a"
                href="mailto:Emmanuelnwanochie247@gmail.com"
                target="_blank"
              >
                Emmanuelnwanochie247@gmail.com
              </Text>
            </Text>
            <Text mb="10px">Linkedin, Github, Whatsapp, Medium</Text>

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
              </Link>{" "}
              <Link
                isExternal
                href={
                  "https://wa.me/%2B2349154055903?text=Hi%20Emmanuel%2C%20I%20just%20reached%20out%20to%20you%20from%20your%20website.%20I%20am%20_"
                }
              >
                <SocialButton label={"Emmanuel Nwanochies Whatsapp"}>
                  <FaWhatsapp />
                </SocialButton>
              </Link>{" "}
              <Link
                isExternal
                href={"https://https://nwanoch.medium.com/.com/wenotch"}
              >
                <SocialButton label={"Emmanuel Nwanochie's Github profile"}>
                  <FaGithub />
                </SocialButton>
              </Link>{" "}
              <Link href={"https://nwanoch.medium.com/"} isExternal>
                <SocialButton
                  as="a"
                  target="_blank"
                  label={"Emmanuel Nwanochies Medium Profile"}
                >
                  <AiFillMediumCircle />
                </SocialButton>
              </Link>{" "}
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
