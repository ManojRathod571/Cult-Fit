import React from "react";
import AllProducts from "./Admin/AllProducts";
import AdminDashboard from "./Admin/Dashboard";
import Trash from "./Admin/Trash";
import AllRoutes from "./AllRoutes/AllRoutes";
import CultStoreNavbar from "./Components/CultStoreNavbar/CultStoreNavbar";
import LoginPage from "./Components/LoginPart/LoginPage";
import SignupPage from "./Components/LoginPart/SignupPage";
import UserProfile from "./Components/LoginPart/UserProfile";
import Footer from "./utils/Footer";

function App() {
  return (
    <div>
      <AllRoutes />
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
