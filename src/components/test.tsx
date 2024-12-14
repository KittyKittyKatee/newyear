import React from "react";
import { StepFactory } from "./step-factory";
import { type Step } from "./types";

let bgByStep: Partial<Record<Step, string>> = {
  start: "./img/bg/start.webp",
  question_1: "./img/bg/test-1.webp",
  question_2: "./img/bg/test-2.webp",
  question_3: "./img/bg/test-3.webp",
  question_4: "./img/bg/test-4.webp",
  question_5: "./img/bg/test-5.webp",
  question_6: "./img/bg/test-6.webp",
  question_7: "./img/bg/test-7.webp",
  question_8: "./img/bg/test-8.webp",
  result_1: "./img/result/Result1.webp",
  result_2: "./img/result/Result2.webp",
  result_3: "./img/result/Result3.webp",
  result_4: "./img/result/Result4.webp",
  result_5: "./img/result/Result5.webp",
};

let mobBgByStep: Partial<Record<Step, string>> = {
  start: "./img/mob/start.webp",
  question_1: "./img/mob/test-1.webp",
  question_2: "./img/mob/test-2.webp",
  question_3: "./img/mob/test-3.webp",
  question_4: "./img/mob/test-4.webp",
  question_5: "./img/mob/test-5.webp",
  question_6: "./img/mob/test-6.webp",
  question_7: "./img/mob/test-7.webp",
  question_8: "./img/mob/test-8.webp",
  result_1: "./img/mob/Result1.webp",
  result_2: "./img/mob/Result2.webp",
  result_3: "./img/mob/Result3.webp",
  result_4: "./img/mob/Result4.webp",
  result_5: "./img/mob/Result5.webp",
};

let heightByStep: Partial<Record<Step, string>> = {
  start: "221px",
  question_1: "313px",
  question_2: "326px",
  question_3: "341px",
  question_4: "341px",
  question_5: "341px",
  question_6: "341px",
  question_7: "341px",
  question_8: "341px",
  result_1: "265px",
  result_2: "265px",
  result_3: "265px",
  result_4: "271px",
  result_5: "304px",
};

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

  function getLogo() {
    if (
      step === "start" ||
      step === "result_1" ||
      step === "result_2" ||
      step === "result_3" ||
      step === "result_4" ||
      step === "result_5"
    ) {
      return (
        <img
          className="absolute top-[50px] right-[50px] z-20 md:block hidden"
          src="./img/logo-kentron.svg"
          alt=""
        />
      );
    }

    if (
      step === "question_1" ||
      step === "question_2" ||
      step === "question_6" ||
      step === "question_8"
    ) {
      return (
        <img
          className="absolute top-[50px] right-[50px] z-20 md:block hidden"
          src="./img/logo-mini.svg"
          alt=""
        />
      );
    }

    return (
      <img
        className="absolute top-[50px] left-[50px] z-20 md:block hidden"
        src="./img/logo-mini.svg"
        alt=""
      />
    );
  }

  function getLogoMob() {
    if (step === "start") {
      return (
        <img
          className="absolute top-[10px] right-[10px] z-20 md:hidden block w-[87px]"
          src="./img/logo-kentron.svg"
          alt=""
        />
      );
    }

    if (
      step === "result_1" ||
      step === "result_2" ||
      step === "result_3" ||
      step === "result_4" ||
      step === "result_5"
    ) {
      return (
        <img
          className="absolute top-[10px] left-[10px] z-20 md:hidden block w-[87px]"
          src="./img/logo-kentron.svg"
          alt=""
        />
      );
    }

    if (
      step === "question_1" ||
      step === "question_2" ||
      step === "question_3" ||
      step === "question_4"
    ) {
      return (
        <img
          className="absolute top-[10px] left-[10px] z-20 md:hidden block w-[33px]"
          src="./img/logo-mini.svg"
          alt=""
        />
      );
    }

    return (
      <img
        className="absolute bottom-[10px] right-[10px] z-20 md:hidden block w-[33px]"
        src="./img/logo-mini.svg"
        alt=""
      />
    );
  }

  let logo = getLogo();
  let logoMob = getLogoMob();

  return (
    <div className="h-svh w-svw overflow-x-hidden fixed bg-[#67564E] md:bg-transparent">
      <div className="h-svh w-svw overflow-x-hidden fixed px-5 py-9">
        <div className="w-full absolute top-0 left-0 h-[4px] md:hidden block">
          <span
            className="h-[2px] bg-[#FE5F38] absolute top-0 left-0 max-w-full transition-all"
            style={{ width: progress[step] }}
          ></span>
        </div>
        <div
          className="w-full md:hidden rounded-2xl mb-2.5 overflow-hidden relative max-w-[335px] mx-auto"
          style={{ height: heightByStep[step] }}
        >
          <img
            className="h-full w-full object-center object-cover"
            src={mobBgByStep[step]}
            alt=""
          />
          {logoMob}
        </div>

        <StepFactory step={step} setStep={setStep} setRes={setRes} res={res} />
        {logo}

        <img
          className="w-full h-full object-cover absolute inset-0 min-h-[100svh] md:block hidden"
          src={bgByStep[step]}
          alt=""
        />
      </div>
      <img
        className="h-screen w-screen object-cover md:hidden"
        src="./img/bg-mob.webp"
        alt=""
      />
    </div>
  );
}
