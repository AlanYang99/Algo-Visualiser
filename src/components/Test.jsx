import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSort,
  faProjectDiagram,
  faRoute,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "Sorting", icon: faSort },
  { label: "Graphs", icon: faProjectDiagram },
  { label: "Pathfinding", icon: faRoute },
  { label: "Settings", icon: faCog },
];

export default function VisualizerSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Sorting");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-13"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-self-auto p-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h2
            className={`text-lg font-bold transition-opacity duration-200 text-left pl-3 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Visualizer
          </h2>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2 px-2">
          {navItems.map(({ label, icon }) => (
            <div
              key={label}
              onClick={() => setActiveItem(label)}
              className={`flex items-center p-2 rounded cursor-pointer transition-all ${
                activeItem === label ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
              title={!isOpen ? label : undefined}
            >
              <FontAwesomeIcon icon={icon} className="text-white text-lg" />
              <span
                className={`ml-3 text-sm font-medium transition-opacity duration-200 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        <h1 className="text-2xl font-semibold">{activeItem} Algorithms</h1>
        {/* Render algorithm visualizer content here */}
        <h1>Hello</h1>
      </div>
    </div>
  );
}
