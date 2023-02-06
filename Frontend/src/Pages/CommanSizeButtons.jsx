import React from "react";
import { HStack, Wrap, WrapItem, Button } from "@chakra-ui/react";

function CommanSizeButtons() {
  return (
    <Wrap>
      {arr?.map((el, i) => {
        return (
          <WrapItem>
            <Button
              border={i == 0 ? "1px solid rgb(245, 166, 35)" : ""}
              mr="3"
              colorScheme="teal"
              variant="ghost"
              borderRadius="20px"
              fontWeight="300"
              color="black"
              _hover={{
                bgColor: "white",
                border: "1px solid rgb(245, 166, 35)",
              }}
            >
              {el}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default CommanSizeButtons;

const arr = ["UK4", "UK5", "UK6", "UK7", "UK8", "UK9", "UK10", "UK11"];
