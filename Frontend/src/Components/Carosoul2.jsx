import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Flex,
  Avatar,
  Grid,
} from "@chakra-ui/react";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";
import SingleProduct from "../Organism/SingleComponent";

export default function Carosoul2({ arr }) {
  const [slider, setSlider] = useState();

  const [hide, setHide] = useState(true);

  const handleClick = (i) => {
    setHide(false);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Flex
      flexDirection={"column"}
      w={{ base: "96%", sm: "95%", md: "90%", lg: "90%" }}
      m="auto"
      mt="10"
      position={"relative"}
    >
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        top="40%"
        left="-2%"
        border="1px solid #A9A9A9"
        onClick={() => {
          slider?.slickPrev();
        }}
        bgColor="white"
      >
        <BiLeftArrowAlt />
      </IconButton>

      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        borderRadius="full"
        position="absolute"
        right="1%"
        top="40%"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        bgColor="white"
        border="1px solid #A9A9A9"
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {arr.map((el, index) => (
          <Box pr={[2, 3, 5, 7]}>
            <SingleProduct {...el} key={el._id} />
          </Box>
        ))}
      </Slider>
    </Flex>
  );
}
