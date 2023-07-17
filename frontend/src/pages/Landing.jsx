import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavbarLanding from "../components/NavbarLanding";
import LandingPageContent from "../components/LandingPageContent";
// import Test from "../components/Test";

export const Landing = () => {
  return (
    <>
      {/* <Test /> */}
      <NavbarLanding />
      <LandingPageContent />
    </>
  );
};
