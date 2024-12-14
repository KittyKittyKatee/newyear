import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { type ResultType, type Step } from "./types";
import { Transition } from "@headlessui/react";

type Props = {
  setStep: (step: Step) => void;
  setRes: any;
};

export function Question4({ setStep, setRes }: Props) {
  let [selected, setSelected] = React.useState<number | null>(null);

  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0 bg md:absolute z-10 2xl:max-w-[472px] md:max-w-[398px] max-w-[335px] mx-auto 2xl:right-[5vw] right-[50px] 2xl:top-[10vh] top-[100px] md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
        <h1 className="font-dudka md:text-[33px] 2xl:text-[40px] 2xl:leading-[43px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
          Что вдохновляет тебя <br /> на постановку целей?
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
                result_1: res.result_1 + 2,
                result_2: res.result_2 + 0,
                result_3: res.result_3 + 0,
                result_4: res.result_4 + 4,
                result_5: res.result_5 + 0,
              }));
              setSelected(1);
              setTimeout(() => {
                setStep("question_5");
              }, 700);
            }}
          >
            Реклама спортзалов, книг или курсов
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
                result_2: res.result_2 + 1,
                result_3: res.result_3 + 3,
                result_4: res.result_4 + 0,
                result_5: res.result_5 + 4,
              }));
              setSelected(2);
              setTimeout(() => {
                setStep("question_5");
              }, 700);
            }}
          >
            Соцсети: у всех всё идеально, и я так хочу
          </button>
          <button
            type="button"
            className={twMerge(
              "bg-card rounded-2xl 2xl:text-[18px] 2xl:leading-[21px] border border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
              selected === 3 && "bg-card-selected"
            )}
            onClick={() => {
              setRes((res) => ({
                result_1: res.result_1 + 0,
                result_2: res.result_2 + 4,
                result_3: res.result_3 + 0,
                result_4: res.result_4 + 2,
                result_5: res.result_5 + 0,
              }));
              setSelected(3);
              setTimeout(() => {
                setStep("question_5");
              }, 700);
            }}
          >
            Разговоры с друзьями, которые <br className="md:block hidden" /> уже
            «успешны»
          </button>
          <button
            type="button"
            className={twMerge(
              "bg-card rounded-2xl border 2xl:text-[18px] 2xl:leading-[21px] border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
              selected === 4 && "bg-card-selected"
            )}
            onClick={() => {
              setRes((res) => ({
                result_1: res.result_1 + 3,
                result_2: res.result_2 + 0,
                result_3: res.result_3 + 1,
                result_4: res.result_4 + 3,
                result_5: res.result_5 + 2,
              }));
              setSelected(4);
              setTimeout(() => {
                setStep("question_5");
              }, 700);
            }}
          >
            Мои амбиции и мечты, которые живут{" "}
            <br className="md:hidden block" /> со мной годами
          </button>
        </div>
      </div>
    </Transition>
  );
}
