import React, { useRef, useState, useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";
import * as d3 from "d3";

const GroupedRects = ({ data, width = 500, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    console.log(width);
    console.log("inside method;" + data);
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const group = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `scale(1,-1) translate(${i * 50 + width / 2 - 25 * data.length}, ${
            -height / 2
          })`
      );

    group
      .append("rect")
      .attr("width", "40")
      .attr("height", (d, i) => d * 10)
      .attr("fill", "steelblue");

    group
      .append("text")
      .text((d) => d)
      .attr("y", -5)
      .attr("x", 20)
      .attr("fill", "white")
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("transform", "rotateX(180deg)");
    // .style("text-anchor", "middle");

    // .style("font")
    // .className("flex rotate-x-180 font-semibold"")

    // <text
    //   className="flex rotate-x-180 font-semibold"
    //   textAnchor="middle"
    //   x="21"
    //   y="-10"
    //   dy=".35em"
    // ></text>;
  }, [data, width]);

  return (
    <svg
      // className="h-full w-full justify-center-safe flex items-center"
      ref={svgRef}
      width={width}
      height={height}
    />
  );
};

export default function MainLayout() {
  const [values, setValues] = useState("1,2,3,4");
  const [numbers, setNumbers] = useState([10, 15, 20]);
  const [error, setError] = useState(false);
  const { width, height, ref } = useResizeDetector();
  const divRef = useRef(null);

  useEffect(() => {
    if (width) {
      console.log("Width changed:", width);
      console.log("Height changed:", height);
    }
  }, [width, height]);

  console.log(width);
  console.log(height);
  // useEffect(() => {
  //   if (divRef.current) {
  //     setHeight(divRef.current.offsetHeight);
  //     setWidth(divRef.current.offsetWidth);
  //   }
  // }, []);

  const regex = /^[0-9]+(,[0-9]+)*$/;

  const validation = (values) => {
    if (!values.match(regex)) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const updateValues = (values) => {
    console.log(values);
    if (validation(values)) {
      const numArray = values.trim().split(",").map(Number);
      setNumbers(numArray);
    }
  };

  const randomiseValues = () => {
    const numNumbers = getRandomInt(14) + 1;
    let numArray = [5];
    let i = 0;
    for (i = 0; i < numNumbers; i++) {
      numArray.push(getRandomInt(45));
    }
    setNumbers(numArray);
  };

  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <div ref={ref} className="h-17/24 min-w-full flex-1">
        <GroupedRects data={numbers} width={width} height={height} />
        {/* <svg className="h-full w-full justify-center-safe flex items-center">
          <g transform={`scale(1, -1) translate(100,${-height / 2})`}>
            <rect
              width="40"
              height="80"
              r="40"
              className="fill-green-500"
            ></rect>
          </g>
          <g transform={`scale(1, -1) translate(150,${-height / 2})`}>
            <rect
              width="40"
              height="100"
              r="40"
              className="fill-green-500"
            ></rect>
            <text
              className="flex rotate-x-180 font-semibold"
              textAnchor="middle"
              x="21"
              y="-10"
              dy=".35em"
            ></text>
          </g>
        </svg> */}
      </div>
      <div className="flex items-left space-x-2 mx-auto p-4 bg-gray-300">
        <label
          htmlFor="code"
          className="block font-medium text-shadow-gray-900 whitespace-nowrap mt-1.5"
        >
          List of numbers:
        </label>
        <input
          id="code"
          type="text"
          placeholder="console.log('Hello, world!')"
          value={values}
          onChange={(event) => {
            setValues(event.target.value);
          }}
          className="w-full bg-gray-900 text-sky-400 font-mono text-sm border border-gray-700 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 transition duration-300"
        />
        <div className="inline-flex rounded-md shadow-xs" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            onClick={() => {
              updateValues(values);
            }}
          >
            Update
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            onClick={randomiseValues}
          >
            Randomise
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Sort
          </button>
          <span
            className={`text-red-600 text-nowrap ${
              error === true ? "" : "invisible"
            } block mt-1.75 ml-2 font-sans text-sm`}
          >
            Ensure that the value is in a comma deliminted form, and contains
            only numbers between 0 and 50
          </span>
        </div>
      </div>
    </div>
  );
}

/*
        <svg className="h-full w-full justify-center-safe flex items-center">
          <g transform={`scale(1, -1) translate(100,${-height / 2})`}>
            <rect
              width="40"
              height="80"
              r="40"
              className="fill-green-500"
            ></rect>
          </g>
          <g transform={`scale(1, -1) translate(150,${-height / 2})`}>
            <rect
              width="40"
              height="100"
              r="40"
              className="fill-green-500"
            ></rect>
            <text
              className="flex rotate-x-180 font-semibold"
              textAnchor="middle"
              x="21"
              y="-10"
              dy=".35em"
            ></text>
          </g>
        </svg>
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
