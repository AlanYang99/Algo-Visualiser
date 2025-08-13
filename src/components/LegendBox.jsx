import React from "react";

export default function LegendBox({ items, height = "h-14", width = "w-28" }) {
  return (
    <div
      className={`absolute right-5 bottom-5 ${width} ${height} bg-green-200/40 backdrop-blur-md rounded shadow-lg z-10`}
    >
      <svg className="w-full h-full">
        {items.map((item, index) => (
          <text
            key={index}
            x="5"
            y={17 + index * 15}
            className={`${item.color} text-sm`}
          >
            ■ {item.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
