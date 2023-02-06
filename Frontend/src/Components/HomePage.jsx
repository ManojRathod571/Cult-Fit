import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLOACTION } from "../Redux/PinCode/pincode.actions";
import Footer from "../utils/Footer";
import Loader from "../utils/Loader";
import SliderCompo from "../utils/Slider";
import Carousel3 from "./Carosal3";
import Carosoul2 from "./Carosoul2";
import Carousel from "./CarosoulCompo";
import CultStoreNavbar from "./CultStoreNavbar/CultStoreNavbar";
import HeadingLine from "./HeadingLine";
function HomePage() {
  const dispatch = useDispatch();
  const [homeLoading, setHomeLoading] = useState(false);

  return homeLoading ? (
    <Loader />
  ) : (
    <>
      <CultStoreNavbar />
      <Box overflow={"hidden"} bgColor="#F8F8F8" mt="-5">
        <SliderCompo />
        <HeadingLine title={"BESTSELLERS"} go={"/topSellings"} />
        <Carosoul2 arr={betsSellers} />
        <HeadingLine title={"JUST LAUNCHED"} go={"/topArrivals"} />
        <Carousel arr={justLaunched} />
        <HeadingLine title={"T-SHIRTS"} go={"/mens"} />
        <Carousel3 arr={tshirts} />
        <HeadingLine title={"CYCLES"} go={"/cycles"} />
        <Carosoul2 arr={cycles} />
        <HeadingLine title={"TREADMILLS"} go={"/equipments"} />
        <Carousel3 arr={workoutCarosal} />
        <HeadingLine title={"ACCESSORIES"} go={"/accessories"} />
        <Carousel arr={accessories} />
        <HeadingLine title={"TOPWEAR"} go={"/womens"} />
        <Carosoul2 arr={bra} />
        <HeadingLine title={"BOTTOMWEAR"} go={"/womens"} />
        <Carousel arr={bottom} />
        <HeadingLine title={"HEALTH & NUTRITION"} go={"/supplements"} />
        <Carousel3 arr={health} />
        <HeadingLine title={"SHOP BY WORKOUT"} go={"#"} />
        <br />
        <br />
        <Grid
          gridTemplateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
          ]}
          w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
          m="auto"
          gap="4"
        >
          {workout?.map((el) => {
            return (
              <Box overflow={"hidden"}>
                <Image
                  src={el}
                  _hover={{
                    transform: "scale(1.07)",
                    transformOrigin: "50% 50%",
                    cursor: "pointer",
                    opacity: ".9",
                  }}
                  transition="transform .5s"
                />
              </Box>
            );
          })}
        </Grid>
        <HeadingLine title={"SPOTLIGHT"} go={"#"} />
        <br />
        <br />
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
          m="auto"
          gap="2"
        >
          {wArr?.map((el) => {
            return (
              <Box overflow={"hidden"}>
                <Image
                  src={el}
                  _hover={{
                    transform: "scale(1.02)",
                    transformOrigin: "50% 50%",
                    cursor: "pointer",
                    opacity: ".9",
                  }}
                  transition="transform .5s"
                />
              </Box>
            );
          })}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default HomePage;

const workout = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_301,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png",
];

const wArr = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_674,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png",
];

const betsSellers = [
  {
    _id: "636ce25e9a289d510104ed2b",
    url: "https://cultsport.com/rimo-27-5-21-speed-steel-mtb-shimano-gears/product/4265?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZJBYsrvTZKUc9QzYK6fh4f8n",
    brand: "CULTSPORT",
    title: 'Rimo 27.5" 21-speed steel MTB (Shimano gears)',
    price1: 15699,
    price2: 39999,
    off: 61,
    category: "topSellings",
    qty: 3,
  },
  {
    _id: "636ce25e9a289d510104ed2c",
    url: "https://cultsport.com/azani-biotin-hair-gummies-with-zinc-iodine-vitamin-a-b-c-d-e-folic-acid-hair-vitamins-for-hair-growth-30-gummies/product/3975?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6avFYgdSxkj3AKJiS6nbXLU1",
    brand: "Azani",
    title:
      "Azani Biotin Hair Gummies with Zinc, Iodine, Vitamin A, B, C, D & E & Folic Acid | Hair Vitamins for Hair Growth, 30 Gummies",
    price1: 379,
    price2: 599,
    off: 37,
    category: "topSellings",
    qty: 3,
  },
  {
    _id: "636ce25e9a289d510104ed2d",
    url: "https://cultsport.com/formfit-high-impact-ivy-sports-bra-500324/product/1382?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf",
    brand: "CULTSPORT",
    title: "FormFit High Impact Ivy Sports Bra",
    price1: 1674,
    price2: 2499,
    off: 33,
    category: "topSellings",
    qty: 3,
  },
  {
    _id: "636ce25e9a289d510104ed2e",
    url: "https://cultsport.com/absolutefit-women-s-floral-print-leggings/product/1550?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/RFyrru9EALTw3JQBbEd8UHZA",
    brand: "CULTSPORT",
    title: "AbsoluteFit Floral Print Tights",
    price1: 1264,
    price2: 2299,
    off: 45,
    category: "topSellings",
    qty: 3,
  },
  {
    _id: "636ce25e9a289d510104ed2f",
    url: "https://cultsport.com/cultsport-barbell/product/4112?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WNGb9o3xhWmsV2AAjeGZ7Fqz",
    brand: "CULTSPORT",
    title: "Barbell x1 (adjustable)",
    price1: 12499,
    price2: 19990,
    off: 37,
    category: "topSellings",
    qty: 3,
  },
  {
    _id: "636ce25e9a289d510104ed30",
    url: "https://cultsport.com/smartbike-c1-bluetooth-enabled-spin-bike-with-8-level-magnetic-resistance/product/4259?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vX1Vgko9H9n3Nn3rdyQnNkrb",
    brand: "CULTSPORT",
    title:
      "Smartbike c1: Bluetooth enabled spin bike with 8-level magnetic resistance",
    price1: 22999,
    price2: 40999,
    off: 44,
    category: "topSellings",
    qty: 3,
  },
];

const justLaunched = [
  {
    _id: "636ce2519a289d510104ec42",
    "style-prefix-0 href":
      "https://cultsport.com/windblazer-men-running-shoes/product/4411?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Riss8RjGyZaP8VqBAS8NS8yJ",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Windblazer Men Running Shoes",
    price1: 3249,
    price2: 4999,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec43",
    "style-prefix-0 href":
      "https://cultsport.com/flomo-men-running-shoes-700011/product/4409?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/zmYeW4qpX1XLf3wx3duBehhr",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Flomo Men Running Shoes",
    price1: 3249,
    price2: 4999,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec44",
    "style-prefix-0 href":
      "https://cultsport.com/flomo-men-running-shoes/product/4408?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6JNsr1BfYB2QFvXc2venYsVV",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Flomo Men Running Shoes",
    price1: 3249,
    price2: 4999,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec45",
    "style-prefix-0 href":
      "https://cultsport.com/windblazer-men-running-shoes-700017/product/4415?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8LtJvGMXVEWCv3SS86prg9Ty",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Windblazer Men Running Shoes",
    price1: 3249,
    price2: 4999,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec46",
    "style-prefix-0 href":
      "https://cultsport.com/windblazer-men-running-shoes-700015/product/4413?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/EZE53gfnMT29jSjQKfsNXgJL",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Windblazer Men Running Shoes",
    price1: 3249,
    price2: 4999,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec47",
    "style-prefix-0 href":
      "https://cultsport.com/flomo-women-running-shoes/product/4410?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/R6insrMdAZHF2DKvVtZMQfp8",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Flomo Women Running Shoes",
    price1: 3749,
    price2: 4999,
    off: 25,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec48",
    "style-prefix-0 href":
      "https://cultsport.com/ombre-yoga-tights/product/4302?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/h3GZmYakJY4w99LPFK5RfxYz",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "AbsoluteFit Ombre Yoga Tights",
    price1: 2404,
    price2: 3699,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec49",
    "style-prefix-0 href":
      "https://cultsport.com/textured-perfomance-tshirt-700423/product/4346?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QV53NNzZH1R6Un9BUn6djP2Q",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Textured Perfomance Tshirt",
    price1: 824,
    price2: 1099,
    off: 25,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec4a",
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-tshirt-with-logo-700441/product/4364?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7Rjts4D7VVhAnACKXm8pzVqZ",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Solid Active Tshirt with Logo",
    price1: 824,
    price2: 1099,
    off: 25,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec4b",
    "style-prefix-0 href":
      "https://cultsport.com/wave-print-yoga-tights/product/4297?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/doXGPh3vrEYmHjk45wCTcydr",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "AbsoluteFit Wave Print Yoga Tights",
    price1: 1999,
    price2: 3199,
    off: 38,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec4c",
    "style-prefix-0 href":
      "https://cultsport.com/medium-impact-sports-bra/product/4311?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7WboutgR8Y4U7n7x1J6Qg28J",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Medium Impact Sports Bra",
    price1: 1754,
    price2: 2699,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce2519a289d510104ec4d",
    "style-prefix-0 href":
      "https://cultsport.com/medium-impact-printed-sports-bra-601505/product/4308?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yzPcy76ND94Ru69FSiLALaH1",
    launched: "JUST LAUNCHED",
    brand: "CULTSPORT",
    title: "Medium Impact Printed Sports Bra",
    price1: 1819,
    price2: 2799,
    off: 35,
    category: "topArrivals",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b8",
    "style-prefix-0 href":
      "https://cultsport.com/urban-terrain-ut1001-steel-mtb-27-5-t-shimano-geared-mountain-cycle-21-gear-blue/product/3455?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vtg2iiscHQwMC3K1Dd6C8ztf",
    brand: "Urban Terrain",
    title:
      "UT1001, Blue, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price1: 12999,
    price2: 49990,
    off: 74,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b9",
    "style-prefix-0 href":
      "https://cultsport.com/urban-terrain-ut2000-steel-mtb-27-5-t-shimano-geared-mountain-cycle-21-gear-red/product/3454?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mRmDRFA389Zo8n23tVRCvmty",
    brand: "Urban Terrain",
    title:
      "UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price1: 12999,
    price2: 49990,
    off: 74,
    launched: "",
    category: "cycles",
    qty: 3,
  },
];

const accessories = [
  {
    _id: "636ce2019a289d510104e92a",
    "style-prefix-0 href":
      "https://cultsport.com/tranquil-teal-yoga-mat/product/1635?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6in31LyLKN6HMZZkMuTp44Tg",
    brand: "CULTSPORT",
    title: "Tranquil Teal Yoga Mat",
    price1: 1319,
    price2: 2399,
    off: 45,
    category: "accessories",
    qty: 13,
    updatedAt: "2022-11-14T14:36:25.522Z",
  },
  {
    _id: "636ce2019a289d510104e92b",
    "style-prefix-0 href":
      "https://cultsport.com/signature-boxing-hand-wraps/product/1431?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rqFrmhQat5ajC62f7rKCPU6m",
    brand: "CULTSPORT",
    title: "Signature Boxing Hand Wraps",
    price1: 449,
    price2: 599,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e92c",
    "style-prefix-0 href": "https://cultsport.com/yoga-strap/product/1434?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TtKkztyhA84pRRQb6SstMJSP",
    brand: "CULTSPORT",
    title: "Yoga Strap",
    price1: 449,
    price2: 599,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e92d",
    "style-prefix-0 href":
      "https://cultsport.com/raspberry-pink-yoga-mat/product/1637?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/1HyT5rRS8CWYTY4NMzpkTnit",
    brand: "CULTSPORT",
    title: "Raspberry Pink Yoga Mat",
    price1: 1649,
    price2: 2199,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e92e",
    "style-prefix-0 href":
      "https://cultsport.com/pack-of-2-quick-dry-hand-towel-601539/product/3659?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PzUNBYybqLKxFncf8g4a74cM",
    brand: "CULTSPORT",
    title: "Pack of 2 Quick Dry Hand Towel",
    price1: 374,
    price2: 499,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e92f",
    "style-prefix-0 href":
      "https://cultsport.com/yoga-mat-bag-601601d/product/3688?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/5GFkbrhU2FxEcFaTNUoEsKY9",
    brand: "CULTSPORT",
    title: "Yoga Mat Bag",
    price1: 549,
    price2: 999,
    off: 45,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e930",
    "style-prefix-0 href":
      "https://cultsport.com/training-workout-gloves-601576/product/3682?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/cS7Ftes7FUCWjDaaQrZGJEzy",
    brand: "CULTSPORT",
    title: "Training Workout Gloves",
    price1: 1349,
    price2: 1799,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e931",
    "style-prefix-0 href":
      "https://cultsport.com/training-workout-gloves-601579/product/3683?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/augmjL3xPfuvRgJsiAudYsAA",
    brand: "CULTSPORT",
    title: "Training Workout Gloves",
    price1: 1319,
    price2: 2399,
    off: 45,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e932",
    "style-prefix-0 href":
      "https://cultsport.com/training-workout-gloves-601582/product/3684?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/aeQfi5YQ57M4YrsRz4QdVNvC",
    brand: "CULTSPORT",
    title: "Training Workout Gloves",
    price1: 769,
    price2: 1399,
    off: 45,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e933",
    "style-prefix-0 href":
      "https://cultsport.com/yoga-mat-bag-601601c/product/3687?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/brCb5bFWf1FkJSkxhdwzkvcT",
    brand: "CULTSPORT",
    title: "Yoga Mat Bag",
    price1: 749,
    price2: 999,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e934",
    "style-prefix-0 href":
      "https://cultsport.com/multi-utility-arm-band-601586/product/3676?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/3T1wMmNDvGhEd3jYaojCki68",
    brand: "CULTSPORT",
    title: "Multi Utility Arm Band",
    price1: 494,
    price2: 899,
    off: 45,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e935",
    "style-prefix-0 href":
      "https://cultsport.com/workout-suspension-trainer/product/3695?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9mC1iBxZuEraf49brmZwtT4Y",
    brand: "CULTSPORT",
    title: "Workout Suspension Trainer",
    price1: 3199,
    price2: 5999,
    off: 47,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e936",
    "style-prefix-0 href":
      "https://cultsport.com/wrist-support-sweatband-601599b/product/4176?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/2Tx9x4nP1DbJtU8JgCxPUemN",
    brand: "CULTSPORT",
    title: "Wrist Support Sweatband",
    price1: 224,
    price2: 299,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e937",
    "style-prefix-0 href":
      "https://cultsport.com/sweat-absorbent-workout-headband/product/4183?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yG6NxRBSfGPa68fdojhAFRDy",
    brand: "CULTSPORT",
    title: "Sweat Absorbent Workout Headband",
    price1: 356,
    price2: 649,
    off: 45,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e938",
    "style-prefix-0 href":
      "https://cultsport.com/workout-weight-lifting-belt-601569/product/3697?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/sPaWeFChWcqDN6rHaEtJ3pPk",
    brand: "CULTSPORT",
    title: "Workout Weight Lifting Belt",
    price1: 2999,
    price2: 3999,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e939",
    "style-prefix-0 href":
      "https://cultsport.com/wrist-support-sweatband-601599a/product/4175?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VumANMgkwbx5RBT13Xfjwsoj",
    brand: "CULTSPORT",
    title: "Wrist Support Sweatband",
    price1: 224,
    price2: 299,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e93a",
    "style-prefix-0 href":
      "https://cultsport.com/performance-sipper-with-holder-700029/product/4197?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/worPyyfbSbDHMcZEXZdrZvfu",
    brand: "CULTSPORT",
    title: "Performance Sipper with Holder",
    price1: 674,
    price2: 899,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e93b",
    "style-prefix-0 href":
      "https://cultsport.com/eco-friendly-anti-slip-yoga-mat-in-black/product/3836?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/12UpuKQarxbveo5ZF53RPrUv",
    brand: "CULTSPORT",
    title: "Eco Friendly Anti Slip Yoga Mat in Black",
    price1: 2399,
    price2: 3199,
    off: 25,
    category: "accessories",
    qty: 3,
  },
  {
    _id: "636ce2019a289d510104e93c",
    "style-prefix-0 href":
      "https://cultsport.com/eco-friendly-anti-slip-yoga-mat-in-maroon/product/3835?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QuXbR5mqxLw5UC8hWN7xu735",
    brand: "CULTSPORT",
    title: "Eco Friendly Anti Slip Yoga Mat in Maroon",
    price1: 1759,
    price2: 3199,
    off: 45,
    category: "accessories",
    qty: 3,
  },
];

const health = [
  {
    _id: "636ce2479a289d510104ebba",
    "style-prefix-0 href":
      "https://cultsport.com/azani-active-care-natural-anti-chafing-cream-for-rashes-blisters-thigh-rub-itchy-skin-50-gm/product/4117?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LQ5Shx1ncnk3baLZTbD7YJLR",
    brand: "Azani",
    title:
      "Azani Active Care Natural Anti Chafing Cream |For Rashes, Blisters, Thigh Rub, Itchy Skin, 50 gm",
    price1: 249,
    price2: 279,
    off: 11,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebbb",
    "style-prefix-0 href":
      "https://cultsport.com/azani-underarm-lightening-gel-dark-skin-from-shaving-deodorants-neck-back-intimate-area-50-gm/product/4155?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/wwBVqoC6MSbHNYU3746fAG4u",
    brand: "Azani",
    title:
      "Azani Underarm Lightening Gel| Dark skin from Shaving, Deodorants | Neck, Back, intimate area, 50 gm",
    price1: 299,
    price2: 499,
    off: 40,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebbc",
    "style-prefix-0 href":
      "https://cultsport.com/azani-calcium-vitamin-d-bone-support-gummies-for-adults-kids-healthy-diet-supplement-for-strong-bones-mango-strawberry-flavour-30-gummies/product/3957?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/96T9f13kUMuksgadqCbZC1Ys",
    brand: "Azani",
    title:
      "Azani Calcium & Vitamin D Bone Support Gummies for Adults & Kids |Healthy diet supplement for strong bones (Mango & Strawberry Flavour), 30 Gummies",
    price1: 299,
    price2: 549,
    off: 46,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebbd",
    "style-prefix-0 href":
      "https://cultsport.com/azani-apple-cider-vinegar-gummies-with-mother-weight-loss-gut-health-detox-30-gummies/product/3987?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pRp8iwsz7dgcAFRFLFSWPJiu",
    brand: "Azani",
    title:
      "Azani Apple Cider Vinegar Gummies with Mother | Weight Loss, Gut Health, Detox , 30 Gummies",
    price1: 349,
    price2: 449,
    off: 22,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebbe",
    "style-prefix-0 href":
      "https://cultsport.com/azani-plant-mass-gainer-1kg-1083-kcal-45g-vegan-protein-225g-carbohydrates-0-5g-chlorella-0-3g-ashwagandha-intense-muscle-recovery-weight-gainer-no-bloating-natural/product/3963?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/7NDUqVUrKSMkeULoXQSptLs6",
    brand: "Azani",
    title:
      "Azani Plant Mass Gainer 1kg | 1083 Kcal, 45g Vegan Protein, 225g Carbohydrates, 0.5g Chlorella, 0.3g Ashwagandha | Intense Muscle Recovery, Weight Gainer, No Bloating-Natural",
    price1: 799,
    price2: 1200,
    off: 33,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebbf",
    "style-prefix-0 href":
      "https://cultsport.com/azani-biotin-hair-gummies-with-zinc-iodine-vitamin-a-b-c-d-e-folic-acid-hair-vitamins-for-hair-growth-30-gummies/product/3975?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6avFYgdSxkj3AKJiS6nbXLU1",
    brand: "Azani",
    title:
      "Azani Biotin Hair Gummies with Zinc, Iodine, Vitamin A, B, C, D & E & Folic Acid | Hair Vitamins for Hair Growth, 30 Gummies",
    price1: 379,
    price2: 599,
    off: 37,
    category: "supplements",
    qty: 3,
  },
  {
    _id: "636ce2479a289d510104ebc0",
    "style-prefix-0 href":
      "https://cultsport.com/azani-pure-ultra-strong-omega-3-fish-oil-omega-3-1000mg-omega-6-7-9-vitamin-d3-60-capsules/product/3978?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4gUCtbuHsPaUtCem2uqZZDUZ",
    brand: "Azani",
    title:
      "Azani Pure & Ultra-Strong Omega 3 Fish Oil | Omega 3(1000mg)+Omega 6,7 & 9 + Vitamin D3, 60 Capsules",
    price1: 499,
    price2: 999,
    off: 50,
    category: "supplements",
    qty: 3,
  },
];

const workoutCarosal = [
  {
    _id: "636ce2289a289d510104e9e7",
    "style-prefix-0 href":
      "https://cultsport.com/cultsport-dumbbell-stand/product/4113?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F15Wr3ApdJD5Nf3eHmigimNL",
    brand: "CULTSPORT",
    title: "Dumbbell stand x1",
    price1: 7499,
    price2: 13990,
    off: 46,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9e8",
    "style-prefix-0 href":
      "https://cultsport.com/cultsport-barbell/product/4112?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WNGb9o3xhWmsV2AAjeGZ7Fqz",
    brand: "CULTSPORT",
    title: "Barbell x1 (adjustable)",
    price1: 12499,
    price2: 19990,
    off: 37,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9e9",
    "style-prefix-0 href":
      "https://cultsport.com/cultsport-kettlebell/product/4114?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/CSfn3qrNXPpcUeKSwiTmRMNY",
    brand: "CULTSPORT",
    title: "Kettlebell x1 (adjustable)",
    price1: 7699,
    price2: 11990,
    off: 36,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9ea",
    "style-prefix-0 href":
      "https://cultsport.com/tranquil-teal-yoga-mat/product/1635?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/6in31LyLKN6HMZZkMuTp44Tg",
    brand: "CULTSPORT",
    title: "Tranquil Teal Yoga Mat",
    price1: 1319,
    price2: 2399,
    off: 45,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9eb",
    "style-prefix-0 href":
      "https://cultsport.com/signature-boxing-hand-wraps/product/1431?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rqFrmhQat5ajC62f7rKCPU6m",
    brand: "CULTSPORT",
    title: "Signature Boxing Hand Wraps",
    price1: 449,
    price2: 599,
    off: 25,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9f1",
    "style-prefix-0 href":
      "https://cultsport.com/eco-friendly-anti-slip-yoga-mat-in-black/product/3836?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/12UpuKQarxbveo5ZF53RPrUv",
    brand: "CULTSPORT",
    title: "Eco Friendly Anti Slip Yoga Mat in Black",
    price1: 2399,
    price2: 3199,
    off: 25,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9f2",
    "style-prefix-0 href":
      "https://cultsport.com/2-5kg-pack-of-2-smart-barbell-plates/product/3859?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TNLqNvaDthNyGYhwnvKjFyzw",
    brand: "CULTSPORT",
    title: "2.5kg Pack of 2 Smart Barbell Plates",
    price1: 3199,
    price2: 6788,
    off: 45,
    category: "equipments",
    qty: 3,
  },
  {
    _id: "636ce2289a289d510104e9f3",
    "style-prefix-0 href":
      "https://cultsport.com/2-5kg-pack-of-4-cast-iron-bumper-plate-with-rubber-coating/product/3840?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NfE1DbqMaon92k7S14ffjuDe",
    brand: "CULTSPORT",
    title: "2.5kg Pack of 4 Cast Iron Bumper Plate with rubber coating",
    price1: 2499,
    price2: 6499,
    off: 62,
    category: "equipments",
    qty: 3,
  },
];

const bra = [
  {
    _id: "636ce26b9a289d510104eddd",
    "style-prefix-0 href":
      "https://cultsport.com/formfit-high-impact-ivy-sports-bra-500324/product/1382?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf",
    brand: "CULTSPORT",
    title: "FormFit High Impact Ivy Sports Bra",
    price1: 1674,
    price2: 2499,
    off: 33,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ede4",
    "style-prefix-0 href":
      "https://cultsport.com/formfit-high-impact-ivy-sports-bra-500327/product/1384?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/anBREptvxVED3KMUSXcPpTen",
    brand: "CULTSPORT",
    title: "FormFit High Impact Ivy Sports Bra",
    price1: 1674,
    price2: 2499,
    off: 33,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104edea",
    "style-prefix-0 href":
      "https://cultsport.com/formfit-training-sports-bra-601209/product/3093?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jsnGp3tbniZqKagkt9g9tgRz",
    brand: "CULTSPORT",
    title: "FormFit Training Sports Bra",
    price1: 986,
    price2: 2099,
    off: 53,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104edeb",
    "style-prefix-0 href":
      "https://cultsport.com/high-waist-shorts/product/1778?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/pzqQRku8Axetp7P65ZuKHoAe",
    brand: "CULTSPORT",
    title: "Printed Sports Bra",
    price1: 1819,
    price2: 2599,
    off: 30,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee0a",
    "style-prefix-0 href":
      "https://cultsport.com/medium-impact-printed-sports-bra-601505/product/4308?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yzPcy76ND94Ru69FSiLALaH1",
    brand: "CULTSPORT",
    title: "Medium Impact Printed Sports Bra",
    price1: 1819,
    price2: 2799,
    off: 35,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee0d",
    "style-prefix-0 href":
      "https://cultsport.com/prism-print-sports-bra/product/1977?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/B2h9k2JTaQvDmCkCm6NNPfHV",
    brand: "CULTSPORT",
    title: "Prism Print Sports Bra",
    price1: 1539,
    price2: 2199,
    off: 30,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee0e",
    "style-prefix-0 href":
      "https://cultsport.com/formfit-cleo-mesh-sports-bra/product/3710?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PXDhgjzLhYF6PWDZ2mshBAvR",
    brand: "CULTSPORT",
    title: "FormFit Cleo Mesh Sports Bra",
    price1: 1499,
    price2: 1999,
    off: 25,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee10",
    "style-prefix-0 href":
      "https://cultsport.com/formfit-training-sports-bra-601206/product/3090?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QtqGLDXVifdmi2KZhuMZL42D",
    brand: "CULTSPORT",
    title: "FormFit Training Sports Bra",
    price1: 1574,
    price2: 2099,
    off: 25,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee13",
    "style-prefix-0 href":
      "https://cultsport.com/medium-impact-printed-sports-bra-601503/product/4306?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qjAKW39ttw9ufoeGfMxsQuBu",
    brand: "CULTSPORT",
    title: "Medium Impact Printed Sports Bra",
    price1: 1819,
    price2: 2799,
    off: 35,
    category: "womens",
    qty: 3,
  },
];

const bottom = [
  {
    _id: "636ce26b9a289d510104ee7f",
    "style-prefix-0 href":
      "https://cultsport.com/supersoft-side-stripe-joggers-601084/product/2109?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UehDpHPrsdShRAZMDsSyYuL1",
    brand: "CULTSPORT",
    title: "Supersoft Side Stripe Joggers",
    price1: 1999,
    price2: 3099,
    off: 35,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee80",
    "style-prefix-0 href":
      "https://cultsport.com/vitals-solid-running-joggers-601459/product/3412?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/8TUTEVXc72JQ6yC8PM69jbVi",
    brand: "CULTSPORT",
    title: "Vitals Solid Running Joggers",
    price1: 1607,
    price2: 2399,
    off: 33,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee8e",
    "style-prefix-0 href":
      "https://cultsport.com/vitals-plus-workout-joggers/product/2019?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iuHjS1GkCHbzn7eFVyDc2xTD",
    brand: "CULTSPORT",
    title: "Vitals Plus Workout Joggers",
    price1: 1574,
    price2: 2099,
    off: 25,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ee91",
    "style-prefix-0 href":
      "https://cultsport.com/vitals-solid-running-joggers-601461/product/3414?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/FsypmGGXyEpXQvtnzCyFch7k",
    brand: "CULTSPORT",
    title: "Vitals Solid Running Joggers",
    price1: 1607,
    price2: 2399,
    off: 33,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104eea0",
    "style-prefix-0 href":
      "https://cultsport.com/athletic-jogger-with-side-placement-print/product/4729?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/tyovhG4UtuqbYJz5PPa8uEWg",
    brand: "CULTSPORT",
    title: "Athletic Jogger with Side Placement Print",
    price1: 1899,
    price2: 4444,
    off: 22,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ef13",
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-jogger-with-placement-print-700231/product/4695?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/fhF5CpXsZX9gj3J7Nbo2Qfg4",
    brand: "CULTSPORT",
    title: "Solid Active Jogger with Placement Print",
    price1: 1999,
    price2: 2699,
    off: 26,
    category: "womens",
    qty: 3,
  },
  {
    _id: "636ce26b9a289d510104ef18",
    "style-prefix-0 href":
      "https://cultsport.com/athletic-performance-joggers/product/4693?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yKMPfipFhjJD4yg1aWp51fRD",
    brand: "CULTSPORT",
    title: "Athletic Performance Joggers",
    price1: 1999,
    price2: 2799,
    off: 29,
    category: "womens",
    qty: 3,
  },
];

const cycles = [
  {
    _id: "636ce21d9a289d510104e9b1",
    "style-prefix-0 href":
      "https://cultsport.com/rimo-27-5-21-speed-steel-mtb-shimano-gears/product/4265?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZJBYsrvTZKUc9QzYK6fh4f8n",
    brand: "CULTSPORT",
    title: 'Rimo 27.5" 21-speed steel MTB (Shimano gears)',
    price1: 15699,
    price2: 39999,
    off: 61,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b2",
    "style-prefix-0 href":
      "https://cultsport.com/bolan-27-5-21-speed-steel-mtb-shimano-gears/product/4266?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nwziy12UVSHqbS8LGR5cnzqc",
    brand: "CULTSPORT",
    title: 'Bolan 27.5" 21-speed steel MTB (Shimano gears)',
    price1: 15699,
    price2: 39999,
    off: 61,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b3",
    "style-prefix-0 href":
      "https://cultsport.com/neel-26-21-speed-alloy-mtb-shimano-gears/product/4268?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/iJGstmndhFJaAfywnVLaEppW",
    brand: "CULTSPORT",
    title: 'Neel 26" 21-speed alloy MTB (Shimano gears)',
    price1: 16799,
    price2: 43999,
    off: 62,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b4",
    "style-prefix-0 href":
      "https://cultsport.com/yoma-27-5-21-speed-alloy-mtb-shimano-gears/product/4269?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vaKa33MqJj9CsyFCKLma9sH7",
    brand: "CULTSPORT",
    title: 'Yoma 27.5" 21-speed alloy MTB (Shimano gears)',
    price1: 17299,
    price2: 45999,
    off: 62,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b5",
    "style-prefix-0 href":
      "https://cultsport.com/kara-29-21-speed-alloy-mtb-shimano-gears/product/4271?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qKy7MFE33X6wA1Dugf28gZFG",
    brand: "CULTSPORT",
    title: 'Kara 29" 21-speed alloy MTB (Shimano gears)',
    price1: 17699,
    price2: 47999,
    off: 63,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b6",
    "style-prefix-0 href":
      "https://cultsport.com/deo-27-5-21-speed-alloy-mtb-shimano-gears/product/4270?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/b5s9ByjrJfqQ6s4ZbeYziCUc",
    brand: "CULTSPORT",
    title: 'Deo 27.5" 21-speed alloy MTB (Shimano gears)',
    price1: 17299,
    price2: 45999,
    off: 62,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b7",
    "style-prefix-0 href":
      "https://cultsport.com/hemis-29-21-speed-steel-mtb-shimano-gears/product/4267?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/XdP8VucFHECX11cMzy8J4b1v",
    brand: "CULTSPORT",
    title: 'Hemis 29" 21-speed steel MTB (Shimano gears)',
    price1: 15999,
    price2: 41999,
    off: 62,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b8",
    "style-prefix-0 href":
      "https://cultsport.com/urban-terrain-ut1001-steel-mtb-27-5-t-shimano-geared-mountain-cycle-21-gear-blue/product/3455?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vtg2iiscHQwMC3K1Dd6C8ztf",
    brand: "Urban Terrain",
    title:
      "UT1001, Blue, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price1: 12999,
    price2: 49990,
    off: 74,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9b9",
    "style-prefix-0 href":
      "https://cultsport.com/urban-terrain-ut2000-steel-mtb-27-5-t-shimano-geared-mountain-cycle-21-gear-red/product/3454?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mRmDRFA389Zo8n23tVRCvmty",
    brand: "Urban Terrain",
    title:
      "UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price1: 12999,
    price2: 49990,
    off: 74,
    launched: "",
    category: "cycles",
    qty: 3,
  },
  {
    _id: "636ce21d9a289d510104e9ba",
    "style-prefix-0 href":
      "https://cultsport.com/ut3000s27-5-blue-steel-mtb-27-5t-shimano-geared-mountain-cycle-21-gear/product/3808?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/i6GqzzDatzrHSkSz9DXjs3un",
    brand: "Urban Terrain",
    title:
      "UT3000S27.5, Blue Steel MTB 27.5T Shimano Geared Mountain Cycle(21 Gear)",
    price1: 13499,
    price2: 45990,
    off: 71,
    launched: "",
    category: "cycles",
    qty: 3,
  },
];

const tshirts = [
  {
    _id: "636ce23d9a289d510104ea8d",
    "style-prefix-0 href":
      "https://cultsport.com/layr-lifestyle-sweatshirt-601285/product/3381?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/NdvEpwV9voi5Kq17ZhcQgeHy",
    brand: "CULTSPORT",
    title: "Layr Lifestyle Sweatshirt",
    price1: 1942,
    price2: 2899,
    off: 33,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104ea8f",
    "style-prefix-0 href":
      "https://cultsport.com/layr-lifestyle-sweatshirt/product/3106?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/ZMFaKHM9gxMUMEvZmwoyBvWH",
    brand: "CULTSPORT",
    title: "Layr Lifestyle Sweatshirt",
    price1: 1180,
    price2: 2399,
    off: 51,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104ea92",
    "style-prefix-0 href":
      "https://cultsport.com/layr-solid-sweatshirt-601338/product/2186?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bnoa7JjJQQNoGqrMMRWBJpUB",
    brand: "CULTSPORT",
    title: "LAYR Solid Sweatshirt",
    price1: 2239,
    price2: 3199,
    off: 30,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104ea93",
    "style-prefix-0 href":
      "https://cultsport.com/textured-performance-tshirt-with-logo/product/4228?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gyEKit98fH6VGSZ2jv1fFkSm",
    brand: "cultsportone",
    title: "Textured Performance Tshirt with Logo",
    price1: 549,
    price2: 999,
    off: 45,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaa1",
    "style-prefix-0 href":
      "https://cultsport.com/performance-tshirt-with-chest-print-700126/product/4235?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/PQgNKRobtV66yXUABJ8TJdQR",
    brand: "cultsportone",
    title: "Performance Tshirt with Chest Print",
    price1: 659,
    price2: 1199,
    off: 45,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaa6",
    "style-prefix-0 href":
      "https://cultsport.com/textured-perfomance-tshirt/product/4343?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/31mJBL2bksrf5vrJ2cByXYrX",
    brand: "CULTSPORT",
    title: "Textured Perfomance Tshirt",
    price1: 824,
    price2: 1099,
    off: 25,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaa7",
    "style-prefix-0 href":
      "https://cultsport.com/textured-performance-tshirt-with-logo-700120/product/4229?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/hr6uD1dJCHmmghCCKNYxgT6e",
    brand: "cultsportone",
    title: "Textured Performance Tshirt with Logo",
    price1: 549,
    price2: 999,
    off: 45,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaa8",
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-tshirt-with-logo-700426/product/4349?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/jHrnZD23RG55URwojpJzYS3D",
    brand: "CULTSPORT",
    title: "Solid Active Tshirt with Logo",
    price1: 1624,
    price2: 2499,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaa9",
    "style-prefix-0 href":
      "https://cultsport.com/active-tshirt-with-placement-graphic/product/4230?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/Rt6LUXkNe3NFaxfDJ9SuvdKB",
    brand: "cultsportone",
    title: "Active Tshirt with Placement Graphic",
    price1: 604,
    price2: 1099,
    off: 45,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaaa",
    "style-prefix-0 href":
      "https://cultsport.com/textured-active-tshirt-700429/product/4352?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/LfdYgb41SiMwDwZbYbGLubQF",
    brand: "CULTSPORT",
    title: "Textured Active Tshirt",
    price1: 1234,
    price2: 1899,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaab",
    "style-prefix-0 href":
      "https://cultsport.com/textured-perfomance-tshirt-700423/product/4346?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/QV53NNzZH1R6Un9BUn6djP2Q",
    brand: "CULTSPORT",
    title: "Textured Perfomance Tshirt",
    price1: 824,
    price2: 1099,
    off: 25,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaac",
    "style-prefix-0 href":
      "https://cultsport.com/textured-perfomance-tshirt-700431/product/4354?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/kFgqofHcoNVLwmcaWTMARBjk",
    brand: "CULTSPORT",
    title: "Textured Perfomance Tshirt",
    price1: 1234,
    price2: 1899,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaae",
    "style-prefix-0 href":
      "https://cultsport.com/vitals-lifestyle-polo-tshirt/product/3123?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/AmGR711mZ3KinRHFpSJJspma",
    brand: "CULTSPORT",
    title: "Vitals Lifestyle Polo Tshirt",
    price1: 1049,
    price2: 1799,
    off: 42,
    launched: "",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eaaf",
    "style-prefix-0 href":
      "https://cultsport.com/textured-perfomance-tshirt-700432/product/4355?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/uypNEfQfSNnfePJNDsDwEh4H",
    brand: "CULTSPORT",
    title: "Textured Perfomance Tshirt",
    price1: 1039,
    price2: 1599,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eab5",
    "style-prefix-0 href":
      "https://cultsport.com/textured-active-tshirt/product/4351?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/c3uFKXERUQ8MsBHGZgxDFnTf",
    brand: "CULTSPORT",
    title: "Textured Active Tshirt",
    price1: 1039,
    price2: 1599,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
  {
    _id: "636ce23d9a289d510104eab7",
    "style-prefix-0 href":
      "https://cultsport.com/solid-active-tshirt-with-logo-700424/product/4347?",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/GaiTrBEgTogE7hFHDSxiVJtE",
    brand: "CULTSPORT",
    title: "Solid Active Tshirt with Logo",
    price1: 1624,
    price2: 2499,
    off: 35,
    launched: "JUST LAUNCHED",
    category: "mens",
    qty: 3,
  },
];
