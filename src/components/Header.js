import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  useDisclosure,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'


// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#2c2560"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          TSHAREp
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="https://dexscreener.com/fantom/0x6f4b0b5f4be32ebc03c02a8f3a0a54fa4270136d" isExternal><FontAwesomeIcon icon={faChartLine} /></Link>
        <Link href="https://t.me/TSHAREprinter" isExternal><FontAwesomeIcon icon={faTelegramPlane} /></Link>
        <Link href="https://twitter.com/TsharePrinter" isExternal><FontAwesomeIcon icon={faTwitterSquare} /></Link>
        
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </Flex>
  );
};

export default Header;
