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
import { FcMoneyTransfer } from "react-icons/fc";
import { BsArrowsExpand } from "react-icons/bs";

function SortByPrice({ handleLH, handleHL }) {
  return (
    <Menu bgColor="white">
      <MenuButton
        as={Button}
        rightIcon={<BsArrowsExpand />}
        variant="outline"
        bgColor="white"
        _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
        fontSize="15px"
        fontWeight={"600"}
        letterSpacing={".5px"}
        size="sm"
        py="4"
      >
        Sort by Price
      </MenuButton>
      <MenuList minWidth="fit-content">
        <MenuItem
          w="fit-content"
          gap={"2"}
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          onClick={()=>handleHL("desc")}
          fontSize="14px"
        >
          <FcMoneyTransfer />
          <span>Price: High to low</span>
        </MenuItem>
        <MenuItem
          w="fit-content"
          gap={"2"}
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          onClick={()=>handleLH("asc")}
          fontSize="14px"
        >
          <FcMoneyTransfer />
          <span>Price Low to high</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortByPrice;
