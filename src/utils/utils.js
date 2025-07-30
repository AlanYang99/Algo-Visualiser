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
        { topic: "Quick Sort", link: "sort/quicksort" },
        { topic: "Merge Sort", link: "sort/mergesort" },
      ],
      icon: faSort,
    },
    {
      label: "Graphs",
      topics: [
        { topic: "Bubble Sort", link: "sort/bubblesort" },
        { topic: "Quick Sort", link: "sort/quicksort" },
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
