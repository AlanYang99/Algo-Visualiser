import React from "react";

export default function DescriptionBox({
  id,
  children,
  top = "top-10",
  height = "h-10",
}) {
  return (
    <div class>
      <input type="checkbox" id={id} className="peer hidden" />

      <div
        className={`pl-2 absolute ${top} right-5 transform w-100 ${height} bg-blue-400/40 backdrop-blur-md rounded shadow-lg z-10 text-sm text-white peer-checked:hidden`}
      >
        <label
          htmlFor={id}
          className="absolute top-0 right-1 cursor-pointer text-white hover:text-red-300 text-sm"
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
}
