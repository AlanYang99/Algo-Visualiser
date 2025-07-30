import * as d3 from "d3";
import { useResizeDetector } from "react-resize-detector";
import { useSelector } from "react-redux";
import {
  selectData,
  selectPlaying,
  selectPreviousPlaying,
} from "../../redux/sortingActions";
import { useEffect, useRef } from "react";
import { bubbleSort } from "../../utils/render";

export default function BubbleSort() {
  const { width, height, ref } = useResizeDetector();
  const data = useSelector(selectData);
  const playing = useSelector(selectPlaying);
  const previousStatus = useSelector(selectPreviousPlaying);

  const barWidth = 50;
  console.log(data);
  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, height - 40]);
  const scaleX = (i) => i * barWidth + width / 2 - 25 * data.length;

  useEffect(() => {
    if (playing != previousStatus) {
      console.log(bubbleSort(data));
    }
    const svg = d3.select("#bubblesort");
    svg.selectAll("*").remove(); // Clear previous render

    const groups = svg.selectAll("g.bar-group").data(data, (_, i) => i);

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
      .style("fill", "steelblue");

    gEnter
      .append("text")
      .attr("class", "text-center text-blue-500")
      .attr("x", (barWidth - 5) / 2)
      .attr("y", (d) => height - scaleY(d) - 25)
      .text((d) => d)
      .style("text-anchor", "middle");

    console.log(gEnter);
  }, [height, data, playing]);

  return <svg ref={ref} id="bubblesort" className="w-full h-full" />;
}
