import "./App.css";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Header />
        <Sidebar />
        <MainLayout />
      </div>
    </>
  );
}

export default App;
