import { useState } from "react";

import { setSpeed } from "../redux/sortingActions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useActions } from "./useActions";

export default function RangeSlider() {
  const [value, setValue] = useState(100);
  const { speed, changeSpeed } = useActions();

  const defaultPauseDuration = 200;

  return (
    <div className="flex items-center justify-center h-full">
      <input
        className=" accent-green-300 flex-grow max-w-[calc(40vw-1px)] ml-2"
        type="range"
        min="50"
        max="400"
        value={value}
        id="myRange"
        // disabled={true}
        onChange={(event) => {
          changeSpeed(
            defaultPauseDuration / (Number(event.target.value) / 100)
          );
          setValue(Number(event.target.value));
        }}
      ></input>
      <span className="text-sm font-mono text-cyan-700 pr-2">
        {value / 100}x
      </span>
    </div>
  );
}
