import React from "react";
import DataInputField from "../DataInputField";
import ReadOnlyCodeBlock from "../ReadOnlyCodeBlock";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex-1 bg-gray-100 mt-13.5">
      <Outlet />
      <DataInputField />
      <ReadOnlyCodeBlock code={"hello"} />
    </div>
  );
}
