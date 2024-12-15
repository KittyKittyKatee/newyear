import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { type ResultType, type Step } from "./types";
import { Transition } from "@headlessui/react";
import { bgByStep, getLogoMob, heightByStep, mobBgByStep } from "./utils";

type Props = {
  setStep: (step: Step) => void;
  setRes: any;
  step: Step;
};

export function Question7({ setStep, setRes, step }: Props) {
  let [selected, setSelected] = React.useState<number | null>(null);

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
          />
          {logoMob}
        </div>
        <div className=" 2xl:max-w-[605px]  bg md:absolute z-10 md:max-w-[510px] max-w-[335px]  2xl:right-[5vw] right-[50px] 2xl:top-[10vh] top-[100px] md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
          <h1 className="font-dudka  md:text-[33px] 2xl:text-[40px] 2xl:leading-[43px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Если бы ты мог(ла) попросить <br /> у волшебника одну вещь,{" "}
            <br className="md:hidden block" /> что бы это было?
          </h1>
          <div className="grid gap-[10px]">
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl 2xl:text-[18px] 2xl:leading-[21px] border border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 1 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 0,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 4,
                  result_4: res.result_4 + 0,
                  result_5: res.result_5 + 3,
                }));
                setSelected(1);
                setTimeout(() => {
                  setStep("question_8");
                }, 700);
              }}
            >
              Чтобы за меня все цели выполнили
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl 2xl:text-[18px] 2xl:leading-[21px] border border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 2 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 0,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 1,
                  result_4: res.result_4 + 4,
                  result_5: res.result_5 + 2,
                }));
                setSelected(2);
                setTimeout(() => {
                  setStep("question_8");
                }, 700);
              }}
            >
              Прокачать свою дисциплину на 100%
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl 2xl:text-[18px] 2xl:leading-[21px] border border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 3 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 4,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 0,
                  result_4: res.result_4 + 2,
                  result_5: res.result_5 + 1,
                }));
                setSelected(3);
                setTimeout(() => {
                  setStep("question_8");
                }, 700);
              }}
            >
              Завести безупречную привычку следить{" "}
              <br className="md:hidden block" /> за своим здоровьем
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl 2xl:text-[18px] 2xl:leading-[21px] border border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 4 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 0,
                  result_2: res.result_2 + 2,
                  result_3: res.result_3 + 0,
                  result_4: res.result_4 + 0,
                  result_5: res.result_5 + 4,
                }));
                setSelected(4);
                setTimeout(() => {
                  setStep("question_8");
                }, 700);
              }}
            >
              Сделать так, чтобы 1 января не чувствовать себя виноватым за
              «отложенные» цели
            </button>
          </div>
        </div>
        <img
          className="w-full h-full object-cover absolute inset-0 min-h-[100svh] md:block hidden"
          src={bgByStep[step]}
          alt=""
        />
      </div>
    </Transition>
  );
}
