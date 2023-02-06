import { Routes, Route } from "react-router-dom";

import React from "react";
import OneProductPage from "../Pages/SingleProductPage";
import HomePage from "../Components/HomePage";
import Mens from "../Pages/All10Pages/Mens";
import WoMens from "../Pages/All10Pages/women";
import BestSellers from "../Pages/All10Pages/BestSeller";
import NewArrivals from "../Pages/All10Pages/NewArrivals";
import Footwear from "../Pages/All10Pages/Footwear";
import Cardio from "../Pages/All10Pages/Cardio";
import Cycles from "../Pages/All10Pages/Cycles";
import Accessories from "../Pages/All10Pages/Accessories";
import Supplements from "../Pages/All10Pages/Supplements";
import Equipments from "../Pages/All10Pages/Equipments";
import Wishlist from "../Organism/WishList&Cart/Wishlist";
import Cart from "../Organism/WishList&Cart/Cart";
import SignupPage from "../Components/LoginPart/SignupPage";
import LoginPage from "../Components/LoginPart/LoginPage";
import Trash from "../Admin/Trash";
import AllProducts from "../Admin/AllProducts";
import AllUsers from "../Admin/AllUsers";
import FirstPage from "../Admin/FirstPage";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/mens"
          element={
            <PrivateRoute>
              <Mens />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens"
          element={
            <PrivateRoute>
              <WoMens />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/topSellings"
          element={
            <PrivateRoute>
              <BestSellers />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/topArrivals"
          element={
            <PrivateRoute>
              <NewArrivals />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/footwears"
          element={
            <PrivateRoute>
              <Footwear />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cardio"
          element={
            <PrivateRoute>
              <Cardio />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cycles"
          element={
            <PrivateRoute>
              <Cycles />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/accessories"
          element={
            <PrivateRoute>
              <Accessories />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/supplements"
          element={
            <PrivateRoute>
              <Supplements />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/equipments"
          element={
            <PrivateRoute>
              <Equipments />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/:router/:id"
          element={
            <PrivateRoute>
              <OneProductPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route
          path="/trash"
          element={
            <PrivateRoute>
              <Trash />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <FirstPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/allproducts"
          element={
            <PrivateRoute>
              <AllProducts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <AllUsers />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
