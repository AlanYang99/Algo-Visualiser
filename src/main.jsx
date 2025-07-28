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
import { store } from "./redux/sortingActions.js";
import { ToastContainer } from "react-toastify";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="/sort/bubblesort" element={<MainLayout />} />
    <Route path="/sort/insertionsort" element={<MainLayout />} />
    <Route path="/sort/mergesort" element={<MainLayout />} />
    <Route path="/sort/quicksort" element={<MainLayout />} />

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
