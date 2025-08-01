import * as d3 from "d3";

export const bubbleSort = (arr) => {
  const steps = [];
  const dataCopy = [...arr];
  for (var i = 0; i <= dataCopy.length - 1; i++) {
    for (var j = 0; j < dataCopy.length - i - 1; j++) {
      steps.push(`Comparing indices ${i} and ${j}`);
      if (dataCopy[j] > dataCopy[j + 1]) {
        steps.push(`Swapping indices ${i} and ${j}`);
        var temp = dataCopy[j];
        dataCopy[j] = dataCopy[j + 1];
        dataCopy[j + 1] = temp;
      }
    }
  }
  console.log(steps);
  return dataCopy;
};

export const initialRender = (arr, height, scaleY) => {
  const svg = d3.select("#animation");

  svg.selectAll("*").remove(); // Clear previous render
  const barWidth = 50;

  const groups = svg.selectAll("g.bar-group").data(arr, (_, i) => i);

  const gEnter = groups
    .enter()
    .append("g")
    .attr("class", "bar-group")
    .attr("transform", (_, i) => `translate(${i * barWidth},0)`)
    .attr("data-index", (_, i) => i);

  gEnter
    .append("rect")
    .attr("class", "bg-green-400")
    .attr("width", barWidth - 5)
    .attr("height", (d) => scaleY(d))
    .attr("y", (d) => height - scaleY(d) - 20)
    .attr("x", 2.5)
    .style("fill", "steelblue")
    .style("stroke", "#333");

  gEnter
    .append("text")
    .attr("x", (barWidth - 5) / 2)
    .attr("y", (d) => height - scaleY(d) - 25)
    .text((d) => d)
    .style("text-anchor", "middle")
    .style("fill", "#333")
    .style("font-size", "12px");
};

// Swap two bars at indices i and j
export const swap = (arr, i, j, svg) => {
  const barWidth = 50;
  // swap data values
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // swap group wrappers' data-index and move them
  const gI = svg.select(`g.bar-group[data-index='${i}']`);
  const gJ = svg.select(`g.bar-group[data-index='${j}']`);

  gI.attr("data-index", j);
  gJ.attr("data-index", i);

  gI.transition()
    .duration(400)
    .attr("transform", `translate(${j * barWidth},0)`);

  gJ.transition()
    .duration(400)
    .attr("transform", `translate(${i * barWidth},0)`);
};

export const highlight = (svg, color, ...i) => {
  for (const index of i) {
    const gI = svg.select(`g.bar-group[data-index='${index}'] rect`);
    gI.style("fill", color);
  }
};

export const pause = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// const functions = {
//   swap: (params) => console.log(params),
// };

// Compare
// Swap
