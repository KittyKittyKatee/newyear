import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ResultType } from "./types";

export function Result4() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0 bg 2xl:max-w-[428px] md:absolute z-10 md:max-w-[373px] max-w-[335px] mx-auto 2xl:left-[5vw] md:left-[50px] md:top-1/2 md:-translate-y-1/2 md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
        <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
          Тренер дисциплины <br /> (только не своей)
        </h1>
        <p className="md:mb-6 mb-[30px] 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
          Ты мечтаешь о суперспособности: прокачать дисциплину на 100%
          и&nbsp;выполнять всё, как по часам. <br /> Правда, пока эта суперсила
          где-то задерживается. Но зато ты прекрасно мотивируешь друзей: твои
          советы — огонь!
        </p>
        <h2 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
          Совет на год
        </h2>
        <p className="md:mb-6 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
          Позволь себе быть человечным(ой): начни с&nbsp;создания одной простой
          привычки, например, записывать свои планы. И помни, что супергероям
          тоже нужен отдых!
        </p>
        <a
          href="./img/result_upload/discipline_coach.png"
          className="bg-[#FE5F38] md:h-[33px] h-[29px] 2xl:text-xl 2xl:h-[38px] rounded-full md:text-lg text-xs uppercase md:px-[10px] leading-none px-3 py-2 flex items-center w-fit"
          download
        >
          скачать
        </a>
      </div>
    </Transition>
  );
}

type Props = {
  res: ResultType;
};
