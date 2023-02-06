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
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import ViewProduct from "./ViewProd";
import UpdateProduct from "./UpdateItem";
import AdminDashboard from "./Dashboard";
import Loader from "../utils/Loader";

function AllProducts() {
  const [prod, setProd] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const toast = useToast();

  useEffect(() => {
    getalldata();
  }, [page]);

  const getalldata = () => {
    setLoad(true);
    axios
      .get(`${process.env.REACT_APP_URL}/products?page=${page}&limit=50`)
      .then((res) => {
        setLoad(false);
        setProd(res.data);
      });
  };

  return load ? (
    <Loader />
  ) : (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Prod. name</Th>
              <Th>Brand</Th>
              <Th>Price</Th>
              <Th>Discount</Th>
              <Th>View prod.</Th>
              <Th>Update prod.</Th>
              <Th>Delete prod.</Th>
            </Tr>
          </Thead>
          <Tbody>
            {prod?.map((el) => {
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
                    <ViewProduct id={el._id} />
                  </Td>
                  <Td>
                    <UpdateProduct id={el._id} getalldata={getalldata} />
                  </Td>
                  <Td>
                    <Button
                      onClick={() => {
                        axios
                          .put(`${process.env.REACT_APP_URL}/products/${el._id}`, el)
                          .then((res) => {
                            console.log(res.data);
                            getalldata();
                            toast({
                              title: "Hey! Akshay ❤️",
                              description:
                                "Item has been deleted and added to the trash ! 🪣",
                              status: "warning",
                              position: "top",
                              duration: 2000,
                              isClosable: true,
                            });
                          });
                      }}
                      size="sx"
                    >
                      <AiFillDelete fontSize={"20px"} color="#7575fd" />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <br />
      <HStack m="auto" alignItems={"center"} justifyContent="center">
        <Button
          disabled={page == 1 ? true : false}
          onClick={() => setPage(page - 1)}
          bg="#e7e7ff"
          borderRadius="0"
        >
          prev
        </Button>
        <Button borderRadius="0" bg="#cbcbf9">
          {page}
        </Button>
        <Button onClick={() => setPage(page + 1)} bg="#e7e7ff" borderRadius="0">
          next
        </Button>
      </HStack>
    </>
  );
}

export default AllProducts;
