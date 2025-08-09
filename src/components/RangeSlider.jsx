import { useState } from "react";

import { setSpeed } from "../redux/sortingActions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function RangeSlider() {
  // const [value, setValue] = useState(100);
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const defaultPauseDuration = 200;

  console.log("slide rerender");
  return (
    <div className="flex items-center">
      <input
        className="justify-start accent-green-300 flex-grow max-w-[calc(40vw-1px)] ml-2"
        type="range"
        min="1"
        max="400"
        value={defaultPauseDuration}
        id="myRange"
        onChange={(event) => {
          // setValue(Number(event.target.value));
          dispatch(
            setSpeed(defaultPauseDuration / (Number(event.target.value) / 100))
          );
        }}
      ></input>
      <span className="text-sm font-mono text-cyan-700 pr-2">
        {defaultPauseDuration / 100}x
      </span>
    </div>
  );
}
