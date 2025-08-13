import React, { useEffect, useMemo, useRef } from "react";
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

export function useSortAnimation({
  algorithm,
  data,
  onStep,
  height,
  scaleX,
  scaleY,
}) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const currentStep = useSelector(selectCurrentStep);
  const steps = useSelector(selectSteps);
  const speed = useSelector(selectSpeed);

  const prevStepRef = useRef(currentStep);

  const validStatus = selectStatus === "paused" || selectStatus === "complete";

  const allSteps = useMemo(() => algorithm([...data]), [algorithm, data]);

  useEffect(() => {
    dispatch(setData(data));
    dispatch(setSteps(allSteps));
  }, [data, allSteps, dispatch]);

  useEffect(() => {
    if (status != "playing") {
      render(data, height - 20, scaleX, scaleY);
    }
  }, [height, scaleX, scaleY, data]);

  const advanceStep = () => {
    const step = steps[currentStep];
    if (step) onStep?.(step);
    dispatch(setCurrentStep(currentStep + 1));
    prevStepRef.current = currentStep + 1;
  };

  useEffect(() => {
    const stepChanged = prevStepRef.current !== currentStep;
    if (status === "playing") {
      const timeout = setTimeout(() => {
        if (currentStep < steps.length) {
          advanceStep();
        } else {
          dispatch(setStatus("complete"));
        }
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // console.log(prevStepRef.current);
      // console.log(currentStep);
      if (status === "paused" && stepChanged) {
        console.log("paused element");
        prevStepRef.current = currentStep;

        render(
          allSteps[currentStep - 1].array,
          height - 20,
          scaleX,
          scaleY,
          allSteps[currentStep - 1].colorMap
        );
      }
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
