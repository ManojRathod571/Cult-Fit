import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  Toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BsCartPlusFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleData } from "../Redux/SingleProduct/single.actions";
import { SlClose } from "react-icons/sl";
import styled from "styled-components";
import axios from "axios";
import { postCart } from "../Redux/Cart/cart.actions";

function SingleProduct({
  image,
  price1,
  price2,
  off,
  title,
  brand,
  launched,
  _id,
}) {
  const route = useSelector((state) => state?.button?.route);
  const dispatch = useDispatch();
  const toast = useToast();
  const token = useSelector((state) => state?.auth?.data?.token);
  const cartData = useSelector((state) => state?.cart?.cartData);
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);

  const { wish } = useParams();

  const handleGO = (_id) => {
    dispatch(getSingleData(_id));
  };

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
    <StyledVStack alignItems={"start"} position="relative">
      <Box
        className="container"
        overflow={"hidden"}
        borderRadius={"2px"}
        onClick={() => handleGO(_id)}
        position="relative"
      >
        <Link to={route == "" ? "/" : `/${route}/${_id}`}>
          <Image
            src={image}
            _hover={{
              transform: "scale(1.1)",
              transformOrigin: "50% 50%",
              cursor: "pointer",
              opacity: ".9",
            }}
            transition="transform .5s"
          />
        </Link>
        <Box
          className="child"
          bgColor="#fff0f4"
          zIndex={10}
          h="9vh"
          w="full"
          position="absolute"
          bottom="0"
          color=" #ff3e6c"
          _hover={{ cursor: "pointer" }}
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
              : handleaddCart(_id, 1, token);
          }}
        >
          <HStack
            justifyContent="center"
            alignItems="center"
            flexDirection={"row"}
            pt="3"
            gap="10"
          >
            <Heading
              fontSize={"15px"}
              letterSpacing=".8px"
              fontWeight="500"
              size="md"
              display={{ base: "none", md: "flex" }}
            >
              ADD TO CART
            </Heading>
            <BsCartPlusFill fontSize={"25px"} color=" #ff3e6c" />
          </HStack>
        </Box>
      </Box>

      {wish !== undefined ? (
        <Box
          position="absolute"
          top="0"
          right="3%"
          color="blackAlpha.600"
          _hover={{ cursor: "pointer", color: "black" }}
          onClick={() =>
            toast({
              duration: 2000,
              title: `Removed form Wishlist`,
              position: "top",
              status: "success",
              isClosable: true,
            })
          }
        >
          <SlClose fontSize={"27px"} />
        </Box>
      ) : (
        <Box
          position="absolute"
          top="1%"
          right="3%"
          color="#fa2a5a"
          _hover={{ cursor: "pointer", color: "black" }}
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
                      product: _id,
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
        >
          <BsHeart fontSize={"27px"} />
        </Box>
      )}

      <Box
        position={"absolute"}
        bgColor={"rgb(227, 226, 252)"}
        color="rgb(115, 108, 240)"
        fontSize="12px"
        top="0%"
        px="1"
        display={!launched ? "none" : "flex"}
      >
        Just launched
      </Box>

      <Text color="rgba(0, 0, 0, 0.6)" fontSize={"15px"} letterSpacing=".2px">
        {brand}
      </Text>
      <Heading
        color="rgb(38, 38, 38)"
        fontSize={"12px"}
        letterSpacing=".2px"
        fontWeight="400"
        display={{ base: "none", md: "flex" }}
      >
        {title}
      </Heading>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex gap="3">
          <Heading
            color="rgb(38, 38, 38)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="500"
          >
            ₹ {price1}
          </Heading>
          <Heading
            color="rgba(0, 0, 0, 0.6)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="400"
            as="s"
            display={{base :"none" , md:"flex"}}
          >
            {" "}
            ₹ {price2}
          </Heading>
        </Flex>
        <Heading
          color=" rgb(255, 50, 120)"
          fontSize={"17px"}
          letterSpacing=".2px"
          fontWeight="500"
        >
          {off}% off
        </Heading>
      </Flex>
    </StyledVStack>
  );
}

export default SingleProduct;

const StyledVStack = styled(VStack)`
  .child {
    transform: translateY(100%);
  }
  .container:hover .child {
    transition: transform 0.2s ease-in-out;
    transform: translateY(0);
  }
`;



