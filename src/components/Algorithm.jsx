import React from "react";
import { Outlet } from "react-router-dom";
import DataInputField from "./DataInputField";

export default function Algorithm() {
  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <div className="h-17/24 min-w-full flex-1">
        <Outlet />
      </div>
      <DataInputField />
    </div>
  );
}
