import React from "react";
import DataInputField from "../DataInputField";

export default function MainLayout() {
  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <svg className="h-17/24 min-w-full flex-1"></svg>
      <DataInputField />
    </div>
  );
}
