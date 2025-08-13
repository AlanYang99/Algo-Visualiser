import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faSort,
  faProjectDiagram,
  faRoute,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const getSideBarNavigationItems = () => {
  return [
    {
      label: "Sorting",
      topics: [
        { topic: "Bubble Sort", link: "sort/bubblesort" },
        { topic: "Insertion Sort", link: "sort/insertionsort" },
        { topic: "Merge Sort", link: "sort/mergesort" },
      ],
      icon: faSort,
    },
    {
      label: "Graphs",
      topics: [
        { topic: "Bubble Sort", link: "sort/bubblesort" },
        { topic: "Insertion Sort", link: "sort/insertionsort" },
        { topic: "Merge Sort", link: "sort/mergesort" },
      ],
      icon: faProjectDiagram,
    },
    {
      label: "Pathfinding",
      topics: [
        { topic: "Bubble Sort", link: "sort/bubblesort" },
        { topic: "Quick Sort", link: "sort/quicksort" },
        { topic: "Merge Sort", link: "sort/mergesort" },
      ],
      icon: faRoute,
    },
    {
      label: "Settings",
      topics: [
        { topic: "Bubble Sort", link: "sort/bubblesort" },
        { topic: "Quick Sort", link: "sort/quicksort" },
        { topic: "Merge Sort", link: "sort/mergesort" },
      ],
      icon: faCog,
    },
  ];
};

export const randomiseNumbers = () => {
  const numNumbers = getRandomInt(14) + 1;
  return Array.from({ length: numNumbers }, () => getRandomInt(30) + 1);
};

export const validateInput = (values) => {
  const regex = /^[0-9]+(,[0-9]+)*$/;
  return values.match(regex) ? true : false;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getlastPathParameter = (path) => {
  // Handle potential trailing slashes
  let trimmedPath = path;
  if (path.endsWith("/")) {
    trimmedPath = path.slice(0, -1);
  }
  const lastSlashIndex = trimmedPath.lastIndexOf("/");
  if (lastSlashIndex === -1) {
    return trimmedPath; // No slashes, the whole path is the parameter
  }
  return trimmedPath.substring(lastSlashIndex + 1);
};

export const showToastIfNotActive = (id, message, options) => {
  if (!toast.isActive(id)) {
    toast(message, { toastId: id, ...options });
  }
};

export const showErrorToastIfNotActive = (id, message, options) => {
  if (!toast.isActive(id)) {
    toast.error(message, { toastId: id, ...options });
  }
};

// Example usage:
// To prevent duplicate toasts for a specific message type,
// assign a unique ID to each toast.
showToastIfNotActive("my-unique-toast-id", "This is a new toast message!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
