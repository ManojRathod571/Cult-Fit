import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsCart, BsCartCheckFill, BsShieldLockFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../utils/Footer";
import SingleProduct from "../SingleComponent";

function Wishlist() {
  const toast = useToast();
  const token = useSelector((state) => state?.auth?.data?.token);
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);
  const [wishlistData, setWishlistData] = useState([]);

  console.log({ token });

  const navigate = useNavigate();

  useEffect(() => {
    getWishlist(token);
  });
  const getWishlist = (token) => {
    axios
      .get(`${process.env.REACT_APP_URL}/wishlist`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setWishlistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        bgColor="white"
        justifyContent={"space-between"}
        py="3"
        px="10"
      >
        <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }}>
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
            w="70%"
          />
        </Box>

        <HStack>
          <Button
            fontSize={"sm"}
            fontWeight={200}
            variant={"link"}
            color="black"
          >
            <Link to="/cart">
              <BsCartCheckFill
                color="#ff3e6c"
                fontSize={"30px"}
                onClick={() => navigate("/cart")}
              />
            </Link>
          </Button>
          <BsShieldLockFill color="green" fontSize={"30px"} />
          <Text
            fontWeight={"500"}
            color="blackAlpha.600"
            display={{ base: "none", md: "flex" }}
          >
            1 0 0 % {"  "} S E C U R E
          </Text>
        </HStack>
      </Flex>
      <Divider />
      <Box w="100%">
        <br />
        <br />
        <HStack w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }} m="auto">
          <Heading size="sm">My Wishlist </Heading>
          <Text>{wishlistData?.length} Items</Text>
        </HStack>
        <br />
        <Box
          color="blackAlpha.600"
          w={["90vw", "90vw", "80vw", "70vw"]}
          m="auto"
          display={wishlistData?.length ? "none" : ""}
        >
          <Container textAlign={"center"}>
            <Heading as="i" fontWeight={"500"}>
              Your wishlist is empty
            </Heading>{" "}
            <br />
            <Text as="i">Looks like you haven't made any wishlist yet </Text>
          </Container>
          <Image src="https://i.ibb.co/sWRJYDQ/undraw-Cat-re-gkh9.png" />
        </Box>
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={{ base: "2", sm: "3", md: "15", lg: "20" }}
          rowGap="6"
          w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
          m="auto"
          fontFamily={"sans-serif"}
          mt="5"
          position={"relative"}
        >
          {wishlistData?.map((el) => {
            return (
              <Box position="relative">
                <SingleProduct {...el?.product} key={el._id} />
                <Button
                  position="absolute"
                  borderRadius={"15px"}
                  top="1"
                  bgColor="#F8F8F8"
                  right="-1"
                  zIndex="3"
                  onClick={() => {
                    toast({
                      title: `Hey ! ${el?.user?.name} 💛 `,
                      description: "Item removed from wishlist 💔",
                      status: "success",
                      position: "top",
                      isClosable: true,
                      duration: 2000,
                    });
                    axios
                      .delete(
                        `${process.env.REACT_APP_URL}/wishlist/${el.product._id}`,
                        {
                          headers: {
                            token: token,
                          },
                        }
                      )
                      .then((res) => console.log(res.data));
                  }}
                >
                  <AiFillDelete color="#ff3e6c" fontSize="25px" />
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Wishlist;
