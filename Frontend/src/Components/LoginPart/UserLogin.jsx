import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  HStack,
  Image,
  Box,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { PhoneIcon } from "@chakra-ui/icons";
import { BsGoogle } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";

function UserLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const { signup } = useParams();

  return (
    <>
      <Button
        as={"a"}
        fontSize={"lg"}
        fontWeight={200}
        variant={"link"}
        href={"#"}
        color="black"
        onClick={onOpen}
      >
        <BiUserCircle fontSize={"24px"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w={{ base: "310px", sm: "340px", md: "360px", lg: "420px" }}
        >
          <ModalCloseButton _hover={{ bgColor: "none" }} />
          <ModalBody w="full" m="auto" mt="20">
            <VStack px={{ base: "0", md: "2", lg: "10" }}>
              <Flex justifyContent={"center"} alignItems="center">
                <Image
                  w="120px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
                />
              </Flex>
              <VStack gap="3" w="full" pt="40px">
                <Button
                  bgColor="rgba(255, 49, 109, 0.7)"
                  w="full"
                  size="sm"
                  mt="5"
                  _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                  letterSpacing={"1.3px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="white"
                  onClose={onClose}
                  rightIcon={<AiOutlineMail fontSize={"20px"} />}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup via
                </Button>
                <HStack w="full">
                  <Box
                    borderBottom={"2px solid rgb(224,224,224)"}
                    w="130px"
                  ></Box>
                  <Text color="rgb(200,200,200)" fontWeight={"500"}>
                    OR
                  </Text>
                  <Box
                    w="130px"
                    borderBottom={"2px solid rgb(224,224,224)"}
                  ></Box>
                </HStack>
                <Button
                  colorScheme={"linkedin"}
                  w="full"
                  size="sm"
                  mt="5"
                  letterSpacing={"1.3px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="white"
                  rightIcon={<BsGoogle fontSize={"15px"} />}
                >
                  Signup via
                </Button>
                <HStack w="full">
                  <Box
                    borderBottom={"2px solid rgb(224,224,224)"}
                    w="130px"
                  ></Box>
                  <Text color="rgb(200,200,200)" fontWeight={"500"}>
                    OR
                  </Text>
                  <Box
                    w="130px"
                    borderBottom={"2px solid rgb(224,224,224)"}
                  ></Box>
                </HStack>
                <Button
                  colorScheme={"green"}
                  w="full"
                  size="sm"
                  mt="5"
                  letterSpacing={"1.3px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="white"
                  rightIcon={<PhoneIcon fontSize={"14px"} />}
                >
                  Signup via
                </Button>
                <HStack w="full">
                  <Box
                    borderBottom={"2px solid rgb(224,224,224)"}
                    w="130px"
                  ></Box>
                  <Text color="rgb(200,200,200)" fontWeight={"500"}>
                    OR
                  </Text>
                  <Box
                    w="130px"
                    borderBottom={"2px solid rgb(224,224,224)"}
                  ></Box>
                </HStack>
                <Button
                  colorScheme={"red"}
                  w="full"
                  size="sm"
                  mt="5"
                  letterSpacing={"1.3px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="white"
                  rightIcon={<MdAdminPanelSettings fontSize={"18px"} />}
                  onClick={() => navigate("/dashboard")}
                >
                  Admin panel
                </Button>
              </VStack>
              <br />
              <br />
              <Flex textAlign={"center"}>
                <Heading
                  fontSize={"13px"}
                  fontWeight="500"
                  letterSpacing={".5px"}
                  lineHeight="5"
                >
                  * By Continuing you agree to the{" "}
                  <span style={{ color: "rgba(255, 49, 109, 0.7)" }}>
                    {" "}
                    Terms of Services{" "}
                  </span>
                  and{" "}
                  <span style={{ color: "rgba(255, 49, 109, 0.7)" }}>
                    Privacy policy.
                  </span>
                </Heading>
              </Flex>
              <br />
              <br />
              <br />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserLogin;
