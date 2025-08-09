import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  setStatus,
  setSteps,
  setSpeed,
  setData,
} from "../store/sortSlice";
import {
  selectStatus,
  selectCurrentStep,
  selectSteps,
  selectSpeed,
} from "../store/sortSelectors";
import { render } from "../utils/render";
import { toast } from "react-toastify";

export function useSortAnimation({ algorithm, data, onStep, scaleX, scaleY }) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const currentStep = useSelector(selectCurrentStep);
  const steps = useSelector(selectSteps);
  const speed = useSelector(selectSpeed);

  const validStatus = selectStatus === "paused" || selectStatus === "complete";

  useEffect(() => {
    console.log("this should run first");
    const allSteps = algorithm([...data]);
    dispatch(setData(data));
    dispatch(setSteps(allSteps));
    console.log(steps);
    console.log(steps.length);
    render(data, 400, scaleX, scaleY);
  }, [algorithm, data]);

  const advanceStep = () => {
    console.log(steps);
    const step = steps[currentStep];
    if (step) onStep?.(step);
    if (currentStep + 1 < steps.length) {
      dispatch(setCurrentStep(currentStep + 1));
    } else {
      dispatch(setStatus("complete"));
    }
  };

  useEffect(() => {
    if (status === "playing") {
      const timeout = setTimeout(() => {
        if (currentStep < steps.length) {
          advanceStep();
        } else {
          dispatch(setStatus("complete"));
        }
      }, speed); // Or use speed from Redux
      return () => clearTimeout(timeout);
    } else {
      //Render as per the data
    }
  }, [status, currentStep]);

  //   playing -> complete
  //   playing -> paused

  const sort = () => {
    if (!(selectStatus === "playing")) {
      dispatch(setStatus("playing"));
    } else {
      toast.error("The state must be idle");
    }
  };

  const play = () => {
    if (selectStatus === "playing") {
      dispatch(setStatus("playing"));
    }
  };

  const pause = () => {
    if (selectStatus === "playing") {
      dispatch(setStatus("paused"));
    }
  };

  const rewind = () => {
    if (selectStatus === "paused" || selectStatus === "complete") {
      if (selectCurrentStep === 0) {
        // Can't
      }
      dispatch(setCurrentStep(s));
    } else {
      // Toast message
    }
  };

  const fastForward = () => {
    if (selectStatus === "paused" || selectStatus === "complete") {
      if (selectCurrentStep === selectSteps.length) {
      }
    } else {
      // Toast message
    }
  };

  const reset = () => {
    if (selectStatus === "paused" || selectStatus === "complete") {
    } else {
    }
  };

  const end = () => {
    if (selectStatus === "paused" || selectStatus === "complete") {
    } else {
    }
  };

  const changeSpeed = (pauseTime) => {
    if (validStatus) {
      dispatch(setSpeed(pauseTime));
    } else {
    }
  };

  const goTo = (stepIndex) => {
    if (validStatus) {
      dispatch(setCurrentStep(pauseTime));
    } else {
    }
  };

  return {
    sort,
    pause,
    rewind,
    fastForward,
    reset,
    end,
    changeSpeed,
    goTo,
    steps,
    currentStep,
  };
}
