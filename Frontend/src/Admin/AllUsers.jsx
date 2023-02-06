import React, { useEffect, useState } from "react";
import AdminDashboard from "./Dashboard";

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
import Loader from "../utils/Loader";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setload(true);
    axios.get(`${process.env.REACT_APP_URL}/user`).then((res) => {
      setUsers(res.data);
      setload(false);
    });
  };

  return load ? (
    <Loader />
  ) : (
    <>
      <AdminDashboard />
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Password</Th>
              <Th>PinCode</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td>
                    <Text w="220px" overflow={"hidden"} textOverflow="ellipsis">
                      {el.name}
                    </Text>
                  </Td>
                  <Td>{el.email}</Td>
                  <Td>{el.password}</Td>
                  <Td>{el.pinCode}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllUsers;
