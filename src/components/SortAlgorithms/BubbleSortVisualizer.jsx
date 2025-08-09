import React, { useRef, useMemo } from "react";
import * as d3 from "d3";
import { useSelector } from "react-redux";
import { useResizeDetector } from "react-resize-detector";
import { useSortAnimation } from "../UseSortAnimation";
import { bubbleSort } from "../../utils/sortAlgorithms";
import { selectData } from "../../store/sortSelectors";
import { highlight, swap } from "../../utils/render";
import DataInputField from "../DataInputField";
import ReadOnlyCodeBlock from "../ReadOnlyCodeBlock";
import RangeSlider from "../RangeSlider";
import StepDescription from "../StepDescription";
import MediaFunction from "../MediaFunction";

export default function BubbleSortVisualizer() {
  const { width = 800, height = 400, ref } = useResizeDetector(); // fallback values

  const svgRef = useRef(null);
  const svg = useMemo(() => {
    return d3.select(svgRef.current);
  }, [svgRef.current]);

  const data = useSelector(selectData);

  const scaleX = useMemo(() => {
    return (i) => i * 50 + width / 2 - 25 * data.length;
  }, [data.length, width]);

  const scaleY = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 40]);
  }, [data, height]);

  const {} = useSortAnimation({
    algorithm: bubbleSort,
    data: useSelector(selectData),
    onStep: (step) => {
      switch (step.type) {
        case "compare":
          highlight(svg, step.indices, "yellow");
          break;
        case "swap":
          swap(svg, step.indices[0], step.indices[1], scaleX);
          break;

        case "unmark":
          highlight(svg, step.indices);
          break;
        case "mark":
          highlight(svg, step.indices, "green");
          break;
        case "finish":
          break;
      }
    },
    scaleX: scaleX,
    scaleY: scaleY,
  });
  return (
    <>
      <div className="flex-1 bg-gray-100 mt-13.5">
        <div className="h-17/24 min-w-full flex-1">
          <svg ref={svgRef} id="animation" className="w-full h-full" />
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
          <ReadOnlyCodeBlock />
        </div>
      </div>
    </>
  );
}
