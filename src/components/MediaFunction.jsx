import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackward,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
// import { useSortAnimation } from "./UseSortAnimation";
import { useSelector } from "react-redux";
import { selectData } from "../store/sortSelectors";
import { bubbleSort } from "../utils/render";

export default function MediaFunction() {
  // const { pause } = useSortAnimation({
  //   algorithm: bubbleSort,
  //   data: useSelector(selectData),
  //   onStep: (step) => {},
  //   scaleX: null,
  //   scaleY: null,
  // });
  return (
    <div className="inline-block w-full text-center">
      <FontAwesomeIcon
        icon={faBackward}
        className="m-2"
        onClick={() => console.log("hello")}
      />
      <FontAwesomeIcon icon={faPlay} className="m-2" />
      <FontAwesomeIcon icon={faForward} className="m-2" />
      <FontAwesomeIcon icon={faPause} className="m-2" />
    </div>
  );
}
