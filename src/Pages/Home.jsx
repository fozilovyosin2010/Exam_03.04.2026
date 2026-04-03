import React from "react";
import { useTranslation } from "react-i18next";

import img1S1 from "../img/img1S1.png";
import img2S1 from "../img/img2S1.png";

const Home = () => {
  const { t } = useTranslation();
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
    </div>
  );
};

export default Home;
