import React from "react";
import { toast } from "react-toastify";
import {
  selectSpeed,
  selectStatus,
  selectCurrentStep,
  selectSteps,
} from "../store/sortSelectors";
import { setSpeed, setStatus, setCurrentStep } from "../store/sortSlice";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToastIfNotActive } from "../utils/utils.js";

export function useActions() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const speed = useSelector(selectSpeed);
  const currentStep = useSelector(selectCurrentStep);
  const allSteps = useSelector(selectSteps);
  const numSteps = allSteps.length;

  const changeSpeed = (pauseTime) => {
    if (status != "playing") {
      dispatch(setSpeed(pauseTime));
    } else {
      showErrorToastIfNotActive(
        "speed",
        "Can't change speed whilst in pause status"
      );
    }
  };

  const pause = () => {
    if (status === "playing") {
      dispatch(setStatus("paused"));
    }
  };

  const play = () => {
    if (status === "paused") {
      dispatch(setStatus("playing"));
    }
  };

  const backward = () => {
    if (status === "paused") {
      console.log(currentStep);
      if (currentStep > 1) {
        dispatch(setCurrentStep(currentStep - 1));
      } else {
        showErrorToastIfNotActive(
          "backward",
          "Cannot go back any further as we are at the first step"
        );
      }
    }
  };

  const forward = () => {
    if (status === "paused") {
      if (currentStep < numSteps) {
        dispatch(setCurrentStep(currentStep + 1));
      } else {
        showErrorToastIfNotActive(
          "backward",
          "Cannot go back any further as we are at the final step"
        );
      }
    }
  };

  const goTo = (stepIndex) => {
    if (status === "paused") {
      dispatch(setCurrentStep(stepIndex));
    }
  };

  const reset = () => {
    if (status === "paused") {
      dispatch(setCurrentStep(1));
    }
  };

  const complete = () => {
    if (status === "paused") {
      dispatch(setCurrentStep(numSteps));
    }
  };

  return {
    speed,
    changeSpeed,
    pause,
    play,
    backward,
    forward,
    reset,
    complete,
    goTo,
  };
}
