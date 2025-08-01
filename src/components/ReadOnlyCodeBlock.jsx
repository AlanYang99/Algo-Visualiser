import { useState } from "react";
import { selectHighlightLine } from "../redux/sortingActions";
import { useSelector } from "react-redux";

export default function ReadOnlyCodeBlock({ code }) {
  const lines = code.trim().split("\n");
  const lineIndex = useSelector(selectHighlightLine);
  return (
    <div className="bg-gray-900 text-gray-100 p-4 overflow-auto font-mono text-sm shadow-md whitespace-pre justify-self-end w-full max-h-[calc(33vh-124px)]">
      {lines.map((line, idx) => (
        <div className={idx === lineIndex ? "bg-blue-700 text-white" : ""}>
          {line}
        </div>
      ))}
    </div>
  );
}
