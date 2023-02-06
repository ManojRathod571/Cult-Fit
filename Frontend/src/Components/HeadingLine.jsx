import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { Link } from "react-router-dom";

function HeadingLine({ title, go }) {
  return (
    <Flex
      w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
      m="auto"
      gap="5"
      alignItems={"self-end"}
      mt="9"
      mb="-8"
    >
      <Heading as="i">{title}</Heading>
      <Link to={go}>
        <Text fontSize={"17px"} color="#FF3278">
          VIEW ALL
        </Text>
      </Link>
    </Flex>
  );
}

export default memo(HeadingLine);
