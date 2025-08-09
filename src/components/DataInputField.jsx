import { useState } from "react";
import { useDispatch } from "react-redux";
import { randomiseNumbers, validateInput } from "../utils/utils";
import { setData, setStatus } from "../store/sortSlice";
// import { setCompleted, setData, setPlaying } from "../redux/sortingActions";
import { toast } from "react-toastify";

export default function DataInputField() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  return (
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
        value={inputData}
        onChange={(event) => {
          setInputData(event.target.value);
        }}
        className="w-full bg-gray-900 text-sky-400 font-mono text-sm border border-gray-700 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 transition duration-300"
      />
      <div className="inline-flex rounded-md shadow-xs" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            if (validateInput(inputData)) {
              const numArray = inputData.trim().split(",").map(Number);
              dispatch(setData(numArray));
            } else {
              toast.error("Something went wrong.", {
                style: {
                  background: "#b91c1c",
                  color: "#fff",
                },
              });
            }
          }}
        >
          Update
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            dispatch(setData(randomiseNumbers()));
          }}
        >
          Randomise
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            dispatch(setStatus("playing"));
          }}
        >
          Sort
        </button>
        {/* <span
          className={`text-red-600 text-nowrap ${
            error === true ? "" : "invisible"
          } block mt-1.75 ml-2 font-sans text-sm`}
        >
          Ensure that the value is in a comma deliminted form, and contains only
          numbers between 0 and 50
        </span> */}
      </div>
    </div>
  );
}
