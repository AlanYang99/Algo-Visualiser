import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faProjectDiagram,
  faRoute,
  faCog,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItemList from "./SidebarItemList";

export default function Sidebar() {
  const [collapsedSideBar, setCollapsedSideBar] = useState(false);
  const navItems = [
    {
      label: "Sorting",
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort"],
      icon: faSort,
    },
    {
      label: "Graphs",
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort"],
      icon: faProjectDiagram,
    },
    {
      label: "Pathfinding",
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort"],
      icon: faRoute,
    },
    {
      label: "Settings",
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort"],
      icon: faCog,
    },
  ];

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
          {navItems.map(({ label, topics, icon }) => (
            <SidebarItemList
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

// <aside
//   id="logo-sidebar"
//   className={`fixed top-0 left-0 z-40 ${
//     collapsedSideBar ? "w-10" : "w-64"
//   } h-screen pt-13 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
//   aria-label="Sidebar"
// >
//   <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
//     {/* <div className="flex items-center space-x-2">
//       <FontAwesomeIcon
//         icon={faCodeBranch}
//         className="text-teal-500 text-[30px]"
//       >
//         Algorithm Visualiser
//       </FontAwesomeIcon>
//       <h2 className="font-montserrat font-bold text-lg tracking-wide text-gray-900">
//         Algorithm Visualiser
//       </h2>
//     </div> */}
//     <ul className="space-y-2 font-medium mt-2">
//       <SidebarItemList
//         category="Sorting Algorithms"
//         items={sorting_algorithmns}
//       />
//       {/* <SidebarItem Algorithm="Bubble Sort" icon={faDatabase} />
//       <SidebarItem Algorithm="Merge Sort" icon={faDatabase} />
//       <SidebarItem Algorithm="Quick Sort" icon={faDatabase} />
//       <SidebarItem Algorithm="Insertion Sort" icon={faDatabase} />
//       <SidebarItem Algorithm="Sort" icon={faDatabase} /> */}
//     </ul>
//   </div>
// </aside>

// Fixed side bar, flaw is that the input bar section is covered
/*
    <aside
      className={`fixed h-screen ${collapsedSideBar ? "w-11" : "w-64"}`}
      aria-label="Sidebar"
    >
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ease-in-out h-screen ${
          collapsedSideBar ? "w-11" : "w-64"
        }`}
      ></div>

      */
