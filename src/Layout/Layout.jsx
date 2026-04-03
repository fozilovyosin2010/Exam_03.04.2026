import React from "react";
import { Link, Outlet } from "react-router";

import Logo from "../img/logo.png";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <div className="sec flex justify-between p-[10px_20px]">
          <div className="flex gap-4 items-center">
            <Link to={"/"} className="flex items-center gap-3">
              <img
                src={Logo}
                className="w-[53px] h-[53px] max-md:w-[37px] max-md:h-[37px]"
                alt=""
              />

              <div className="text-[18px] font-[700]">DiveSea</div>
            </Link>

            <nav className="flex gap-4 font-[500] text-[18px] text-[#606060] max-md:text-[12px] max-sm:hidden">
              <a href="#">DISCOVER</a>
              <a href="#">CREATORS</a>
              <a href="#">SELL</a>
              <a href="#">STATS</a>
            </nav>
          </div>
          <div className="flex items-center gap-[30px]">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>

            <div className="bg-[#EDEDED] flex p-[10px_16px] rounded-2xl max-w-[357px] flex gap-[5px] max-md:p-[5px_8px] max-sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search text-gray-400 max-md:w-[18px]"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <input
                className="placeholder:font-[500] max-w-full text-[14px] max-md:text-[12px] "
                type="text"
                name=""
                id=""
                placeholder="Search Art Work / Creator"
              />
            </div>

            <Link
              to={"/profile"}
              className="font-medium text-[16px] bg-[#141416] p-[11px_17px] rounded-xl text-[#fff] max-md:text-[13px] max-md:p-[5px_10px] max-sm:hidden"
            >
              PROFILE
            </Link>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
