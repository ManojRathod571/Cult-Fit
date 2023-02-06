import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { BsCart, BsHeart } from "react-icons/bs";
import UserLogin from "../LoginPart/UserLogin";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/GetData/getData.actions";
import { getButton } from "../../Redux/ButtonRoute/button.action";
import { useNavigate, useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { GrLocationPin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { MdLocationSearching } from "react-icons/md";
import styled from "styled-components";
import { BiLogOutCircle } from "react-icons/bi";
import { LOGOUT } from "../../Redux/Auth/auth.actions";
import axios from "axios";

export default function CultStoreNavbar() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.data?.token);
  const isAuth = useSelector((state) => state?.auth?.data?.isAuth);
  const dispatch = useDispatch();
  const pinCode = useSelector((state) => state?.pin?.pinCode);
  const location = localStorage.getItem("location");
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const handleLOGOUT = () => {
    dispatch(LOGOUT());
    localStorage.removeItem("location");
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleAdmin = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleGOADMIN = () => {
    if (
      admin?.email === "actually@gmail.com" &&
      admin?.password === "actually"
    ) {
      navigate("/dashboard");
      toast({
        title: `Hey ! Akshay💛 `,
        description: "Welcome back ! 😊",
        status: "success",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
      onClose();
    } else {
      navigate("/");
      toast({
        title: ` Hey! User `,
        description: "You are not authorized to handle this page",
        status: "warning",
        position: "top",
        isClosable: true,
        duration: 2000,
      });
    }
  };

  const getLocation = () => {
    axios
      .get(`https://api.postalpincode.in/pincode/${pinCode}`)
      .then((res) => {
        return localStorage.setItem(
          "location",
          res?.data[0]?.PostOffice[0]?.District
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Box position="sticky" top="0" bgColor="white" zIndex="3">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color=" #262626"
          fontFamily="sans-serif"
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align={"center"}
          >
            <Link href="/">
              <Box>
                <Image
                  w="120px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
                />
              </Box>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <HStack flex={{ base: 1, md: 0 }} justify={"flex-end"} spacing={1}>
            <Tooltip label={location} bg="gray.300" color="black">
              <Button bg="none" display={isAuth ? "flex" : "none"}>
                <GoLocation />
              </Button>
            </Tooltip>

            {!isAuth ? (
              <UserLogin />
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  bg="none"
                  _hover={{ bg: "none" }}
                  _expanded={{ bg: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/107462720?v=4"
                    size="sm"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem _hover={{ bg: "white" }}>
                    {" "}
                    <Button
                      color="black"
                      bg="white"
                      w="full"
                      leftIcon={<HiOutlineUser fontSize={"20px"} />}
                      _hover={{ bg: "white" }}
                      onClick={() => navigate("/cart")}
                    >
                      User Profile
                    </Button>
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    {" "}
                    <Button
                      w="full"
                      bg="white"
                      onClick={() => navigate("/wishlist")}
                      _hover={{ bg: "white" }}
                      leftIcon={<BsHeart />}
                    >
                      Wishlist
                    </Button>
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    {" "}
                    <Button
                      color="black"
                      bg="white"
                      w="full"
                      leftIcon={<BsCart fontSize={"20px"} />}
                      _hover={{ bg: "white" }}
                      onClick={() => navigate("/cart")}
                    >
                      Cart
                    </Button>
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    <Button
                      onClick={handleLOGOUT}
                      w="full"
                      color="black"
                      bg="white"
                      leftIcon={<BiLogOutCircle fontSize={"20px"} />}
                      _hover={{ bg: "white" }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                  <MenuItem _hover={{ bg: "white" }}>
                    <Button
                      leftIcon={<RiAdminFill />}
                      onClick={onOpen}
                      w="full"
                      color="black"
                      bg="white"
                    >
                      Admin Panel
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Admin Login Page</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <VStack>
                            <Input
                              value={admin.email}
                              name="email"
                              type="password"
                              placeholder="Enter Admin's email"
                              onChange={(e) => handleAdmin(e)}
                            />
                            <Input
                              value={admin.password}
                              type="password"
                              name="password"
                              placeholder="Enter Admin's password"
                              onChange={(e) => handleAdmin(e)}
                            />
                          </VStack>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            w="full"
                            colorScheme="blue"
                            mr={3}
                            size="sm"
                            onClick={() => handleGOADMIN()}
                          >
                            Login as Admin
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <br />
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", " #262626");
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeNavigate = (el) => {
    dispatch(getButton(el));
  };

  return (
    <Stack
      direction={"row"}
      spacing={[3, 1, 1, 2]}
      position="sticky"
      top="0"
      bgColor="white"
      zIndex="3"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          onClick={() => hanldeNavigate(navItem.route, navItem.href)}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                fontWeight="bold"
                fontSize="13px"
                p={2}
                color="#262626"
                href={navItem.href}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                fontWeight="600"
                fontSize="12px"
                border={0}
                boxShadow={"md"}
                bg={popoverContentBgColor}
                p={2}
                w="fit-content"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      target="_top"
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          {/* <Button> */}
          <Text
            transition={"all .9s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={600}
          >
            {label}
          </Text>
          {/* </Button> */}
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, route }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          color={useColorModeValue("gray.600", "gray.200")}
          fontWeight="600"
          fontSize="12px"
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Best Sellers",
    children: [
      {
        label: "Top Selling",
        href: "/topSellings",
        route: "topSellings",
      },
    ],
    route: "topSellings",
  },
  {
    label: "Just Launched",
    children: [
      {
        label: "New Arrivals",
        href: "/topArrivals",
        route: "topArrivals",
      },
    ],
    route: "topArrivals",
  },
  {
    label: "Men",
    children: [
      {
        label: "Apparel",
        href: "/mens",
        route: "mens",
      },
      {
        label: "T-Shirts",
        href: "/mens",
        route: "mens",
      },
      {
        label: "Joggers and Track Pants",
        href: "/mens",
        route: "mens",
      },
      {
        label: "Jackets and Sweatshirts",
        href: "/mens",
        route: "mens",
      },
      {
        label: "Shorts",
        href: "/mens",
        route: "mens",
      },
    ],
    route: "mens",
  },
  {
    label: "Women",
    children: [
      {
        label: "Apparel",
        href: "/womens",
        route: "womens",
      },
      {
        label: "T-Shirts",
        href: "/womens",
        route: "womens",
      },
      {
        label: "Sports Bra",
        href: "/womens",
        route: "womens",
      },
      {
        label: "Tights",
        href: "/womens",
        route: "womens",
      },
      {
        label: "Shorts",
        href: "/womens",
        route: "womens",
      },
      {
        label: "Joggers",
        href: "/womens",
        route: "womens",
      },
      {
        label: "Jackets and Sweatshirts",
        href: "/womens",
        route: "womens",
      },
      {
        label: "BoyShorts",
        href: "/womens",
        route: "womens",
      },
    ],
    route: "womens",
  },
  {
    label: "Footwear",
    children: [
      {
        label: "All",
        href: "/footwears",
        route: "footwears",
      },
      {
        label: "Men's Footwear",
        href: "/footwears",
        route: "footwears",
      },
      {
        label: "Women's Footwear",
        href: "/footwears",
        route: "footwears",
      },
    ],
    route: "footwears",
  },
  {
    label: "Cardio",
    children: [
      {
        label: "All",
        href: "/cardio",
        route: "cardio",
      },
      {
        label: "Spinbikes",
        href: "/cardio",
        route: "cardio",
      },
      {
        label: "Treadmills",
        href: "/cardio",
        route: "cardio",
      },
      {
        label: "Rower",
        href: "/cardio",
        route: "cardio",
      },
    ],
    route: "cardio",
  },
  {
    label: "Cycles",
    children: [
      {
        label: "All",
        href: "/cycles",
        route: "cycles",
      },
      {
        label: "Geared Cycles",
        href: "/cycles",
        route: "cycles",
      },
      {
        label: "Sinhle speed cycles",
        href: "/cycles",
        route: "cycles",
      },
      {
        label: "Electric cycles",
        href: "/cycles",
        route: "cycles",
      },
      {
        label: "kids cycles",
        href: "/cycles",
        route: "cycles",
      },
    ],
    route: "cycles",
  },
  {
    label: "Accessories",
    children: [
      {
        label: "All",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Towel",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Gloves",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Mask",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Duffle Bag",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Socks",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Yoga Mat",
        href: "/accessories",
        route: "accessories",
      },
      {
        label: "Jumping Rope",
        href: "/accessories",
        route: "accessories",
      },
    ],
    route: "accessories",
  },
  {
    label: "Supplements",
    children: [
      {
        label: "All",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Personal cares",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Protein",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Snacks",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Staples",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Vitamins",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Weight loss",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Immunity",
        href: "/supplements",
        route: "supplements",
      },
      {
        label: "Muscle recovery",
        href: "/supplements",
        route: "supplements",
      },
    ],
    route: "supplements",
  },
  {
    label: "Equipments",
    children: [
      {
        label: "All",
        href: "/equipments",
        route: "equipments",
      },
      {
        label: "Strenghts",
        href: "/equipments",
        route: "equipments",
      },
      {
        label: "Others",
        href: "/equipments",
        route: "equipments",
      },
    ],
    route: "equipments",
  },
];

const StyledBox = styled(Box)`
  .child {
    transform: translateY(100%);
  }
  .container:hover .child {
    transition: transform 0.2s ease-in-out;
    transform: translateY(0);
  }
`;
