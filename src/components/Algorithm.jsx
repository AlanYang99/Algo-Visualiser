import { useState } from "react";
import { Outlet } from "react-router-dom";
import DataInputField from "./DataInputField";
import ReadOnlyCodeBlock from "./ReadOnlyCodeBlock";

export default function Algorithm() {
  const [value, setValue] = useState(100);
  const bubbleSortCode = `function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }        `;
  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <div className="h-17/24 min-w-full flex-1">
        <Outlet />
      </div>
      <DataInputField />
      <div class="grid grid-cols-2 gap-4 items-start">
        <div className="flex items-center gap-4 ml-4">
          <input
            className="justify-start accent-green-300 w-[calc(40vw-10px)] ml-4"
            type="range"
            min="1"
            max="400"
            value={value}
            id="myRange"
            onChange={(event) => {
              setValue(Number(event.target.value));
            }}
          ></input>
          <span className="text-sm font-mono text-cyan-700">
            {value / 100}x
          </span>
        </div>
        <ReadOnlyCodeBlock code={bubbleSortCode} />
      </div>
    </div>
  );
}
