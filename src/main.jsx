import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import HomePage from "./components/HomePage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/sortSlice.js";
import { ToastContainer } from "react-toastify";
import Algorithm from "./components/Algorithm.jsx";
import BubbleSortVisualizer from "./components/SortAlgorithms/BubbleSortVisualizer.jsx";
import InsertionSortVisualizer from "./components/SortAlgorithms/InsertionSortVisualizer.jsx";
import SelectionSortVisualizer from "./components/SortAlgorithms/SelectionSortVisualizer.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route element={<Algorithm />}>
      <Route path="/sort/bubblesort" element={<BubbleSortVisualizer />} />
      <Route path="/sort/insertionsort" element={<InsertionSortVisualizer />} />
      <Route path="/sort/selectionsort" element={<SelectionSortVisualizer />} />
    </Route>
    {/* <Route element={<Test />}></Route> */}
    {/* <Route path="/sort/bubblesort" element={<MainLayout />} />
    <Route path="/sort/insertionsort" element={<MainLayout />} />
    <Route path="/sort/mergesort" element={<MainLayout />} />
    <Route path="/sort/quicksort" element={<MainLayout />} /> */}

    {/* <Route index element={<MainLayout />} /> */}
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
    <ToastContainer />
  </StrictMode>
);
