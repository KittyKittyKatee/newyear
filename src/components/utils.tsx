import type { ResultType, Step } from "./types";

export function getRes(res: ResultType) {
  return Object.entries(res).sort((a, b) => b[1] - a[1])[0][0];
}

export let bgByStep: Partial<Record<Step, string>> = {
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

export let mobBgByStep: Partial<Record<Step, string>> = {
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

export let heightByStep: Partial<Record<Step, string>> = {
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

export function getLogoMob(step: Step) {
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
      <a
        href="https://kentron.community/"
        target="_blank"
        className="absolute top-[10px] left-[10px] z-20 md:hidden block w-[87px]"
      >
        <img src="./img/logo-kentron.svg" alt="kentron" />
      </a>
    );
  }

  if (
    step === "question_1" ||
    step === "question_2" ||
    step === "question_3" ||
    step === "question_4"
  ) {
    return (
      <a
        href="https://kentron.community/"
        target="_blank"
        className="absolute top-[10px] left-[10px] z-20 md:hidden block w-[33px]"
      >
        <img src="./img/logo-mini.svg" alt="kentron" />
      </a>
    );
  }

  return (
    <a
      href="https://kentron.community/"
      target="_blank"
      className="absolute bottom-[10px] right-[10px] z-20 md:hidden block w-[33px]"
    >
      <img src="./img/logo-mini.svg" alt="kentron" />
    </a>
  );
}
