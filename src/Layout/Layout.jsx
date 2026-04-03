import React from "react";
import { Link, Outlet } from "react-router";

import Header from "../Component/Header";

import Footer from "../Component/Footer";

const Layout = () => {
  return (
    <div className="inter">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
