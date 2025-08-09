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

export const render = (arr, height, scaleX, scaleY) => {
  const svg = d3.select("#animation");
  svg.selectAll("*").remove(); // Clear previous render

  // Layout constants
  const layout = {
    barWidth: 50,
    barPadding: 5,
    labelOffset: 25,
    indexOffset: 30,
    barYOffset: 20,
  };

  // Index label groups
  const indexGroups = svg
    .selectAll("g.bar-group-index")
    .data(arr, (_, i) => i)
    .join("g")
    .attr("class", "bar-group-index")
    .attr(
      "transform",
      (d, i) => `translate(${scaleX(i)}, ${scaleY(d) + layout.indexOffset})`
    )
    .attr("data-index", (_, i) => i);

  indexGroups
    .append("text")
    .attr("x", (layout.barWidth - layout.barPadding) / 2)
    .attr("y", (d) => height - scaleY(d) - layout.labelOffset)
    .text((_, i) => i)
    .style("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "darkorange");

  // Bar groups
  const barGroups = svg
    .selectAll("g.bar-group")
    .data(arr, (_, i) => i)
    .join("g")
    .attr("class", "bar-group")
    .attr("transform", (_, i) => `translate(${scaleX(i)}, 0)`)
    .attr("data-index", (_, i) => i);

  barGroups
    .append("rect")
    .attr("width", layout.barWidth - layout.barPadding)
    .attr("height", (d) => scaleY(d))
    .attr("y", (d) => height - scaleY(d) - layout.barYOffset)
    .attr("x", layout.barPadding / 2)
    .style("fill", "steelblue")
    .style("stroke", "#333");

  barGroups
    .append("text")
    .attr("x", (layout.barWidth - layout.barPadding) / 2)
    .attr("y", (d) => height - scaleY(d) - layout.labelOffset)
    .text((d) => d)
    .style("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "green");
};

// Swap two bars at indices i and j
export const swap = async (svg, i, j, scaleX, pauseTime = 300) => {
  console.log(pauseTime);

  // swap data values
  //[arr[i], arr[j]] = [arr[j], arr[i]]; //comment out for new solution

  // swap group wrappers' data-index and move them
  const gI = svg.select(`g.bar-group[data-index='${i}']`);
  const gJ = svg.select(`g.bar-group[data-index='${j}']`);

  gI.attr("data-index", j);
  gJ.attr("data-index", i);

  // Create Promises for both transitions
  const t1 = new Promise((resolve) => {
    gI.transition()
      .duration(pauseTime)
      .attr("transform", `translate(${scaleX(j)},0)`)
      .on("end", resolve);
  });

  const t2 = new Promise((resolve) => {
    gJ.transition()
      .duration(pauseTime)
      .attr("transform", `translate(${scaleX(i)},0)`)
      .on("end", resolve);
  });

  // Wait for both transitions to complete
  await Promise.all([t1, t2]);
};

export async function highlight(
  svg,
  indices,
  color = "steelblue",
  pauseTime = 300
) {
  console.log(pauseTime);
  const promises = indices.map((i) => {
    const rect = svg.select(`g.bar-group[data-index='${i}'] rect`);

    return new Promise((resolve) => {
      rect
        .transition()
        .duration(pauseTime)
        .style("fill", color)
        .on("end", resolve);
    });
  });

  await Promise.all(promises);
}

export const pause = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// const functions = {
//   swap: (params) => console.log(params),
// };

// Compare
// Swap
