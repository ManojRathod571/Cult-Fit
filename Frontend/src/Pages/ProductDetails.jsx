import {
  Input,
  Flex,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPin } from "../Redux/PinCode/pincode.actions";

function ProductDetails() {
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handlePincode = (e) => {
    setPincode(e.target.value);
  };

  const toast = useToast();
  return (
    <>
      <Text
        fontWeight="500"
        fontSize={"16px"}
        letterSpacing=".3px"
        color="blackAlpha.700"
      >
        PRODUCT DETAILS
      </Text>
      <UnorderedList
        pl="10"
        color="gray"
        fontWeight="400"
        fontSize={"13px"}
        letterSpacing=".3px"
      >
        <ListItem>Colour: Black</ListItem>
        <ListItem>
          German technology in the insole provides cushioning while retaining
          its shape over time.
        </ListItem>
        <ListItem>Upper mesh engineered for better breathability.</ListItem>
        <ListItem>Compressed EVA midsole for higher rebound.</ListItem>
        <ListItem>
          High quality carbon rubber in the outsole for durability, enhanced
          grip, traction, flexibility.
        </ListItem>
      </UnorderedList>
      <Box w="full" border="1px solid gray"></Box>
      <Flex
        position="relative"
        alignItems="center"
        borderRadius="5px"
        w="full"
        border="1px solid gray"
      >
        <Input
          value={pincode}
          type="text"
          placeholder="Enter your pincode"
          outline="none"
          border="none"
          flex="1"
          onChange={(e) => handlePincode(e)}
          fontSize="16px"
          focusBorderColor="none"
          _placeholder={{
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: ".3px",
            color: "blackAlpha.600",
          }}
        />
        <Button
          //   isLoading={foundPinCode[0]?.Status !== "Error" ? ""}
          isLoading={loading ? "fre" : ""}
          loadingText="Checking ..."
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="start"
          border="none"
          color="blackAlpha.700"
          fontSize="14px"
          _hover={{ bg: "white" }}
          onClick={() => {
            setLoading(true);
            axios
              .get(`https://api.postalpincode.in/pincode/${pincode}`)
              .then((res) => {
                console.log(res.data);
                res.data[0].Message === "No records found"
                  ? toast({
                      title: `We don't deliver at this loaction`,
                      status: "warning",
                      position: "top",
                      isClosable: true,
                      duration: 2000,
                    })
                  : toast({
                      title: `Product is available at ${res?.data[0]?.PostOffice[0]?.District}`,
                      status: "success",
                      position: "top",
                      isClosable: true,
                      duration: 2000,
                    });
                setLoading(false);
              })
              .catch((err) => console.log(err));
          }}
        >
          CHECK
        </Button>
      </Flex>
      <UnorderedList
        pl="10"
        color="gray"
        fontWeight="400"
        fontSize={"13px"}
        letterSpacing=".3px"
      >
        <ListItem> Free delivery within 5-7 days</ListItem>
        <ListItem>Easy 30 days return available</ListItem>
        <ListItem>30 days exchange available</ListItem>
        <ListItem fontWeight="600" color="blackAlpha.900">
          To minimise contact between you and the delivery partner, Pay on
          Delivery option is temporarily disabled.
        </ListItem>
      </UnorderedList>
      <Box w="full" border="1px solid gray"></Box>
      <Text
        fontWeight="500"
        fontSize={"16px"}
        letterSpacing=".3px"
        color="blackAlpha.700"
      >
        Specifications
      </Text>
      <Text pl="10" color="black" fontWeight="300" fontSize={"13px"}>
        Country of Origin: INDIA
      </Text>
    </>
  );
}

export default ProductDetails;
