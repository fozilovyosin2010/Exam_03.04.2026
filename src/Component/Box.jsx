import React from "react";

import cardImg1 from "../img/cardImg1.png";
import img1 from "../img/img1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg3 from "../img/cardImg3.png";
import cardImg4 from "../img/cardImg4.png";
import cardImg5 from "../img/cardImg5.png";
import { useTranslation } from "react-i18next";

const Box = (item) => {
  const { t } = useTranslation();

  const { btnDel, btnEdit } = item;

  console.log("child");

  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">
      <div className="relative mb-3">
        <img src={item.img} alt="" className="rounded-xl w-full h-[274px]" />

        <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
          {`${item.time[0]}h ${item.time[1]}m`}
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

      <div className="flex justify-between pt-2">
        <p className="text-sm mt-1">♦ {item.price}</p>
        {item.todo ? (
          <div className="flex gap-3">
            <button onClick={() => btnDel(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-icon lucide-trash"
              >
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
            <button onClick={() => btnEdit(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"
              >
                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                <path d="m8 6 2-2" />
                <path d="m18 16 2-2" />
                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(Box);
