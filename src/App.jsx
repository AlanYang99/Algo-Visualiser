import "./App.css";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";
import Test from "./components/Test";
import Test1 from "./components/Test1";
import GroupedRects from "./components/GroupedRects";

function App() {
  return (
    <>
      {/* <Test /> */}
      {/* <Test1 /> */}
      <div className="flex h-screen">
        {/* <GroupedRects data={[1, 2, 3, 4]} /> */}
        <Header />
        <Sidebar />
        <MainLayout />
      </div>
    </>
  );
}

export default App;
