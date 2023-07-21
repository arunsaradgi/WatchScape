import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";

import facebook from "../assets/imgs/facebook.gif";
import gmail from "../assets/imgs/gmail.png";
import Linkedin from "../assets/imgs/Linkedin.gif";

const Footer = () => {
  return (
    <Box bg="#333" color="white" py="4" as="footer">
      <Container maxW="1200px">
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          <GridItem>
            <Text fontSize="x-large" fontWeight="bold">
              About Us
            </Text>
            <ul>
              <li>Company</li>
              <li>Careers</li>
              <li>Investor Relations</li>
            </ul>
          </GridItem>
          <GridItem>
            <Text fontSize="x-large" fontWeight="bold">
              Contact
            </Text>
            <ul>
              <li>Help Center</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </GridItem>
          <GridItem>
            <Text fontSize="x-large" fontWeight="bold">
              Legal
            </Text>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </GridItem>
        </Grid>
        <HStack justifyContent={"space-evenly"} mt="10">
          <a href="#facebook">
            <img src={facebook} alt="Facebook" width="30" height="30" />
          </a>
          <a href="#twitter">
            <img src={gmail} alt="Twitter" width="30" height="30" />
          </a>
          <a href="#instagram">
            <img src={Linkedin} alt="Instagram" width="30" height="30" />
          </a>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
