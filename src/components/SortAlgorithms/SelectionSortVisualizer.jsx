import { useRef, useMemo, useCallback } from "react";
import * as d3 from "d3";
import { useSelector } from "react-redux";
import { useResizeDetector } from "react-resize-detector";
import { useSortAnimation } from "../UseSortAnimation";
import { bubbleSort, selectionsort } from "../../utils/sortAlgorithms";
import { selectData } from "../../store/sortSelectors";
import { highlight, swap } from "../../utils/render";
import LegendBox from "../LegendBox";
import DescriptionBox from "../DescriptionBox";

export default function SelectionSortVisualizer() {
  const svgRef = useRef(null);

  console.log("hello");
  const { ref, height, width } = useResizeDetector();
  const combinedRef = useCallback(
    (node) => {
      ref(node); // triggers ResizeObserver
      svgRef.current = node; // stores reference for imperative use
    },
    [ref]
  );

  const svg = useMemo(() => {
    return d3.select(svgRef.current);
  }, [svgRef.current]);

  const data = useSelector(selectData);

  const scaleX = useMemo(() => {
    console.log(width);
    return (i) => i * 50 + width / 2 - 25 * data.length;
  }, [data.length, width]);

  const scaleY = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 60]);
  }, [data, height]);

  const {} = useSortAnimation({
    algorithm: selectionsort,
    data: useSelector(selectData),
    onStep: (step) => {
      switch (step.type) {
        case "set":
          highlight(svg, step.indices, step.colorMap);
          break;
        case "compare":
          highlight(svg, step.indices, step.colorMap);
          break;
        case "swap":
          swap(svg, step.indices[0], step.indices[1], scaleX);
          highlight(svg, step.indices, step.colorMap);
          break;
        case "sort":
          highlight(svg, step.indices, step.colorMap);
          break;
        case "unmark":
          highlight(svg, step.indices, step.colorMap);
          break;
      }
    },
    height: height,
    scaleX: scaleX,
    scaleY: scaleY,
  });

  const legendItems = [
    { label: "To be inserted", color: "fill-red-300" },
    { label: "Unsorted section", color: "fill-blue-300" },
    { label: "In comparison", color: "fill-yellow-300" },
    { label: "Sorted section", color: "fill-green-400" },
  ];

  return (
    <>
      <svg ref={combinedRef} id="animation" className="w-full h-full z-0"></svg>
      <LegendBox items={legendItems} height="h-17.5" width="w-32" />
      <DescriptionBox id="description1" height="h-15">
        Insertion sort is a simple sorting algorithm that works by iteratively
        inserting each element of an unsorted list into its correct position in
        a sorted portion of the list.
      </DescriptionBox>
      <DescriptionBox id="description2" top="top-27" height="h-21">
        Insertion sort has a worst and average time complexity of O(n^2) due to
        repeated shifting of elements. Its best case is O(n) when the array is
        already sorted. It’s efficient for small or nearly sorted datasets{" "}
      </DescriptionBox>
    </>
  );
}
