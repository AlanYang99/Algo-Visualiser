import { Outlet } from "react-router-dom";
import DataInputField from "./DataInputField";
import ReadOnlyCodeBlock from "./ReadOnlyCodeBlock";
import RangeSlider from "./RangeSlider";
import StepDescription from "./StepDescription";
import MediaFunction from "./MediaFunction";

export default function Algorithm() {
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
      <div className="grid grid-cols-2 items-start">
        <div className="grid grid-rows-2 h-full bg-sky-300">
          <StepDescription />
          <div className="border-b border-dashed bg-fuchsia-400 border-black min-h-2/5">
            <MediaFunction />
          </div>
          <div className="grid grid-rows-2 w-full bg-amber-300 border-b border-black min-h-1/5">
            <RangeSlider />
          </div>
        </div>
        <ReadOnlyCodeBlock code={bubbleSortCode} />
      </div>
    </div>
  );
}
