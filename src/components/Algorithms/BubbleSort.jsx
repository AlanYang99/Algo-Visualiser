import * as d3 from "d3";
import { useResizeDetector } from "react-resize-detector";
import { useSelector, useDispatch } from "react-redux";
import {
  selectData,
  selectPlaying,
  selectPreviousPlaying,
  setPlaying,
  setCompleted,
  setHighlightLine,
  selectCompleted,
} from "../../redux/sortingActions";
import { useEffect, useRef } from "react";
import { initialRender, swap, highlight, pause } from "../../utils/render";
// import { bubbleSort } from "../../utils/render";

export default function BubbleSort() {
  const { width, height, ref } = useResizeDetector();
  const data = [...useSelector(selectData)];
  const playing = useSelector(selectPlaying);
  const previousStatus = useSelector(selectPreviousPlaying);
  const completed = useSelector(selectCompleted);
  const dispatch = useDispatch();
  var svg = d3.select("#animation");

  const barWidth = 50;
  console.log(data);
  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, height - 40]);
  const scaleX = (i) => i * barWidth + width / 2 - 25 * data.length;

  useEffect(() => {
    svg = d3.select("#animation");
    if (previousStatus === true && playing === false && completed === false) {
      initialRender(data, height, scaleY);
    } else if (
      previousStatus === true &&
      playing === false &&
      completed === true
    ) {
    } else {
      initialRender(data, height, scaleY);
      if (playing === true) {
        bubbleSort(svg, data, dispatch);
      }
    }
  }, [data, playing]);

  // Highlight, compare, swap, and mark sorted

  return <svg ref={ref} id="animation" className="w-full h-full" />;
}

const bubbleSort = async (svg, data, dispatch) => {
  const n = data.length;

  for (let i = 0; i < n; i++) {
    dispatch(setHighlightLine(1));
    await pause(300);

    for (let j = 0; j < n - i - 1; j++) {
      dispatch(setHighlightLine(2));
      await pause(300);

      // highlight pair
      highlight(svg, "orange", j, j + 1);
      dispatch(setHighlightLine(3));
      await pause(300);

      // swap if out of order
      if (data[j] > data[j + 1]) {
        await swap(data, j, j + 1, svg);
        dispatch(setHighlightLine(4));
        await pause(400);
      }

      // remove highlight
      highlight(svg, "steelblue", j, j + 1);
      await pause(300);
    }

    // mark the last bar of this pass as sorted
    highlight(svg, "green", n - i - 1);
    await pause(300);
  }

  dispatch(setPlaying());
  dispatch(setCompleted(true));
};
