import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { BsArrowsExpand } from "react-icons/bs";

function SortByDiscount({ handleDiscountSort }) {
  return (
    <>
      <Menu bgColor="white">
        <MenuButton
          as={Button}
          rightIcon={<BsArrowsExpand />}
          variant="outline"
          bgColor="white"
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          fontSize="15px"
          fontWeight={"600"}
          letterSpacing={".7px"}
          size="sm"
          py="4"
        >
          SORT BY DISCOUNT
        </MenuButton>
        <MenuList minWidth="150px">
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => handleDiscountSort("desc")}
          >
            <CiDiscount1 />
            <span>Discount : High to low</span>
          </MenuItem>
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => handleDiscountSort("asc")}
          >
            <CiDiscount1 />
            <span>Discount : Low to High</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default SortByDiscount;
