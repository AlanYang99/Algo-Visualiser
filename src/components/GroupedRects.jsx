import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const GroupedRects = ({ data, width = 500, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    render(data);
  }, [data]);

  return (
    <>
      <button
        onClick={() => {
          bubbleSort(data);
        }}
      >
        Click here
      </button>
      <svg ref={svgRef} width={width} height={height} />
    </>
  );
};

const render = (data) => {
  const svg = d3.select(svgRef.current);
  svg.selectAll("*").remove(); // Clear previous render

  const group = svg
    .selectAll("g")
    .data(data, (d) => d)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(20, ${i * 40 + 20})`);

  group
    .append("rect")
    .attr("width", (d, i) => {
      return d * 10;
    })
    .attr("height", (d, i) => {
      return d * 10;
    })
    .attr("fill", "steelblue");

  group
    .append("text")
    .text((d) => {
      return d;
    })
    .attr("x", 10)
    .attr("y", 20)
    .attr("fill", "white")
    .style("font-size", "14px");
};

async function bubbleSort(data) {
  let arr = [...data];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        render(arr);
        await new Promise((r) => setTimeout(r, 600));
      }
    }
  }
}

// render(data);
// setTimeout(() => bubbleSort(data), 1000);

export default GroupedRects;
