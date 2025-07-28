import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SidebarItem({ Algorithm, icon }) {
  return (
    <li>
      {/* change link  */}
      <div
        key={Algorithm}
        className={`flex items-center p-1 rounded cursor-pointer transition-all duration-300 bg-gray-900 hover:bg-blue-600`}
      >
        <a href="#" className="">
          <span className="ml-10 text-sm font-medium transition-opacity duration-200 opacity-100">
            {Algorithm}
          </span>
        </a>
      </div>
    </li>
  );
}
