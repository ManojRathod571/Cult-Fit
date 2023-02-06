import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  BsCartCheckFill,
  BsFillCartPlusFill,
  BsFillHeartFill,
  BsHeartFill,
  BsShieldLockFill,
  BsSortDownAlt,
} from "react-icons/bs";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import InputSearchSingleData from "../InputSearchSingleData";
import PlaceOrderCompo from "./PlaceOrderCompo";
import { cartPatch, getCart } from "../../Redux/Cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../utils/Footer";
import Loader from "../../utils/Loader";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => state?.auth?.data?.token);
  const [cartData, setCartData] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const [cartLoading, setCartLoading] = useState(false);
  const [sum, setSum] = useState(0);
  const [act, setAct] = useState(0);

  useEffect(() => {
    getCart(token);
  }, []);

  const getCart = (token) => {
    setCartLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/cart`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setCartData(res.data);
        setCartLoading(false);
        setSum(
          res?.data.reduce((acc, el) => {
            return (acc = acc + Number(el?.product?.price1));
          }, 0)
        );
        setAct(
          res?.data.reduce((acc, el) => {
            return (acc = acc + Number(el?.product?.price2));
          }, 0)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return cartLoading ? (
    <Loader />
  ) : (
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
            <Link to="/wishlist">
              <BsHeartFill
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
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        w={["95%", "93%", "85%", "75%"]}
        m="auto"
        mt="8"
        gap="4"
      >
        <VStack>
          <Flex
            w="full"
            justifyContent={"space-between"}
            border="1px solid 	#F0F0F0"
            px="3"
            alignItems={"center"}
            py="3"
          >
            <VStack alignItems={"start"}>
              <Text
                fontSize={"13px"}
                fontWeight="400"
                color="blackAlpha.700"
                letterSpacing={".3px"}
              >
                Deliver to :{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "black",
                    letterSpacing: ".4px",
                  }}
                >
                  {" "}
                  Akshay rajput, 246731
                </span>
              </Text>
              <Text
                letterSpacing={".1px"}
                fontSize={"12px"}
                fontWeight="400"
                color="blackAlpha.700"
              >
                737/A, Noida sector 19, A Block, Noida{" "}
              </Text>
            </VStack>
            <Button
              fontSize={"13px"}
              letterSpacing={".4px"}
              fontWeight="500"
              bgColor="white"
              border={"1px solid #ff3e6c"}
              borderRadius={"0"}
              color=" #ff3e6c"
              _hover={{ bgColor: "#fff0f4" }}
            >
              CHANGE ADDRESS
            </Button>
          </Flex>
          <VStack
            alignItems={"start"}
            w="full"
            border="1px solid 	#F0F0F0"
            px="3"
            py="5"
          >
            <HStack gap="3">
              <CiDiscount1 />
              <Text letterSpacing={".1px"} fontSize={"15px"} fontWeight="600">
                Available offers
              </Text>
            </HStack>
            <UnorderedList
              pl="6"
              fontSize={"13px"}
              fontWeight="300"
              color="blackAlpha.700"
              letterSpacing={".3px"}
            >
              <ListItem>
                10% Instant Discount on ICICI Bank Credit Cards on a min spend
                of Rs 4,000. TCA
              </ListItem>
              <ListItem>
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
              </ListItem>
              <ListItem>
                10% Cashback upto Rs 100 on Ola Money Postpaid or Wallet
                transaction on a min spend of Rs 1000 . TCA
              </ListItem>
              <ListItem>
                10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA
              </ListItem>
              <ListItem>
                Upto Rs 750 Cashback on Mobikwik Wallet Transactions on a min
                spend of Rs 2,000.Use code MBK750 on Mobikwik.TCA
              </ListItem>
              <ListItem>
                5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with
                PayZapp. TCA
              </ListItem>
            </UnorderedList>
          </VStack>
          <HStack
            fontSize={"15px"}
            w="full"
            border="1px solid 	#F0F0F0"
            px="3"
            py="3"
            color="blackAlpha.700"
          >
            <TbTruckDelivery fontSize={"25px"} />
            <Text>
              Yay !{" "}
              <span
                style={{
                  fontWeight: "600",
                  color: "black",
                  letterSpacing: ".4px",
                }}
              >
                No convenience fee{" "}
              </span>{" "}
              on this order
            </Text>
          </HStack>
          <VStack
            border="1px solid #F0F0F0"
            borderTop={"0"}
            w="full"
            gap="5"
            alignItems={"center"}
          >
            {cartData.length === 0 ? (
              <Image src="https://i.ibb.co/ZKyj4Dj/emptycart.png" w="40%" />
            ) : (
              cartData?.map((elem) => {
                return (
                  <>
                    <Grid
                      gridTemplateColumns={{
                        base: "repeat(2,1fr)",
                        sm: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "1fr 2fr 1fr",
                      }}
                      w="full"
                      m="auto"
                      pt="0"
                      border="1px solid #F0F0F0"
                      alignItems={"center"}
                    >
                      <Box overflow="hidden" w="fit-content">
                        <Image
                          src={elem?.product?.image}
                          w="80%"
                          _hover={{
                            transform: "scale(1.08)",
                            transformOrigin: "50% 50%",
                            cursor: "pointer",
                            opacity: ".9",
                          }}
                          transition="transform .5s"
                        />
                      </Box>
                      <VStack alignItems="start" pt="2" gap="1">
                        <Text
                          color="rgba(0, 0, 0, 0.6)"
                          fontSize={"15px"}
                          letterSpacing=".2px"
                        >
                          {elem?.product?.brand}
                        </Text>
                        <Heading
                          color="rgb(38, 38, 38)"
                          fontSize={"12px"}
                          letterSpacing=".2px"
                          fontWeight="400"
                          display={{ base: "none", md: "flex" }}
                        >
                          {elem?.product?.title}
                        </Heading>
                        <HStack gap="4">
                          <Heading
                            color="rgb(38, 38, 38)"
                            fontSize={"15px"}
                            letterSpacing=".2px"
                            fontWeight="500"
                          >
                            ₹ {elem?.product?.price1}
                          </Heading>
                          <Heading
                            color="rgba(0, 0, 0, 0.6)"
                            fontSize={"15px"}
                            letterSpacing=".2px"
                            fontWeight="400"
                            as="s"
                          >
                            {" "}
                            ₹ {elem?.product?.price2}
                          </Heading>
                          <Heading
                            color=" rgb(255, 50, 120)"
                            fontSize={"17px"}
                            letterSpacing=".2px"
                            fontWeight="500"
                          >
                            {elem?.product?.off}% off
                          </Heading>
                        </HStack>
                        <HStack>
                          <CiDeliveryTruck color="rgb(255, 50, 120)" />
                          <Text fontSize={"12px"} as="i" fontWeight={"500"}>
                            EXPRESS
                          </Text>{" "}
                          <span style={{ fontSize: "12px" }}>
                            Delivery in 2 days
                          </span>
                        </HStack>
                        <Text fontSize={"11px"}>
                          {" "}
                          Added at : {elem?.createdAt.substring(0, 10)}
                        </Text>
                      </VStack>
                      <VStack gap="4">
                        <HStack>
                          <Button
                            onClick={onOpen}
                            color="white"
                            borderRadius={"0    "}
                            bgColor=" #ff3e6c"
                            _hover={{ bgColor: "#ff3e6c" }}
                            fontSize={"10px"}
                            fontWeight="300"
                            size="sm"
                            leftIcon={
                              <FaMinus
                                onClick={() => {
                                  axios
                                    .patch(
                                      `${process.env.REACT_APP_URL}/cart`,
                                      {
                                        product: elem?.product?._id,
                                        quantity: -1,
                                      },
                                      {
                                        headers: {
                                          token: token,
                                        },
                                      }
                                    )
                                    .then((res) => {
                                      res.data === "updated !!!"
                                        ? toast({
                                            title: `Hey ! ${elem?.user?.name} 💛 `,
                                            description:
                                              "Quantity of this product decreased by 1 😊",
                                            status: "success",
                                            position: "top",
                                            isClosable: true,
                                            duration: 2000,
                                          })
                                        : toast({
                                            title: `Oooppps ! Sorry ${elem?.user?.name} 😥 `,
                                            description:
                                              "Database has reached out maximum quantity of this product",
                                            status: "warning",
                                            position: "top",
                                            isClosable: true,
                                            duration: 2000,
                                          });
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                                fontSize="15px"
                              />
                            }
                            rightIcon={
                              <TiPlus
                                onClick={() => {
                                  axios
                                    .patch(
                                      `${process.env.REACT_APP_URL}/cart`,
                                      {
                                        product: elem?.product?._id,
                                        quantity: 1,
                                      },
                                      {
                                        headers: {
                                          token: token,
                                        },
                                      }
                                    )
                                    .then((res) => {
                                      res.data === "updated !!!"
                                        ? toast({
                                            title: `Hey ! ${elem?.user?.name} 💛 `,
                                            description:
                                              "Quantity of this product increased by 1 😊",
                                            status: "success",
                                            position: "top",
                                            isClosable: true,
                                            duration: 2000,
                                          })
                                        : toast({
                                            title: `Oooppps ! Sorry ${elem?.user?.name} 😥 `,
                                            description:
                                              "Database has reached out maximum quantity of this product",
                                            status: "warning",
                                            position: "top",
                                            isClosable: true,
                                            duration: 2000,
                                          });
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                                fontSize="20px"
                              />
                            }
                          >
                            Qty &nbsp;
                          </Button>
                        </HStack>

                        <Button
                          color="white"
                          w="91px"
                          borderRadius={"0  "}
                          bgColor=" #ff3e6c"
                          _hover={{ bgColor: "#ff3e6c" }}
                          size="sm"
                          onClick={() => {
                            axios
                              .delete(
                                `${process.env.REACT_APP_URL}/cart/${elem?.product?._id}`,
                                {
                                  headers: {
                                    token: token,
                                  },
                                }
                              )
                              .then((res) => {
                                toast({
                                  title: `Hey ! ${elem?.user?.name} 😥 `,
                                  description:
                                    "Products has been  Deleted !! 💔",
                                  status: "error",
                                  position: "top",
                                  isClosable: true,
                                  duration: 2000,
                                });
                                getCart(token);
                              })
                              .catch((err) => console.log(err));
                          }}
                        >
                          <MdDeleteForever fontSize={"15px"} />
                        </Button>
                      </VStack>
                    </Grid>
                  </>
                );
              })
            )}
          </VStack>
        </VStack>
        <VStack
          border="1px solid 	#F0F0F0"
          h="fit-content"
          px="3"
          py="5"
          alignItems={"start"}
          position="sticky"
          top="14%"
        >
          <PlaceOrderCompo sum={sum} act ={act}  />
        </VStack>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Cart;

//https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg
