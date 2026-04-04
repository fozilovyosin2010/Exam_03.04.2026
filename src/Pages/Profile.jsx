import React from "react";

import Box from "../Component/Box";

import cardImg1 from "../img/cardImg1.png";
import img1 from "../img/img1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg3 from "../img/cardImg3.png";
import cardImg4 from "../img/cardImg4.png";
import cardImg5 from "../img/cardImg5.png";

import profIcon from "../img/profIcon.png";
import profB from "../img/profB.png";

import { useTranslation } from "react-i18next";

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
];

const Profile = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("profile.items"), value: "587" },
    { label: t("profile.followers"), value: "12K" },
    { label: t("profile.volume"), value: "80 ETH" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header / Cover Image */}
      <div
        style={{
          backgroundImage: `url(${profB})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "100% 355px",
        }}
        className="relative h-48 md:h-64 bg-gradient-to-r from-pink-200 to-orange-100 mx-4 mt-4 rounded-3xl "
      ></div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
            <img src={profIcon} className="" alt="" />
          </div>

          <div className="mt-4 text-center md:text-left flex flex-col md:flex-row md:items-end md:gap-8 w-full">
            <div>
              <h1 className="text-3xl font-black text-zinc-900">Harry K.</h1>
              <p className="text-gray-400 font-medium">@harry_designer</p>
            </div>

            <div className="flex gap-8 mt-6 md:mt-0">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <p className="text-xl font-bold text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Discover Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">{t.discover}</h2>
            <div className="flex gap-4 text-sm font-bold text-gray-400">
              <span className="text-black border-b-2 border-black pb-1 cursor-pointer">
                All
              </span>
              <span className="hover:text-black cursor-pointer">Art</span>
              <span className="hover:text-black cursor-pointer">Music</span>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {nftData.map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-100 p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-square rounded-2xl bg-gray-50 mb-4 overflow-hidden">
                  <img src={item.img} className="h-full w-full" alt="" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-zinc-900">Sun-Glass</p>
                    <p className="text-xs text-gray-400">@DiveSea</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-900">1.75 ETH</p>
                  </div>
                </div>
                <button className="w-full mt-4 py-3 bg-black text-white rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all">
                  {t.bid}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
