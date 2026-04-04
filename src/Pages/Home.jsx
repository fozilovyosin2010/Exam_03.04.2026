import React, { useReducer, useRef } from "react";
import { useTranslation } from "react-i18next";

import img1S1 from "../img/img1S1.png";
import img2S1 from "../img/img2S1.png";

import cardImg1 from "../img/cardImg1.png";
import img1 from "../img/img1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg3 from "../img/cardImg3.png";
import cardImg4 from "../img/cardImg4.png";
import cardImg5 from "../img/cardImg5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import i18next from "i18next";

const Home = () => {
  const { t } = useTranslation();

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

  const swipeRef = useRef();

  function handlePrev() {
    if (swipeRef.current) {
      swipeRef.current.slidePrev();
    }
  }
  function handleNext() {
    if (swipeRef.current) {
      swipeRef.current.slideNext();
    }
  }

  function reducer(state, action) {}

  const initialValue = {
    data: [
      {
        id: 1,
        img: cardImg1,
        name: "Alex Ca.",
        author: "Alex",
        vol: "8,456",
        change: "+ 27.78%",
        floor: "3,5",
        owners: "2.2K",
        items: "500",
      },
      {
        id: 2,
        img: cardImg2,
        name: "Alex Ca.",
        author: "Alex",
        vol: "4,780",
        change: "+ 27.78%",
        floor: "7,9",
        owners: "3.4K",
        items: "900",
      },
      {
        id: 3,
        img: cardImg3,
        name: "Alex Ca.",
        author: "Alex",
        vol: "4,780",
        change: "+ 27.78%",
        floor: "7,9",
        owners: "3.4K",
        items: "900",
      },
      {
        id: 4,
        img: cardImg4,
        name: "Alex Ca.",
        author: "Alex",
        vol: "4,780",
        change: "+ 27.78%",
        floor: "7,9",
        owners: "3.4K",
        items: "900",
      },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <section className="relative max-w-[1440px] pl-[20px] m-[0_auto] mr-0 py-10">
        <div className="px-4 flex items-center justify-between max-sm:flex-col gap-10">
          {/* block1 */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              {t("hero.title")}
            </h1>

            <p className="text-gray-500 mb-6 max-w-md">{t("hero.desc")}</p>

            <div className="flex gap-4 mb-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg">
                {t("hero.btnExplore")}
              </button>
              <button className="border px-6 py-3 rounded-lg">
                {t("hero.btnCreate")}
              </button>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <h3 className="font-bold text-lg">430K+</h3>
                <p className="text-gray-400">{t("hero.stats1")}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">159K+</h3>
                <p className="text-gray-400">{t("hero.stats2")}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">87K+</h3>
                <p className="text-gray-400">{t("hero.stats3")}</p>
              </div>
            </div>
          </div>

          {/* block2 */}
          <div className="flex-1 flex">
            <img
              src={img1S1}
              className="max-w-[391px] rounded-2xl shadow-lg max-md:max-w-[279px]"
            />

            <img
              src={img2S1}
              className="absolute max-w-[320px] right-0 bottom-0 w-60 rounded-2xl max-md:max-w-[227px]"
            />

            {/* ARROWS */}
            <div className="absolute bottom-[-20px] flex gap-2 bg-white px-4 py-2 rounded-xl shadow">
              <button className="cursor-pointer">←</button>
              <button className="cursor-pointer">→</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f8f8f8]">
        <div className="sec px-4">
          {/* TITLE */}
          <h2 className="text-center text-2xl font-semibold text-gray-400 mb-10">
            {t("weekly.title")}
          </h2>

          {/* SLIDER */}
          <Swiper
            onSwiper={(swiper) => (swipeRef.current = swiper)}
            spaceBetween={80}
            centeredSlides={false}
            slidesPerView={"auto"}
          >
            {nftData.map((item) => (
              <SwiperSlide key={item.id} className="!w-[260px]">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <div className="relative mb-3">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-xl w-full h-[274px]"
                    />

                    <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      {item.time}
                    </span>
                  </div>

                  <h3 className="font-semibold mb-2">{item.name}</h3>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400 truncate">
                      {t("weekly.currentBid")}
                    </p>

                    <button className="bg-black text-white text-xs px-4 py-2 rounded-lg">
                      {t("weekly.btn")}
                    </button>
                  </div>

                  <p className="text-sm mt-1">♦ {item.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ARROWS (manual) */}
          <div className="mt-10 flex justify-center  gap-4">
            <div className="bg-[#fff] rounded-[20px] flex justify-between gap-3 p-[10px_15px]">
              <button onClick={handlePrev} className="px-4 py-2 ">
                ←
              </button>
              <div className="h-full w-[1px] bg-[#ddd]"></div>
              <button onClick={handleNext} className="px-4 py-2 ">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-auto px-[40px]">
        <div className="overflow-x-auto sec">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-left text-sm border-b border-gray-50">
                <th className="p-[30px] font-normal">{t("table.col")}</th>
                <th className="pb-4 font-normal text-right pr-4">
                  {t("table.vol")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.h24")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.floor")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.owners")}
                </th>
                <th className="pb-4 font-normal text-right max-sm:hidden">
                  {" "}
                  {t("table.items")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {state.data.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  {/* Аватарка и Имя */}
                  <td className="py-5 flex items-center gap-4">
                    <img
                      src={item.img}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} shadow-inner shrink-0`}
                    />
                    <div>
                      <div className="font-bold text-lg text-gray-900 leading-tight">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t.by} {item.author}
                      </div>
                    </div>
                  </td>

                  <td className="py-5 text-right pr-4">
                    <div className="flex items-center justify-end gap-1 font-bold text-gray-900">
                      <span className="text-xs">◆</span> {item.vol}
                    </div>
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4 font-semibold text-emerald-500">
                    {item.change}
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4">
                    <div className="flex items-center justify-end gap-1 font-bold text-gray-900">
                      <span className="text-xs">◆</span> {item.floor}
                    </div>
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4 font-semibold text-gray-800">
                    {item.owners}
                  </td>

                  <td className="max-sm:hidden py-5 text-right font-semibold text-gray-800">
                    {item.items}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
