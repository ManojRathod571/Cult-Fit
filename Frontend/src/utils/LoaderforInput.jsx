import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

function LoaderInput() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent="center"
      w="40vw"
      h="40vh"
      bgColor="white"
    >
      <Image src="https://icons8.com/preloaders/preloaders/831/Pinwheel.gif" />
    </Flex>
  );
}

export default LoaderInput;
