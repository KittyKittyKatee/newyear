import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ResultType, Step } from "./types";
import { bgByStep, getLogoMob, heightByStep, mobBgByStep } from "./utils";

type Props = {
  step: Step;
};

export function Result1({ step }: Props) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  let logoMob = getLogoMob(step);
  return (
    <Transition show={open} appear={true}>
      <div className="ease-in data-[closed]:opacity-0 transition duration-500 mx-auto w-fit">
        <div
          className="w-full md:hidden rounded-2xl mb-2.5 overflow-hidden relative max-w-[335px]"
          style={{ height: heightByStep[step] }}
        >
          <img
            className="h-full w-full object-center object-cover"
            src={mobBgByStep[step]}
            alt=""
            fetchPriority="high"
          />
          {logoMob}
        </div>
        <div className=" 2xl:max-w-[432px] bg md:absolute z-10 md:max-w-[369px] max-w-[335px]  2xl:left-[5vw] md:left-[50px] md:top-1/2 md:-translate-y-1/2 md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
          <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Спортсмен <br /> выходного дня
          </h1>
          <p className="md:mb-6 mb-[30px] 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Ты мечтаешь о здоровом образе жизни, но путь к&nbsp;нему порой
            превращается в марафон... на месте. Ты каждый год покупаешь
            абонемент <br className="md:block hidden" /> в зал, полон(а)
            решимости начать бегать и вставать в 5 утра. Но вот беда:
            холодильник притягивает пиццу, а диван — сериал. Не переживай!
            Спортзал подождёт, а твоя лучшая форма — это улыбка на&nbsp;твоём
            лице.
          </p>
          <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Совет на год
          </h1>
          <p className="md:mb-6 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Начни с малого: вместо бега — прогулка{" "}
            <br className="md:hidden block" /> до кофейни, а вместо диеты — один
            день <br className="md:hidden block" /> без десерта. Результат всё
            равно будет!
          </p>
          <a
            href="./img/result_upload/weekend_athlete.png"
            download
            className="bg-[#FE5F38] md:h-[33px] h-[29px] rounded-full md:text-lg 2xl:text-xl 2xl:h-[38px] text-xs uppercase md:px-[10px] leading-none px-3 py-2 flex items-center w-fit"
          >
            скачать
          </a>
        </div>
        <img
          className="w-full h-full object-cover absolute inset-0 min-h-[100svh] md:block hidden"
          src={bgByStep[step]}
          alt=""
          fetchPriority="high"
        />
      </div>
    </Transition>
  );
}
