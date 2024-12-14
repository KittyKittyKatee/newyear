import React from "react";
import { type ResultType, type Step } from "./types";

import { Question1 } from "./question-1";
import { Question2 } from "./question-2";
import { Question3 } from "./question-3";
import { Question4 } from "./question-4";
import { Question5 } from "./question-5";
import { Question6 } from "./question-6";
import { Question7 } from "./question-7";
import { Question8 } from "./question-8";
import { Start } from "./start";
import {Result1 } from "./result-1";
import { Result2 } from "./result-2";
import { Result3 } from "./result-3";
import { Result4 } from "./result-4";
import { Result5 } from "./result-5";

export function StepFactory({ step, setStep, setRes, res }: Props) {
  switch (step) {
    case "start":
      return <Start setStep={setStep} setRes={setRes} />;

    case "question_1":
      return <Question1 setStep={setStep} setRes={setRes} />;

    case "question_2":
      return <Question2 setStep={setStep} setRes={setRes} />;

    case "question_3":
      return <Question3 setStep={setStep} setRes={setRes} />;

    case "question_4":
      return <Question4 setStep={setStep} setRes={setRes} />;

    case "question_5":
      return <Question5 setStep={setStep} setRes={setRes} />;

    case "question_6":
      return <Question6 setStep={setStep} setRes={setRes} />;

    case "question_7":
      return <Question7 setStep={setStep} setRes={setRes} />;

    case "question_8":
      return <Question8 setStep={setStep} setRes={setRes} res={res} />;

    case "result_1":
      return <Result1 />;
      
    case "result_2":
        return <Result2 />;

    case "result_3":
        return <Result3 />;
        
    case "result_4":
        return <Result4 />;

    case "result_5":
        return <Result5 />;
    default:
      return null;
  }
}

type Props = {
  step: Step;
  setStep: (step: Step) => void;
  res: ResultType;
  setRes: any;
};