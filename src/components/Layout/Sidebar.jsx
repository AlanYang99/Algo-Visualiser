import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SidebarNav from "../SidebarNav";
import { getSideBarNavigationItems } from "../../utils/utils";

export default function Sidebar() {
  const [collapsedSideBar, setCollapsedSideBar] = useState(false);

  return (
    <aside
      className={`flex h-screen ${collapsedSideBar ? "w-11" : "w-64"}`}
      aria-label="Sidebar"
    >
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ease-in-out h-screen ${
          collapsedSideBar ? "w-11" : "w-64"
        }`}
      >
        <div className="flex items-center justify-end pl-4 pt-8 mt-8">
          <button
            onClick={() => setCollapsedSideBar(!collapsedSideBar)}
            className="flex text-white mr-3.5"
          >
            {collapsedSideBar === true ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </button>
        </div>
        <nav className="space-y-2 px-2">
          {getSideBarNavigationItems().map(({ label, topics, icon }) => (
            <SidebarNav
              key={label}
              category={label}
              items={topics}
              icon={icon}
              text_visibility={!collapsedSideBar}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
