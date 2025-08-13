import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentStep, selectSteps } from "../store/sortSelectors";
import { useActions } from "./useActions";

export default function TimeLineRangeSlider() {
  const steps = useSelector(selectSteps);
  const numSteps = steps.length;
  const currentStep = useSelector(selectCurrentStep);
  const { goTo } = useActions();

  return (
    <div className="flex items-center justify-center h-full">
      <span className="ml-1.5 text-sm font-mono text-cyan-700 pr-2">1</span>
      <input
        className=" accent-green-300 flex-grow max-w-[calc(40vw-1px)] ml-2"
        type="range"
        min="1"
        max={numSteps}
        value={currentStep}
        id="myRange"
        onChange={(event) => {
          goTo(Number(event.target.value));
        }}
      ></input>
      <span className="text-sm font-mono text-cyan-700 pr-2">{numSteps}</span>
    </div>
  );
}
