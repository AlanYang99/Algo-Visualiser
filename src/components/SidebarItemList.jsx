import SidebarItem from "./SidebarItem";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function SidebarItemList({
  category,
  items,
  icon,
  text_visibility,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (text_visibility === false) {
      setIsOpen(text_visibility);
    }
  }, [text_visibility]);

  if (items.length > 0) {
    return (
      <>
        <ul className="space-y-2 font-medium mt-2 cursor-pointer transition-all duration-300">
          <li>
            <div
              key={category}
              className={`flex items-center p-2 rounded cursor-pointer transition-all duration-300 ease-in-out bg-gray-900`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={icon} className="text-white text-lg" />
              <span
                className={`ml-3 text-sm font-medium transition-opacity duration-200 ${
                  text_visibility ? "opacity-100" : "opacity-0"
                }`}
              >
                {category}
              </span>
              {isOpen ? (
                <FontAwesomeIcon
                  className={`ml-auto text-white text-lg ${
                    text_visibility ? "opacity-100" : "opacity-0"
                  }`}
                  icon={faCaretUp}
                />
              ) : (
                <FontAwesomeIcon
                  className={`ml-auto text-white text-lg ${
                    text_visibility ? "opacity-100" : "opacity-0"
                  }`}
                  icon={faCaretDown}
                />
              )}
            </div>
          </li>
          {isOpen &&
            text_visibility &&
            items?.map((item) => <SidebarItem key={item} Algorithm={item} />)}
        </ul>
      </>
    );
  }
}
