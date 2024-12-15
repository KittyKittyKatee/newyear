import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import type { Step } from "./types";
import { bgByStep, getLogoMob, heightByStep, mobBgByStep } from "./utils.tsx";

type Props = {
  setStep: (step: Step) => void;
  setRes: any;
  step: Step;
};

export function Start({ step, setStep }: Props) {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  let logoMob = getLogoMob(step);
  return (
    <Transition show={open} appear={true}>
      <div className="mx-auto w-fit transition duration-300 ease-in data-[closed]:opacity-0">
        <div
          className="w-full md:hidden rounded-2xl mb-2.5 overflow-hidden relative max-w-[335px]"
          style={{ height: heightByStep[step] }}
        >
          <img
            className="h-full w-full object-center object-cover"
            src={mobBgByStep[step]}
            alt=""
          />
          {logoMob}
        </div>
        <div className="2xl:max-w-[493px] bg md:absolute z-10 md:max-w-[425px] max-w-[335px] 2xl:left-[5vw] md:left-[50px] md:top-1/2 md:-translate-y-1/2 md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
          <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Погрузись в атмосферу <br /> новогодних целей!
          </h1>
          <p className="md:mb-5 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Новый год — это не только ёлка, гирлянды <br /> и праздничное
            оливье. Это ещё и момент, когда <br className="md:hidden block" />{" "}
            мы с радостью (или лёгким ужасом) смотрим{" "}
            <br className="md:hidden block" /> на свои прошлогодние обещания:
            похудеть, выучить язык, заняться спортом. Иногда они становятся
            реальностью, а&nbsp;иногда... <br className="md:hidden block" />
            откладываются на ещё один год. <br className="md:block hidden" /> И
            ничего страшного! Ведь Новый год —{" "}
            <br className="md:block hidden" /> это про надежду, радость и
            вдохновение, которые заставляют улыбнуться и всё-таки двигаться
            вперёд.
          </p>
          <p className="md:mb-5 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
            Наш квиз поможет вам взглянуть на свои амбициозные новогодние
            обещания <br className="md:block hidden" />с долей самоиронии. Он
            легко напомнит о&nbsp;тех целях, которые порой ставятся{" "}
            <br className="md:block hidden" /> на паузу, но остаются важными
            и&nbsp;вдохновляющими. Никакой строгости — только юмор, рефлексия и
            праздничное настроение!
          </p>
          <button
            className="bg-[#FE5F38] 2xl:text-xl 2xl:h-[38px] md:h-[33px] h-[29px] rounded-full md:text-lg text-xs uppercase md:px-[10px] px-3"
            type="button"
            onClick={() => setStep("question_1")}
          >
            Начать
          </button>
        </div>
        <img
          className="w-full h-full object-cover absolute inset-0 min-h-[100svh] md:block hidden "
          src={bgByStep[step]}
          alt=""
        />
      </div>
    </Transition>
  );
}
