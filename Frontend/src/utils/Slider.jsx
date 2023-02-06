import { Box, Image } from "@chakra-ui/react";
import React, { Component, memo } from "react";
import Slider from "react-slick";

function SliderCompo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <Box >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/579d7e71-35c5-4950-a9de-bc141ad53909.jpg" />
        </Box>
        <Box>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/579d7e71-35c5-4950-a9de-bc141ad53909.jpg" />
        </Box>
        <Box >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/1eb5f679-eab1-43ff-a7d2-018210a00067.jpg" />
        </Box>
        <Box>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg" />
        </Box>
        <Box >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/0fd1e3fb-c9e2-4ffd-bf7c-eab810edaaf8.png" />
        </Box>
        <Box >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg" />
        </Box>
        <Box >
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/94851c73-d7f2-4597-a24d-e9a33aeb2c47.jpg" />
        </Box>
      </Slider>
    </div>
  );
}

export default memo(SliderCompo);
