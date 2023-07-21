import {
  Box,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Test = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => {
    setIsHovered(true);
    onOpen();
  };

  const handleClose = () => {
    setIsHovered(false);
    onClose();
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      onOpen();
    }
  };

  const handleMouseLeave = () => {
    if (isOpen) {
      setIsHovered(false);
      onClose();
    }
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      py={4}
      px={8}
      bg="black"
      color="white"
    >
      <Heading as="h1" size="lg">
        Amazon Prime
      </Heading>

      <Menu isOpen={isOpen && isHovered} onClose={handleClose}>
        <MenuButton
          as={Text}
          fontWeight="bold"
          cursor="pointer"
          onMouseEnter={handleOpen}
          onMouseLeave={handleMouseLeave}
        >
          Dropdown
        </MenuButton>
        <MenuList
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onBlur={() => {
            if (!isHovered) {
              onClose();
            }
          }}
        >
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
          <MenuItem>Item 6</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Test;
