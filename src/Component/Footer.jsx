import React, { Component } from "react";
import { Link } from "react-router";

import faceB from "../img/faceB.png";
import twit from "../img/twit.png";
import insIcon from "../img/insIcon.png";
import inIcon from "../img/inIcon.svg";

import LogoWH from "../img/logoWH.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer bg-[#000000] text-[#fff]">
        <div className="sec p-[40px_20px] gap-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <Link to={"/"} className="flex items-center gap-3">
              <img
                src={LogoWH}
                className="w-[53px] h-[53px] max-md:w-[37px] max-md:h-[37px]"
                alt=""
              />

              <div className="text-[18px] font-[700]">DiveSea</div>
            </Link>
            <div className="text-gray-400 font-[500] flex justify-between gap-[30px]">
              <span>Privacy Policy</span>
              <span>Term & Conditions</span>
              <span>About Us</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#818181]"></div>
          <div className="flex justify-between">
            <div className="text-gray-400 font-[500]">
              © 2023 EATLY All Rights Reserved.{" "}
            </div>
            <div className="flex justify-between items-center gap-[30px]">
              <img className="w-[20px] h-[20px]" src={insIcon} alt="" />
              <img className="w-[20px] h-[20px]" src={inIcon} alt="" />
              <img className="w-[20px] h-[20px]" src={faceB} alt="" />
              <img className="w-[20px] h-[20px]" src={twit} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
