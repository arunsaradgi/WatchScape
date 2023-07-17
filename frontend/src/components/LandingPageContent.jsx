import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
//----------------------content starts
const LandingPageContent = () => {
  return (
    <SimpleGrid columns={2} spacing={10} w={"90%"} margin={"auto"}>
      <Box margin={"auto"}>
        <Heading>Your favorite channels all in one place</Heading>
        <Text fontFamily={"cursive"}>
          With WatchScape Video Channels, find shows and movies from your
          favorite channels all in one place. Enjoy with an add-on subscription
          to Channels of your choice
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
  );
};

export default LandingPageContent;
