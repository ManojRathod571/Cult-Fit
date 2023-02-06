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

export default function Carousel3({ arr }) {
  const [slider, setSlider] = useState();

  const [hide, setHide] = useState(true);

  const handleClick = (i) => {
    setHide(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Flex
      flexDirection={"column"}
      w={{ base: "96%", sm: "95%", md: "90%", lg: "95%" }}
      m="auto"
      mt="10"
      position={"relative"}
    >
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {arr.map((el, index) => (
          <Box>
            <SingleProduct {...el} key={el._id} />
          </Box>
        ))}
      </Slider>
    </Flex>
  );
}
