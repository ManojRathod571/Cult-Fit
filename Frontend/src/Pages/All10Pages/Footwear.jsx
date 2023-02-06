import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/GetData/getData.actions";

import SortByPrice from "../../Organism/FilterByPrice";
import FilterByPriceOff from "../../Organism/FilterByPriceOff";
import SingleProduct from "../../Organism/SingleComponent";
import SortByDiscount from "../../Organism/SortByDiscount";
import { BsSearch } from "react-icons/bs";
import { getInputData } from "../../Redux/Throttling/t.actions";
import InputSearchSingleData from "../../Organism/InputSearchSingleData";
import CommanButton from "../../Organism/CommanButton";
import { getButton } from "../../Redux/ButtonRoute/button.action";
import Loader from "../../utils/Loader";
import LoaderInput from "../../utils/LoaderforInput";
import CultStoreNavbar from "../../Components/CultStoreNavbar/CultStoreNavbar";
import Footer from "../../utils/Footer";

function Footwear() {
  const [a, setA] = useState("footwears");
  const data = useSelector((state) => state?.getData?.data);
  const isLoading = useSelector((state) => state?.getData?.isLoading);
  const route = useSelector((state) => state?.button?.route);
  // const [temp, setTemp] = useState([]);pp;lok,injm
  const dispatch = useDispatch();
  // const [par, setPar] = useState("");
  const [value, setValue] = useState("");
  const [input, setInput] = useState([]);
  const [height, setHeight] = useState(66);
  const INPUT = useSelector((state) => state.inputData.inputData);
  const inputLoading = useSelector((state) => state.inputData.inputLoading);
    const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getData("footwears",page));
    dispatch(getButton("footwears"));
  }, [page]);

  useEffect(() => {
    if (value == "") {
      setInput([]);
    } else {
      setInput(INPUT);
    }
  }, [INPUT]);

  const handleFilter = (el) => {
    dispatch(getData("footwears", page, el));
  };

  const handleLH = (asc) => {
    dispatch(getData("footwears", page, "", asc));
  };

  const handleHL = (desc) => {
    dispatch(getData("footwears", page, "", desc));
  };

  const handleDiscountSort = (asc) => {
    dispatch(getData("footwears", page, "", "", asc));
  };

  const hanldeOff = (off) => {
    dispatch(getData("footwears", page, "", "", "", off));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(getInputData("footwears", page, value));
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <CultStoreNavbar />
      <Grid
        gridTemplateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(2,1fr)"]}
        // border="2px solid red"
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        fontFamily={"sans-serif"}
        // justifyContent={"space-between"}
        alignItems="center"
        gap="5"
      >
        <Flex
          border="1px solid gray"
          flexDirection="column"
          position="relative"
          borderRadius="8px"
        >
          <Flex position="relative" alignItems="center" borderRadius="10px">
            <Input
              value={value}
              type="text"
              placeholder="enter query here"
              outline="none"
              border="none"
              flex="1"
              letterSpacing=".4px"
              fontSize="19px"
              focusBorderColor="none"
              _placeholder={{
                opacity: 0.4,
                color: "gray",
                letterSpacing: "0",
              }}
              onChange={(e) => handleChange(e)}
            />
            <Box pr="10px">
              <BsSearch fontSize="20px" color="rgb(255, 50, 120)" />
            </Box>
          </Flex>
          {inputLoading ? (
            <LoaderInput />
          ) : (
            <InputSearchSingleData
              input={input}
              value={value}
              height={height}
            />
          )}
        </Flex>
        <Flex
          // border="2px solid red"
          justifyContent={"space-between"}
          alignItems="center"
          gap="2"
        >
          <FilterByPriceOff hanldeOff={hanldeOff} />
          <SortByDiscount handleDiscountSort={handleDiscountSort} />
          <SortByPrice handleLH={handleLH} handleHL={handleHL} />
          {/* <SortByPrice /> */}
        </Flex>
      </Grid>
      <br />
      <CommanButton array={footWear} handleFilter={handleFilter} />

      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={{ base: "2", sm: "3", md: "4", lg: "6" }}
        rowGap="6"
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        fontFamily={"sans-serif"}
        mt="5"
        position={"relative"}
      >
        {data?.map((el) => {
          return <SingleProduct {...el} key={el._id} />;
        })}
      </Grid>
      <br />
      <br />
      <HStack w="full" justifyContent={"center"}>
        <Button
          bg="rgb(255, 50, 120)"
          color="white"
          letterSpacing={"2px"}
          borderRadius={"0px"}
          _hover={{ bg: "rgb(255, 50, 120)", color: "white" }}
          onClick={() => setPage(page - 1)}
          disabled={page == 1 ? true : false}
        >
          Prev
        </Button>
        <Button
          border="1px dashed rgb(255, 50, 120)"
          bg="none"
          borderRadius={"0px"}
          fontSize="20px"
          color="rgb(255, 50, 120)"
        >
          {page}
        </Button>
        <Button
          bg="rgb(255, 50, 120)"
          color="white"
          letterSpacing={"2px"}
          borderRadius={"0px"}
          _hover={{ bg: "rgb(255, 50, 120)", color: "white" }}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </HStack>
      <br />
      <Footer />
    </>
  );
}

export default Footwear;

const footWear = ["FLIP FLOPS", "RUNNING SHOES"];
