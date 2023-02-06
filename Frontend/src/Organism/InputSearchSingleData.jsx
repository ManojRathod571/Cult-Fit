import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "../Redux/Cart/cart.actions";

function InputSearchSingleData({ input, value, height }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.data?.token);
  const toast = useToast();
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);


  const handleaddCart = (_id, quantity, token) => {
    dispatch(postCart(_id, quantity, token));
    toast({
      title: `Hey ! Hope you are doing well 💛 `,
      description: "Product Added Successfully😊",
      status: "success",
      position: "top",
      isClosable: true,
      duration: 2000,
    });
  };

  return (
    <Flex
      flexDirection="column"
      h={value == "" ? "" : `66vh`}
      overflow={"auto"}
      position="absolute"
      zIndex="2"
      bgColor="white"
      top="101%"
      left="0"
      w="full"
      right="0"
      _hover={{ cursor: "pointer" }}
    >
      {input?.map((elem) => {
        return (
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "1fr 2fr 1fr",
            }}
            h="22vh"
            w="500px"
            m="auto"
            border="1px solid 	#F0F0F0"
          >
            <Box overflow="hidden" w="fit-content">
              <Image
                src={elem.image}
                w="80%"
                _hover={{
                  transform: "scale(1.2)",
                  transformOrigin: "50% 50%",
                  cursor: "pointer",
                  opacity: ".9",
                }}
                transition="transform .5s"
              />
            </Box>
            <VStack alignItems="start" pt="2">
              <Text
                color="rgba(0, 0, 0, 0.6)"
                fontSize={"15px"}
                letterSpacing=".2px"
              >
                {elem.brand}
              </Text>
              <Heading
                color="rgb(38, 38, 38)"
                fontSize={"12px"}
                letterSpacing=".2px"
                fontWeight="400"
                display={{ base: "none", md: "flex" }}
              >
                {elem.title}
              </Heading>
              <HStack gap="4">
                <Heading
                  color="rgb(38, 38, 38)"
                  fontSize={"15px"}
                  letterSpacing=".2px"
                  fontWeight="500"
                >
                  ₹ {elem.price1}
                </Heading>
                <Heading
                  color="rgba(0, 0, 0, 0.6)"
                  fontSize={"15px"}
                  letterSpacing=".2px"
                  fontWeight="400"
                  as="s"
                >
                  {" "}
                  ₹ {elem.price2}
                </Heading>
                <Heading
                  color=" rgb(255, 50, 120)"
                  fontSize={"17px"}
                  letterSpacing=".2px"
                  fontWeight="500"
                >
                  {elem.off}% off
                </Heading>
              </HStack>
              <HStack>
                <CiDeliveryTruck color="rgb(255, 50, 120)" />
                <Text fontSize={"12px"} as="i" fontWeight={"500"}>
                  EXPRESS
                </Text>{" "}
                <span style={{ fontSize: "12px" }}>Delivery in 2 days</span>
              </HStack>
            </VStack>
            <VStack pt="5" gap="3">
              <BsFillHeartFill
                fontSize={"32px"}
                color="rgb(255, 50, 120)"
                _hover={{ color: "blue" }}
                onClick={() => {
                  !isAuth
                    ? toast({
                        duration: 2000,
                        title: `hmm! Want to add in wishlist ? ❤️`,
                        description: "You have to LOGIN first 🌚",
                        position: "top",
                        status: "error",
                        isClosable: true,
                      })
                    : axios
                        .post(
                          `${process.env.REACT_APP_URL}/wishlist`,
                          {
                            product: elem._id,
                          },
                          {
                            headers: {
                              token: token,
                            },
                          }
                        )
                        .then((res) =>
                          res.data === "Already present to wishlist"
                            ? toast({
                                duration: 2000,
                                title: `Hey ! 💛 `,
                                description:
                                  " This item is already present in your wishlist 💔 ",
                                position: "top",
                                status: "error",
                                isClosable: true,
                              })
                            : toast({
                                duration: 2000,
                                title: `Hey ! Hope you are doing well  💛 `,
                                description:
                                  "This item has been added to Wishlist 💛",
                                position: "top",
                                status: "success",
                                isClosable: true,
                              })
                        )
                        .catch((err) => console.log(err));
                }}
              />
              <BsFillCartPlusFill
                fontSize={"32px"}
                color="rgb(255, 50, 120)"
                _hover={{ color: "blue" }}
                onClick={() => {
                  !isAuth
                    ? toast({
                        duration: 2000,
                        title: `hmm! Want to add in Cart 😒 ?`,
                        description: "You have to LOGIN first 😊",
                        position: "top",
                        status: "error",
                        isClosable: true,
                      })
                    : handleaddCart(elem._id, 1, token);
                }}
              />
            </VStack>
          </Grid>
        );
      })}
    </Flex>
  );
}

export default InputSearchSingleData;
