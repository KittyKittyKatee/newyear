import { Transition } from "@headlessui/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { type ResultType, type Step } from "./types";

type Props = {
  setStep: (step: Step) => void;
  setRes: any;
};

export function Question3({ setStep, setRes }: Props) {
  let [selected, setSelected] = React.useState<number | null>(null);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-300 ease-in data-[closed]:opacity-0">
        <div className="bg md:absolute z-10 md:max-w-[533px] 2xl:right-[5vw] 2xl:max-w-[627px] right-[50px] max-w-[335px] mx-auto 2xl:top-[10vh] top-[100px] md:py-7 py-[18px] md:px-8 px-[18px] rounded-[20px] text-white">
          <h1 className="font-dudka md:text-[33px] 2xl:text-[40px] 2xl:leading-[43px] text-[19px] md:mb-6 mb-4 md:leading-[32px] leading-[20px] text-shadow">
            Какая причина чаще всего мешает тебе достигать целей?
          </h1>
          <div className="grid gap-[10px]">
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl border 2xl:text-[18px] 2xl:leading-[21px] border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 1 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 2,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 3,
                  result_4: res.result_4 + 4,
                  result_5: res.result_5 + 0,
                }));
                setSelected(1);
                setTimeout(() => {
                  setStep("question_4");
                }, 700);
              }}
            >
              Нет времени (или я так думаю)
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl border 2xl:text-[18px] 2xl:leading-[21px] border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 2 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 3,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 4,
                  result_4: res.result_4 + 0,
                  result_5: res.result_5 + 1,
                }));
                setSelected(2);
                setTimeout(() => {
                  setStep("question_4");
                }, 700);
              }}
            >
              Очень сложно, а диван такой удобный
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl border 2xl:text-[18px] 2xl:leading-[21px] border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 3 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 1,
                  result_2: res.result_2 + 2,
                  result_3: res.result_3 + 4,
                  result_4: res.result_4 + 0,
                  result_5: res.result_5 + 0,
                }));
                setSelected(3);
                setTimeout(() => {
                  setStep("question_4");
                }, 700);
              }}
            >
              Перехожу на другую цель — она вдруг{" "}
              <br className="md:hidden block" /> кажется важнее
            </button>
            <button
              type="button"
              className={twMerge(
                "bg-card rounded-2xl border 2xl:text-[18px] 2xl:leading-[21px] border-[#F9F2E0] md:p-4 px-3 py-2.5 text-left md:text-[15px] text-[11px] leading-[13px] md:leading-[18px]",
                selected === 4 && "bg-card-selected"
              )}
              onClick={() => {
                setRes((res) => ({
                  result_1: res.result_1 + 0,
                  result_2: res.result_2 + 0,
                  result_3: res.result_3 + 2,
                  result_4: res.result_4 + 0,
                  result_5: res.result_5 + 4,
                }));
                setSelected(4);
                setTimeout(() => {
                  setStep("question_4");
                }, 700);
              }}
            >
              Забиваю, ведь «жить надо здесь и сейчас»
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
