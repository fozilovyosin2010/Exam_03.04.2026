import React from "react";
import { Outlet } from "react-router";

import Logo from "../img/logo.png";

const Layout = () => {
  return (
    <div>
      <div className="header"></div>

      <Outlet />

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
