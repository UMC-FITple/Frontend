import React from "react";
import { Outlet } from "react-router-dom";

const LayoutNonNav = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutNonNav;
