import { Outlet } from "react-router-dom";
import DataInputField from "./DataInputField";
import ReadOnlyCodeBlock from "./ReadOnlyCodeBlock";
import RangeSlider from "./RangeSlider";
import StepDescription from "./StepDescription";
import MediaFunction from "./MediaFunction";
import TimeLineRangeSlider from "./TimeLineRangeSlider";

export default function Algorithm() {
  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <div className="h-17/24 min-w-full flex-1 relative">
        <Outlet />
      </div>
      <DataInputField />
      <div className="grid grid-cols-2 items-start">
        <div className="grid grid-rows-3 h-full">
          <div className="grid grid-rows-2 w-full bg-blue-400 border-b border-black min-h-2/5">
            <StepDescription />
          </div>
          <div className="grid grid-cols-2 items-stretch gap-0">
            <div className="border-b border-solid bg-fuchsia-400 border-black min-h-2/5">
              <MediaFunction />
            </div>
            <div className="border-b border-solid bg-amber-600 border-black min-h-2/5">
              <RangeSlider />
            </div>
          </div>
          <div className="bg-amber-300 border-b border-black min-h-1/5">
            <TimeLineRangeSlider />
          </div>
        </div>
        <ReadOnlyCodeBlock />
      </div>
    </div>
    // Add field for current data
    // Add field for timeline range
    // Add information about the sort algorithm in question, (time complexity etc)
    // Add information as to what the colours mean
  );
}
