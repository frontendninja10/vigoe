import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Link,
  useMediaQuery,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { motion, motionValue } from "framer-motion";

function Navigation({
  onContactClick,
  showModal,
  showContractorModal,
  onRequestContractor,
}) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      // bg="black"
      px={"10"}
      py={"10"}
      alignItems="center"
      width={"100vw"}
      color={"white"}
    >
      <Image src={logo} alt="Logo" w={{ base: "60%", md: "unset" }} />

      {isLargerThan768 ? (
        <>
          <Spacer />
          <Flex ml={"-110px"}>
            <Link
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              mr="5"
              _hover={{ textDecoration: "none" }}
            >
              Our Services
            </Link>
            <Link
              mr="5"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
            >
              Our Process
            </Link>
            <Link
              mr="5"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              mr="5"
              onClick={onRequestContractor}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
            >
              Request a Contractor
            </Link>
          </Flex>
          <Spacer />
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onContactClick}
            bg="#0141FF"
            _hover={{ backgroundColor: "#0141FF" }}
          >
            Contact Us
          </Button>
        </>
      ) : (
        <>
          <Spacer />
          <IconButton
            aria-label="Navigation Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
          />
          {!showModal && !showContractorModal && (
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              motionConfig={{ motionReduce: true }}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing="4">
                    <Link>Our Services</Link>
                    <Link>Our Process</Link>
                    <Link>About Us</Link>
                    <Link onClick={onRequestContractor}>
                      Request a Contractor
                    </Link>
                    <Button variant="outline" onClick={onContactClick}>
                      Contact Us
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          )}
        </>
      )}
    </Flex>
  );
}

export default Navigation;
