import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { ResultType } from "./types";

export function Result2() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0 2xl:max-w-[448px] bg md:absolute z-10 md:max-w-[385px] max-w-[335px] mx-auto 2xl:left-[5vw] md:left-[50px] md:top-1/2 md:-translate-y-1/2 md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
        <h1 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
          Вечный студент
        </h1>
        <p className="md:mb-6 mb-[30px] 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
          Ты скупил(а) все курсы на распродажах, но твой прогресс чаще всего
          заканчивается на просмотре вводного урока. Изучить новый язык,
          научиться играть на гитаре или освоить гончарное дело — эти мечты ждут
          своего часа. Возможно, 2025 год станет годом, когда ты наконец-то
          перейдёшь к&nbsp;практике!
        </p>
        <h2 className="font-dudka 2xl:text-[40px] 2xl:leading-[43px] md:text-[33px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
          Совет на год
        </h2>
        <p className="md:mb-6 mb-4 2xl:text-[18px] 2xl:leading-[21px] md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]">
          Сконцентрируйся на одном курсе, вместо того чтобы добавлять новые.
          А&nbsp;если всё-таки нет времени — скажи всем, что ты учишься через
          «осознанное наблюдение»
        </p>
        <a
          href="./img/result_upload/eternal_student.png"
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