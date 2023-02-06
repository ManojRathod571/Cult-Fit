import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Button,
  Container,
  HStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { MdRestorePage } from "react-icons/md";
import AdminDashboard from "./Dashboard";

function Trash() {
  const [trash, setTrash] = useState([]);
  const [load, setLoad] = useState(false);
  const toast = useToast();

  useEffect(() => {
    getTrash();
  }, []);

  const getTrash = () => {
    setLoad(true);
    axios.get(`${process.env.REACT_APP_URL}/trash?limit=50`).then((res) => {
      setLoad(false);
      setTrash(res.data);
    });
  };
  return (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Prod. name</Th>
              <Th>Brand</Th>
              <Th>Price</Th>
              <Th>Discount</Th>
              <Th>Restore prod.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {trash?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el.title}
                    </Text>
                  </Td>
                  <Td>{el.brand}</Td>
                  <Td>₹ {el.price1}</Td>
                  <Td>{el.off}%</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        axios
                          .post(`${process.env.REACT_APP_URL}/trash`, el)
                          .then((res) => {
                            console.log(res.data);
                            getTrash();
                            toast({
                              title: "Hey! Akshay ❤️",
                              description:
                                "Item has been restored and added agn to the database ! 😍",
                              status: "success",
                              position: "top",
                              duration: 2000,
                              isClosable: true,
                            });
                          });
                      }}
                      size="sm"
                    >
                      <MdRestorePage fontSize={"20px"} color="#7575fd" />{" "}
                      Restore
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Trash;
