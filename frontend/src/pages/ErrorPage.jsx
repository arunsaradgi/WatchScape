import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import error from "../assets/imgs/error.png";

const ErrorPage = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Box boxSize="sm" margin={"auto"}>
        <Image src={error} alt="error" />
      </Box>
      {/* <Heading as="h1" size="xl" mb={4}>
        Error 404
      </Heading> */}
      <Text fontSize="lg" fontWeight="bold" mb={8}>
        Page not found
      </Text>
      <Text fontSize="md" color="gray.600">
        Sorry, the page you are looking for does not exist.
      </Text>
    </Box>
  );
};

export default ErrorPage;
