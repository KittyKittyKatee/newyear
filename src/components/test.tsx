import React from "react";
import { StepFactory } from "./step-factory";
import { type Step } from "./types";
import { twMerge } from "tailwind-merge";

let progress = {
  question_1: "12.5%",
  question_2: "25%",
  question_3: "37.5%",
  question_4: "50%",
  question_5: "62.5%",
  question_6: "75%",
  question_7: "87.5%",
  question_8: "100%",
};

export function Test() {
  let [step, setStep] = React.useState<Step>("start");
  let [res, setRes] = React.useState({
    result_1: 0,
    result_2: 0,
    result_3: 0,
    result_4: 0,
    result_5: 0,
  });

  let arr = [
    "question_1",
    "question_2",
    "question_3",
    "question_4",
    "question_5",
    "question_6",
    "question_7",
    "question_8",
  ];

  let showProgress = arr.includes(step);

  function getLogo(step: Step) {
    if (
      step === "start" ||
      step === "result_1" ||
      step === "result_2" ||
      step === "result_3" ||
      step === "result_4" ||
      step === "result_5"
    ) {
      return (
        <>
          <a
            href="https://kentron.community/"
            target="_blank"
            className="absolute top-[50px]  2xl:right-[5vw] right-[50px] z-20 md:block hidden"
          >
            <img src="./img/logo-kentron.svg" alt="kentron" />
          </a>
          {showProgress ? (
            <div className="absolute w-[30px] 2xl:right-[5vw] h-[190px] progress-bg flex-col gap-[10px] z-10 justify-center items-center right-[50px] top-1/2 -translate-y-1/2 md:flex hidden ">
              {arr.map((item) => (
                <div
                  className={twMerge(
                    " rounded-full transition-all duration-300 h-3 w-3 flex justify-center items-center",
                    item === step ? "bg-[#FE5F38] " : ""
                  )}
                >
                  <div
                    className={twMerge(
                      "h-2 w-2 rounded-full border border-[#FE5F38] transition-all duration-300",
                      item === step ? "bg-[#FE5F38]" : ""
                    )}
                  ></div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      );
    }

    if (
      step === "question_1" ||
      step === "question_2" ||
      step === "question_6" ||
      step === "question_8"
    ) {
      return (
        <>
          <a
            href="https://kentron.community/"
            target="_blank"
            className="absolute top-[50px] 2xl:right-[5vw]  right-[50px] z-20 md:block hidden"
          >
            <img src="./img/logo-mini.svg" alt="kentron" />
          </a>
          {showProgress ? (
            <div className="absolute 2xl:right-[5vw] w-[30px] h-[190px] progress-bg flex-col gap-[10px] z-10 justify-center items-center right-[50px] top-1/2 -translate-y-1/2 md:flex hidden ">
              {arr.map((item) => (
                <div
                  className={twMerge(
                    " rounded-full transition-all duration-300 h-3 w-3 flex justify-center items-center",
                    item === step ? "bg-[#FE5F38] " : ""
                  )}
                >
                  <div
                    className={twMerge(
                      "h-2 w-2 rounded-full border border-[#FE5F38] transition-all duration-300",
                      item === step ? "bg-[#FE5F38]" : ""
                    )}
                  ></div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      );
    }

    return (
      <>
        <a
          href="https://kentron.community/"
          target="_blank"
          className="absolute top-[50px] 2xl:left-[5vw]  left-[50px] z-20 md:block hidden"
        >
          <img src="./img/logo-mini.svg" alt="kentron" />
        </a>
        {showProgress ? (
          <div className="2xl:left-[5vw]  absolute w-[30px] h-[190px] progress-bg flex-col gap-[10px] z-10 justify-center items-center left-[50px] top-1/2 -translate-y-1/2 md:flex hidden ">
            {arr.map((item) => (
              <div
                className={twMerge(
                  " rounded-full transition-all duration-300 h-3 w-3 flex justify-center items-center",
                  item === step ? "bg-[#FE5F38] " : ""
                )}
              >
                <div
                  className={twMerge(
                    "h-2 w-2 rounded-full border border-[#FE5F38] transition-all duration-300",
                    item === step ? "bg-[#FE5F38]" : ""
                  )}
                ></div>
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  }

  let logo = getLogo(step);

  return (
    <div className="h-svh w-svw overflow-x-hidden fixed bg-[#67564E] md:bg-[#301407]">
      <div className="h-svh w-svw overflow-x-hidden fixed px-5 py-9">
        <div className="w-full absolute top-0 left-0 h-[4px] md:hidden block">
          <span
            className="h-[2px] bg-[#FE5F38] absolute top-0 left-0 max-w-full transition-all"
            style={{ width: progress[step] }}
          ></span>
        </div>

        {logo}

        <StepFactory step={step} setStep={setStep} setRes={setRes} res={res} />
      </div>
      <img
        className="h-screen w-screen object-cover md:hidden"
        src="./img/bg-mob.webp"
        alt=""
      />
    </div>
  );
}
