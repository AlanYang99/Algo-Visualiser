import "./App.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Header />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
