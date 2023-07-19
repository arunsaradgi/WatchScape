import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import curios from "../assets/imgs/426x294_CuriosityStream.png";
import discovery from "../assets/imgs/426x294_Discovery.jpg";
import manoramamax from "../assets/imgs/426x294_MANORAMAMAX.jpg";
import amc from "../assets/imgs/Amc.png";
import Docubay from "../assets/imgs/Docubay-426X2947_V1.jpg";
import Erosnow from "../assets/imgs/Erosnow.jpg";
import hoichoi from "../assets/imgs/hoichoi.jpg";
import iWonder from "../assets/imgs/iWonder.png";
import LionsgatePlay from "../assets/imgs/LionsgatePlay.jpg";
import Mubi from "../assets/imgs/Mubi.jpg";
import Stingray from "../assets/imgs/Stingray.png";
import Vrott from "../assets/imgs/Vrott.png";
import { color } from "framer-motion";

//----------------------content starts
const LandingPageContent = () => {
  return (
    <div>
      <Flex
        margin={"10px 0px 30px 0px"}
        backgroundImage={
          "https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/46bc87cd-4c4c-4485-8b93-d5f21c581d56/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        }
        // backgroundColor={"blackAlpha.700"}
        // zIndex={"-1"}

        h={"90vh"}
        // z-index="-1"
      >
        <Flex
          w={"100%"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
        >
          <Heading
            fontFamily={"sans-serif"}
            fontSize={"5xl"}
            fontWeight={"extrabold"}
          >
            Unlimited movies, TV shows and more
          </Heading>
          <Text mt={"10px"} fontFamily={"sans-serif"} fontSize={"2xl"}>
            Watch anywhere. Cancel anytime.
          </Text>
          <Text mt={"15px"} fontFamily={"sans-serif"} fontSize={"2xl"}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
          <Flex alignItems={"center"} h={"100px"} mt={"30px"}>
            <Input
              htmlSize={50}
              h={"75%"}
              borderColor="red"
              border={"0px"}
              focusBorderColor="green"
              width="auto"
              mr={"50px"}
              backgroundColor={"blackAlpha.700"}
              placeholder="Email address"
            />
            <Button p={"0px"} m={"0px"} w={"200px"} h={"75%"} bgColor={"green"}>
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={10} w={"90%"} margin={"auto"}>
        <Box margin={"auto"}>
          <Heading>Your favorite channels all in one place</Heading>
          <Text fontFamily={"cursive"}>
            With WatchScape Video Channels, find shows and movies from your
            favorite channels all in one place. Enjoy with an add-on
            subscription to Channels of your choice
          </Text>
        </Box>
        <SimpleGrid columns={3} spacing={2}>
          <Image src={curios} />
          <Image src={discovery} />
          <Image src={manoramamax} />
          <Image src={amc} />
          <Image src={Docubay} />
          <Image src={Erosnow} />
          <Image src={hoichoi} />
          <Image src={iWonder} />
          <Image src={LionsgatePlay} />
          <Image src={Mubi} />
          <Image src={Stingray} />
          <Image src={Vrott} />
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};

export default LandingPageContent;
