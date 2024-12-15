import React, { useState } from "react";
import { StepFactory } from "./step-factory";
import { type Step } from "./types";
import { Transition } from "@headlessui/react";
import { flushSync } from "react-dom";
import { heightByStep, mobBgByStep, bgByStep } from "./utils";

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
  let [step, setStep] = React.useState<Step>("result_1");
  let [res, setRes] = React.useState({
    result_1: 0,
    result_2: 0,
    result_3: 0,
    result_4: 0,
    result_5: 0,
  });

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
        <a
          href="https://kentron.community/"
          target="_blank"
          className="absolute top-[50px] right-[50px] z-20 md:block hidden"
        >
          <img src="./img/logo-kentron.svg" alt="kentron" />
        </a>
      );
    }

    if (
      step === "question_1" ||
      step === "question_2" ||
      step === "question_6" ||
      step === "question_8"
    ) {
      return (
        <a
          href="https://kentron.community/"
          target="_blank"
          className="absolute top-[50px] right-[50px] z-20 md:block hidden"
        >
          <img src="./img/logo-mini.svg" alt="kentron" />
        </a>
      );
    }

    return (
      <a
        href="https://kentron.community/"
        target="_blank"
        className="absolute top-[50px] left-[50px] z-20 md:block hidden"
      >
        <img src="./img/logo-mini.svg" alt="kentron" />
      </a>
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
