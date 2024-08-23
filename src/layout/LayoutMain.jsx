import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <>
      <Navbar $login />
      <Outlet />
    </>
  );
};

export default LayoutMain;
