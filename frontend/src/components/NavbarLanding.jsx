import React from "react";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, Search2Icon } from "@chakra-ui/icons";
import { BiSolidUserCircle } from "react-icons/bi";

const NavbarLanding = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dropDown2Disclosure = useDisclosure();
  const dropDown3Disclosure = useDisclosure();
  const dropDown4Disclosure = useDisclosure();

  return (
    <Flex
      justifyContent={"center"}
      m={"10px"}
      alignItems={"center"}
      width={"100%"}
    >
      <Menu isOpen={isOpen} w={"80px"}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          //   onMouseEnter={isOpen}
        >
          Home {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          <MenuList minWidth="unset">
            <MenuItem>All</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>TV Shows</MenuItem>
          </MenuList>
        </MenuButton>
      </Menu>
      <Menu isOpen={dropDown2Disclosure.isOpen} w={"80px"}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={dropDown2Disclosure.onOpen}
          onMouseLeave={dropDown2Disclosure.onClose}
        >
          Store{" "}
          {dropDown2Disclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList
          minWidth="unset"
          onMouseEnter={dropDown2Disclosure.onOpen}
          onMouseLeave={dropDown2Disclosure.onClose}
        >
          <MenuItem>All</MenuItem>
          <MenuItem>Rent</MenuItem>
          <MenuItem>Channels</MenuItem>
        </MenuList>
      </Menu>
      <Button variant={"ghost"} bgColor={"green.600"}>
        Live TV
      </Button>
      <Menu isOpen={dropDown3Disclosure.isOpen} w={"80px"}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={dropDown3Disclosure.onOpen}
          onMouseLeave={dropDown3Disclosure.onClose}
        >
          Categories
          {dropDown3Disclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          <MenuList minWidth="unset">
            <Heading>Genres</Heading>
            <SimpleGrid columns={2} spacing={2}>
              <MenuItem>Action and adventure</MenuItem>
              <MenuItem>Anime</MenuItem>
              <MenuItem>Comedy</MenuItem>
              <MenuItem>Documentary</MenuItem>
              <MenuItem>Drama</MenuItem>
              <MenuItem>Fantasy</MenuItem>
              <MenuItem>Horror</MenuItem>
              <MenuItem>International</MenuItem>
              <MenuItem>Kids</MenuItem>
              <MenuItem>Music videos and concerts</MenuItem>
              <MenuItem>Romance</MenuItem>
              <MenuItem>Mystery and thrillers</MenuItem>
            </SimpleGrid>
          </MenuList>
        </MenuButton>
      </Menu>

      <Button variant={"ghost"}>
        <Search2Icon />
      </Button>
      <Button variant={"ghost"} bgColor={"green.600"}>
        Try for Free
      </Button>
      <Menu isOpen={dropDown4Disclosure.isOpen} w={"80px"}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={dropDown4Disclosure.onOpen}
          onMouseLeave={dropDown4Disclosure.onClose}
        >
          EN
          {dropDown4Disclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          <MenuList minWidth="unset">
            <SimpleGrid columns={4} spacing={2}>
              <MenuItem>English</MenuItem>
              <MenuItem>Hindi</MenuItem>
              <MenuItem>Tamil</MenuItem>
              <MenuItem>Telugu</MenuItem>
              <MenuItem>Marathi</MenuItem>
              <MenuItem>Gujarathi</MenuItem>
              <MenuItem>Malayalam</MenuItem>
              <MenuItem>Bengali</MenuItem>
              <MenuItem>Rajasthani</MenuItem>
            </SimpleGrid>
          </MenuList>
        </MenuButton>
      </Menu>
      <Button bgColor={"green.600"}>Login</Button>
    </Flex>
  );
};

export default NavbarLanding;
