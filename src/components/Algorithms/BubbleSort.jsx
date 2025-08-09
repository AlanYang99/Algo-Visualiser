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
  selectSpeed,
  setData,
  setStepDescription,
} from "../../redux/sortingActions";
import { useEffect, useRef, useMemo } from "react";
import { render, swap, highlight, pause } from "../../utils/render";

export default function BubbleSort() {
  const { width = 800, height = 400, ref } = useResizeDetector(); // fallback values
  const data = [...useSelector(selectData)];
  const playing = useSelector(selectPlaying);
  const previousStatus = useSelector(selectPreviousPlaying);
  const completed = useSelector(selectCompleted);
  const speed = useSelector(selectSpeed);
  const dispatch = useDispatch();
  const svgRef = useRef(null);

  const barWidth = 50;

  const scaleY = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 40]);
  }, [data, height]);

  const scaleX = useMemo(() => {
    return (i) => i * barWidth + width / 2 - 25 * data.length;
  }, [data.length, width]);

  const svg = useMemo(() => {
    return d3.select(svgRef.current);
  }, [svgRef.current]);

  const bubbleSort = async (svg, data, dispatch) => {
    console.log("hello");
    const n = data.length;
    for (let i = 0; i < n; i++) {
      dispatch(setHighlightLine(1));
      await pause(speed);

      for (let j = 0; j < n - i - 1; j++) {
        dispatch(setHighlightLine(2));
        await pause(speed);

        await highlight(svg, [j, j + 1], "orange");
        dispatch(setHighlightLine(3));
        dispatch(setStepDescription(`Comparing index ${j} and index ${j + 1}`));

        await pause(speed);

        if (data[j] > data[j + 1]) {
          await swap(data, j, j + 1, svg, scaleX, speed);
          dispatch(setHighlightLine(4));
          dispatch(
            setStepDescription(
              `index ${j} (${data[j]}) is greater than index ${j + 1} (${
                data[j + 1]
              }), so they are swapped`
            )
          );

          await pause(speed);
        }

        await highlight(svg, [j, j + 1], "steelblue");
        await pause(speed);
      }

      await highlight(svg, [n - i - 1], "green");
      await pause(speed);
    }

    dispatch(setPlaying());
    dispatch(setCompleted(true));
  };

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    if (previousStatus === true && playing === false && completed === false) {
      render(data, height, scaleX, scaleY);
    } else if (
      previousStatus === true &&
      playing === false &&
      completed === true
    ) {
      // Do nothing
    } else {
      render(data, height, scaleX, scaleY);
      if (playing === true) {
        bubbleSort(svg, data, dispatch);
      }
    }
  }, [data, playing, scaleX, scaleY, svg]);

  return <svg ref={svgRef} id="animation" className="w-full h-full" />;
}
