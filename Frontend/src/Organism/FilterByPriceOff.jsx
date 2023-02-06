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

function FilterByPriceOff({ hanldeOff }) {
  return (
    <>
      <Menu bgColor="white">
        <MenuButton
          as={Button}
          // rightIcon={<BsArrowsExpand />}
          variant="outline"
          bgColor="white"
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          fontSize="15px"
          fontWeight={"600"}
          letterSpacing={".7px"}
          size="sm"
          py="4"
        >
          % DISCOUNT
        </MenuButton>
        <MenuList minWidth="150px">
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => hanldeOff([10, 90])}
          >
            <CiDiscount1 />
            <span>All Discounts</span>
          </MenuItem>
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => hanldeOff([11, 30])}
          >
            <CiDiscount1 />
            <span>off 0 to 30 %</span>
          </MenuItem>
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => hanldeOff([31, 45])}
          >
            <CiDiscount1 />
            <span>off 31 to 45 %</span>
          </MenuItem>
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => hanldeOff([46, 60])}
          >
            <CiDiscount1 />
            <span>off 46 to 60 %</span>
          </MenuItem>
          <MenuItem
            w="full"
            gap={"2"}
            _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            onClick={() => hanldeOff([61, 99])}
          >
            <CiDiscount1 />
            <span>above 60 %</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default FilterByPriceOff;
