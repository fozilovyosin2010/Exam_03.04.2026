import React, { Component } from "react";
import { Link } from "react-router";

import faceB from "../img/faceB.png";
import twit from "../img/twit.png";
import insIcon from "../img/insIcon.png";
import inIcon from "../img/inIcon.svg";

import LogoWH from "../img/logoWH.png";

import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="footer bg-[#000000] text-[#fff]">
        <div className="sec p-[40px_20px] gap-3 flex flex-col justify-between">
          <div className="flex justify-between md:items-center max-sm:flex-col ">
            <div className="flex items-center justify-between gap-3">
              <Link to={"/"} className="flex items-center gap-3">
                <img
                  src={LogoWH}
                  className="w-[53px] h-[53px] max-md:w-[37px] max-md:h-[37px]"
                  alt=""
                />

                <div className="text-[18px] font-[700] max-md:text-[16px]">
                  DiveSea
                </div>
              </Link>
              <div className="hidden gap-3 max-sm:flex justify-between">
                <img className="w-[20px] h-[20px]" src={insIcon} alt="" />
                <img className="w-[20px] h-[20px]" src={inIcon} alt="" />
                <img className="w-[20px] h-[20px]" src={faceB} alt="" />
                <img className="w-[20px] h-[20px]" src={twit} alt="" />
              </div>
            </div>
            <div className="text-gray-400 font-[500] flex gap-[30px] max-md:text-[12px] max-sm:flex-col">
              <span>{t("footer.privacy")}</span>
              <span>{t("footer.terms")}</span>
              <span>{t("footer.about")}</span>
              <span>{t("footer.contact")}</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#818181]"></div>
          <div className="flex justify-between">
            <div className="text-gray-400 font-[500] max-md:text-[12px]">
              {t("footer.rights")}
            </div>
            <div className="flex justify-between items-center gap-[30px] max-sm:hidden">
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

export default withTranslation()(Footer);
