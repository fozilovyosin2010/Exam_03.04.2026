import React, { useState } from "react";

import cardImg1 from "../img/cardImg1.png";
import img1 from "../img/img1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg3 from "../img/cardImg3.png";
import cardImg4 from "../img/cardImg4.png";
import cardImg5 from "../img/cardImg5.png";
import { useTranslation } from "react-i18next";
import Box from "../Component/Box";

const nftData = [
  {
    id: 1,
    name: "Sun-Glass",
    price: "1.75",
    img: cardImg1,
    time: "07h 09m 12s",
  },
  {
    id: 2,
    name: "Sun-Glass",
    price: "1.75",
    img: img1,
    time: "07h 09m 12s",
  },
  {
    id: 3,
    name: "NuEvey",
    price: "1.25",
    img: cardImg2,
    time: "19h 09m 12s",
  },
  {
    id: 4,
    name: "NuEvey",
    price: "1.75",
    img: cardImg3,
    time: "07h 09m 12s",
  },
  {
    id: 5,
    name: "NuEvey",
    price: "1.75",
    img: cardImg4,
    time: "07h 09m 12s",
  },
  {
    id: 6,
    name: "NuEvey",
    price: "1.75",
    img: cardImg5,
    time: "07h 09m 12s",
  },
  {
    id: 7,
    name: "Sun-Glass",
    price: "1.75",
    img: cardImg1,
    time: "07h 09m 12s",
  },
  {
    id: 8,
    name: "Sun-Glass",
    price: "1.75",
    img: img1,
    time: "07h 09m 12s",
  },
  {
    id: 9,
    name: "NuEvey",
    price: "1.25",
    img: cardImg2,
    time: "19h 09m 12s",
  },
  {
    id: 10,
    name: "NuEvey",
    price: "1.75",
    img: cardImg3,
    time: "07h 09m 12s",
  },
  {
    id: 11,
    name: "NuEvey",
    price: "1.75",
    img: cardImg4,
    time: "07h 09m 12s",
  },
  {
    id: 12,
    name: "NuEvey",
    price: "1.75",
    img: cardImg5,
    time: "07h 09m 12s",
  },
];

const Discover = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col py-[20px] items-center justify-center">
        <div className="text-[50px] font-[700]">{t("discover.dis")}</div>
        <div className="flex justify-between gap-3">
          <div className="border rounded-[10px] p-[10px_15px]">
            {t("discover.t1")}
          </div>
          <div className="border rounded-[10px] p-[10px_15px]">
            {t("discover.t2")}
          </div>
          <div className="border rounded-[10px] p-[10px_15px]">
            {t("discover.t3")}
          </div>
        </div>
      </div>
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nftData.map((nft, i) => (
            <Box key={i} {...nft} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Discover;
