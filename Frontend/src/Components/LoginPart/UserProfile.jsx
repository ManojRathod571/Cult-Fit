import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../utils/Footer";
import CultStoreNavbar from "../CultStoreNavbar/CultStoreNavbar";

function UserProfile() {
  return (
    <>
      <CultStoreNavbar />
      <br />
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        w="80%"
        m="auto"
        h="90vh"
      >
        <VStack h="full" px="20">
          <Avatar
            size="3xl"
            src="https://avatars.githubusercontent.com/u/107462720?v=4"
          />
          <Input type="file" />
        </VStack>
        <VStack h="full" align="start" px="10" py="0">
          <Flex w="full" justifyContent={"center"}>
            {" "}
            <Heading
              align="center"
              color=" rgb(255, 50, 120)"
              fontSize={"20px"}
              letterSpacing={"16px"}
              fontWeight="500"
            >
              USER DETAILS
            </Heading>
          </Flex>
          <br />
          <Text>Name : Akshay rajput</Text>
          <Input type="text" placeholder="Enter Updated name" />
          <br />
          <Text>password : Password</Text>
          <Input type="text" placeholder="Enter Updated password" />
          <br />
          <Text>Location : Location , pinCode : PinCode</Text>
          <Input type="text" placeholder="Enter Updated PinCode" />
          <br />
          <Button
            w="full"
            bgColor="rgba(255, 49, 109, 0.7)"
            size="sm"
            _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
            letterSpacing={"1.3px"}
            fontWeight="500"
            fontSize="14px"
            color="white"
          >
            {" "}
            Update profile
          </Button>
        </VStack>
      </Grid>
      <Footer />
    </>
  );
}

export default UserProfile;
