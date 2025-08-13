import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackward,
  faForward,
  faPause,
  faForwardFast,
  faBackwardFast,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { useActions } from "./useActions";
// import { useSortAnimation } from "./UseSortAnimation";
import { useSelector } from "react-redux";
import { selectData } from "../store/sortSelectors";
import { bubbleSort } from "../utils/render";

export default function MediaFunction() {
  const { backward, pause, play, forward, reset, complete } = useActions();
  return (
    <div className="flex items-center justify-center h-full">
      <FontAwesomeIcon icon={faBackwardFast} className="m-2" onClick={reset} />
      <FontAwesomeIcon
        icon={faBackwardStep}
        className="m-2"
        onClick={backward}
      />
      <FontAwesomeIcon icon={faPlay} className="m-2" onClick={play} />
      <FontAwesomeIcon icon={faPause} className="m-2" onClick={pause} />
      <FontAwesomeIcon icon={faForwardStep} className="m-2" onClick={forward} />
      <FontAwesomeIcon
        icon={faForwardFast}
        className="m-2"
        onClick={complete}
      />
    </div>
  );
}
