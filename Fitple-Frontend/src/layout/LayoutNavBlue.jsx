import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayoutNavBlue = () => {
  return (
    <>
      {/* Navbar 파란색 */}
      <Navbar $blue />
      <Outlet />
    </>
  );
};

export default LayoutNavBlue;
