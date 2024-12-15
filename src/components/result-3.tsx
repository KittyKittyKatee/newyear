import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ResultType, Step } from "./types";
import { bgByStep, getLogoMob, heightByStep, mobBgByStep } from "./utils";

export function Result3({ step }: Props) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  let logoMob = getLogoMob(step);

  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-500 ease-in data-[closed]:opacity-0 mx-auto w-fit">
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

        <div className=" bg 2xl:max-w-[409px] md:absolute z-10 md:max-w-[355px] max-w-[335px]  2xl:left-[5vw] md:left-[50px] md:top-1/2 md:-translate-y-1/2 md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
          <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Мастер прокрастинации
          </h1>
          <p className="md:mb-6 mb-[30px] 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Твой талант находить отговорки заслуживает отдельной награды.{" "}
            <br className="md:block hidden" />
            Ты точно знаешь, <br className="md:hidden block" /> как перенести{" "}
            <br className="md:block hidden" /> цели на следующий год без лишнего
            стресса. Вместо выполнения задач ты придумываешь новые, и этот цикл
            делает твою жизнь удивительно насыщенной (но не там,{" "}
            <br className="md:hidden block" /> где надо)
          </p>
          <h2 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Совет на год
          </h2>
          <p className="md:mb-6 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Не жди понедельника или вдохновения. Просто начни с того, что меньше
            всего пугает, даже если это займёт 5 минут.{" "}
            <br className="md:block hidden" /> А если не получится — переноси{" "}
            <br className="md:block hidden" /> с гордостью!
          </p>
          <a
            href="./img/result_upload/procrastination_master.png"
            className="bg-[#FE5F38] md:h-[33px] h-[29px] 2xl:text-xl 2xl:h-[38px] rounded-full md:text-lg text-xs uppercase md:px-[10px] leading-none px-3 pt-[1px] flex items-center w-fit"
            download
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

type Props = {
  step: Step;
};
