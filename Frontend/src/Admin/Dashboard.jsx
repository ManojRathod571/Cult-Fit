import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Grid,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import {
  BsFillShieldLockFill,
  BsHeartFill,
  BsShieldLockFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import FirstPage from "./FirstPage";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        position={"sticky"}
        top="0"
        zIndex={5}
        justifyContent={"space-between"}
        bgColor="#e7e7ff"
        px={5}
      >
        <Box
          w="200px"
          onClick={() => navigate("/")}
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src="https://i.ibb.co/MZ9Fpz5/Admin-designstyle-kiddo-m.png"
            w="70%"
          />
        </Box>
        <HStack gap={{ base: "2", sm: "2", md: "5", lg: "12" }}>
          <Link onClick={() => navigate("/dashboard")}>Dashboard</Link>
          <Link onClick={() => navigate("/allproducts")}>Products</Link>
          <Link onClick={() => navigate("/users")}>Users</Link>
          <Link onClick={() => navigate("/trash")}>Trash</Link>
        </HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          <Button
            fontSize={"sm"}
            fontWeight={200}
            variant={"link"}
            color="black"
          ></Button>
          <BsFillShieldLockFill color="green" fontSize={"30px"} />
          <Text> Hey Akshay ! Welcome</Text>
          <Avatar src="https://i.ibb.co/zFpHLgQ/IMG-2258.jpg" />
        </HStack>
      </Flex>
      <Divider />
      {/* <FirstPage /> */}
    </>
  );
}
