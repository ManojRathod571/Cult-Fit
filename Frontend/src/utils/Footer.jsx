import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Logo = (props) => {
  return (
    <Link href="/">
      <Box>
        <Image
          w="30%"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cultsport-text.svg"
        />
      </Box>
    </Link>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <br />
      <Box bgColor="#000000" color="whiteAlpha.800" py="10">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
            spacing={14}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("gray.700", "white")} />
              </Box>
              <br />
              <Text fontSize={"sm"}>
                cultsport offers top quality, best in class products which
                provide a holistic approach to fitness - combining fitness
                products with best in class fitness content, features, coaching
                & service
              </Text>
            </Stack>
            <Stack align={"flex-start"} gap="4">
              <Link href={"#"}>Contact us</Link>
              <Link href={"#"}>privacy policy</Link>
              <Link href={"#"}>refund policy</Link>
              <Link href={"#"}>terms & conditions</Link>
              <Link href={"#"}>download android app</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <VStack direction={"row"}>
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/app-store.png"
                  w="50%"
                />
                <Image
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/google-play.png"
                  w="50%"
                />
                <br />
                <br />
                <HStack gap="4">
                  <SocialButton label={"Twitter"} href={"#"}>
                    <FaTwitter color="#1DA1F2" fontSize="33px" />
                  </SocialButton>
                  <SocialButton label={"YouTube"} href={"#"}>
                    <FaYoutube color="#FF0000" fontSize="33px" />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"#"}>
                    <FaInstagram color="#C13584" fontSize="33px" />
                  </SocialButton>
                  <SocialButton label={"Twitter"} href={"#"}>
                    <FaFacebook color="#4267B2" fontSize="33px" />
                  </SocialButton>
                  <SocialButton label={"Twitter"} href={"#"}>
                    <FaLinkedin color="#0096D6" fontSize="33px" />
                  </SocialButton>
                </HStack>
              </VStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
